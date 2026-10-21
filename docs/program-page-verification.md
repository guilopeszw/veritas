# Official program page verification

Reviewed on 20 October 2026. Scope: source provenance and page references for the frozen proposal inventory, independently of debate coding.

## Result

Both official TSE document URLs were reopened. The web index reports an 84-page PT program and a 76-page PL program. All **2,373 PT lines and 2,300 PL lines** were retrieved again, with line and page metadata, and compared with the frozen source extracts. **No missing lines and no text differences** were found. This closes the indexed-text drift check; it does not authenticate PDF binary bytes or prove that no later campaign document exists.

- [PT program hosted by TSE](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt)
- [PL program hosted by TSE](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pl)

All 796 original inventory rows have page references inside the source document's reported range. This is a complete structural provenance check, **not a new semantic certification of all 796 English action paraphrases**. The independent classification review must assess those action boundaries.

## Page conventions and correction

The web tool uses zero-based PDF page indexes. The frozen PT lines retain that convention; the frozen PL lines already convert it to one-based physical pages. Reader-facing references must be one-based. Do not apply a blanket offset to both files.

One concrete error was found among the initially selected debate matches: **PT-072-02** cites page 32, but the licensing-degree incentive is on **page 33**, web index P32, line 848. The paragraph starts at the end of page 32. Cite page 33 for the specific incentive, or pages 32–33 for the complete paragraph.

The connectivity instrument in PL page 24 must also remain distinct from consumer connection packages: lines 810–812 concern packages; lines 813–817 concern connectivity in underserved places. Mentioning connected schools does not automatically cover both instruments.

## Targeted proposal source readings

The source passages underlying the initial 23 debate correspondences were reread. This table identifies the relevant physical pages; it does not certify that the debate speech matches them.

| Action IDs | Physical page(s) | Source check |
| --- | --- | --- |
| PT-058-01 | 30 | Security ministry expressly conditional on approval of the security amendment proposal. |
| PT-072-02 | **33** | Licensing-degree incentive; inherited page 32 citation needs correction. |
| PT-105-01 | 42 | Creative-economy credit. |
| PT-145-01 | 54–55 | Digital ecosystem includes data centers, cloud and AI; safeguards continue onto page 55. A data-center mention alone does not describe every component. |
| PT-149-01 | 55 | Digital talent formation. |
| PT-X029 | 74 | Continuation of minimum-wage appreciation. |
| PL-001, PL-004:b, PL-006 | 13; territorial recovery repeated on 47 | Designation, territorial recovery and age policies are separately described. The age text contains both a general age-16 proposal and serious crimes above 14. |
| PL-007 | 13–14 | Border system combines armed services. |
| PL-010, PL-014 | 14 | Prison-place goal and chemical-castration proposal. |
| PL-017, PL-020 | 15 | Ports/airports monitoring and a facial-recognition system with camera quantity. |
| PL-064 | 24, 35 | Infrastructure connectivity and school connectivity; page 36 is adjacent continuation context, not the specific school-internet sentence. |
| PL-074 | 21, 26 | Women's integrated records and the general CPF-linked record proposal. |
| PL-138:a | 21, 38 | Telehealth. Home medicine delivery on page 38 is a separate instrument. |
| PL-164:a | 42 | Explicit maintenance of existing social programs. Employment transition continues on 43 and is not equivalent to maintenance. |
| PL-172 | 44 | National job database. |
| PL-174:a, PL-174:b, PL-174:c | 27, 45–46 | Formalization, training/guidance and credit have distinct wording. |
| PL-178 | 46 | Caixa integrated service platform. |

These checks verify what the documents propose, not the truth of historical claims made inside them or the feasibility of their promises.

## Reproducible evidence

Scratch evidence is under `work/program-page-review/` at the workspace root. It includes full fresh indexed extracts, normalized line records, comparison summary and direct-request denial headers. Normalized indexed-text SHA-256 values (these are **not PDF hashes**):

- PT: `93b9719de1266ecbe0171f898591b1f8ecf21ec944b4bea72daeed5e451a8d8c`
- PL: `452126ab841aaca25f7f43c83d42799f166ca5dfe960fe1044ceb9ba7c51eebf`

The PL index has no extracted text on physical pages 1, 2 and 76. PT has page metadata throughout, but some cover/back matter consists only of page markers. Text-index completeness must not be described as visual coverage of all pages.

## Remaining source limitations

Direct requests to both official URLs and their standard download variants returned HTTP 403 with 447-byte HTML denial responses. Existing local files named `programa-pl.pdf` and `programa-pt-complementos.pdf` are also 447-byte denial responses, not usable PDFs. The screenshot tool did not return document pixels. Consequently this review does not claim a binary PDF hash, image-by-image authentication, PDF metadata timestamp, or a registered historical version identifier.

These retrieval limits do not invalidate the completed indexed-text comparison, but they must remain separate from a claim to have visually authenticated the originals. Final publication still requires the independent action classification and debate evidence review.

## Independent full PT semantic second pass

This second pass read all **512 PT ledger entries** present when the pass began, including retained, merged and excluded entries, against the Portuguese text grouped by original source paragraph. It also read the 33 supplemental PT-X source windows and all 25 source paragraphs without original inventory actions (247 source-paragraph candidates in total). Thus the scope goes beyond the 23 selected debate matches. The review artifact is `work/program-page-review/pt-semantic-review.txt`.

The policy applied is the ledger's own: count an identifiable action/instrument; keep its target population, geographic priorities, quantities and safeguards with it; merge repeated actions; exclude aspirations without an implementation instrument. Similar themes alone do not prove duplication.

### Required parameter and repetition corrections

| Entry | Recommended disposition | Reason |
| --- | --- | --- |
| PT-150-02 | Merge into PT-150-01:a and :b | North/Northeast/periphery priority qualifies the fiber/5G expansion, not a separate intervention. |
| PT-216-02 | Merge into PT-216-01 | Progressive disparity targets are parameters of the mandatory company action plans in the same sentence. |
| PT-056-02 | Merge into PT-056-01 | Named victim groups and crimes specify priorities for the same cybercrime investigation action. |
| PT-224-01 | Merge into PT-212-01:b | Social-security/accident/maternity coverage repeats the platform-work social protection instrument, adding listed contingencies. |
| PT-202-01 | Merge into PT-202-02 and PT-202-03 | Introductory climate-finance expansion is implemented through the funds listed immediately afterward. |
| PT-157-02 | Merge into PT-X009:a | Women's entrepreneurship has an earlier explicit program commitment; it is a repetition, not only an excluded goal. |

### Goals that should not increase the operational-action denominator

The following have no distinct implementation instrument in their cited sentence. They should remain visible as contextual aspirations, but be excluded from the count under the stated operational definition:

- PT-000-02: permanent constructive dialogue among branches/governments.
- PT-033-01:a and :b: child access to services/play; the preceding list is historical, not new discrete instruments.
- PT-035-01:a and :b: youth leisure/cultural and professional opportunities; specific following instruments are counted elsewhere.
- PT-092-02: reducing maternal deaths, especially for Black women; the concrete care instruments follow and are separately counted.
- PT-189-01: mitigating exposure to international price shocks, without a stated mechanism in this sentence.
- PT-206-01: treating the Caatinga as a strategic climate asset; the concrete permanent financing mechanism is PT-206-02.
- PT-236-02: South Atlantic peace/cooperation/development as a desired regional condition; institutional cooperation instruments are separately listed.

This recommendation does not equate an excluded aspiration with an absent political position. It only prevents broad ends from being counted as additional implementation actions.

### Clear compound instruments and omissions requiring explicit resolution

| Entry/source | Action needed | Reason |
| --- | --- | --- |
| PT-133-01 | Split directed industrial financing from public procurement | Credit and procurement can be independently implemented; local-content conditions remain parameters in the relevant procurement/preference unit. |
| PT-190-04 | Split refining expansion from Transpetro LNG logistics | Two independently operable physical infrastructure investments. |
| PT-040-03 | Split solidarity kitchens from popular restaurants, or explicitly apply one shared facility-program rule consistently | Both facility types are named, just as the ledger separately counts other distinct public service facilities. |
| PT-165-01 | Split Garantia-Safra strengthening from family-farm rural insurance access | Distinct protection instruments named in one sentence. |
| Source paragraph 12, physical page 18 | Account for thematic observatories | The Portuguese text explicitly lists observatories alongside civic laboratories and digital consultations. No current action label accounts for this instrument. Recover as PT-012-02:c under the original paragraph parent PT-012-02, with sourceGapRecovered=true; do not increase the frozen inventory row total. |
| Source paragraph 88, physical page 37 | Account for telesurgery facilities | The Portuguese list includes telehealth, telesurgery and robotic surgery. Current split units cover the first and third only. Recover as PT-088-02:c under parent PT-088-02, with sourceGapRecovered=true. |

These findings mean that the original first-pass denominator cannot simply be labeled final after checking PDF page references. Apply the selected changes and recalculate, recording why a compound is split or retained. Recovered source-derived actions can be attached to their original paragraph parent, explicitly flagged as source-gap recoveries; the frozen row total stays unchanged.

### Other reviewed decisions

The specific instruments and qualifications in the remaining entries were consistent with their source text at the action-label level. The review does not independently verify historical achievements, cost estimates or effects asserted by the program. The source has varying detail, so the resulting percentage describes coverage under an explicit coding rule, not an official government count of promises. No claim is made that a finite second review eliminates every possible alternative semantic segmentation.

PT-197-01 correctly counts implementation of named deforestation-control/prevention plans; the zero-deforestation target stays its parameter. PT-072-02's source-page correction remains necessary. The 25 source paragraphs without action entries consist of historical framing, aspirations or already covered infrastructure context; no further independently implementable promise was identified in those paragraphs during this pass.

A machine-readable recommendation list, including English and Portuguese action labels, proposed split IDs, physical pages and source-gap parent IDs, is available at workspace `work/pt-second-review-changes.json`. Conditions are inherited from the original source context; none of these six new splits/recoveries introduces an unstated eligibility condition. All other current PT action-label entries were reviewed; this statement is not an assertion that all historical claims in the program are correct.
