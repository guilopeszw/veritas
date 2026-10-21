# Local audiovisual review desk

This operator-only tool lives outside every site build. It is not a route in the
public application and does not change verification, content approval or launch
authorization. The generated page and media remain outside the repository.

## Start

From the repository, with the previously recovered media and PDF corpus in the
parent workspace:

```sh
python3 scripts/create_debate_review.py --clips
python3 scripts/serve_debate_review.py
```

Open http://127.0.0.1:4175/. Rebuilding only the page does not require `--clips`.
The server binds exclusively to loopback and supports HTTP byte ranges for video
seeking. Stop it with Ctrl+C. No hosting configuration is modified.

## Review behavior

- All 24 intervals are in chronological order, with a candidate filter.
- Each H.264/AAC local clip includes 10 seconds before and 15 seconds after the
  interval. Original recording timestamps are displayed beside the player.
- The source video hash is checked before regenerating clips; timestamps belong
  to the Rádio Bandeirantes recording, not the supplemental upload.
- Specific review questions and extracted program pages are available in the
  same panel. Summaries are not presented as authenticated verbatim quotations.
- Confirmation requires three explicit checks. Corrections and uncertainty can
  be recorded without falsely confirming those checks.
- Browser storage is keyed to the ledger hash. A changed ledger starts a new
  review instead of silently reusing approval of different evidence.
- JSON export includes the ledger hash, timestamps, comments and statuses;
  `publicationApproved` is always false. Importing decisions into editorial
  records requires a separate reconciliation step.

The 24 positive/partial intervals do not replace review of the whole recording
for omitted commitments and the early cut. Completion of the desk is not
certification of comprehensive debate coverage.

## Validation

Checked all 24 files for audio/video streams and expected duration (within
0.2 seconds), JavaScript syntax, HTTP206 range responses, browser seek to the
original timestamp, status persistence across reload and confirmation gating.
Test statuses were reset to pending. No factual approval was recorded.

## Local synchronization

The page POSTs a debounced snapshot to its loopback server after edits and on load. The server accepts only its exact local Origin, bounds payload size, validates statuses and checks, and atomically writes `outputs/revisao-debate/latest-review.json`. This operator file is outside the repository and every release build. No remote endpoint receives review notes.

The thread heartbeat compares snapshots every five minutes with `docs/debate-review-incorporation.json`. Source observations remain attributed to the owner. Changed or revoked reviews require reconciliation; a confirmed partial match is not automatically counted as direct. Do not regenerate the review page while the user is reviewing: its original ledger hash intentionally anchors their session even as evidence metadata is incorporated into the working ledger.
