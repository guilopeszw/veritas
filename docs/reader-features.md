# Personal reading and editorial history

Implemented 21 October 2026. No backend, account or analytics.

## Reading state

`veritas:saved` stores content IDs in localStorage. The saved page only renders IDs still present in the current edition. Buttons work without expanding a proposal, support keyboard activation and expose aria-pressed. A failed storage operation falls back to memory for this tab and shows a notice. Clearing browser data removes saved items; devices do not synchronize.

`veritas:seen-updates` stores update IDs present on the previous page load. A session keeps that previous snapshot so navigating does not clear its new labels. Reloading starts a new visit. The reader can explicitly mark current updates read. The first visit shows the available history; it does not imply a prior visit.

## Everyday questions

Four curated questions reuse existing proposal pairs: wages, specialist care, digital health records and government spending limits. The financing explanation distinguishes execution information from cost estimates. It does not infer personal financial outcomes or introduce new candidate claims. Sources and caveats remain on the original cards.

## Editorial process

Add immutable entries to `readerUpdates` in content.json. Required fields: unique id, ISO date, type, title, description and blockIds. For Correção, also provide before, after and reason. A correction must reference affected blocks; their sources remain available. Do not backdate or reconstruct an unverifiable history. New entries need editorial review like other content and invalidate the filtered release approval digest.

The initial entry is explicitly a baseline, not a correction or new fact check. Per-card disclosures and the full /correcoes page use the same records. /novidades adds unread status. Updates referencing excluded content are omitted from the filtered edition, preventing research notes from leaking through the change log.

## Validation

Mobile browser: saving did not expand the proposal; saved item survived reload; removing it produced the empty state; history opened with the baseline disclaimer; no horizontal overflow. Build validates update IDs, dates, references and correction fields. Existing public-release gates remain active.
