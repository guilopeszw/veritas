"""Regression proof in an isolated copy; never authorize the real repository."""
import copy
import json
from pathlib import Path
import shutil
import subprocess
import tempfile
from release_scope import filtered_content, content_digest, require_public_approval

root = Path(__file__).resolve().parent.parent
approval_before = (root / "src/release-approval.json").read_bytes()
source_before = (root / "src/content.json").read_bytes()
source = json.loads(source_before)
filtered = filtered_content(source)
assert all(key not in filtered for key in ("debateAudit", "debateIndividualAudit", "programCoverage"))
excluded_example=copy.deepcopy(source)
excluded_example["blocks"][0]["verification"]="pending"
excluded_example["readerUpdates"]=[{"id":"pending", "blockIds":[excluded_example["blocks"][0]["id"]]}]
assert filtered_content(excluded_example)["readerUpdates"] == []
assert source.get("debateAudit"), "Source investigation must remain intact"
assert all(b["verification"] == "checked" for b in filtered["blocks"])
for approval, launch in (({}, False), ({"approvedContentSha256": content_digest(filtered)}, False), ({"approvedContentSha256": "stale"}, True)):
    sample = copy.deepcopy(filtered)
    sample["launchApproved"] = launch
    try:
        require_public_approval(sample, approval)
    except SystemExit:
        pass
    else:
        raise AssertionError("Approval gate failed open")
with tempfile.TemporaryDirectory() as tmp:
    fixture = Path(tmp)
    shutil.copytree(root / "scripts", fixture / "scripts")
    shutil.copytree(root / "src", fixture / "src")
    sample = copy.deepcopy(source)
    sample["launchApproved"] = True
    (fixture / "src/content.json").write_text(json.dumps(sample))
    (fixture / "src/release-approval.json").write_text(json.dumps({"approvedContentSha256": content_digest(filtered_content(sample))}))
    subprocess.run(["python3", str(fixture / "scripts/build.py"), "--public"], check=True, capture_output=True)
    public = json.loads((fixture / "public/content.json").read_text())
    assert public["mode"] == "public"
    assert content_digest(public) == content_digest(filtered)
    assert not (fixture / "public/debate-atomic-audit.json").exists()
    assert not (fixture / "public/release-approval.json").exists()
    assert 'index,follow' in (fixture / "public/index.html").read_text()
    # Removed evidence must not survive a rebuild.
    (fixture / "public/debate-atomic-audit.json").write_text("stale")
    subprocess.run(["python3", str(fixture / "scripts/build.py"), "--public"], check=True, capture_output=True)
    assert not (fixture / "public/debate-atomic-audit.json").exists()
assert (root / "src/content.json").read_bytes() == source_before, "Tests must preserve real launch authorization"
assert (root / "src/release-approval.json").read_bytes() == approval_before, "Tests must preserve real editorial approval"
print("PASS: exact filtered scope, approval and launch gates, isolated public build, stale-file removal")
