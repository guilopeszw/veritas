# Official-program reconciliation

Completed 20 October 2026 against the current reader-visible content snapshot.

## Inventory coverage

**All 796 rows in the existing extracted-text inventory have a mapped destination:** 459 PT rows and 337 PL rows, across 145 destination cards. There are no unresolved inventory rows or outstanding additive paragraphs.

The final integration check found all 86 reconciliation paragraphs present verbatim: the earlier 69 additions and the final 17 qualifiers. Existing text and the additions together cover the commitments, populations, implementation details and conditions recorded by this inventory. Cross-card references cover shared policies such as TFFF and SME exports.

## Counts and interpretation

| Measure | Count |
|---|---:|
| PT inventory rows | 459 |
| PL inventory rows | 337 |
| Total source rows | 796 |
| Rows directly mapped | 782 |
| Explicit repeat links | 14 |
| Destination cards | 145 |
| Unresolved rows | 0 |

These are source-unit and destination counts, **not a deduplicated count of unique campaign proposals**. The 14 explicit repeat links are recorded cross-references, not a claim that every thematic overlap can be removed mechanically. One card may combine several measures, and one policy may recur across chapters. Debate coverage requires its own declared denominator; do not use 796 or 782 as a unique-proposal count.

## Evidence

`work/program-reconciliation.json` contains every inventory ID, physical source pages, current reader-visible evidence snapshot, mapping status, repeat links and the 86 integrated additions. It retains `remainingAdditions: []` and `mappingComplete: true` for this inventory scope.

Reviewed local `src/content.json` SHA-256:

`dc315beab513951b5ef673de7e8e2c79a5aa0e18dc1ff53d54334bf0124364d9`

## Source scope and limits

The PT extraction contains all 2,373 extracted lines across its 84-page document. The PL extraction contains all 2,300 extracted lines across its 76-page document; cover/back pages without text are identified in the PL ledger. This is a complete reconciliation of the existing textual inventory, not visual authentication of every rendered PDF page, proof that an official URL will never change, or a claim about every promise made outside the reviewed programs.

Program attribution establishes what the document proposes. It does not establish historical claims, legal feasibility, projected costs or future effects. Those questions retain their separate fact-check audits. Any subsequent change to the content or source version requires another reconciliation.
