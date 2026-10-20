# Official program coverage audit

Reviewed: 2026-10-20. Finding: **the database does not fully cover the programs**.
This round identified concrete omissions; it did not complete an exhaustive
inventory or approve any text for publication.

## Baseline and method

The examined snapshot of `src/content.json` contains 120 proposal cards: 65 for
Lula and 55 for Flávio. SHA-256:
`252e8fbdc886b1d0e0fd03867c09d9bdb751319f011f1963313e91cbe5a21415`.

All card titles and summaries were read; paragraphs and implications were also
examined for the topics below. Literal searches across card fields supported the
review but were never treated as standalone evidence of absence. A generic topic
mention does not establish coverage of every measure within that topic.

Both documents opened directly on the official TSE domain during this round:

- [PT program — 84 pages](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt).
- [PL program — 76 pages](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pl).

Page numbers below are physical pages, starting at 1; the reading tool indexes
from zero. Images of PT page 57 and PL page 26 were requested, but the tool
returned references without inspectable pixels. Verification was textual, not
visual. Filing date, version, and PDF hashes remain to be fixed before final
reconciliation.

## Lula: documented omissions

Primary source for every row: [PT program at TSE](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt).

| Page | Program measure, paraphrased | Database state at review | Recommended treatment |
| --- | --- | --- | --- |
| 57 | Develop destinations and tourist routes; promote Brazil abroad. | No tourism card or equivalent description. | Add a tourism measure and compare with `flavio-turismo`, distinguishing instruments. |
| 71–72 | Expand ProPatinhas, continue SinPatinhas, and combat animal mistreatment. | `lula-biodiversidade` addresses species and ecosystems generally, not these commitments. | Add animal protection as a distinct measure. |
| 57 | Expand government procurement from small businesses and support their access to export markets. | `lula-pequenos-negocios` covers credit, not these instruments. | Expand or split the card without counting credit twice. |

These findings establish commitments missing from the database. They do not
validate historical figures or promised outcomes in the program.

## Flávio: documented omissions

Primary source for every row: [PL program at TSE](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pl).

| Page | Program measure, paraphrased | Database state at review | Recommended treatment |
| --- | --- | --- | --- |
| 26 | Use AI to schedule appointments and tests by finding available slots. | `flavio-prontuario-cpf` covers record integration, not scheduling. | Add the digital submeasure; distinguish promise from outcome. |
| 27 | Simplify irrigation water-use permits and accelerate small landowners' title registration. | `flavio-agro-alimentos` covers logistics, insurance, and fertilizers. | Add rural procedures and land regularization. |
| 28 | Integrate registries and controls to trace supply chains. | Existing traceability references concern parliamentary budget amendments, not this measure. | Add a rural/environmental measure rather than a generic label. |

Page 26 also documents the unified medical record. The card currently attributed
to Band's selected statements can gain the primary program source without
removing evidence of the debate statement.

## Implications for comparisons and sharing

1. Do not publish “has no proposal” because a card is missing. Tourism illustrates
   the risk: Lula's program contained a proposal without a corresponding card.
2. Do not treat “not found in the documents consulted” as a final conclusion
   before completing thematic review of full documents and official channels
   defined by the methodology.
3. In the editorial preview, treat an empty cell as pending catalog review. An
   external image with only one position must remain blocked until explicit
   evidence shows that topic's search is complete.
4. Two populated positions are not enough: both texts and sources need
   verification and editorial approval.
5. The 65 and 55 figures count cards, not atomic commitments. A card can group
   several promises; do not use those totals as proof of exhaustive coverage or
   a program denominator without defining the unit.

## Work required to close the audit

- Fix a copy, version, pagination, and hash for each official program.
- Read every page, separating future commitments, history, diagnosis, and criticism.
- Record each commitment in a matrix: candidate, measure, page, paraphrase,
  corresponding card, full/partial/missing coverage, and review state.
- Deduplicate repeated commitments and split packages before computing percentages.
- Review official campaign supplements separately from the TSE-filed program,
  retaining dates and versions.
- Visually inspect cited passages and editorially review additions before
  changing approval states.

This is a partial audit with documented omissions. It does not claim 100%
coverage, quantify all remaining proposals, or change `status`, `verification`,
or publication permissions.

## Incorporated into the preview — 2026-10-20

The six omissions were added as drafts: `lula-turismo`, `lula-protecao-animal`,
`lula-pequenas-empresas-mercados`, `flavio-agendamento-saude`,
`flavio-regularizacao-rural`, and `flavio-rastreabilidade-rural`. The database now
has 126 cards (68 Lula, 58 Flávio). Tourism has a direct comparison; this does not
certify completeness of other topics.

Public builds and public comparison sharing now also require verified and
approved `programCoverage`, independently of text approval. The editorial
preview remains available with a review mark. An isolated test confirmed that
approving text does not bypass the coverage gate.
