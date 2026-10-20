# Asset dashboard verification — 2026-10-20

## Primary records rechecked

The public DivulgaCandContas interface was opened directly, candidate identity
was confirmed, and “Bens do Candidato” was expanded for both candidates.
All 27 listed items and values matched the existing database; no asset values
were changed in this implementation.

| Candidate | Election | Items | Declared total | Official record |
| --- | ---: | ---: | ---: | --- |
| Lula | 2026 | 18 | BRL 4,775,650.64 | [TSE declaration](https://divulgacandcontas.tse.jus.br/divulga/#/candidato/BR/BR/20322002026/280002542548/2026/BR) |
| Flávio Bolsonaro | 2026 | 9 | BRL 8,186,555.83 | [TSE declaration](https://divulgacandcontas.tse.jus.br/divulga/#/candidato/BR/BR/20322002026/280002551544/2026/BR) |

These are declared asset values, not current market prices or net worth after
liabilities. Simplified labels and categories are Veritas's presentation; partial
ownership descriptions are retained. No private residential addresses were added.
The UI check is a dated observation, not an immutable historical filing archive.

## Presentation

Each profile shows the declared total, item count, and categories sorted by value.
Every category displays its amount and percentage, with a proportional monochrome
bar. Categories start closed; expansion reveals individual descriptions and
values. Percentages are rounded for reading; calculations use integer cents.
The official declaration remains linked immediately below the list.

## Validation

- JavaScript syntax and the review build passed.
- The builder reconciles item sums using decimal arithmetic and rejects negative,
  non-finite, sub-cent values, mismatched totals, incomplete items, and missing
  official TSE declaration links.
- Isolated fixtures confirmed rejection of a mismatched total, a negative amount,
  and a nonofficial source URL.
- The browser showed the dashboard in the candidate profile.
- Simulated 390 px and 320 px iframe viewports showed readable values, wrapped
  labels, and independent category expansion. This was not physical-device testing.
- No editorial approval was granted by the UI work; public-release gates remain.
