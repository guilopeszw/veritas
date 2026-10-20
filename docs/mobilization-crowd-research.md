# Mobilization crowd-count research

Checked 20 October 2026. Scope: October runoff mobilizations, with direct recovery of the counting institution's publications. Figures below retain their original estimator and measurement scope. No independent recount was performed by Veritas.

## Independently estimated attendance: source-owner publications

| Event | Published estimate | Measurement and limits | Primary source |
| --- | --- | --- | --- |
| Flávio campaign, “Bloco do 22”, Avenida Paulista, São Paulo, 18 October 2026 | 71,900; published range 63,300–80,500 | Monitor USP/Cebrap + More in Common; peak observed at 12:20; 28 non-overlapping aerial photographs selected from four measurement times (11:00, 11:30, 12:20, 13:08). Estimate of simultaneous attendance, not cumulative visitors. | [More in Common publication](https://moreincommon.org.br/ato-da-campanha-de-flavio-bolsonaro-na-paulista-reune-719-mil-pessoas/) |
| Lula-supporting “Ato Musical pela Democracia”, Movimento 342 Artes, Copacabana, Rio de Janeiro, 18 October 2026 | 56,400; published range 49,700–63,100 | Same institutions; highest measured attendance at 18:00; 70 photographs, six sampling times between 15:45 and 18:00. Rain prevented further drone measurements; event ended around 20:30. Therefore this is the highest measured count, not a proven whole-event maximum. | [More in Common publication](https://moreincommon.org.br/ato-musical-pela-democracia-reune-564-mil-pessoas-em-copacabana/) |

Both source pages describe P2PNet head detection and a 12% mean absolute percentage error for groups above 500. Their published ranges must not be described as a 95% confidence interval. They measure different cities, venues and formats and cannot identify an electoral winner.

The source-linked image sets are [São Paulo 12:20](https://drive.google.com/drive/folders/13h-9Rh_pa_LB4gXUgFf5kU_o8jtu2D-N) and [Rio 18:00](https://drive.google.com/drive/folders/1bSyeZ_KcAIA4YK_YhyyFv-YFPWhreYtX). Folder links resolved; image-by-image manual verification was not performed.

## Lula Paulista, 11 October: no comparable Monitor count

[The institution's own notice](https://moreincommon.org.br/nota-publica-sobre-ato-da-campanha-de-lula-na-avenida-paulista/) says the campaign did not authorize its drone flight, so no estimate was published. It reports previous unsuccessful requests for 16 August and 3 October, too. This is the source owner's account of the authorization issue, not proof that Lula personally refused. The notice acknowledges presidential security restrictions. Do not fill this missing value with zero or use photographs to rank the candidates.

[Poder360's original 11 October report](https://www.poder360.com.br/poder-eleicoes-2026/ato-de-lula-em-sao-paulo-ocupou-7-quarteiroes-da-av-paulista/) describes seven blocks and a measured area of 65,177.42 square metres. Its 261,000 figure is hypothetical capacity at four people per square metre, expressly **not attendance**. The report attributes one million to PT and allies without a disclosed calculation method. Keep the claim in an attributed detail section if used; do not headline it as measured attendance. The primary campaign post behind that claim was not directly recovered in this pass.

## Brasília, 18 October: conflicting claims, no defensible single total

- [Metrópoles, 18:14, updated 18:15](https://www.metropoles.com/distrito-federal/ato-da-virada-reune-40-mil-apoiadores-de-lula-na-esplanada-diz-organizacao): approximately **40,000**, attributed to organizers; no counting procedure provided. Gathering from 09:00 at Museu Nacional and procession towards Congress.
- [MyNews, 14:10](https://canalmynews.com.br/eleicoes-2026/ato-em-brasilia-lota-esplanada-e-organizacao-fala-em-40-mil-pessoas/): **40,000**, also attributed to organizers, explicitly not necessarily independently counted.
- [Brasil de Fato, 17:30](https://www.brasildefato.com.br/2026/10/18/ato-da-virada-leva-100-mil-pessoas-as-ruas-de-brasilia-em-apoio-a-lula-e-leandro-grass/): approximately **100,000** in its own report; no estimator or counting procedure identified in the article. Do not relabel it as an organizer estimate.
- [Vale do Guaribas FM, 19:29](https://www.valedoguaribasfm.com.br/noticia/2939481/ato-pro-lula-reune-200-mil-apoiadores-no-centro-de-brasilia): **200,000**, attributed to organizers, without method; says SSP-DF does not estimate this kind of gathering. No direct SSP statement recovered, so attribution to the outlet must remain.

These are discrepant publications, not an uncertainty interval of 40,000–200,000, and not evidence attendance increased fivefold during the event. Do not average them. No primary organizer bulletin or independently reproducible count recovered. Suggested UI: “Estimativas divergentes”, with the three figures, their sources and absence of a disclosed method in an expandable section.

## Implementation recommendations

1. Display the two primary Oct18 counts with date, city, estimator, observed hour and range.
2. Keep São Paulo Oct11 missing measurement separate from the one-million campaign claim and theoretical area capacity.
3. Use separate records for Rio Oct12, Rio Oct18 and any downtown Candelária event; never transfer the Copacabana18Oct measurement to them.
4. Numbers of cities with acts (for example 16 or 37) are geographical reach, not crowd totals. Never sum incompatible reports into a national audience.
5. Municipal voting results can supply context but cannot explain individual attendance causally; participants may travel and attendance is not a representative voter sample.
6. Search results and secondary reproductions were used for discovery, then the source-owner pages above were read directly. This report establishes what those estimators published; it does not certify every attendee count as exact.

## Additional local reporting and implementation

- Porto Alegre, 13 October: [Brasil de Fato](https://www.brasildefato.com.br/2026/10/14/mare-vermelha-toma-conta-de-porto-alegre-e-reune-mais-de-50-mil-pessoas-na-maior-caminhada-do-segundo-turno/) reports more than 50,000, without naming a counter or method. Retained as a reported figure, not an independently measured total.
- Salvador, Flávio, 17 October: [MundoBA](https://mundoba.com.br/eleicoes/flavio-bolsonaro-reune-apoiadores-na-barra-e-diz-que-ato-em-salvador-foi-de-arrepiar/) attributes more than 100,000 to organizers. No method or measurement time is provided.
- Brasília, 13 October: [Brasil de Fato](https://www.brasildefato.com.br/2026/10/13/manifestacao-na-esplanada-reune-50-mil-contra-bolsonaro-e-em-apoio-a-lula-e-leandro-grass/) attributes 50,000 to organizers and at least 20,000 to an informal PMDF conversation. The latter is not presented as a formal police bulletin. Neither is assigned a statistical uncertainty interval.

The site now stores seven event records in `rallyCrowds`, with eleven attributed estimates. Every record carries a city, date, candidate, venue, method limitation and source. These are expandable above the municipal vote table, which also links the estimates to the matching events. Rio18October and Brasília18October were added as distinct acts; the earlier events keep their own dates. No national sum, attendance-to-vote conversion, winner ranking, or false zero is produced. All seven event records remain editorial drafts and are included in the public-build approval gate.

Searches also covered local October reports for Fortaleza, Recife, Belém and other cities. Figures from different dates or unsupported social posts were not transferred to existing events. Coverage remains partial; absence of a number means missing data.

## Standardized attendance layout

The approved layout uses one event container with candidate identity, city, venue and date. Each estimator has the same visible fields: attendance, measurement time, counting method, published range and source link. Method details stay in a native collapsed disclosure. Research limitations and conflicting estimates remain visible. On screens up to600px, estimator columns become a single stack, with44px minimum source/disclosure targets. The two legacy Paulista prose blocks are no longer repeated on the overview; their source records remain available through permanent links.

Verified locally: all seven event cards/eleven estimates render; desktop columns align;390px preview stacks without horizontal clipping; native disclosure and source links remain accessible.
