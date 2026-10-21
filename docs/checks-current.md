# Automated checks — 21 October 2026

| Command | Source | Result |
|---|---|---|
| `node --check src/app.js` | package.json check | PASS |
| `python3 scripts/build.py` | package.json build | PASS; full atomic ledger assertions |
| `python3 scripts/build.py --release-review` | documented release workflow | PASS; pending analytical features filtered |
| `python3 scripts/test_release.py` | release regression suite | PASS; content scope, approval and launch gates |
| `node scripts/test_reader.mjs` | reader regression suite | PASS; question references, storage, notification reads |
| `git diff --check` | whitespace check | PASS |

No formatter or separate static type-check command is configured. Technical checks do not certify audio or authorize publication.
