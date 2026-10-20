"""Build review locally; require explicit, complete approvals for public output."""
import argparse
import base64
import hashlib
import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
parser = argparse.ArgumentParser()
parser.add_argument("--public", action="store_true")
args = parser.parse_args()
data = json.loads((ROOT / "src/content.json").read_text())
ids = [b["id"] for b in data["blocks"]]
assert len(ids) == len(set(ids)), "IDs duplicados"
for block in data["blocks"]:
    assert block["title"] and block["sources"], f"Bloco sem título/fontes: {block['id']}"
    assert block["status"] in ("approved", "draft")
    for source in block["sources"]:
        assert source["url"].startswith("https://"), f"Fonte inválida: {block['id']}"
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
    assert set(catalog) == {b["id"] for b in data["blocks"] if b.get("kind") == "Proposta"}, "Catálogo do debate desatualizado"
    seen = set()
    for match in audit["matches"]:
        block = catalog.get(match["blockId"])
        assert block and block["candidate"] == match["candidate"], "Atribuição inválida no debate"
        assert match["blockId"] not in seen, "Proposta duplicada na contagem"
        seen.add(match["blockId"])
        assert 0 <= match["start"] < match["end"] <= 6848, "Timestamp inválido"
    if args.public and (audit["status"] != "approved" or audit["verification"] != "checked"):
        raise SystemExit("Publicação bloqueada: análise do debate pendente")
if args.public:
    pending = [b["id"] for b in data["blocks"] if b["status"] != "approved" or b.get("verification") != "checked"]
    pending += [f"guia:{topic}" for topic, guide in data.get("topicGuides", {}).items()
                if guide.get("status") != "approved" or guide.get("verification") != "checked"]
    if data.get("rallyCities") and (data.get("rallyReview", {}).get("status") != "approved" or data.get("rallyReview", {}).get("verification") != "checked"):
        raise SystemExit("Publicação bloqueada: revisão dos resultados municipais pendente")
    if pending or not data.get("launchApproved") or not all(data["coverage"].values()):
        raise SystemExit(f"Publicação bloqueada: cobertura/aprovação incompleta; blocos pendentes: {', '.join(pending)}")
    data["mode"] = "public"
else:
    data["mode"] = "review"
dest = ROOT / ("public" if args.public else "dist")
dest.mkdir(exist_ok=True)
for path in (ROOT / "src").iterdir():
    if path.is_file() and path.name != "content.json":
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
    (ROOT.parent / "veritas-preview.html").write_text(standalone)
print(f"{len(data['blocks'])} blocos validados. Modo: {data['mode']}. Saída: {dest}")

# Asset fingerprints prevent an older UI from surviving a new local build.
index_path = dest / "index.html"
index = index_path.read_text()
for asset in ("app.js", "style.css"):
    version = hashlib.sha256((dest / asset).read_bytes()).hexdigest()[:12]
    index = index.replace('"' + asset + '"', '"' + asset + '?v=' + version + '"')
index_path.write_text(index)
