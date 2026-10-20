# Debate fact checks: primary-source follow-up

Reviewed2026-10-20. Scope: the two examples in `debate-band-checagens`, not every statement in the debate.

## Material discovery

The Aos Fatos page loads its annotated transcript from its public client endpoint:
https://www.aosfatos.org/api/escriba/084d9e98-9d9b-4151-a99d-29c4ebf67799/

The JSON was retrieved and saved to `work/aosfatos-band-escriba.json`. It contains speakers, token timestamps, editorial comments and references. These offsets must not be copied to the Rádio Bandeirantes recording without synchronization. The page HTML and public client JavaScript identify this endpoint; no authenticated or private access was used.

## Lula: growth above3% before his2023 return

**Conclusion: the exclusivity claim is false.** The Banco Central real annual GDP series7326, sourced from national accounts, reports2011:3.97%;2021:4.76%;2022:3.02%. All are above3% and precede2023. Use2021 as the clearest recent counterexample, noting recovery from the pandemic contraction; this contextualizes but does not erase the growth.

Primary data directly retrieved:
https://api.bcb.gov.br/dados/serie/bcdata.sgs.7326/dados?formato=json

IBGE's annual2021 release independently states4.8%, rounded to one decimal, following a3.3% contraction in2020:
https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/38284-release-contas-nacionais

The IBGE full-page tool fetch returned403, but its indexed official release explicitly contains those figures. The BCB JSON is the directly inspected numeric evidence. It shows2020:-3.28% and2021:4.76%, consistent with the rounded IBGE release.

**Source correction:** Aos Fatos links SGS1207, which is nominal GDP in current reais and cannot by itself establish real annual growth. Its prose also says4.6% for2021, while the current official real-growth series says4.76%. Do not propagate that reference or stale figure. The independently verified claim can use7326 and4.76%(4.8% rounded).

## Flávio: interest futures fell2% because of the election

**Correct the site's current summary.** Aos Fatos does not deny that election-related expectations accompanied a strong decline. Its detailed comment recognizes the movement, criticizes treating contracts with different maturities as one rate, and distinguishes relative percentages from percentage points. The current site's wording can falsely suggest the agency denied any election reaction.

Primary B3 documentation confirms that DI futures are contracts with a specified maturity, quoted as an annualized rate; there is no single generic futures interest rate:
https://b3.com.br/pt_br/produtos-e-servicos/negociacao/juros/futuro-de-taxa-media-de-depositos-interfinanceiros-de-um-dia.htm
https://www.b3.com.br/pt_br/produtos-e-servicos/negociacao/juros/s_di_train_prog/05-especificacoes-tecnicas.htm

Secondary market observations independently read: Reuters via CNN,2026-10-05at09:37, gives Jan2028DI12.735% versus13.509% prior adjustment, and Jan2035DI13.16% versus14.131%. Differences are0.774 and0.971 percentage points respectively, demonstrating the different magnitudes for those particular contracts and that observation time. These are **reported market quotes, not an independently downloaded B3 historical settlement file**:
https://www.cnnbrasil.com.br/economia/money/mercado/juros-futuros-tem-forte-queda-apos-flavio-ficar-a-frente-no-1o-turno/

The Aos Fatos comment additionally reports Oct2–9 Jan2035moving14.13%to12.37%(1.76percentage points, approximately12.46%relative decline), Jan2028about0.99point, Jan2027about0.09point. These exact end-of-week figures were **not reproduced from primary exchange data** in this review and should remain attributed to Aos Fatos rather than an independent Veritas numerical finding.

Do not substitute a Selic series: the candidate explicitly said futures rates. The BCB Selic landing page is JavaScript-dependent and, regardless, is not the same market instrument. Likewise, price movement after the election does not by itself isolate a causal effect or guarantee lower household borrowing costs.

## Proposed simple copy

Lula: “O PIB já havia crescido mais de3% antes da volta de Lula à Presidência. A série oficial registra3,97%em2011 e4,76%em2021. Portanto, não foi só depois de2023 que o país ultrapassou essa marca.”

Flávio: “Os juros futuros caíram após o primeiro turno, segundo a cobertura de mercado. Mas a queda variou conforme a data de vencimento do contrato. Não é correto resumir tudo como uma única taxa que caiu2%. Juros futuros também não são os juros cobrados automaticamente no seu empréstimo.”

If precise quotes are included: label Reuters/CNN as the reporter and give contract, observation date/time, original and final rates. Do not mark historical exchange-data replication complete without the B3 records. The two claims can be presented with different evidence scopes instead of forcing a single all-or-nothing fact-check badge.
