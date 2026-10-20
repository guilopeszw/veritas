# Health fact-check

Reviewed: 2026-10-20. Scope: the 14 blocks with `topic: saude` in the examined
`outputs/veritas/src/content.json` snapshot. Documentary review only; no app
changes or automatic editorial approval. Counts and recommendations below are
historical and must be reconciled with subsequent implementation.

## Findings and limitations

Both programs on the official TSE domain opened during this review. They can
support attribution of campaign commitments. A program does not prove that a
policy will work, that its historical claims are true, or that funding is approved.

One factual correction is needed: `lula-saude` associates remote consultations
with Farmácia Popular, but that specific passage does not make the connection.
Digital health is a separate policy area. The official program also supports
replacing a news source in Flávio's women's-health block. Temporary unavailability
of government links is not proof of falsehood.

No block was marked `checked`. Even supported attributions require the corrections,
editorial review, and a distinction between proposal, mechanism, and outcome.
“We do not have” describes Veritas's holdings, not proof that information does not exist.

## Attribution of commitments

Sources: [Lula's TSE program](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt),
84 pages, and [Flávio's TSE program](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pl),
76 pages. Page numbers are physical pages starting at 1. Accessed 2026-10-20;
filing dates and version histories were not established in this round.

| Block | Claim examined | Attribution finding |
| --- | --- | --- |
| `lula-saude` | Farmácia Popular with tests and more collection locations | Supported, p.36. Remote consultations within this program are not supported by the passage. |
| `lula-saude-digital` | Records, telehealth, and AI | Supported, p.35. |
| `lula-especialistas` | Extended shifts, concentrated service drives, and private services against credits | Supported, p.37. |
| `lula-atencao-basica` | Teams and physician retention | Supported, pp.34–35. |
| `lula-saude-bucal` | Municipal dental-care expansion | Supported, p.36. |
| `lula-vacinacao` | Coverage and school vaccination | Supported, pp.36–37. |
| `lula-cancer` | Cancer-care network and remote diagnosis | Supported, p.38. |
| `lula-saude-mulheres` | Prevention, reproduction, and maternity | Supported, pp.38–39. |
| `lula-saude-mental` | CAPS and gambling-related care | Supported, p.39. |
| `lula-industria-saude` | Production and technology absorption | Supported, p.39. |
| `flavio-saude` | Family Health and contracting unused private capacity | Supported, p.37. |
| `flavio-saude-mulheres` | Prevention, cancer, menopause, and endometriosis | Supported, p.21; use the primary source. |

The other two commitments have direct sources of their own:

- `flavio-prontuario-cpf`: [Band's selected statements](https://www.band.com.br/politica/eleicoes/debate-na-band-veja-como-foi-o-1o-embate-entre-flavio-e-lula-em-frases),
  “Saúde e SUS,” reproduce a promise to connect municipal and state information
  using CPF. Supported as a broadcaster-published statement; the full video and
  timestamp were not examined. Do not call this selection a full transcript.
- `flavio-cuidado-idosos`: the campaign's [70MAIS site](https://70mais.flaviobolsonaro.com.br/),
  “Remédio em casa” and “Cuidado e autonomia,” describes home delivery, telehealth,
  home adaptation, day centers, home care, and long-term institutions. Supported
  as a promise. No visible publication date; accessed 2026-10-20.

## Context and implications by block

### `lula-saude`

**Supported history:** the [Health Ministry, March 2025](https://www.gov.br/saude/pt-br/assuntos/noticias/2025/marco/saiba-como-retirar-medicamentos-e-insumos-pelo-farmacia-popular)
records 41 free items following the 2025-02-13 announcement. The Agência Gov
version used by the card redirected to an election-period unavailability notice;
replace it with the ministry source and check browser accessibility. Say
**items/medicines and supplies**, not 41 medicines, because diapers are included.

**Recommended summary meaning:** keep Farmácia Popular items free and add
monitoring tests. Remove remote consultations from this card. This is a scope
correction, not a finding that the campaign rejects teleconsultations.

**Conditions:** test lists, accreditation, result integration, and cost remain
implementation questions. No examined evidence quantifies effects or cost.
Keep conditional wording; missing collection data is not absence from the program.

### `flavio-saude`

**Supported history:** [Agora Tem Especialistas](https://www.gov.br/saude/pt-br/composicao/saes/agora-tem-especialistas)
and its [financial-credit component](https://www.gov.br/saude/pt-br/composicao/saes/agora-tem-especialistas/componente-creditos-financeiros/componente-creditos-financeiros)
document existing private participation in SUS. This does not start from zero.
Do not describe Flávio's mechanism as identical to Lula's solely because both
involve private hospitals.

**Analysis, not a measured effect:** using available capacity may expand supply;
waiting-time reductions depend on specialty, location, resources, and referrals.
No causal estimate was reviewed. The August 2026 link about 600,000 surgeries
was unnecessary to establish the mechanism and was not validated: remove it from
the main justification or check it separately before repeating that number.

**Clearer summary meaning:** contract tests and care in unused private-provider
time slots for SUS patients. Separate team expansion if an equivalent comparison
can be made.

### `flavio-prontuario-cpf` and `lula-saude-digital`

**Supported:** [RNDS](https://www.gov.br/saude/pt-br/composicao/seidigi/rnds)
describes exchange of information, restricted professional access, and individual
access through Meu SUS Digital. [Citizen FAQs](https://www.gov.br/saude/pt-br/composicao/seidigi/meususdigital/perguntas-e-respostas/cidadao/),
question 18, mention CNS and CPF identification. This does not establish that
every patient's full history is already integrated.

**Historical milestone:** [Ordinance 1,434, 2020-05-28](https://bvsms.saude.gov.br/bvs/saudelegis/gm/2020/prt1434_01_06_2020_rep.html)
appears in the official index as creating RNDS. Direct opening returned 403;
search retrieved the summary and articles. Obtain accessible full text or the
official gazette before closing this gap. Distinguish signature and publication;
the June 1 date in the filename is not the signature date.

**Supported safeguards:** [LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm),
articles 5, 11, and 46: health information is sensitive, with lawful processing
grounds and security duties. Do not claim consent is always the sole legal basis.

**Shared explanation meaning:** SUS already exchanges some of this information;
the proposal must expand integration without exposing patient data. Lula's AI
performance claims remain unverified; do not promise better diagnosis or shorter
queues without a study. Flávio's Band statement supports attribution, not a
complete technical design.

### `lula-especialistas`

**Supported:** the [official component](https://www.gov.br/saude/pt-br/composicao/saes/agora-tem-especialistas/componente-creditos-financeiros/componente-creditos-financeiros)
explains supply, agreements, service delivery, and compensation of debts or taxes.
[Ordinance 7,307, 2025-06-25](https://bvsms.saude.gov.br/bvs/saudelegis/gm/2025/prt7307_26_06_2025.html)
defines voluntary participation and supply. Correct a June 26 signature attribution
if present: that date appears in the URL, not the signature date.

**Retain:** this is not debt cancellation without service; credits depend on care
being delivered. **Not established as an outcome:** a specific future waiting-time
reduction. “May expand access” is conditional analysis; delivered services require
execution data, not campaign targets.

### `flavio-saude-mulheres`

**Supported history:** the [Ministry of Women](https://www.gov.br/mulheres/pt-br/acesso-a-informacao/acoes-e-programas-1/acoes-e-programas-de-gestoes-anteriores/politicas-para-mulheres/arquivo/assuntos/saude-integral-da-mulher/saude-integral-da-mulher)
records PNAISM's development in 2004. This does not establish universal regional
availability of all planned care.

**Correction:** replace attribution to Folha in the summary with official program
page 21. **Analysis:** testing, follow-up, and treatment are separate steps; do not
assume queues disappear. Complete service targets remain unavailable in the
reviewed collection.

### `flavio-cuidado-idosos`

**Supported history:** [Law 15,069, 2024-12-23](https://www.presidencia.gov.br/ccivil_03/_ato2023-2026/2024/lei/l15069.htm)
establishes the National Care Policy. That does not prove every promised measure
already exists or is universal.

**Analysis:** supplies, logistics, staff, and continuity are execution conditions,
not proven results. Replace unclear wording about substituting care shifts with
services that take on part of the care and give caregivers time to rest. Do not
infer pay or financial benefits unless explicitly proposed.

### `lula-atencao-basica`

**Supported:** [official physician guidance](https://www.gov.br/saude/pt-br/composicao/sgtes/mais-medicos/medico-e-medica)
describes public selection, expansion, and replacement vacancies. The current
training-during-participation claim requires its regulation or training-offer
page; the registration section alone does not establish all training requirements.

**Appropriate analysis:** announced positions are not physicians actually present;
evaluate occupancy and retention. Simpler meaning: more primary-care teams and
professionals where they are missing. Do not add a municipal target without evidence.

### `lula-saude-bucal`

**Supported:** [Brasil Sorridente](https://www.gov.br/saude/pt-br/composicao/saps/brasil-sorridente/brasil-sorridente)
records its 2004 origin and primary/specialist network;
[Law 14,572, 2023-05-08](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14572.htm)
establishes the National Oral Health Policy within SUS. Distinguish program
inception in 2004 from incorporation into law in 2023.

**Analysis:** equipment alone does not deliver treatment. A universal-coverage
deadline and municipal targets are not established by this collection. Do not
turn “universalization” into a dated commitment without evidence.

### `lula-vacinacao`

**Supported:** the [National Technical Calendar](https://www.gov.br/saude/pt-br/composicao/svsa/pni/calendario-tecnico/calendario-tecnico),
updated 2026-03-02, links to 2026 instructions and identifies ages, groups, schools,
recording, and monitoring. Do not provide individual vaccination advice without
consulting the specific rule.

**Analysis:** distributed doses, administered doses, and coverage are different
measures. No causal estimate or additional target was verified; retain that distinction.

### `lula-cancer`

**Supported:** [INCA treatment guidance](https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/controle-do-cancer-de-mama/acoes/tratamento)
explains Unacon/Cacon, complex-care infrastructure, therapies, and referrals.
It is breast-cancer-specific; use the linked accreditation rule as well before
generalizing to all cancers.

**Unverified:** the superlative “largest network in the world”; do not publish it
as fact. **Analysis:** facilities require staff and referral systems; expansion
does not establish shorter waits. “Expand diagnosis and treatment” is simpler
than specialist network terminology.

### `lula-saude-mulheres`

**Supported:** [Ordinance 5,350, 2024-09-12](https://bvsms.saude.gov.br/bvs/saudelegis/gm/2024/prt5350_13_09_2024.html)
sets out Rede Alyne, components, and pregnancy-care linkage. The current
`bvs.saude.gov.br` host returned 502; the equivalent `bvsms.saude.gov.br` URL
opened. Replace the broken link with the working one.

**Analysis:** tests, contraception, monitoring, and childbirth are distinct steps;
construction does not prove complete care. Without additional regional targets,
avoid promising complete coverage.

### `lula-saude-mental`

**Supported:** [CAPS access information](https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps/caps)
describes initial reception without an appointment and coordination with other
units. This does not guarantee immediate specialist treatment or 24-hour operation
at every CAPS; service types vary.

**Analysis:** access and continuity require staff and a network. The gambling
commitment does not establish a number of new services or universal treatment.

### `lula-industria-saude`

**Supported:** [PDP documentation](https://www.gov.br/saude/pt-br/composicao/sectics/pdp/pdp/)
describes four stages, monitoring, and technology transfer/absorption. Buying
nationally, signing a partnership, and mastering technology are not equivalent.

**Analysis:** no project-level future savings or shortage-reduction calculation
was verified. Suggested meaning: produce more SUS medicines and equipment in
Brazil. Explain technological dependence without promising self-sufficiency.

## Actions before closing verification

1. Correct the Farmácia Popular scope; do not attach teleconsultations without
   another direct source.
2. Use TSE page 21 for Flávio's women's-health block and the working Rede Alyne host.
3. Record primary evidence for each historical claim; obtain complete RNDS legal
   text and the Mais Médicos training rule.
4. Visually inspect PT pages 35–39, PL pages 21/37, and the full Band health
   passage. Attribution above used extracted text, not video.
5. Treat every implication as conditional analysis. None of the examined sources
   establishes quantitative future effects.
6. Reconcile coverage: this snapshot has ten Lula and four Flávio blocks. It does
   not prove Flávio lacks proposals elsewhere. PL mentions prevention, vaccines,
   university hospitals, and mental health; inventory subtopics before labeling
   an empty comparison cell as no proposal.

This report does not authorize publication of allegations, government outcome
figures, or the entire electoral database. Its scope is health alone.
