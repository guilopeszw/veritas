# Rally locality results: official TSE verification

Verified 2026-10-20. All 43 locality percentages matched the official file when rounded to two decimals. This validates electoral results, not attendance or a causal link between votes and crowd size.

## Source and calculation

- [TSE dataset](https://dadosabertos.tse.jus.br/dataset/resultados-2026)
- [Downloaded archive](https://cdn.tse.jus.br/estatistica/sead/odsele/votacao_candidato_munzona/votacao_candidato_munzona_2026.zip)
- Member: `votacao_candidato_munzona_2026_BR.csv`
- Uncompressed member SHA-256: `d619e6b1f46e4638593daea2667d9144c14e55195d3441fb5c27504120e216cd`
- Generated: 20/10/2026 12:31:52
- Filter: first round (`NR_TURNO=1`), President (`CD_CARGO=1`), municipality and state.
- Sum `QT_VOTOS_NOMINAIS_VALIDOS` across zones and voting-in-transit records for each candidate. Denominator is all candidates’ valid votes in the same municipality. Do not include blank/null votes.
- Candidate numbers: Lula 13; Flávio 22. Brasília is a Federal District territorial unit, not a municipality.

| Locality | TSE code | Valid votes | Lula votes | Lula % | Flávio votes | Flávio % |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Aracaju/SE | 31054 | 335671 | 181481 | 54.07 | 125252 | 37.31 |
| Belo Horizonte/MG | 41238 | 1430488 | 592037 | 41.39 | 690960 | 48.30 |
| Belém/PA | 4278 | 826218 | 396570 | 48.00 | 361377 | 43.74 |
| Brasília/DF | 97012 | 1772808 | 675627 | 38.11 | 909616 | 51.31 |
| Cabo Frio/RJ | 58130 | 131974 | 39944 | 30.27 | 83213 | 63.05 |
| Cachoeira/BA | 33979 | 19875 | 15771 | 79.35 | 3319 | 16.70 |
| Campinas/SP | 62910 | 633220 | 241972 | 38.21 | 329733 | 52.07 |
| Carpina/PE | 23795 | 47995 | 25652 | 53.45 | 19665 | 40.97 |
| Cuiabá/MT | 90670 | 361616 | 123207 | 34.07 | 208637 | 57.70 |
| Curitiba/PR | 75353 | 1093434 | 332099 | 30.37 | 628721 | 57.50 |
| Florianópolis/SC | 81051 | 326832 | 133443 | 40.83 | 158954 | 48.63 |
| Fortaleza/CE | 13897 | 1490374 | 797002 | 53.48 | 586251 | 39.34 |
| Garanhuns/PE | 24198 | 76730 | 53078 | 69.18 | 19550 | 25.48 |
| Goiânia/GO | 93734 | 791095 | 223219 | 28.22 | 432608 | 54.68 |
| Itabaiana/SE | 31577 | 61342 | 34172 | 55.71 | 22644 | 36.91 |
| Joinville/SC | 81795 | 352869 | 72919 | 20.66 | 246309 | 69.80 |
| João Pessoa/PB | 20516 | 470970 | 219023 | 46.50 | 215086 | 45.67 |
| Macaé/RJ | 58475 | 138026 | 55742 | 40.39 | 71870 | 52.07 |
| Maceió/AL | 27855 | 496116 | 203850 | 41.09 | 259789 | 52.36 |
| Manaus/AM | 2550 | 1182539 | 439027 | 37.13 | 641864 | 54.28 |
| Morrinhos/CE | 14796 | 15248 | 7275 | 47.71 | 7387 | 48.45 |
| Natal/RN | 17612 | 436377 | 213790 | 48.99 | 192739 | 44.17 |
| Niterói/RJ | 58653 | 318715 | 154098 | 48.35 | 139309 | 43.71 |
| Nova Friburgo/RJ | 58670 | 113416 | 39479 | 34.81 | 63538 | 56.02 |
| Palmas/TO | 73440 | 177926 | 59524 | 33.45 | 103652 | 58.26 |
| Pelotas/RS | 87912 | 183906 | 86617 | 47.10 | 77399 | 42.09 |
| Porto Alegre/RS | 88013 | 776777 | 377252 | 48.57 | 325139 | 41.86 |
| Porto Velho/RO | 35 | 286338 | 90889 | 31.74 | 169992 | 59.37 |
| Recife/PE | 25313 | 983138 | 543548 | 55.29 | 377268 | 38.37 |
| Rio Branco/AC | 1392 | 206854 | 56423 | 27.28 | 131895 | 63.76 |
| Rio de Janeiro/RJ | 60011 | 3471874 | 1524517 | 43.91 | 1662354 | 47.88 |
| Salvador/BA | 38490 | 1447014 | 944358 | 65.26 | 391188 | 27.03 |
| Santa Maria/RS | 88412 | 152003 | 63618 | 41.85 | 75209 | 49.48 |
| Santos/SP | 70718 | 252290 | 98538 | 39.06 | 125561 | 49.77 |
| Sobral/CE | 15598 | 120038 | 71616 | 59.66 | 40500 | 33.74 |
| Sorocaba/SP | 71455 | 394371 | 129576 | 32.86 | 222939 | 56.53 |
| São Gonçalo/RJ | 58971 | 472652 | 190984 | 40.41 | 247529 | 52.37 |
| São José dos Campos/SP | 70998 | 419717 | 136451 | 32.51 | 240721 | 57.35 |
| São Luís/MA | 9210 | 619322 | 337598 | 54.51 | 229253 | 37.02 |
| São Paulo/SP | 71072 | 6552820 | 3052349 | 46.58 | 2760747 | 42.13 |
| Teresina/PI | 12190 | 484190 | 296190 | 61.17 | 152350 | 31.46 |
| Uberlândia/MG | 54038 | 409921 | 163879 | 39.98 | 206793 | 50.45 |
| Vitória/ES | 57053 | 209276 | 87021 | 41.58 | 103461 | 49.44 |
