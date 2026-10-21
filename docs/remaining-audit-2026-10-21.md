# Remaining program and debate audit — 21 October 2026

Status: source and ledger repairs completed; audiovisual certification remains open. No publication or approval changes.

## Completed in this pass

Reopened the [PT official TSE program](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt) and [PL official TSE program](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pl). The current index exposes 84 and 76 physical pages respectively. This pass read targeted source passages, not every page anew.

Validated the current ledger against the current cards: 796 distinct source rows, 933 distinct derived entries, 778 retained actions, 105 merged references and 50 contextual exclusions. Every row resolves to known units; every retained unit has an existing card. The retained units refer to 144 distinct cards. This is structural reconciliation, not proof that every clause is faithfully displayed. The older 145 figure refers to the broader inventory mapping, while 146 is the current program-attribution card set; these scopes must not be conflated.

Ran the existing atomic-audit assertions from scripts/build.py without rebuilding or deploying. Passed: unique IDs, exhaustive row accounting, valid merges, unchanged denominator/numerator correspondence, separate partial matches and timestamp bounds.

### Exact repairs applied to src/debate-atomic-audit.json

| Entry | Repair | Primary evidence |
| --- | --- | --- |
| PT-088-02:c | Page 37 → **38**, including the second-review copy | PT physical page38, indexed P37, lines1000–1003: equipment modernization includes telesurgery. [Official page](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt#page=38). The existing lula-especialistas card already contains the measure and cites38. |
| PT-044-01 | Page26 → **27**, both unit and row-accounting source locator | PT physical page27, indexed P26, lines660–662: disrupting organized crime's economic and financial structures. [Official page](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt#page=27). |
| PT-X008 | Map to **lula-igualdade-salarial**, rather than lula-empregabilidade | PT physical page21, indexed P20, lines500–505, supports women-specific vocational training. [Official page](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt#page=21). The former already explicitly contains Mulheres Mil; this was a mapping defect, not a missing promise. |

No action, debate classification or percentage changed.

### Supplemental locator, not a missing proposal

PT-X032 points to physical page75, indexed P74, lines2149–2150, for disability employment inclusion. The mapped lula-acessibilidade card currently cites page23, which independently supports accessibility and employment-quota enforcement. Both source passages exist. Adding page75 to that card's source would improve traceability; the existing card is not unsupported. [Official page75](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt#page=75).

## Debate: what was corroborated, and what was not

The broadcaster's [selected debate quotations](https://www.band.com.br/politica/eleicoes/debate-na-band-veja-como-foi-o-1o-embate-entre-flavio-e-lula-em-frases) still attribute more than half a million prison places to Flávio. The PL program independently specifies half a million in four years on physical page14. A [different Band report](https://www.band.com.br/politica/eleicoes/flavio-quer-classificar-faccoes-como-terroristas-e-cita-sus-padrao-einstein) still displays 500 million. The former supports the site's explicitly attributed account; neither article validates the audio or the stored timestamp. Do not silently treat the divergent report as an audio correction.

Follow-up: valid local WAV/MP4/WebM recordings were recovered in the parent workspace and their hashes checked (see local-debate-media-status.json). The audio-input attempt returned an explicit unsupported-audio response in this model session; direct listening remains unavailable. Web access to the radio recording [BgjpOorIXoI](https://www.youtube.com/watch?v=BgjpOorIXoI) returned throttled retrieval. The broadcaster's [Gqc1rQtzWUk recording](https://www.youtube.com/watch?v=Gqc1rQtzWUk) returned a video page without playable audio evidence through the web tool. These are different recordings; do not transfer timestamps between them. No new direct listening occurred, and no machine transcript was relabeled as listening.

## Only actual outstanding items for the excluded features

1. **Audiovisual verification:** directly verify the 22 direct matches and two partial matches, speakers, surrounding qualifications and actual boundaries; then review the full recording, including the previously documented early missing passage, for omitted commitments. Positive excerpts alone cannot establish complete coverage.
2. **Program version provenance:** usable archival PDF replicas have now been recovered, with hashes matching the UFOP corpus metadata and substantive text corroborated against the official index. PDF access is resolved; direct TSE byte/version identity is not. See program-final-attempt.md.
3. **Coverage certification:** all retained units have card links, but that mechanical result is not an independent clause-by-clause fidelity certification. The previous complete textual normalization and selected checks remain useful; a complete current-card semantic comparison is a separate acceptance step. The nine separately recorded debate-only promises must stay outside the official-program denominator unless an exact program match is established.
4. **Final editorial approval:** these excluded analyses remain unapproved. No provisional percentage should be released as final, and no percentage measures speaking time.

These items block adding the excluded analytical features, not review of the already filtered edition. There is no newly identified owner-only decision needed to fix the three ledger defects above; they have been repaired. Existing publication and hosting approval conditions remain unchanged.
