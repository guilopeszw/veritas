# Prelaunch validation — 2026-10-21

Status: local public artifact built successfully. This check did not deploy the website.

## Responsive navigation

Checked 17 routes at 320, 390 and 1440 CSS pixels (51 route/viewport combinations): home, proposals, both profiles, discussion topics, everyday questions, 6x1, transparency, controversies, sovereignty, fact checks, debates, demonstrations, saved items, methodology, change history and edition scope. No horizontal document overflow or missing-page state was found.

Verified search results, independent proposal expansion, proposal filters, saving/removing an item, notifications and preservation of demonstration filters and comparison selections when switching views. Mobile screenshots were inspected for readable text and usable controls. Tests used simulated browser viewports, not physical devices.

## Release checks

Passed JavaScript syntax checks, reader-state regression checks, isolated release-gate tests, public build and whitespace checks. The public artifact contains 218 checked blocks and excludes pending debate/program coverage datasets.

Approved content SHA-256: `defec5f7e688cf4dd6af7d2f6fc06144c3ed1e1c5edd637bd3f99c00c0d99544`.

The owner has authorized launch after DNS activation and readiness checks. The launch flag now records that authorization; the exact-content editorial gate remains intact. Regression tests verify that neither approval nor launch authorization is modified by tests.

## Access controls

GitHub inspection confirmed main requires the validate check and one review, with force pushes and deletion disabled. The production environment lists guilopeszw as reviewer; guilopeszw is the sole repository collaborator. Only the validation workflow is active; there is no automatic deployment workflow.

## Remaining operational check

Confirm Cloudflare Active status, connect the domain to the prepared hosting project, then deploy the approved artifact and verify HTTPS and live navigation. DNS delegation alone is not proof of Cloudflare activation. LinkedIn and WhatsApp posts are not authorized for publication by the agent.

This pass is a UI/build readiness check, not a new full factual audit or an exhaustive external-link/accessibility/browser compatibility audit.
