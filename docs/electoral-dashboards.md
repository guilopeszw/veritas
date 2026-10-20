# Electoral dashboard options

Status: **proposal for discussion, not an implemented integration**.
Research date: 2026-10-20. Product labels below are English design descriptions;
the shipped interface should use plain Brazilian Portuguese.

## What has actually been established

The [Eleições.dev homepage](https://eleicoes.dev/) describes a public electoral-data
API and shows an authenticated candidate request. Its [machine-readable guide](https://eleicoes.dev/llms.txt)
describes candidates, parties, elections, and declared assets for the 2026 cycle;
it links to REST, MCP, and an asset-ranking demonstration. REST and MCP require
a Bearer API key obtained through its dashboard.

The advertised [OpenAPI contract](https://api.eleicoes.dev/openapi/json) was not
retrievable in this session: direct HTTP returned 403. The interactive API docs
exposed no usable schema through text retrieval. No authenticated candidate-data
request was made. Field names, pagination, historical availability, municipal
results, limits, reuse terms, and free-tier conditions remain unverified.

Do not interpret this as a confirmed free integration or confirmed availability
of every dashboard below. Verify the current contract and account terms first.

## Recommended sequence

| Priority | Reader question | Proposed view | Data dependency | Current confidence |
| --- | --- | --- | --- | --- |
| 1 | What makes up each candidate's declared assets? | Side-by-side totals, category bars, expandable item lists | Candidate identity, election year, asset type/description/value, filing reference | Declared assets are advertised; exact fields and records need validation |
| 2 | What candidacies are recorded for this person? | A compact election timeline with office, party, geography, and outcome | Cross-year candidate identity and historical election records | Historical coverage is not confirmed |
| 3 | How did a city vote in a specific election? | Searchable municipal table, vote shares, optional map | Certified candidate-level results by municipality, round, and election | Not established by the inspected API documentation; may require direct TSE data |

Start by enhancing the existing asset area rather than adding a disconnected
analytics section. A compact, source-backed profile view is more useful than
several decorative charts with weak or unavailable inputs.

## Option A — declared assets (recommended first)

Show the filing year, declared total, and category breakdown for each candidate.
Prefer labeled horizontal bars over a pie chart. Keep the item lists collapsed
by category, with each item description, declared BRL value, and official filing
link available on expansion. Retain original descriptions in the evidence layer;
a short plain-language label can be displayed separately.

Suggested categories, subject to the source taxonomy: real estate, investments,
cash/deposits, company interests, vehicles, and other assets. Do not invent a
liability category if the dataset only reports assets; do not label the sum as
net worth unless liabilities are known. An unclassified item remains visible
under “Other / classification pending,” never silently discarded.

Validation requirements:

- Confirm candidate identity and election year through stable source identifiers.
- Parse currency using decimal or integer-cent arithmetic, not binary floats.
- Reconcile the sum of individual items with the reported total; flag discrepancies.
- Distinguish a declared valuation from current market value or purchase price.
- Preserve ownership shares and source wording where provided; do not infer them.
- Preserve the filing date and retrieval date separately.
- Show missing data as unavailable, never as zero.
- Link each list to the official TSE declaration; Eleições.dev is an access layer.

A declared asset is not evidence of corruption, unlawful financing, or an
unreported purchase. Any related controversy needs its own verified documents,
response, procedural context, and editorial review.

## Option B — electoral history

If historical records are available, show elections contested, office sought,
party at that election, electoral geography, and official outcome. Do not infer
years in office solely from election outcomes, or treat party changes as evidence
of dishonesty. Use source IDs to disambiguate people with similar names.

Asset changes across years should be a later enhancement, not the first chart:
filing rules, ownership, valuation conventions, amendments, and inflation can
change. Never label an unexplained difference as income or illicit enrichment.
Only compare clearly identified, compatible snapshots and explain the limitations.

## Option C — municipal voting context

A useful later view would answer: “How did this municipality vote in this election
and round?” Show votes and shares with the exact denominator, geography, year,
and round. Blank/null votes and abstention have different denominators and need
separate labels. Historical results must not be presented as predictions.

Do not compare Lula's presidential vote with Flávio's Senate vote as though they
were the same contest. Compare equivalent offices, rounds, and electorates, or
keep the records in clearly separate panels. If a common election has not yet
occurred or the result is unavailable, say so.

If used alongside demonstrations, election results provide local context only.
They do not establish how many attendees live in that city or why people attended.
Crowd estimates need independent sources, dates, locations, and methods. No
causal “votes explain crowd size” score should be generated.

## Other directions considered

- **A national candidate/asset leaderboard:** visually engaging, but less aligned
  with Veritas's two-candidate comparison and vulnerable to sensational framing.
  Do not prioritize it.
- **Proposal or debate coverage dashboards:** relevant, but these depend on our
  own reviewed commitment inventory and transcript, not the inspected electoral
  API. Keep their provenance and approval gates separate.

## Proposed integration with a zero-cost constraint

This is a design proposal, not a live service or scheduled job.

1. Confirm API access, current free limits, reuse terms, required fields, and
   official-source links. If any required service costs money, use public TSE
   downloads or postpone that view; do not add billing.
2. Keep the API key outside browser code and Git. Fetch through a local import
   or a reviewed CI job using a secret. Public clients receive only reviewed,
   minimized static data.
3. Store a normalized snapshot with source, election, identifiers, retrieval
   time, document version where available, and validation results. Avoid
   unnecessary personal data and full residential addresses.
4. Validate pagination, duplicates, identity, values, totals, and missing fields.
   Preserve the last approved snapshot when refresh fails; show its date.
5. Produce a reviewable diff rather than automatically publishing changed data.
   Require maintainer review for new values or classifications.
6. Render accessible tables first, then charts. Every chart needs text labels,
   keyboard access, a mobile layout, and a table alternative; never encode the
   candidate or value solely by color.

## Acceptance conditions before implementation is considered complete

- Both candidates resolve to verified official records for the intended election.
- Item sums reconcile, or any discrepancy is visibly explained.
- Every displayed list links to its official declaration and records its date.
- Empty, stale, changed, duplicate, and failed-fetch cases are handled.
- No secrets or unnecessary personal details enter the static output.
- Free usage is verified; no paid service or automatic billing is enabled.
- Mobile, keyboard, and screen-reader labeling are checked.
- Editorial review is recorded before production; visual polish is not approval.

## Decision to make next

Recommended: approve the asset dashboard as the first implementation target.
Keep electoral history and municipal results as conditional follow-ups until the
API contract or direct TSE datasets establish their availability.
