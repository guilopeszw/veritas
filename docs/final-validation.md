# Final validation — 20 October 2026

Status: corrected local candidate ready for owner review. Nothing published.

## Current validation

Eleven secondary channel records with malformed addresses or repeated HTTP 400/404 responses now render as non-clickable declarations with an availability notice. Their original TSE URLs remain unchanged in the data. We did not guess replacement accounts. This fixes broken navigation rather than claiming those channels are permanently gone. Access-denied sources and the TJRJ timeout remain separate availability limitations.

The public builder now uses the exact same filtered_content function as local release review. UI exclusions depend on releaseScope, not preview mode, so comparison Story controls and coverage claims cannot return simply by switching to public mode. No stale atomic download survives rebuilding. Approval is tied to a canonical content hash; launch authorization remains separate. Existing raw editorial flags were not bulk-approved.

Passed: JavaScript syntax, full editorial build, filtered build, isolated public build, stale-output removal, missing/stale editorial approval rejection, missing launch rejection. The real public command stops at editorial approval as intended. The isolated test creates its temporary authorization only in a disposable copy. CI now includes these tests, with no deployment step.

After reloading the rebuilt preview, eleven routes were checked at 355 CSS pixels: proposals, topics, fact checks, 6x1, sovereignty, transparency, controversies, rallies, debates and both asset/channel profiles. All had no missing-page state or horizontal document overflow; invalid channel anchors and comparison sharing controls were absent. This is browser viewport testing, not certification across all physical phones.

Remaining owner action: review this filtered edition. Publication and destination approval remain later actions. Third-party HTTP restrictions prevent a universal claim that every external site is reachable for every reader.

## Deployment controls inspected (read-only)

- Repository private; only guilopeszw listed as collaborator, with admin role.
- Only Validate workflow configured; read-only contents permission, pinned checkout, no persisted checkout credentials, no deployment step.
- GitHub Pages not configured (admin API returned 404).
- Production environment restricted to main; no required-reviewer rule available in its current configuration.
- Main disallows force pushes and deletion, requires validation/review, but administrators can bypass protections (enforce_admins=false), consistent with the owner's direct-main workflow.
- launchApproved remains false. The public build intentionally fails until the exact filtered edition receives editorial approval. No deployment was attempted and no security settings were changed.

