# Flávio property cross-check

Checked 20 October 2026. This is a property-level evidence map, not a complete transaction audit. Values are nominal BRL. No exact residential addresses are reproduced.

## Primary sources actually inspected

- TSE official ZIP data, downloaded and parsed directly with Latin-1 CSV decoding. Identity joined using the candidate name in `consulta_cand_YEAR_RJ.csv`, then `SQ_CANDIDATO` in `bem_candidato_YEAR_RJ.csv`. The 2026 national assets file uses candidate ID `280002551544`. This independent check succeeded even though the DivulgaCandContas web page returned HTTP 403.
- Official downloads: [2010 assets](https://cdn.tse.jus.br/estatistica/sead/odsele/bem_candidato/bem_candidato_2010.zip), [2014 assets](https://cdn.tse.jus.br/estatistica/sead/odsele/bem_candidato/bem_candidato_2014.zip), [2016 assets](https://cdn.tse.jus.br/estatistica/sead/odsele/bem_candidato/bem_candidato_2016.zip), [2018 assets](https://cdn.tse.jus.br/estatistica/sead/odsele/bem_candidato/bem_candidato_2018.zip), [2026 assets](https://cdn.tse.jus.br/estatistica/sead/odsele/bem_candidato/bem_candidato_2026.zip). Candidate identity files use the same host/path with `consulta_cand/consulta_cand_YEAR.zip`.
- A readable [deed excerpt published by Poder360](https://static.poder360.com.br/2021/03/flavio-bolsonaro-mansao-documentos-02-mar-2021-1.png), visually inspected. This is a newspaper collage of parts of a notarial certificate, not a complete certified current land-registry record. It names Flávio and his wife as buyers, dates the deed 29 January 2021 and shows purchase price and financing.

## Property evidence

| Property / filing | Documented value | What the evidence supports | Payment / ownership limit |
|---|---:|---|---|
| Lago Sul house, 2026 TSE | R$6,226,043.80 | One house is listed among nine assets under the 2026 candidacy ID. The source generation timestamp is 20/10/2026 19:31:30; asset update is 14/10/2026 19:59:40. | Filing is self-declared, not an independently certified current title search. |
| Lago Sul purchase, 2021 deed excerpt | R$5,970,000 price; R$2,870,000 own resources; R$3,100,000 BRB financing | Excerpt identifies Flávio and Fernanda Antunes Figueira Bolsonaro as buyers and debtors. | “Own resources” does not mean banknotes. Excerpt does not prove how the own-resource portion was transferred, nor subsequent loan discharge. Matching the 2026 general description is consistent with this house, but no cadastral identifier in the CSV independently completes that identity join. |
| Barra da Tijuca apartment, 2018 TSE | R$917,038.09 | Filing lists an apartment with this description. ID190000614721. | No exact unit identifier or ownership fraction in this 2018 description; cannot automatically equate it with every historic Barra apartment. No payment method recorded. |
| Barra da Tijuca commercial room, 2018 TSE | R$150,000.00 | Separate commercial room entry. | No full unit identifier in the filing. No basis to call it cash-paid or currently held. |
| Laranjeiras apartment, 2016 TSE | R$423,016.54 | Entry explicitly declares 50% of an apartment purchased off-plan. ID190000011736. | Do not double this value and call the result a verified whole-property purchase price. |
| Avenida Lúcio Costa apartment, 2016 TSE | R$851,094.48 | Entry explicitly declares 50%. Same candidate ID. | No payment proof; do not mechanically join to the less specific 2018 entry without deed identity. |
| Laranjeiras apartment, 2014 TSE | R$565,804.81 | Apartment described at Rua Pereira da Silva; ID190000000095. | Description differs from 2016 and does not specify fraction. A drop between filings is not proof of loss, disposal, or irregularity. |
| Botafogo apartment, 2010 TSE | R$350,000.00 | Apartment identified in official declaration; ID190000000070. | Historical filing does not establish current ownership or cash payment. |
| Barra Prime Offices interests, 2010 TSE | R$103,592.50 and R$164,719.25; sum R$268,311.75 | Two entries expressly declare 10% interests. Descriptions enumerate four units in one entry and seven in the other. | Do not confuse 10% with ten properties; do not call the sum full-building purchase price. Earlier draft sum R$268,221.75 was incorrect. Full deeds and transaction chronology needed to reconcile ten/twelve-room reporting. |

## Reporting and defense

[Poder360, 2 March 2021](https://www.poder360.com.br/governo/flavio-bolsonaro-nega-irregularidades-em-compra-de-mansao-por-r-6-milhoes/) reports the house purchase and reproduces the candidate's response: he denied irregularities and said proceeds from a Rio property and a franchise funded the entry payment. Treat this as his explanation, not independent proof of money origin. The directly inspected deed excerpt supports the purchase/financing breakdown above, but does not identify bank transfers for the own-resource portion.

The [Folha report of 23 January 2019](https://www1.folha.uol.com.br/poder/2019/01/flavio-bolsonaro-lucrou-r-813-mil-com-transacao-relampago-de-imoveis.shtml) reports two Copacabana purchases in 2012 for R$140,000 and R$170,000 and subsequent sales for R$550,000 (February 2014) and R$573,000 (November 2013). These are historical transactions, not two current assets. Full deeds were not retrieved in this round, so keep this as attributed reporting and do not claim transaction-level independent verification. Their absence in the 2014 filing alone cannot prove omission, as reported sales precede that election filing.

## Suggested Portuguese copy

**Casa no Lago Sul, Brasília**

- Valor declarado ao TSE em 2026: **R$6.226.043,80**.
- Compra de 2021: o trecho da escritura publicado pelo Poder360 identifica Flávio e sua mulher como compradores, por **R$5,97 milhões**. O documento divide o pagamento em **R$2,87 milhões de recursos próprios** e **R$3,1 milhões de financiamento do BRB**.
- “Recursos próprios” não quer dizer dinheiro vivo. Esse trecho não mostra os comprovantes de transferência da entrada. Flávio negou irregularidades e disse ter vendido um imóvel e uma franquia para pagá-la.
- A descrição do TSE é compatível com essa casa, mas não informa a matrícula. O valor declarado em 2026 e o preço de compra em 2021 são medidas de datas diferentes; não são uma avaliação atual de mercado.

**Imóveis declarados em eleições anteriores**

- 2018: apartamento na Barra da Tijuca, **R$917.038,09**; sala comercial na Barra, **R$150 mil**.
- 2016: participação de 50% em apartamento em Laranjeiras, **R$423.016,54**; participação de 50% em apartamento na Avenida Lúcio Costa, **R$851.094,48**.
- 2014: apartamento em Laranjeiras, **R$565.804,81**.
- 2010: apartamento em Botafogo, **R$350 mil**; duas participações de 10% em grupos de salas comerciais, somando **R$268.311,75**.

São os valores das declarações de cada ano. Não some essa lista para calcular o patrimônio atual: um mesmo bem pode aparecer em mais de uma eleição, e imóveis podem ter sido vendidos. As declarações não informam como cada compra foi paga.

## Remaining evidence needed

1. Complete purchase and sale deeds and registry identities for the historical apartments/rooms, to reconcile which filings refer to the same unit and who held each share on each date.
2. Payment receipts or lawfully public bank evidence for each specific transaction; reporting and “own resources” clauses cannot substitute for this.
3. Full loan history for the Lago Sul property before stating its current debt/discharge.
4. The specific primary source and attribution behind each cash allegation; no basis here for “ten properties bought in cash.”

The existing historical PET10.562 summary remains a decision about that petition, not a property-by-property clearance. The full transaction audit remains pending. This round does establish fresh primary-source checking of the five electoral filings and visual checking of the limited 2021 deed excerpts.

## Follow-up: Lago Sul payment evidence — 20 October 2026

- [Folha, 3 March 2021](https://www1.folha.uol.com.br/amp/poder/2021/03/ex-proprietario-diz-que-flavio-bolsonaro-ainda-deve-r-18-milhao-de-mansao-de-r-6-milhoes.shtml) reproduces the seller RVA's statement: three transfers totaling BRL1.09m, plus bank financing, and an outstanding balance at that date. This is a seller statement reported by a newspaper, not independently inspected transfer receipts. The 2021 balance must not be called a current debt.
- [Crusoé, 3 March 2021](https://crusoe.com.br/diario/dos-quase-r-6-mi-que-flavio-pagou-por-mansao-r-1-780-000-estao-sem-explicacao/) says the seller supplied receipts and reproduces his note in text. No individual bank receipt facsimiles were accessible in the article. Its quoted totals contain a ten-cent inconsistency, so do not independently certify its exact settlement arithmetic.
- [Congresso em Foco, 4 July 2024](https://www.congressoemfoco.com.br/noticia/29101/flavio-bolsonaro-quita-mansao-com-seis-pagamentos-extras-de-r-34-milhoes) attributes early repayment to Estadão and quotes BRB saying the contract was settled. No attached receipts. Do not reuse its purchase-price/principal figures, which differ from the deed excerpt. The original Estadão page could not be fetched; no bypass attempted.
- [TJDFT, Acórdão2050598](https://jurisdf.tjdft.jus.br/acordaos/ce06eb53-898f-4094-9221-5e0360970b10), process0709818-28.2021.8.07.0001, judged25September2025, published8October2025: official ementa and disposition read in JurisDF browser. The court unanimously upheld rejection of the popular action; accepted income documents and internal credit review, interest-rate limits and collateral valuation did not establish administrative impropriety. This is a direct court-source check, not a new independent review of private bank receipts or complete property title history.

### Missing documents by operation

1. Lago Sul: full current registry certificate, complete deed and any amendments, all entry-payment receipts, documents connecting the claimed Rio property/franchise sale proceeds to payments, loan repayment ledger and discharge instrument. Existing general2026TSEdescription does not independently provide the registry identity.
2. Historical Rio apartments: complete dated acquisition/disposal deeds and current registry chain; proof linking each TSE description and percentage to a specific unit; settlement receipts. Do not infer ownership today from historical filings.
3. Commercial-room interests: each unit's contract, assignments, registry history and payment schedule. A10% filing entry is not proof of a cash purchase or the whole property's price.

Searches found a political dossier linking to the TJDFT judgment; it was used only as a pointer. The official court text, not that dossier's interpretation, supports the court summary. No authenticated full current registry certificate was obtained, and no fees or access-restricted systems were used.
