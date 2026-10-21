# Program validation: recovered files and current-card reconciliation

Reviewed 21 October 2026. No publication authorization or deployment changed.

## PDF access resolved through a public archival copy

The [LabHD UFOP dashboard](https://painel.labhdufop.org/permanencia-escolar/dashboard/) links a [public corpus ZIP](https://painel.labhdufop.org/permanencia-escolar/dashboard/planos-governo-2026-dataset-v1.1.zip) containing both original PDFs. It identifies these as files supplied to its project on 13 October 2026. They are authentic PDF-format files, successfully parsed and rendered, rather than HTML error pages. Their hashes match the metadata published by the archive:

| File | Bytes | Physical pages | SHA-256 |
| --- | ---: | ---: | --- |
| PT | 1,189,907 | 84 | `e1c162c20c81dafadf69b10bab230b5a6dc48f6b6c27c2cfce853b131a8bcc36` |
| PL | 1,940,855 | 76 | `7d1d95075e11e3c4113e8dcd502438049a34f5147a84cb0f746bf59046e477a4` |

The eight attempted TSE direct/download/display routes still returned HTTP403 HTML. Accordingly these are **archived replicas corroborated against the official text index**, not files freshly downloaded from the TSE origin or proof of an immutable registration version. Do not use the archived authors' thematic counts as Veritas's own denominator.

## Text and visual corroboration

The official TSE PT and PL document indexes reopened successfully with 2,373 and 2,300 indexed lines. Local PDF extraction was compared against the previously fetched official corpus. For every indexed line longer than five normalized characters, the complete normalized line appears in the local PDF text, except the PT back-cover party-logo list. PL has no unmatched substantive line. This check removes spacing, punctuation and diacritics, so it is a content corroboration rather than a byte identity assertion; it also does not prove page ordering through substring matching alone.

Visually inspected PT page33 and PL page14. PT page33 shows the licensing-degree incentive and federal institutes passage; PL page14 explicitly proposes **half a million new prison places in four years**. That supports the program's number, not an unlistened debate utterance. PT page84 was also visually inspected: its party logos account for the single unmatched index label (PT, PSB, PV, PCdoB, PDT, PSOL and Rede). No full160-page visual-read certification is claimed.

Reproducible artifacts are in workspace `work/program-final-replicas/`: both PDFs, extracted text, rendered pages, `line-comparison.json` and `current-reconciliation-delta.json`. Retrieval errors are in `work/program-final-download-attempts.json`.

## Current-card fidelity: incremental closure

The prior complete textual reconciliation contains796 source rows mapped to145 cards. Comparing its reader-text snapshot with current content found130 unchanged cards and15 modified cards. All86 previously integrated completion paragraphs remain present verbatim. The15 modified cards were read against their recorded source actions in this pass. No removed recorded commitment or new omission was identified in that delta:

- Lula: income protection; betting; platform work; working hours; minimum wage.
- Flávio: victims' families; fiscal rules; education; sport; benefit transition; employment; labor negotiation; licensing; Supreme Court; privatization.

Changes preserve the program statements while adding later legal changes, historical positions or qualified effects. The benefit-transition interview remains distinguished from the official program. Statements about future effects are not treated as verified outcomes.

Current content SHA-256: `f1748cd17f84c0eb2c15dd6e2c24a5d09927bb3cf0ecea2f1698fb8a183d686f`.

This is an incremental revalidation of the previous full textual reconciliation, not a new independent clause-by-clause rereading of all778 retained action classifications. The frozen inventory and its segmentation remain an operational editorial definition, not an official count of promises. All program source statements are political commitments; historical performance claims and feasibility need separate evidence.

## Remaining real limits

- The direct TSE binary/version identifier is still unavailable; archival binaries now permit inspection, so **PDF access itself is no longer blocked**.
- A fully independent fresh semantic audit of all normalized action boundaries/current cards has not been completed in this pass; the documented prior full reconciliation plus15-card delta is the completed scope.
- Debate audiovisual certification is separate. Program page14 cannot authenticate a spoken number or timestamp.
