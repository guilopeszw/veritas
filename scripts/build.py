"""Build review locally; require explicit, complete approvals for public output."""
import argparse
import base64
import hashlib
import json
from decimal import Decimal
from urllib.parse import urlparse
import shutil
from pathlib import Path
from release_scope import filtered_content, content_digest, require_public_approval

ROOT = Path(__file__).resolve().parent.parent
parser = argparse.ArgumentParser()
parser.add_argument("--public", action="store_true")
parser.add_argument("--release-review", action="store_true", help="Build a local, filtered release candidate without granting approval")
args = parser.parse_args()
assert not (args.public and args.release_review), "Choose public or release review, not both"
data = json.loads((ROOT / "src/content.json").read_text())
if args.public or args.release_review:
    data = filtered_content(data)
ids = [b["id"] for b in data["blocks"]]
assert len(ids) == len(set(ids)), "IDs duplicados"
for block in data["blocks"]:
    assert block["title"] and block["sources"], f"Bloco sem título/fontes: {block['id']}"
    assert block["status"] in ("approved", "draft")
    for source in block["sources"]:
        assert source["url"].startswith("https://"), f"Fonte inválida: {block['id']}"
# Candidate-specific context must never silently lose attribution or sources.
for block in data["blocks"]:
    groups = block.get("candidateContext", [])
    assert len({group["candidate"] for group in groups}) == len(groups), f"Duplicate candidate context: {block['id']}"
    for group in groups:
        assert group["candidate"] in ("lula", "flavio"), f"Unknown candidate context: {block['id']}"
        assert group.get("entries") or group.get("emptyState"), f"Unexplained context gap: {block['id']}"
        for entry in group.get("entries", []):
            assert entry.get("text") and entry.get("type") and entry.get("dateLabel"), f"Incomplete candidate context: {block['id']}"
            assert entry.get("sources") and all(source["url"].startswith("https://") for source in entry["sources"]), f"Unsourced candidate context: {block['id']}"
# Asset totals must reconcile exactly before any dashboard is generated.
for block in data["blocks"]:
    if "assets" not in block:
        continue
    assert block["assets"], f"Empty asset declaration: {block['id']}"
    values = [Decimal(str(item["value"])) for item in block["assets"]]
    assert all(value.is_finite() and value >= 0 and value == value.quantize(Decimal("0.01")) for value in values), f"Invalid asset amount: {block['id']}"
    assert sum(values) == Decimal(str(block["assetTotal"])), f"Asset total mismatch: {block['id']}"
    assert all(item.get("group") and item.get("type") and item.get("description") for item in block["assets"]), f"Incomplete asset item: {block['id']}"
    source = urlparse(block.get("officialSource", {}).get("url", ""))
    assert source.scheme == "https" and source.hostname == "divulgacandcontas.tse.jus.br", f"Missing official asset source: {block['id']}"
by_id = {block["id"]: block for block in data["blocks"]}
for topic, guide in data.get("topicGuides", {}).items():
    assert guide["title"] and guide["summary"] and guide["questions"], f"Guia incompleto: {topic}"
    assert guide.get("status") in ("approved", "draft"), f"Revisão ausente: {topic}"
    for item in guide.get("history", []):
        block = by_id.get(item["blockId"])
        assert block and block.get("topic") == topic, f"Referência inválida no guia: {topic}"
        index = item["implicationIndex"]
        assert isinstance(index, int) and 0 <= index < len(block.get("implications", [])), f"Contexto inválido: {topic}"
audit = data.get("debateAudit")
if audit:
    catalog = {b["id"]: b for b in audit["catalog"]}
    assert len(catalog) == len(audit["catalog"]), "Catálogo do debate duplicado"
    assert set(catalog) | set(audit.get("catalogExcludedAdditions", [])) == {b["id"] for b in data["blocks"] if b.get("kind") == "Proposta"}, "Catálogo do debate desatualizado"
    assert not set(catalog) & set(audit.get("catalogExcludedAdditions", [])), "Adição já consta no catálogo congelado"
    seen = set()
    for match in audit["matches"]:
        block = catalog.get(match["blockId"])
        assert block and block["candidate"] == match["candidate"], "Atribuição inválida no debate"
        assert match["blockId"] not in seen, "Proposta duplicada na contagem"
        seen.add(match["blockId"])
        assert 0 <= match["start"] < match["end"] <= audit.get("videoDurationSeconds", 6848), "Timestamp inválido"
    if audit.get("verification") == "checked":
        assert audit.get("verificationScope") and audit.get("audioReview") and audit.get("corpusReview"), "Missing debate verification method"
        assert audit.get("notWholeProgramPercentage") is True, "Card metric must not claim whole-program coverage"
        assert all(m.get("verification") == "asr-caption-visual-corroborated" and m.get("coverageNote") for m in audit["matches"]), "Unverified or unexplained debate match"
    if args.public and (audit["status"] != "approved" or audit["verification"] != "checked"):
        raise SystemExit("Publicação bloqueada: análise do debate pendente")
# Atomic coverage must reconcile against its complete, downloadable ledger.
individual = data.get("debateIndividualAudit")
if individual:
    ledger = json.loads((ROOT / "src/debate-atomic-audit.json").read_text())
    units = {u["id"]: u for u in ledger["units"]}
    assert len(units) == len(ledger["units"]), "Duplicate individual proposal"
    rows = ledger["rowAccounting"]
    assert len(rows) == len({r["inventoryId"] for r in rows}) == ledger["inventoryRowsRead"], "Incomplete inventory accounting"
    assert all(r["resultingUnitIds"] and all(uid in units for uid in r["resultingUnitIds"]) for r in rows), "Missing derived action"
    assert {uid for row in rows for uid in row["resultingUnitIds"]} == set(units), "Unaccounted derived action"
    for unit in units.values():
        assert unit["disposition"] in ("retained", "merged", "excluded-context-or-goal")
        if unit["disposition"] == "merged":
            assert unit.get("mergedInto") and all(target in units and target != unit["id"] for target in unit["mergedInto"]), "Invalid merge target"
    for candidate in ("lula", "flavio"):
        retained = [u for u in units.values() if u["candidate"] == candidate and u["disposition"] == "retained"]
        matches = [u for u in retained if u.get("debateMatch")]
        count = individual["counts"][candidate]
        assert len(retained) == count["normalizedRetainedActions"], "Individual denominator mismatch"
        assert len(matches) == count["strictMatchedActions"], "Individual numerator mismatch"
        rendered = [m for m in individual["matches"] if m["candidate"] == candidate]
        assert {m["id"] for m in rendered} == {m["id"] for m in matches} and len(rendered) == len(matches), "Rendered atomic evidence mismatch"
        partial = [u for u in retained if u.get("partialDebateMatch")]
        displayed_partial = [m for m in individual.get("partialMatches", []) if m["candidate"] == candidate]
        assert {m["id"] for m in displayed_partial} == {u["id"] for u in partial}, "Partial evidence mismatch"
        assert len(partial) == count.get("partialMatchedActions", 0), "Partial count mismatch"
        assert not {u["id"] for u in partial} & {u["id"] for u in matches}, "Action counted as direct and partial"
        for match in rendered + displayed_partial:
            assert 0 <= match["start"] < match["end"] <= audit["videoDurationSeconds"], "Invalid individual timestamp"
            source_unit = units[match["id"]]
            source_match = source_unit.get("debateMatch") or source_unit["partialDebateMatch"]
            assert match["pages"] == source_unit["pages"] and match["start"] == source_match["start"] and match["end"] == source_match["end"], "Stale rendered evidence"
            assert match["pages"] and match["sourceUrl"].startswith("https://") and match["readerParaphrase"], "Missing individual provenance"
    if args.public and not individual.get("publicationApproved"):
        raise SystemExit("Publicação bloqueada: análise individual do debate pendente")
# Crowd estimates retain their event and attribution; never silently publish drafts.
for event in data.get("rallyCrowds", []):
    assert event.get("city") and event.get("date") and event.get("place") and event.get("limit"), "Incomplete crowd event"
    assert event.get("candidate") in ("lula", "flavio"), "Unknown crowd candidate"
    city = next((r for r in data.get("rallyCities", []) if r["city"] == event["city"]), None)
    assert city and any(a["candidate"] == event["candidate"] and a["date"] == event["date"] for a in city["acts"]), "Crowd count mapped to wrong event"
    assert event.get("estimates"), "Empty crowd estimates"
    for estimate in event["estimates"]:
        assert all(estimate.get(k) for k in ("value", "author", "method", "kind", "observedAt", "publishedRange", "countingMethod")), "Unattributed crowd estimate"
        assert estimate.get("source", {}).get("url", "").startswith("https://"), "Missing crowd source"
    if args.public and event.get("verification") != "checked":
        raise SystemExit("Publicação bloqueada: estimativas de público pendentes de revisão")
if args.public or args.release_review:
    assert all(b.get("verification") == "checked" for b in data["blocks"])
    assert all(g.get("verification") == "checked" for g in data.get("topicGuides", {}).values())
    assert not data.get("rallyCities") or data.get("rallyReview", {}).get("verification") == "checked"
    assert all(e.get("verification") == "checked" for e in data.get("rallyCrowds", []))
    print("Filtered content approval SHA-256:", content_digest(data))
if args.public:
    require_public_approval(data, json.loads((ROOT / "src/release-approval.json").read_text()))
    data["mode"] = "public"
elif args.release_review:
    data["mode"] = "release-review"
else:
    data["mode"] = "review"
dest = ROOT / ("release-review" if args.release_review else "public" if args.public else "dist")
# Recreate the derived candidate so removed evidence cannot survive from an older build.
if (args.release_review or args.public) and dest.exists():
    shutil.rmtree(dest)
dest.mkdir(exist_ok=True)
for path in (ROOT / "src").iterdir():
    if path.is_file() and path.name not in ("content.json", "release-approval.json") and not ((args.release_review or args.public) and path.name == "debate-atomic-audit.json"):
        shutil.copy2(path, dest / path.name)
    elif path.is_dir() and path.name == "assets":
        shutil.copytree(path, dest / path.name, dirs_exist_ok=True)
(dest / "content.json").write_text(json.dumps(data, ensure_ascii=False, indent=2))
if args.public:
    index = (dest / "index.html").read_text().replace('<meta name="robots" content="noindex,nofollow">', '<meta name="robots" content="index,follow">')
    (dest / "index.html").write_text(index)
else:
    (dest / "robots.txt").write_text("User-agent: *\nDisallow: /\n")
    standalone = (dest / "index.html").read_text()
    standalone = standalone.replace('<link rel="stylesheet" href="style.css">', "<style>" + (dest / "style.css").read_text() + "</style>")
    standalone = standalone.replace('<link rel="icon" href="icon.svg" type="image/svg+xml">', "")
    flag = base64.b64encode((ROOT / "src/assets/brasil-wave-clean.svg").read_bytes()).decode()
    standalone = standalone.replace("assets/brasil-wave-clean.svg", "data:image/svg+xml;base64," + flag)
    coast = base64.b64encode((ROOT / "src/assets/brasil/postcard-hq.jpg").read_bytes()).decode()
    standalone = standalone.replace("assets/brasil/postcard-hq.jpg", "data:image/jpeg;base64," + coast)
    offline = json.loads(json.dumps(data))
    for candidate in offline["candidates"]:
        if candidate.get("photo"):
            raw = (ROOT / "src" / candidate["photo"]).read_bytes()
            candidate["photo"] = "data:image/jpeg;base64," + base64.b64encode(raw).decode()
    for photo in offline.get("heroPhotos", []):
        raw = (ROOT / "src" / photo["src"]).read_bytes()
        photo["src"] = "data:image/jpeg;base64," + base64.b64encode(raw).decode()
    payload = json.dumps(offline, ensure_ascii=False).replace("<", "\\u003c")
    scripts = '<script type="application/json" id="embedded-content">' + payload + '</script><script type="module">' + (dest / "app.js").read_text() + "</script>"
    standalone = standalone.replace('<script type="module" src="app.js"></script>', scripts)
    standalone = standalone.replace("assets/brasil-wave-clean.svg", "data:image/svg+xml;base64," + flag)
    (ROOT.parent / ("veritas-release-review.html" if args.release_review else "veritas-preview.html")).write_text(standalone)
print(f"{len(data['blocks'])} blocos validados. Modo: {data['mode']}. Saída: {dest}")

# Asset fingerprints prevent an older UI from surviving a new local build.
index_path = dest / "index.html"
index = index_path.read_text()
for asset in ("app.js", "style.css"):
    version = hashlib.sha256((dest / asset).read_bytes()).hexdigest()[:12]
    index = index.replace('"' + asset + '"', '"' + asset + '?v=' + version + '"')
index_path.write_text(index)
