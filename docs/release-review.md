# Release review candidate — 20 October 2026

Local URL: http://127.0.0.1:4174/ . Rebuild with `python3 scripts/build.py --release-review`; serve `release-review/` on loopback port 4174. The full editorial preview remains in `dist/` on port 4173.

## Scope

210 checked content blocks; editorial approval is still required. Excluded: pending property-payment block, both debate percentage datasets, downloadable atomic audit, official-program completeness metadata and comparison Story controls. Debate summaries no longer link to the excluded counts. Coverage copy describes a selection, not exhaustive coverage. Health guide and seven attributed rally estimate records remain included. Data retains source approval states without manufacturing approvals.

## Validation

Build and syntax checks pass. Excluded block is absent from content JSON and its direct route returns not found. Debate view contains no coverage percentages or links to excluded counts. The atomic audit is not copied into this output. No deployment was performed, launchApproved remains false, and the existing public build retains its approval gates.

Candidate content SHA-256: `1c70c1d53cbd66634321f6f45f797d32030a8641b0df3d7a96b935096980532c`

## Owner review

Review the candidate text and presentation at the local URL. Approval applies to this limited scope, not the withheld evidence. A subsequent public build must explicitly reconcile that approval with this candidate and preserve the exclusions; `--release-review` is not a deployment bypass.
