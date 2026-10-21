> Historical audit, superseded for current readiness by `current-verification-status.md` and `current-card-review.md`. Counts and unresolved findings below describe an earlier edition.

# Final fact-check readiness audit

Reviewed: 2026-10-20. **Not complete; publication and public comparison sharing must remain blocked.** This report is a readiness assessment and a fresh primary-source check of the previously identified health/education gaps, not a certification of every claim.

## Snapshot

Content SHA-256: `f157e0e65f654f17a5144c3b380fb744ebf7d4235f0280fcf6ded21c7c27728b`.

| State | Blocks |
| --- | ---: |
| draft / pending | 159 |
| approved / checked | 8 |
| approved / pending | 2 |
| draft / checked | 18 |

There are 187 blocks, including 126 proposal cards. 161 blocks still carry pending verification; all 126 proposals are in that set. These are workflow states, not a count of false statements. The 26 checked blocks have not all received editorial approval. `lula-anulacoes` and `flavio-rifs` have editorial approval but pending factual verification; editorial approval must not override that distinction.

Program coverage and debate verification are both draft/pending. Adding six cards did not complete either program inventory. A card count is not a count of distinct commitments.

## Revalidated primary-source additions

The TSE-hosted PDFs were reopened and relevant text retrieved in this round. Page numbers below are physical, starting at 1. These establish what the programs promise, not that historical assertions, affordability, effectiveness, or legal feasibility are true. Suggested copy is an editorial paraphrase, not a quotation.

### PT program

[Official PDF](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt).

| Existing card | Page | Addition to its detailed proposal |
| --- | ---: | --- |
| `lula-alfabetizacao` | 31 | Propõe alcançar 80% das crianças alfabetizadas na idade certa. |
| `lula-adultos-conectividade` | 32 | Prevê ampliar os livros disponíveis no MEC Livros e as línguas ensinadas no MEC Idiomas. |
| `lula-saude-digital` | 38 | Prevê uma fila digital única, com prioridade conforme a gravidade clínica, e transporte de pacientes nas regiões de saúde. |
| `lula-saude-mulheres` | 38–39 | Propõe ampliar contraceptivos de longa duração, cuidados para endometriose e acesso a absorventes e medicamentos para saúde menstrual. |
| `lula-saude-mental` | 39 | Inclui diagnóstico e acompanhamento de pessoas com autismo e outras neurodivergências. |

Do not place the adult-learning instruments under an adults-only claim: the source describes broader access. Rename that card or separate the submeasures if necessary. Preserve existing text; these are additions, not replacements.

### PL program

[Official PDF](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pl).

| Existing card or new submeasure | Page | Addition to its detailed proposal |
| --- | ---: | --- |
| `flavio-educacao` | 35–36 | Propõe pagar alunos para dar reforço a colegas pelo Acolher; vincular repasses a metas de aprendizagem; capacitar professores; atender altas habilidades; e abrir escolas nas férias. |
| Higher-education governance, currently unmapped | 36–37 | Propõe transferir a gestão do ensino superior ao Ministério da Ciência e Tecnologia, priorizando inovação, impacto produtivo e transferência de tecnologia na CAPES e no CNPq. |
| `flavio-saude` | 37 | Propõe corrigir os valores pagos pelo SUS aos prestadores para cobrir o custo do atendimento. |
| `flavio-cuidado-idosos` | 37 | Inclui atendimento facilitado e adequado às pessoas idosas. |
| `flavio-tecnico-fies` | 36–37 | Bolsas técnicas financiadas por empresas e pagamento estudantil proporcional à renda estão no programa oficial. Replace the reporting-only source with these pages. |

Home-delivered medicine and telehealth are already represented in `flavio-cuidado-idosos`; add page 38 as primary evidence rather than duplicating them. Higher-education governance should remain distinct from student loans: it changes institutions, not repayment.

## Limits of this round

PDF screenshot calls returned textual image markers without inspectable pixels. This round therefore provides textual corroboration only, not visual page certification or a version-fixed byte hash. Source URLs are not an immutable version record. No content approval state was changed by this report.

## Additional legal checks and a repairable source defect

### Weekly-rest rule: publication date now located

The [Senate metadata](https://legis.senado.leg.br/norma/44184944) explicitly records publication in the **Extra Edition of the Official Gazette on 16 October 2026, page 2, column 2**. The [normative text](https://legis.senado.leg.br/norma/44184944/publicacao/44189027), articles 6 and 10, uses **two months**, followed by **one year after that interval**, not an interchangeable sixty-day period. The current December 2026 / December 2027 wording in `6x1-regra-atual` is supported at month precision. Keep the interval literal; do not derive an exact effective day without applying the relevant legal counting rule. The Gazette viewer itself returned 502; publication metadata was read from the Senate, not from an inspected Gazette scan.

Action: add the Senate metadata URL to that card and replace its obsolete note about uncertainty over publication with this evidence. No change to its already-checked state is required.

### Lula's 2021 annulment history: broken source replaced

`lula-anulacoes` currently links to `idConteudo=468086&tip=UN`, which returned an STF 404 page. The correct accessible source is [STF, 23 June 2021](https://noticias.stf.jus.br/postsnoticias/stf-confirma-suspeicao-de-sergio-moro-na-acao-do-triplex-do-guaruja/). It corroborates the plenary's seven-to-four maintenance of Moro's disqualification in the triplex case, including the annulled judicial acts. The [15 April 2021 STF report](https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=464261) corroborates the jurisdiction-based annulment. Its body contains an inconsistent parenthetical day (“14”) while its dateline and the June retrospective identify 15 April; the card's month-only wording avoids replicating that source typo.

Action: replace the broken second URL. The narrow historical summary is corroborated; the broader dossier's later procedural history and defense context still require completion. Do not silently mark that whole dossier current as of 2026.

### Flávio's 2021 financial reports

The [STF report of 30 November 2021](https://noticias.stf.jus.br/postsnoticias/2a-turma-decide-que-provas-contra-flavio-bolsonaro-no-caso-das-chamadas-rachadinhas-sao-ilegais/) corroborates four of five reports invalidated for irregular acquisition and describes the defense's procedural challenge. A fresh TJRJ-domain search again returns the court's 16 May 2022 rejection announcement, but opening the complete indexed page returned 502. This round therefore does not close the 2022/full-current-history gap in `flavio-rifs`. Keep its factual verification pending; an official search excerpt is insufficient to certify the entire later procedural history.

## Remaining release blockers

1. **Complete program inventory:** map every actionable commitment in both PDFs to cards, including grouped submeasures, and inspect cross-chapter duplicates. The health/education additions above do not exhaust those chapters or either program.
2. **Historical and causal claims:** a campaign program cannot independently verify its own performance assertions. Check the owning statistical, legislative, judicial, or administrative source for each consequential claim.
3. **Debate:** the existing transcript audit records captions without speaker labels, unresolved transcription errors, and a prison-capacity number discrepancy. Audio and speaker attribution must be checked before final percentages; denominator coverage remains incomplete. See [transcript audit](debate-transcript-audit.md).
4. **Judicial controversies:** require current procedural status and defense context before treating an allegation as established fact. Two approved/pending judicial cards demonstrate why editorial approval alone is insufficient.
5. **Rallies and transparency:** source distinctions, event identity, crowd-estimate methods, disclosure scope and dates still need per-claim review; no inference from absent documentation to a definitive negative statement.
6. **Sharing:** retain the global coverage gate and per-card review gates. No missing card may be translated into candidate silence.

## Pending inventory at snapshot

This generated list makes the remaining queue explicit. It does not assert all items have the same severity or verification effort.

### Atuação e histórico (2)

`lula-anulacoes`, `flavio-rifs`

### Checagem (12)

`checagem-podpah-historico`, `checagem-globo-lula`, `checagem-globo-flavio`, `checagem-metro-ia`, `checagem-cirio`, `checagem-deepfake-beneficios`, `checagem-bolsa-familia`, `checagem-farmacia`, `checagem-compra-votos`, `checagem-marcha-exu`, `checagem-video-anterior-paulista`, `checagem-viagens`

### Controvérsia (6)

`flavio-cargo-camara`, `flavio-master-filme`, `lula-master-reuniao`, `lula-master-documentario`, `lula-triplex`, `flavio-imoveis-especie`

### Debate (3)

`debate-band-flavio-propostas`, `debate-band-lula-propostas`, `debate-band-checagens`

### Manifestações (5)

`atos-paulista-lula`, `atos-paulista-flavio`, `atos-cidades-contexto`, `atos-ocorrencias-11-outubro`, `atos-ocorrencias-18-outubro`

### Políticas internacionais (4)

`INT-01`, `INT-02`, `INT-03`, `flavio-narcoterrorismo-implicacoes`

### Proposta (126)

`lula-jornada`, `lula-renda`, `flavio-precos`, `flavio-emprego`, `lula-saude`, `flavio-saude`, `lula-educacao`, `flavio-educacao`, `lula-seguranca`, `flavio-seguranca`, `lula-integridade`, `lula-digital`, `flavio-stf`, `flavio-estatais`, `flavio-salario-minimo`, `flavio-bolsa-familia-transicao`, `flavio-idade-penal`, `flavio-prontuario-cpf`, `flavio-compra-dividas`, `flavio-internet-servicos`, `lula-institutos-federais`, `lula-professores`, `lula-saude-digital`, `lula-especialistas`, `lula-moradia`, `lula-regra-fiscal`, `lula-cuidados`, `lula-fomento-cultural`, `lula-agricultura-familiar`, `lula-seguro-rural`, `lula-energia-renovavel`, `lula-adaptacao-climatica`, `lula-empregabilidade`, `lula-impostos`, `lula-protecao-renda`, `lula-seguranca-constitucional`, `lula-trabalho-apps`, `lula-apostas`, `lula-industria`, `flavio-mulheres-protecao`, `flavio-creches-cuidados`, `flavio-saude-mulheres`, `flavio-ajuste-fiscal`, `flavio-administracao`, `flavio-privatizacoes`, `flavio-agro-alimentos`, `flavio-habitacao`, `flavio-digital-estado`, `flavio-desmatamento`, `flavio-agua-desastres`, `flavio-minerais`, `flavio-energia-infra`, `flavio-reforma-politica`, `flavio-cultura`, `flavio-esporte`, `flavio-turismo`, `flavio-regional-saneamento`, `flavio-fronteiras`, `flavio-execucao-penal`, `flavio-familias-vitimas`, `flavio-tecnico-fies`, `flavio-cuidado-idosos`, `flavio-antifraude-inss`, `flavio-negociacao-trabalho`, `flavio-reconhecimento-facial`, `flavio-reforma-tributaria`, `lula-creches`, `lula-alfabetizacao`, `lula-ensino-superior`, `lula-atencao-basica`, `lula-saude-bucal`, `lula-vacinacao`, `lula-cancer`, `lula-saude-mulheres`, `lula-saude-mental`, `lula-saneamento`, `lula-mobilidade`, `lula-esporte`, `lula-desmatamento`, `lula-petroleo-combustiveis`, `lula-acesso-energia`, `lula-igualdade-salarial`, `lula-fiscalizacao-trabalho`, `lula-previdencia`, `lula-defesa-tecnologia`, `flavio-expressao`, `flavio-federalismo`, `flavio-empreendedorismo`, `flavio-defesa-exterior`, `flavio-castracao-quimica`, `flavio-crimes-celulares`, `lula-integracao-regional`, `lula-reforma-onu`, `lula-ia-infraestrutura`, `lula-cameras-prisoes`, `lula-adultos-conectividade`, `lula-industria-saude`, `lula-audiovisual`, `lula-urbanizacao-periferias`, `lula-logistica`, `lula-minerais`, `lula-pequenos-negocios`, `lula-acesso-terra`, `lula-biocombustiveis`, `lula-energia-nuclear`, `lula-mercado-carbono`, `lula-negociacao-coletiva`, `lula-cooperacao-tecnica`, `lula-controle-armas`, `lula-residuos`, `lula-biodiversidade`, `flavio-ganha-ganha`, `flavio-mulheres-conexao-formacao`, `flavio-claria`, `flavio-orientacao-financeira`, `flavio-emendas`, `flavio-mobilidade`, `flavio-atencao-basica`, `flavio-vacinacao`, `flavio-saude-mental`, `lula-turismo`, `lula-protecao-animal`, `lula-pequenas-empresas-mercados`, `flavio-agendamento-saude`, `flavio-regularizacao-rural`, `flavio-rastreabilidade-rural`

### Transparência (3)

`lula-abertura-sigilos`, `flavio-abertura-sigilos`, `lulinha-entrega-sigilos`


## Follow-up: transparency and controversy verification

This section records a fresh source review of all six controversy blocks, all three transparency blocks and `flavio-rifs`. “Corroborated” below applies to a specified attributed claim, not to the truth of an allegation. No source access failure is evidence that a document or event does not exist.

| Block | What this round corroborated | Correction / exact remaining barrier |
| --- | --- | --- |
| `lula-abertura-sigilos` | [Agência Brasil, 20 October](https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/tse-lula-autoriza-quebra-de-sigilo-bancario-se-flavio-fizer-o-mesmo) reports the conditional filing, an eight-year scope, Janja and five children, and requested public disclosure before 21 October. The previous-day announcement is also accessible. | Add this accessible source instead of relying exclusively on Exame. Say the filing is reported, not that records are public. The official petition receipt, complete instrument and resulting court order were not obtained. A requested deadline is not a court-ordered deadline. |
| `flavio-abertura-sigilos` | [SBT News](https://sbtnews.sbt.com.br/colunas/coluna-do-tulio/flavio-nao-vai-aceitar-desafio-de-lula-para-abrir-sigilos) now opened fully. It attributes nonacceptance to unnamed campaign allies, not a new direct declaration by the candidate. | The source's retrieved display says 15:39 while the stored label says 12:39; remove the hour unless timezone normalization is independently established. The dated, attributed reporting can be marked checked; a definitive direct refusal or lack of any authorization cannot. |
| `lulinha-entrega-sigilos` | [CNN's own interview report](https://www.cnnbrasil.com.br/politica/lulinha-entregou-sigilos-a-mendonca-e-pode-prestar-depoimento-diz-advogado/) identifies Marco Aurélio de Carvalho as campaign coordinator and lawyer and records his statement. | The existing attributed wording is corroborated and can be checked as a report of what he said. No filing receipt or actual records were obtained. The quoted interview describes willingness/opening as well as the article's delivery characterization; avoid upgrading this to independently verified delivery of full bank datasets. |
| `lula-master-documentario` | [PF's signed 9 October note](https://www.gov.br/pf/pt-br/assuntos/noticias/2026/10/nota-a-imprensa-1/) directly corroborates paragraphs 2 and 3: material with the reported content was not received, collaboration proposals were not accepted, and a crime report was referred for technical assessment. [CNN](https://www.cnnbrasil.com.br/politica/flavio-diz-que-lula-recebeu-propina-de-vorcaro-pt-nega-e-fala-em-farsa/) corroborates accusation and campaign denial. | The original Veja material and complete responses/ongoing procedure remain unreviewed. Narrow the card to the PF note and attributed accusation/denial to close its fact check; do not claim payments proven or disproven. |
| `lula-master-reuniao` | [CNN's 27 September report](https://www.cnnbrasil.com.br/eleicoes/lula-sobre-whisky-que-teria-sido-dado-por-vorcaro-se-me-deu-ja-bebi/) reproduces Lula's interview statement and attributes 4 December 2024, no prior scheduling, and the only-meeting assertion to Secom. | Attribute the Secom facts as reported by CNN. The direct Secom response, administrative meeting record and interview audiovisual verification are missing; no independent favoritism finding follows. |
| `flavio-master-filme` | [Agência Brasil's indexed 23 July report](https://agenciabrasil.ebc.com.br/justica/noticia/2026-07/mendonca-autoriza-pf-investigar-repasses-para-filme-sobre-bolsonaro) returns authorization for inquiry and the senator's private-financing defense. | Full July page repeatedly times out; May source also timed out. Case number, full authorization, payment documents and current procedural status not obtained. Do not convert indexed reporting to complete verification. Additional October reporting indicates developments, so May/July/September text cannot certify current status. |
| `flavio-cargo-camara` | [A TARDE, 31 August](https://atarde.com.br/eleicoes/tse-barra-propaganda-de-lula-que-chama-flavio-de-funcionario-fantasma-1400272) corroborates an interim advertising suspension and explicitly separates its presentation problem from omitted later dismissal of another accusation. | BBC/UOL link timed out. Original appointment/attendance records, a current response, TSE case number, complete decision and eventual plenary disposition remain absent. Searches on Câmara/TSE did not retrieve these specific records. Keep pending. |
| `lula-triplex` | Correct STF source above corroborates 2021. [Agência Brasil via UOL](https://noticias.uol.com.br/ultimas-noticias/agencia-brasil/2022/01/28/justica-federal-arquiva-caso-do-triplex-contra-ex-presidente-lula.htm) reports a decision on **27 January 2022**, published the following day, at MPF request for limitation-period expiry, and quotes the defense. | Replace broken STF source. Attribute 2022 dismissal to Agência Brasil until the judicial order is retrieved. TRF1/MPF searches returned general search portals, not the original order. Narrow historical reporting is corroborated; a judicial-record certification remains pending. |
| `flavio-imoveis-especie` | [UOL's original 2020 reporting](https://noticias.uol.com.br/politica/ultimas-noticias/2020/11/14/flavio-bolsonaro-12-salas-comerciais.htm-media/) corroborates the declared paid portion, R$268,221.75, and identifies twelve commercial units; it also contains the defense denial. The [campaign petition](https://static.poder360.com.br/2022/09/acao-bolsonaro-tse-video-lula-imoveis-dinheiro.pdf) is a party pleading, not a judicial finding. | Add the 2020 defense response: it denied wrongdoing and disputed procedural, narrative and calculation aspects. Do not merge twelve units, a 10% paid fraction, and a claim of ten properties. The family-wide 2022 article body was not fully exposed in this extraction; deeds, historic declarations and current case reconciliation remain absent. |
| `flavio-rifs` | The STF primary article confirms the specific 2021 invalidation, including the procedural defense argument. TJRJ official search results still identify rejection on 16 May 2022. | Full TJRJ result returned 502 twice. Need complete later order and subsequent docket before certifying current posture. The 2021 historical event alone is independently supported; do not call that a merits conviction or a complete current case account. |

### Immediately usable copy changes

- `lula-abertura-sigilos`, latest paragraph: “Segundo a Agência Brasil, Lula enviou ao TSE em 20 de outubro um pedido que abrange os últimos oito anos e inclui Janja e seus cinco filhos. A autorização depende de Flávio adotar a mesma medida. O pedido busca divulgação pública; não temos os dados bancários, fiscais ou telefônicos para consulta.” Source above, published 20 October at 13:44.
- `flavio-abertura-sigilos`, source label: “SBT News — Túlio Amâncio, 20/10/2026”. This avoids unresolved display-time conversion.
- `flavio-imoveis-especie`, after the 2020 report paragraph: “À reportagem, a defesa negou irregularidades e contestou a denúncia, apontando problemas de procedimento, de narrativa e de cálculo.” Do not omit this response when repeating the allegation.
- `lula-triplex`, source repair: use the accessible 23 June 2021 STF article already identified above. If adding day precision, the reported dismissal decision was **27 January**, not the publication date of 28 January.

No new direct authorization/public banking records were located for either candidate. This is a statement of the evidence available to the project, not proof that no such records exist elsewhere. The two interview/reporting blocks can be checked at their explicitly attributed scope; documentary delivery and current litigation status remain separate verification tasks.
