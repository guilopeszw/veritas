# Debate classification: second source and consistency review

Reviewed 20 October 2026. This report does not grant editorial or production approval and does not mutate the frozen ledger.

## Source verification performed now

The programs were not accepted merely because their URLs appeared in the repository. Starting from the [TSE 2026 election landing page](https://www.tse.jus.br/eleicoes/eleicoes-2026), the public plans link led to the [second-round candidate table](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026-segundo-turno/planos-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026-2-turno). Its two download links resolve to the same [PT document](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt) and [PL document](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pl) used by the audit. The browsing tool returned PDFs of 84 and 76 pages respectively. This confirms official portal provenance; it is not a cryptographic signature or proof that an earlier local download has identical bytes. A separate direct Python HTTPS fetch returned403 for both PDFs, so this review did not produce fresh PDF byte hashes. The other page-verification report must be consulted for rendered-page checks.

The live [Aos Fatos debate page](https://www.aosfatos.org/noticias/checamos-lula-flavio-bolsonaro-debate-band/) identifies the18 October debate and explicitly describes Escriba as an automatic transcription tool. A fresh HTTPS request to its public transcript endpoint returned200/application-json,1,072,088 bytes and SHA-256 `ea8ce337bf223152a54baf8b58ee933ca190463220af766e262272603349bb2b`, identical to the locally reviewed367-record corpus. This establishes the present server copy, not human verification of every word.

Fresh public YouTube metadata for [the timestamp recording](https://www.youtube.com/watch?v=BgjpOorIXoI) identifies Rádio Bandeirantes, verified channel `UCF453hXTROcm9CfCERYUjtQ`, handle `@radiobandeirantesoficial`, upload19 October2026, duration6855seconds, public availability, and the title naming the first Lula/Flávio2026 debate. The web fetch itself was throttled; yt-dlp successfully retrieved public metadata. There was no new human listening in this review. Existing ASR/visual evidence remains machine-assisted, and the known early recording cut remains relevant.

## Symmetric matching rule

“Addressed” should mean that the core action and its object are identifiable. It must not imply that every parameter, implementation detail or beneficiary was explained. An explicit narrower example may qualify, but its limited scope must be visible. Sharing a broad subject is insufficient. Count each canonical action once. Retain separate labels for direct action matches and partial core-action mentions.

The prior ledger inconsistently rejected a university-expansion statement for missing implementation detail while accepting territorial recovery without its program's accompanying services. Correct this explicitly, rather than hiding a threshold change in the percentage.

## Required classification changes

1. **`PL-004:b`: direct → partial core-action mention.** The speech promises territorial recovery. The program couples that recovery with structural public policies and federative arrangements; these parts were not stated in the selected passage. Preserve308–335seconds as a locator, but do not call this a fully exact program intervention.
2. **`PT-075-05`: excluded → partial core-action mention.** At6299–6305seconds, Lula explicitly advocates more universities and courses. The original program's physical page33 identifies public higher-education expansion and decentralization. The speech does not spell out that full scope. Under the same narrower-example rule used for other candidates, this belongs in the partial group rather than disappearing.

After the denominator repair below, use direct matches for the headline and show partial mentions on a separate line:

| Candidate | Direct action matches | Partial core-action mentions | Any core-action mention | Operational denominator |
|---|---:|---:|---:|---:|
| Lula |6|1|7|484|
| Flávio |16|1|17|327|

Headline direct-only ratios are1.24% and4.88%. Partial mentions are one per candidate and should not be silently included in the headline. For methodological reference only, including those partial mentions would give1.45% and5.20%. These are coding outputs under a documented operational rule, not uniquely objective counts of every imaginable promise. Do not label the combined ratio “strict exact matches.”

## Review of the23 previous matches

No new byte-authentication or human-listening claim is implied by “retain.” Original program text and the unchanged live transcript support the following action-level relationships. Partial parameters remain unmentioned.

| Atomic ID | Recommendation | Scope check |
|---|---|---|
| PT-058-01 |Retain direct|Conditional ministry creation is explicit.|
| PT-072-02 |Retain direct|Teacher-degree aid, not every teacher policy.|
| PT-X029 |Retain direct|Minimum-wage continuation is explicit.|
| PT-145-01 |Retain direct|Data-center development; distinguish added data condition.|
| PT-105-01 |Retain direct|Creative-sector lending is explicit.|
| PT-149-01 |Retain direct|Digital professional training; avoid generic-training double counting.|
| PL-001 |Retain direct|Criminal-organization designation.|
| PL-004:b |Move to partial|Recovery stated; accompanying services omitted.|
| PL-010 |Retain direct|Prison places; quantity remains one parameter.|
| PL-014 |Retain direct|Chemical-castration proposal needs legislative approval.|
| PL-007 |Retain direct|Dedicated armed border forces.|
| PL-017 |Retain direct|Port military monitoring; Santos is narrower example.|
| PL-020 |Retain direct|Integrated camera system; quantity not another point.|
| PL-006 |Retain direct|Age14 for serious crimes.|
| PL-074 |Retain direct|CPF-linked interoperable health records.|
| PL-138:a |Retain direct|Telemedicine, not home medicine delivery.|
| PL-064 |Retain direct|Institution/community internet connectivity.|
| PL-172 |Retain direct|Employer-linked job matching.|
| PL-174:a |Retain direct|Business-opening/formalization help within Caixa context.|
| PL-174:b |Retain direct|Entrepreneurial training and guidance.|
| PL-174:c |Retain direct|Entrepreneurial credit.|
| PL-178 |Retain direct|Caixa service platform within the full answer.|
| PL-164:a |Retain direct|Bolsa Família is a narrower maintenance example.|

## Other utterances checked for omissions

- **Federal Police autonomy, transcript record90:** the fresh PL text search found no “Polícia Federal” occurrence; the institutional section does not establish an exact mapped autonomy instrument. Record the assurance as a debate position if useful, not an invented program match.
- **Critical minerals, record318:** the statement about investment does not specify the program's national policy, mapping or processing interventions. It remains a thematic/partial policy reference outside the strict action numerator.
- **Implement the antifaction law, record330:** an explicit implementation statement exists in the debate. The original PL text search found no antifaction-law reference. Add to the outside-program debate list at5961.96–5965.26seconds, re-read in the local radio ASR; do not force it into chemical castration or narcoterrorist classification.
- **Lula's coordinated territorial response, record10:** ministry creation already counts once. `PT-047-01` specifically concerns urbanization, public-space requalification and public services; generic intervention/liberation does not identify those actions. Do not invent a second point merely to balance candidates.
- **More universities, record341:** include as the partial action above. Do not also count every technical-training or campus-completion unit from the same phrase.
- **Strong state enterprises, record353:** a general objective rather than an identified acquisition, investment or governance intervention.
- **Cancer30days, debt purchases/grace periods, tax payments after income, ministry versus Caixa platform, and10% data:** keep the prior outside-program distinctions. A broad related program paragraph does not prove these precise additional commitments were filed in that program.

## Denominator review limits and acceptance boundary

Every796 input row is accounted in the existing ledger, but row-accounting is not by itself proof that the count is uniquely correct. The denominator mixes independently deliverable policy instruments with explicitly specified regulatory actions. Clarify that **new regulatory requirements can be independent actions**, whereas compliance with existing law, quantities and eligibility parameters attached to another intervention are not extra points. This avoids the misleading blanket statement that all “conditions” are excluded while retaining proposed datacenter safeguards or local-content requirements.

One denominator repair is required: restore **PT-197-01** as an action, not merely a target. The original PT physical page70, lines2004–2009, explicitly continues implementation of deforestation-control and prevention plans, separately from the fire-management plan and forest-law enforcement already counted by PT-197-02 and PT-197-03. Relabel it “Implement deforestation-control and prevention plans toward net-zero deforestation by2030.” The target remains a parameter. This increases the Lula denominator from483 to484 without adding a debate match. It follows the same named-program rule as PT-063-01 (literacy continuation). PL-269 remains a target rather than a new action because its enforcement intervention is separately captured by PL-270.

PL-064/PL-065 are already correctly separate: institutional/local connectivity appears at PL physical page24 lines813–817; individual connection packages appear at810–812. PL-033 merges only into the latter. There is no package point in the debate numerator. An additional numeric repair is required for PL-295, described below. This second pass re-read the23 match cases, the requested omission cases, and selected denominator boundaries against original text. It **did not independently recode every one of the923 derived units** or repeat a complete visual reading of all160 PDF pages; the all796-row semantic read belongs to the first pass. It did not establish independent inter-coder agreement: this reviewer also authored the first normalization, so “independent reviewer” would be an inaccurate label. The fresh-source retrieval and adversarial consistency pass are additional checks, not independent human coding. Final editorial approval and the accurate description of machine-assisted audio verification remain required before release.

## Review of all 37 originally excluded units

All37 original exclusion paragraphs were re-read against the source extracts, whose full indexed text was freshly reconciled by the source-page review. This is a review of the exclusion boundary, not a second independent recoding of every retained unit. Two exclusions require restoration; one requires a duplicate classification repair. The other34 remain outside the denominator for the reasons below.

| Original unit | Second-review decision and reason |
|---|---|
| PT-014-01 | Keep excluded: anti-racism development principle, no additional specified instrument. |
| PT-025-01 | Keep excluded: elderly autonomy/support objective; following care interventions supply the actions. |
| PT-032-01 | Keep excluded: inclusive-policy umbrella across identity/orientation/race/class; no separate named instrument. |
| PT-057-01 | Keep excluded: Black-youth protection objective; mediation and restorative justice already retained. The paragraph does not name Juventude Negra Viva. |
| PT-123-01 | Keep excluded as cross-chapter investment umbrella; underlying infrastructure/industrial interventions are retained elsewhere. |
| PT-124-02 | Keep excluded: lower-interest/inflation outcomes; fiscal intervention is separately retained. |
| PT-125-01 | Keep excluded: price stability and income outcomes. |
| PT-138-01 | Keep excluded: biodiversity/clean-energy development orientation. |
| PT-139-01 | Keep excluded: just low-carbon transition objective. |
| PT-157-02 | Reclassify as duplicate of PT-X009:a, not a non-action. Source p.22 line507 explicitly supports women entrepreneurs, repeated at p.57 line1600. No count change. |
| PT-183-01 | Keep excluded: energy-poverty/security/transition outcomes. |
| PT-197-01 | Restore: source p.70 lines2004–2009 specifies continued implementation of deforestation-control/prevention plans; independently actionable, distinct from fire and forest-law interventions. +1 Lula. |
| PT-231-01 | Keep excluded: constitutional foreign-policy principles. |
| PT-235-01 | Keep excluded: reciprocity and peace principles. |
| PT-243-01 | Keep excluded: equality/rights commitments without a further instrument. |
| PT-245-01 | Keep excluded: non-subordination principle. |
| PT-246-01 | Keep excluded: sovereignty principle. |
| PL-105 | Keep excluded: debt-stabilization outcome. |
| PL-106 | Keep excluded: interest/inflation outcomes. |
| PL-120 | Keep excluded: teaching-values orientation, no further operative intervention. |
| PL-123 | Keep excluded: regional safeguard attached to learning-linked funding, not a second funding action. |
| PL-150 | Keep excluded: disability/rare-condition rights umbrella; specific centers/interventions are retained. |
| PL-170 | Keep excluded: lower labor-cost objective of the separately retained employment contracts. |
| PL-183 | Keep excluded: interest-rate target attached to housing program, not a second program. |
| PL-193 | Keep excluded: 4% growth outcome, p.49 lines1538–1544. |
| PL-247 | Keep excluded: ministry coordination is implementation machinery for SAF targets and biomass policy, p.55 lines1725–1729. |
| PL-254:b | Keep excluded: transparency principle attached to mineral governance. |
| PL-260 | Keep excluded: priority sectors parameter for AI diffusion, p.56 lines1770–1772. |
| PL-263 | Keep excluded: existing privacy principle; specific cybersecurity action remains separate. |
| PL-269 | Keep excluded: zero-illegal-deforestation target; enforcement instruments separately retained. |
| PL-280 | Keep excluded: tourism/security cross-reference to already counted security interventions. |
| PL-288 | Keep excluded: professional-diplomacy orientation. |
| PL-292 | Keep excluded: reduced supply-dependence outcome. |
| PL-295 | Restore: p.63 lines1995–1999 explicitly promises executing a national global-value-chain integration plan. This is an instrument, not merely a desired outcome. +1 Flávio. |
| PL-299 | Keep excluded: priority-sector parameter for the integration plan. |
| PL-300 | Keep excluded: investment-destination goal for2030. |
| PL-329 | Keep excluded: primary-surplus outcome of separately retained fiscal interventions. |

After these repairs, retained denominators are **484 Lula and328 Flávio**. Direct matches remain **6 and16**, respectively: **1.24% and4.88%**. Each has **one partial match**, reported separately. Neither restored action introduces a new debate match. A merged goal may legitimately point to another excluded goal (PL-328:b → PL-105); merging does not turn it into a retained action.

The explicit operational boundary remains important: these are counts under the documented action/object normalization, not an assertion that only one mathematically unique count of campaign promises exists. Full row accounting and this exclusion review do not establish independent inter-coder agreement or human listening verification.

## Complete PL disposition pass after the exclusion review

The reviewer read all411 PL derived-unit labels/dispositions/merge targets in sequence, then re-read the complete original program body, indexed lines370–2299, in source order, repairing the initially truncated644–769 interval with a separate read. The front matter is a contents index rather than additional commitments. Every retained/merged/excluded PL unit was compared to its corresponding body passage. This pass is additional self-review by the original normalizer, not independent inter-coder agreement.

This broader check found26 more retained units that should be merged or excluded. The source does contain the words behind these records; the defect is double counting an umbrella/parameter or treating an outcome as an independently deliverable action. None is a direct or partial debate match.

| Unit | Required disposition | Source indexed lines / rationale |
|---|---|---|
| PL-028 | Merge into PL-030 |616–626: same Central da Mulher physical service centers and nationwide rollout. |
| PL-035 | Merge into PL-034 |644–654:24-hour personalized guidance/referral is the same ClarIA service. |
| PL-039:b | Merge into PL-039:a |661–664: urgency prioritization is the risk-assessment system's allocation rule. |
| PL-046 | Merge into PL-042 |684–688: discounts and savings incentives are Ganha-Ganha rewards, already included in PL-043. |
| PL-057 | Merge into PL-053 |727–729: food and child development are nursery service quality parameters. |
| PL-140 | Merge into PL-138:a |1221–1224: physician redistribution is the operating mechanism of telehealth. |
| PL-152 | Exclude umbrella goal |1297–1300: Paralympic inclusion achieved through retained talent detection and entity autonomy. |
| PL-163:a | Exclude principle |1328–1330: transparency orientation, no additional reporting intervention specified. |
| PL-163:b | Exclude principle |1328–1330: artistic free-expression orientation. |
| PL-161 | Merge into PL-160 |1324–1327: regional targeting of cultural-incentive reform. |
| PL-162 | Merge into PL-160 |1324–1327: less-known artists are beneficiaries of the same incentive reform. |
| PL-184 | Merge into PL-182:b |1502–1505: consolidated-area priority is a regularization parameter. |
| PL-188 | Merge into PL-192 |1517–1519: rural emphasis of sanitation concessions, not a separate delivery instrument. |
| PL-211 | Merge into PL-185 |1614–1618 and1505: same integrated housing/infrastructure contracts. |
| PL-234 | Merge into PL-231 |1680–1682: international credit sales are the aim of RenovaBio expansion. |
| PL-239 | Exclude principle |1707–1709: legal property-security orientation. |
| PL-241 | Merge into PL-167 |1715–1718 explicitly refers to the benefit-return policy already detailed in Brasil que Prospera. |
| PL-257 | Exclude outcome |1781–1782: increased share of AI patents is an intended research outcome. |
| PL-285:a | Exclude context |1915–1921: regional sunlight/wind potential is not a new government intervention. |
| PL-285:b | Exclude context |1915–1921: investment attraction is described as a consequence of that potential. |
| PL-324:c | Merge into PL-084:a |2151–2153 and903–905: repeated broad regulatory repeal. |
| PL-332 | Merge into PL-317:b |2207–2209 and2125–2128: repeated budget-process reform. |
| PL-336:b | Merge into PL-336:a and PL-337 |2253–2257: governance umbrella implemented by authorization/operator review and double checks. |
| PL-052:b | Merge into PL-172 |718–722 and1410–1414: employer-HR-connected vacancy database repeated for women/general public. |
| PL-151:a | Merge into PL-151:b, PL-151:c and PL-156 |1291–1293: Escola de Campeões umbrella implemented through retained competitions, partnerships and after-school training. |
| PL-223 | Merge into PL-220:a, PL-220:b, PL-221 and PL-222 |1644–1650: National Energy Security Program umbrella immediately lists the already retained infrastructure, fracking and transmission interventions. |

Relabel **PL-113:b** to **“Manage schools using learning and proficiency indicators”**. Lines1131–1134 promise management based on indicators, not their publication. Retain the unit as a management intervention distinct from the funding formula.

The completed PL self-review therefore recommends **302 retained actions** (328 after restoring PL-295, minus26). Direct16/302 = **5.30%**; one partial match remains separate. This supersedes the provisional328 figure above. Lula's full retained/merged-unit pass belongs to the other reviewer and is not claimed here. Original numeric indices, full source text and merge destinations must remain available in the ledger; no record should be deleted to make the accounting fit.

There are no PL unit dispositions left unread in this pass. This does not certify factual claims made by the program as true, nor validate the legality or predicted effectiveness of promises. It verifies the operational proposal classification against what the source promises. The audiovisual comparison remains machine-assisted rather than a claim of human listening.
