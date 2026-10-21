"""One filtered editorial scope for local review and eventual publication."""
import copy
import hashlib
import json

EXCLUDED = ("debateAudit", "debateIndividualAudit", "programCoverage")

def filtered_content(source):
    data = copy.deepcopy(source)
    data["blocks"] = [b for b in data["blocks"] if b.get("verification") == "checked"]
    for key in EXCLUDED:
        data.pop(key, None)
    for block in data["blocks"]:
        if block["id"] in ("debate-band-flavio-propostas", "debate-band-lula-propostas"):
            block["context"] = "Síntese das propostas identificadas nas fontes indicadas. Não representa uma contagem completa de todas as propostas ou de todas as falas do debate."
            block.pop("relatedRoute", None)
            block.pop("relatedLabel", None)
    included = {b["id"] for b in data["blocks"]}
    data["readerUpdates"] = [u for u in data.get("readerUpdates", []) if not u.get("blockIds") or set(u["blockIds"]).issubset(included)]
    data["releaseScope"] = "checked-content-without-pending-coverage-metrics"
    return data

def content_digest(data):
    payload = copy.deepcopy(data)
    payload.pop("mode", None)
    payload.pop("launchApproved", None)
    return hashlib.sha256(json.dumps(payload, ensure_ascii=False, sort_keys=True).encode()).hexdigest()

def require_public_approval(data, approval):
    if approval.get("approvedContentSha256") != content_digest(data):
        raise SystemExit("Publicação bloqueada: aprovação editorial da edição filtrada pendente ou desatualizada")
    if not data.get("launchApproved"):
        raise SystemExit("Publicação bloqueada: autorização de lançamento pendente")
