# Disclosure chronology

The transparency page reuses the 6x1 trail presentation with eight dated, expandable events. Each event identifies its actor, source and limits. The chronology preserves refusal attributed to allies, conditional acceptance, reciprocal conditions and the subsequent agreement. It does not infer intent or equate consent with released records.

Content lives in `disclosureTimeline` in `src/content.json`; the build validates dates, ordering, actors and source URLs. Existing candidate cards retain the detailed history. Mobile uses the same tested trail panel with a close control and readable source links.

## Mobile validation — 2026-10-22

The disclosure chronology uses one column at widths up to 700px. Dates and candidate names use 14px text; details expand in document flow without a height cap or nested scrolling. Source links wrap. The candidate cards below the timeline also stack at this breakpoint.

Checked all eight events opening and closing at 320px, 390px and 700px. No horizontal or detail-panel overflow after the fix. Desktop at 1280px retains the existing two-sided chronology. Syntax, release isolation/approval tests, reader tests and the filtered public build passed. No editorial scope or approval was changed.
