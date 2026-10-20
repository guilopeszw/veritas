# Verification record — 2026-10-20

This file records checks from implementation rounds. It is not a statement that
all editorial content is verified or ready for publication.

## Latest program-coverage round

- `npm run check`: passed JavaScript syntax validation.
- `npm run build`: passed; 187 content blocks, including 126 proposal cards
  (68 for Lula and 58 for Flávio).
- `git diff --check`: passed.
- An isolated fixture with approved content and a pending `programCoverage`
  record was rejected by the public builder as expected.
- The six added proposal IDs remain `draft` / `pending` with official TSE
  program references and page fragments.
- Tourism was checked in the browser as a two-candidate comparison.
- Publication and public comparison sharing remain blocked by coverage and
  editorial requirements. A passing build is not a fact-check.

## Earlier UI and health rounds

- Earlier preview build: 181 blocks; JavaScript syntax and whitespace checks passed.
- Layout was checked at simulated 320 px and 390 px widths, not on physical devices.
- Search, menus, cards, and navigation were checked in the local browser.
- The health round had 17 proposals and six thematic pairs; its three additions
  remained under review. These are historical counts, not the current inventory.
- Candidate filtering returned seven Flávio proposals; vaccine search narrowed
  results; changing topic updated the route and removed the previous context.
- At 390 px and 320 px, shortcuts were readable, cards started collapsed,
  opening Lula's card kept Flávio's closed, and search opened over a blurred page.
- An isolated fixture rejected publication with a pending guide even when other
  states were approved; a nonexistent context reference also failed validation.
- Visual inspection of the official PDFs and editorial approval remained pending.
  No comparable outcome indicators were added in that round.

There has been no complete WCAG audit or exhaustive browser testing. CI validates
syntax and integrity, not factual truth. Each block retains sources, outstanding
questions, and approval state in `src/content.json`.
