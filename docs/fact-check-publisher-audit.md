# Fact-check publisher audit

Reviewed on 2026-10-20. Scope: all 12 `Checagem` blocks in `src/content.json` against their original publisher pages, plus the two secondary citations already attached (Google and Federal Police).

## Result and allowed status

**11 existing texts match their publisher; 1 requires a debt-reference correction.** All 12 may be marked source-checked after that correction **only with an explicit publisher-report scope**. This verifies faithful reporting of Aos Fatos, not an independent Veritas reproduction of every underlying investigation. Keep editorial approval separate; do not change `status` to `approved` solely because this audit passed.

Recommended machine metadata: `verificationScope: "publisher-report"`, `checkedAt: "20/10/2026"`. Recommended visible attribution: `Checagem do Aos Fatos`. A bare verdict must not imply that Veritas performed forensic media analysis or independently re-created all historical statistical series.

No quotation field exists in these 12 blocks; the prose paraphrases the selected findings. `falas` is correct for the three interview blocks. `redes` is correct for the other nine, including the Círio video, since it concerns distributed media rather than an interview statement. Candidate labels identify the subject of the false or disputed claim, not necessarily its creator. All stored publication dates match the original pages.

## Per-block decisions

### `checagem-podpah-historico` — PASS

Publication date: 2021-12-03. [Original publisher](https://www.aosfatos.org/noticias/checamos-lula-entrevista-podcast-podpah/).

The archive date, 2013 hunger statistic, gasoline increases and responses from the press office match the original. Preserve historical=true. The card is a selection, not an inventory of all eight claims in the article. No factual correction needed.

### `checagem-globo-lula` — PASS

Publication date: 2026-10-15. [Original publisher](https://www.aosfatos.org/noticias/checamos-lula-globo-segundo-turno/).

The GDP figure is correctly limited to 2010; the 15.4 million jobs figure and legislative-defeat explanation match the report. Do not copy the source’s loose description of approximately 20 million as near 22 million. The current card avoids that arithmetic problem.

### `checagem-globo-flavio` — CORRECT

Publication date: 2026-10-16. [Original publisher](https://www.aosfatos.org/noticias/checamos-flavio-bolsonaro-globo-segundo-turno/).

The privatization and film-accounting attribution matches. The last paragraph incorrectly says the debt definition and date are unavailable: the original explicitly supplies both. Replace it as specified below. Preserve the distinction between unproven legality and a judicial conviction.

### `checagem-metro-ia` — PASS

Publication date: 2026-10-12. [Original publisher](https://www.aosfatos.org/noticias/imagem-de-trabalhadora-limpando-metro-na-paulista-foi-alterada-por-ia/).

The original identifies SynthID, Google tools, real graffiti and distribution by Tropa do Flávio. Google’s own documentation supports what a detected watermark means. This audit did not rerun detection on the image. Do not infer who created it.

### `checagem-cirio` — PASS

Publication date: 2026-10-16. [Original publisher](https://www.aosfatos.org/noticias/video-cirio-nazare-ato-flavio/).

Original distinguishes recording on October 10, publication October 11, and the Minas event October 15. Current copy correctly says already published on October 11. The official-profile distribution and unanswered contact are present.

### `checagem-deepfake-beneficios` — PASS

Publication date: 2026-10-08. [Original publisher](https://www.aosfatos.org/noticias/flavio-cortes-pensoes-deepfake/).

Original reports comparison with the October 4 statement and mouth/voice anomalies. Current copy confines absence to the original recording, avoiding a universal claim that the candidate never discussed any benefit cuts.

### `checagem-bolsa-familia` — PASS

Publication date: 2026-10-09. [Original publisher](https://www.aosfatos.org/noticias/governo-lula-extinguir-bolsa-familia/).

Original body identifies April 2025 CNN footage and distinguishes transition from extinction. A methods sentence says April this year, contradicting its body; preserve April 2025 in Veritas. Do not import the article’s benefit-adjustment number without checking it.

### `checagem-farmacia` — PASS

Publication date: 2026-10-08. [Original publisher](https://www.aosfatos.org/noticias/flavio-bolsonaro-farmacia-popular/).

Search-without-result, campaign denial, PL promise and 2022 budget proposal are all present. The card appropriately says no located record rather than claiming exhaustive knowledge of every statement.

### `checagem-compra-votos` — PASS

Publication date: 2026-10-08. [Original publisher](https://www.aosfatos.org/noticias/pf-esquema-compra-votos-flavio/).

Original describes the October 3 CNN segment without the candidate link. PF separately confirms the nationwide annual seizure aggregate. Absence of a named link in this report does not prove no possible investigation exists elsewhere.

### `checagem-marcha-exu` — PASS

Publication date: 2026-10-13. [Original publisher](https://www.aosfatos.org/noticias/video-nao-mostra-ritual-satanico-ato-lula-paulista/).

Original identifies August 16 at the Marcha para Exu, artist Joia do Couro and his denial. Current copy avoids equating an Afro-Brazilian religion with a campaign or a criminal allegation.

### `checagem-video-anterior-paulista` — PASS

Publication date: 2026-10-12. [Original publisher](https://www.aosfatos.org/noticias/video-mulher-droga-ato-pro-lula-na-paulista/).

Original identifies circulation October 10 and sharing by official profiles. Its October 12 19:55 update includes those distributions. Unknown origin, identity and substance remain explicit in the card.

### `checagem-viagens` — PASS

Publication date: 2026-10-05. [Original publisher](https://www.aosfatos.org/noticias/lula-7-bilhoes-viagens/).

Original identifies 2023–2025 federal travel, and R$150.5 million linked to the Presidency but not exclusively to Lula. Current wording preserves both distinctions. The database query was not independently reproduced in this pass.

## Exact correction

For `checagem-globo-flavio`, replace `paragraphs[2]` with:

> Segundo o Aos Fatos, a dívida bruta do governo geral chegou a R$ 11,1 trilhões em agosto de 2026, equivalentes a 82,9% do PIB. Essa medida reúne governo federal, INSS, estados e municípios. Foi esse indicador, atribuído ao Banco Central pela reportagem, que sustentou a avaliação sobre os R$ 11 trilhões citados por Flávio.

This is deliberately attributed to the publisher. Do not claim this audit queried the Banco Central series itself. The former sentence that the date and definition were unavailable should be removed.

## Primary citations inspected

- [Google verification documentation](https://support.google.com/gemini/answer/16722517): detecting SynthID indicates all or part of an image/video was generated or edited with Google models. This supports the technical explanation, not a fresh detection result for the specific image.
- [Federal Police election report](https://www.gov.br/pf/pt-br/assuntos/noticias/2026/10/pf-divulga-balanco-final-da-atuacao-nas-eleicoes-2026): dated October 5, separates election-day figures from the 2026 cumulative amounts. The annual section reports more than R$47.5 million in seized assets, about R$31 million cash. Its aggregate does not attribute the amount to Flávio. The card avoids mixing that with the earlier R$27 million CNN segment.

## Remaining independent work

Original media, social-post archives and complete statistical series were not independently replayed or downloaded in this pass. Those are prerequisites to claiming independent Veritas conclusions, not prerequisites to accurately reporting and attributing the publisher’s conclusions. This audit does not close judicial dossiers, proposal effects, program completeness, or audiovisual debate verification.
