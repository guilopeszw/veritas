# PT official program: commitment-level inventory

Source: [TSE official PT program](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt). Reviewed 20 October 2026. Physical PDF pages 1–84; complete text extraction lines 0–2372 is retained in `work/pt-program-lines.json`. All extracted lines are present. Pages 1–14 introduce and retrospectively frame the program; actionable future commitments begin on page 15. Closing material after the policy text does not add commitments.

## Scope and counting

This ledger separates 459 source commitment units, including implementing measures and repeated commitments. It is not a count of 459 unique campaign proposals and must not become a debate-coverage denominator. Historical achievements, outcome claims and predicted effects are not fact-checked by this inventory. Source access is complete; publication coverage remains incomplete until the additions are integrated and reconciled.

Mapping is conservative at target-card level: **mapped** means the target already covers this commitment cluster; **partially mapped** means a card exists but the cluster has outstanding detailed commitments in the additive file; **unmapped** means no target card exists. A partially mapped row may itself already appear in the card; that label deliberately does not certify every submeasure independently. This distinction must be retained when closing the publication gate.

Current snapshot: 38 unmapped, 343 partially mapped, 78 mapped. The additive copy contains 74 paragraphs for 57 targets.

## Integration files

- `work/program-pt-final-copy.json`: PT-BR additive copy grouped by target, source pages and inventory measures.
- `work/program-pt-final-gaps.json`: individual additive paragraphs and proposed new-card metadata.
- `work/pt-inventory-units.json`: machine-readable ledger.

## Repetition and exclusions

Repeated policy commitments must be counted once in any eventual unique-policy denominator. The following clusters recur across thematic chapters: women’s equal pay and employment; women’s rural credit; disability inclusion and employment; youth education and student assistance; biofuels; sustainable financial instruments and TFFF; public procurement for small businesses; digital and AI governance; regional integration and sovereignty. Their source rows remain separately traceable here. Reconcile by target and substantive measure, not merely by matching words.

The future-language screening also yielded retrospective or non-actionable paragraphs. These were excluded from the actionable ledger rather than treated as promises: screening indices 1, 4, 13, 19, 21, 23, 42, 43, 60, 61, 73, 77, 78, 97, 112, 113, 121, 122, 130, 161, 182, 196, 209, 225 and 230. In particular, already-announced or historically built campuses are not automatically new future commitments. Broad sovereignty principles are retained as qualitative positioning, not measurable delivery targets.

## Source-to-card ledger

| ID | Physical page(s) | Future commitment / implementing measure | Target card | Mapping |
|---|---:|---|---|---|
| PT-000-01 | 15 | Political and electoral reform | `lula-democracia` | unmapped |
| PT-000-02 | 15 | Dialogue between branches and governments | `lula-democracia` | unmapped |
| PT-002-01 | 15 | Continue public-policy conferences | `lula-democracia` | unmapped |
| PT-003-01 | 15 | Participatory 2028–2031 planning and federal budget cycle | `lula-democracia` | unmapped |
| PT-X001 | 15 | Review parliamentary-amendment budget system | `lula-democracia` | unmapped |
| PT-X002 | 16 | Regulate social platforms against disinformation and hate | `lula-digital` | partially mapped |
| PT-X003 | 16 | Dialogue to improve judicial efficiency | `lula-democracia` | unmapped |
| PT-005-01 | 16 | Maintain negotiation with civil servants | `lula-gestao-publica` | unmapped |
| PT-006-01 | 17 | Universal digital public services | `lula-digital` | partially mapped |
| PT-006-02 | 17 | Personalized digital infrastructure | `lula-digital` | partially mapped |
| PT-006-03 | 17 | Improve Gov.br usability | `lula-digital` | partially mapped |
| PT-007-01 | 17 | National digital-literacy policy | `lula-digital` | partially mapped |
| PT-007-02 | 17 | National digital-sovereignty council | `lula-digital` | partially mapped |
| PT-008-01 | 17 | Share administrative support across ministries | `lula-gestao-publica` | unmapped |
| PT-X004 | 17 | Expand decentralized public procurement through Contrata+Brasil | `lula-pequenas-empresas-mercados` | partially mapped |
| PT-X005 | 17 | Continue Imóvel da Gente for housing and public facilities | `lula-moradia` | partially mapped |
| PT-009-01 | 18 | Federal cooperation through digital infrastructure and staff training | `lula-gestao-publica` | unmapped |
| PT-010-01 | 18 | Deepen integrity and anti-corruption plan | `lula-integridade` | partially mapped |
| PT-011-01 | 18 | Open-data and AI modernization of Transparency Portal | `lula-integridade` | partially mapped |
| PT-012-01 | 18 | Strengthen federal ombudsman | `lula-integridade` | partially mapped |
| PT-012-02 | 18 | Digital consultations and civic laboratories | `lula-integridade` | partially mapped |
| PT-014-01 | 19 | Combat racism through development policy | `lula-igualdade-racial` | unmapped |
| PT-015-01 | 19 | Implement racial-equality conference decisions | `lula-igualdade-racial` | unmapped |
| PT-015-02 | 19 | Regulate racial-equality statute | `lula-igualdade-racial` | unmapped |
| PT-015-03 | 19 | Expand Black representation in senior civil service | `lula-igualdade-racial` | unmapped |
| PT-016-01 | 20 | Implement PNEERQ education policy | `lula-igualdade-racial` | unmapped |
| PT-017-01 | 20 | Additional quilombola campuses | `lula-institutos-federais` | partially mapped |
| PT-018-01 | 20 | Accelerate quilombola titles | `lula-territorios-tradicionais` | partially mapped |
| PT-018-02 | 20 | Couple territorial recognition with local development | `lula-territorios-tradicionais` | partially mapped |
| PT-020-01 | 20–21 | Indigenous demarcation and removal of intruders | `lula-territorios-tradicionais` | partially mapped |
| PT-020-02 | 20–21 | Indigenous culturally appropriate multilingual schooling | `lula-territorios-tradicionais` | partially mapped |
| PT-020-03 | 20–21 | Indigenous participation in health governance | `lula-territorios-tradicionais` | partially mapped |
| PT-X006 | 20 | Implement Indigenous University | `lula-ensino-superior` | partially mapped |
| PT-022-01 | 21 | Complete 30 Casas da Mulher Brasileira | `lula-protecao-mulheres` | partially mapped |
| PT-022-02 | 21 | Complete 15 reference centers | `lula-protecao-mulheres` | partially mapped |
| PT-022-03 | 21 | Expand Salas Lilás | `lula-protecao-mulheres` | partially mapped |
| PT-022-04 | 21 | Provide aggressor-monitoring kits | `lula-protecao-mulheres` | partially mapped |
| PT-022-05 | 21 | Train security personnel | `lula-protecao-mulheres` | partially mapped |
| PT-024-01 | 21–22 | Enforce equal-pay law | `lula-igualdade-salarial` | partially mapped |
| PT-X007 | 21 | Preferential rural credit for women | `lula-agricultura-familiar` | partially mapped |
| PT-X008 | 21 | Women-specific vocational training | `lula-empregabilidade` | partially mapped |
| PT-X009 | 22 | Support women in entrepreneurship and scientific research | `lula-igualdade-salarial` | partially mapped |
| PT-025-01 | 22 | Support autonomy and dependent elderly people | `lula-cuidados` | partially mapped |
| PT-026-01 | 22 | Integrated elderly community services | `lula-cuidados` | partially mapped |
| PT-026-02 | 22 | Door-to-door care for people with mobility or geographic barriers | `lula-cuidados` | partially mapped |
| PT-027-01 | 22 | Expand and improve Centros-Dia and active-aging facilities | `lula-cuidados` | partially mapped |
| PT-028-01 | 22 | Expand public long-term-care places | `lula-cuidados` | partially mapped |
| PT-028-02 | 22 | Improve institutional inspection | `lula-cuidados` | partially mapped |
| PT-029-01 | 22–23 | Expand PADI home care | `lula-cuidados` | partially mapped |
| PT-X010 | 23 | Private-sector training and hiring partnerships for people over 60 | `lula-empregabilidade` | partially mapped |
| PT-030-01 | 23 | Digital literacy for elderly people | `lula-digital` | partially mapped |
| PT-031-01 | 23 | Continue Viver sem Limites | `lula-acessibilidade` | partially mapped |
| PT-031-02 | 23 | Enforce accessibility | `lula-acessibilidade` | partially mapped |
| PT-031-03 | 23 | Inspect disability employment quotas | `lula-acessibilidade` | partially mapped |
| PT-031-04 | 23 | Inclusive and bilingual deaf education | `lula-acessibilidade` | partially mapped |
| PT-031-05 | 23 | Assistive educational technology | `lula-acessibilidade` | partially mapped |
| PT-031-06 | 23 | Expand rehabilitation centers and orthopedic workshops | `lula-acessibilidade` | partially mapped |
| PT-032-01 | 23 | Inclusive public policy for LGBTQIAP+ people | `lula-inclusao-lgbt` | mapped |
| PT-033-01 | 23–24 | Combat child poverty and expand access to services and play | `lula-protecao-renda` | partially mapped |
| PT-034-01 | 24 | Investigate and punish child sexual abuse | `lula-protecao-digital-criancas` | partially mapped |
| PT-034-02 | 24 | Improve ECA Digital | `lula-protecao-digital-criancas` | partially mapped |
| PT-034-03 | 24 | Age-based screen rules | `lula-protecao-digital-criancas` | partially mapped |
| PT-034-04 | 24 | Regulate games and digital platforms | `lula-protecao-digital-criancas` | partially mapped |
| PT-035-01 | 24 | Expand youth access to leisure and cultural and professional opportunities | `lula-juventude` | unmapped |
| PT-036-01 | 24 | Strengthen Pé-de-Meia | `lula-educacao` | partially mapped |
| PT-X011 | 24 | Maintain popular pre-university courses CPop | `lula-ensino-superior` | partially mapped |
| PT-X012 | 24 | Expand student food and accommodation assistance | `lula-ensino-superior` | partially mapped |
| PT-037-01 | 24–25 | Youth entrepreneurship | `lula-juventude` | unmapped |
| PT-037-02 | 24–25 | Rural youth credit | `lula-juventude` | unmapped |
| PT-038-01 | 25 | Youth mental health in schools and universities | `lula-saude-mental` | mapped |
| PT-X013 | 25 | Support peripheral youth cultural production | `lula-fomento-cultural` | partially mapped |
| PT-X014 | 25 | Youth participation in decision-making | `lula-juventude` | unmapped |
| PT-039-01 | 25 | Expand and modernize basic and specialized SUAS assistance | `lula-protecao-renda` | partially mapped |
| PT-039-02 | 25 | Traditional-community social protection | `lula-protecao-renda` | partially mapped |
| PT-039-03 | 25 | Integrate disaster response | `lula-protecao-renda` | partially mapped |
| PT-040-01 | 26 | Support Cuidotecas ages 3–12 | `lula-cuidados` | partially mapped |
| PT-040-02 | 26 | Community laundries | `lula-cuidados` | partially mapped |
| PT-040-03 | 26 | Solidarity kitchens and popular restaurants | `lula-cuidados` | partially mapped |
| PT-041-01 | 26 | Train caregivers with inclusive curricula | `lula-cuidados` | partially mapped |
| PT-044-01 | 26–27 | Financial disruption of organized crime | `lula-seguranca` | partially mapped |
| PT-045-01 | 27 | Accelerate criminal proceedings | `lula-seguranca` | partially mapped |
| PT-045-02 | 27 | Restrict candidacies connected to organized crime | `lula-seguranca` | partially mapped |
| PT-046-01 | 27–28 | Strengthen Brasil Contra o Crime Organizado | `lula-seguranca` | partially mapped |
| PT-046-02 | 27–28 | Combat arms trafficking and investigate homicide | `lula-seguranca` | partially mapped |
| PT-046-03 | 27–28 | Invest FIIS resources in equipment and infrastructure | `lula-seguranca` | partially mapped |
| PT-047-01 | 28 | Urban improvements and public services in crime-controlled territories | `lula-urbanizacao-periferias` | partially mapped |
| PT-048-01 | 28 | Consolidate intelligence system | `lula-seguranca` | partially mapped |
| PT-048-02 | 28 | Modernize SINESP and Infoseg | `lula-seguranca` | partially mapped |
| PT-048-03 | 28 | Expand FICCOs | `lula-seguranca` | partially mapped |
| PT-049-01 | 28 | Maintain arms controls | `lula-controle-armas` | mapped |
| PT-049-02 | 28 | Improve tracing | `lula-controle-armas` | mapped |
| PT-049-03 | 28 | Inspect private security and CAC registrations | `lula-controle-armas` | mapped |
| PT-050-01 | 28 | Meet Pena Justa targets | `lula-cameras-prisoes` | partially mapped |
| PT-050-02 | 28 | Establish national penal-execution pact | `lula-cameras-prisoes` | partially mapped |
| PT-051-01 | 28 | National standards for state prison management | `lula-cameras-prisoes` | partially mapped |
| PT-052-01 | 28–29 | Strengthen federal prisons and isolate leaders | `lula-cameras-prisoes` | partially mapped |
| PT-052-02 | 28–29 | National high-risk prisoner classification and transfer protocol | `lula-cameras-prisoes` | partially mapped |
| PT-053-01 | 29 | Amazon border patrols and international cooperation | `lula-seguranca` | partially mapped |
| PT-054-01 | 29 | Radar and drone and satellite surveillance | `lula-seguranca` | partially mapped |
| PT-054-02 | 29 | Integrate river routes and environmental-crime monitoring | `lula-seguranca` | partially mapped |
| PT-054-03 | 29 | Financial investigation of illegal mining networks | `lula-seguranca` | partially mapped |
| PT-055-01 | 29 | Expand Celular Seguro | `lula-celular-seguro` | mapped |
| PT-055-02 | 29 | Combat stolen-phone receiving networks and related fraud | `lula-celular-seguro` | mapped |
| PT-056-01 | 29 | Investigate financial and cybercrime | `lula-seguranca` | partially mapped |
| PT-056-02 | 29 | Protect vulnerable groups against online crime | `lula-seguranca` | partially mapped |
| PT-057-01 | 29–30 | Protect Black youth through violence prevention | `lula-seguranca` | partially mapped |
| PT-057-02 | 29–30 | Community mediation and restorative justice | `lula-seguranca` | partially mapped |
| PT-X015 | 30 | Implement migration and refugee and statelessness policy | `lula-migracao` | mapped |
| PT-058-01 | 30 | Create security ministry conditional on approval of security PEC | `lula-seguranca-constitucional` | mapped |
| PT-059-01 | 30 | Community policing | `lula-cameras-prisoes` | partially mapped |
| PT-059-02 | 30 | Expand body cameras with preservation standards | `lula-cameras-prisoes` | partially mapped |
| PT-059-03 | 30 | Strengthen internal and external police oversight | `lula-cameras-prisoes` | partially mapped |
| PT-062-01 | 31 | Fulfil PNE 2026–2036 targets | `lula-educacao` | partially mapped |
| PT-063-01 | 31 | Reach 80 percent timely child literacy | `lula-alfabetizacao` | mapped |
| PT-064-01 | 31 | Fight adult illiteracy | `lula-alfabetizacao` | mapped |
| PT-064-02 | 31 | Permanent learning recovery strategy | `lula-alfabetizacao` | mapped |
| PT-065-01 | 31 | Expand federal support for early-childhood infrastructure | `lula-creches` | mapped |
| PT-066-01 | 31–32 | Prioritize full-time schooling | `lula-educacao` | partially mapped |
| PT-067-01 | 32 | Maintain school infrastructure support | `lula-creches` | mapped |
| PT-068-01 | 32 | Universalize adequate school connectivity | `lula-adultos-conectividade` | mapped |
| PT-069-01 | 32 | Continue and strengthen Pé-de-Meia | `lula-educacao` | partially mapped |
| PT-070-01 | 32 | Expand MEC Livros collection | `lula-adultos-conectividade` | mapped |
| PT-070-02 | 32 | Add languages to MEC Idiomas | `lula-adultos-conectividade` | mapped |
| PT-071-01 | 32 | Technical training for education managers | `lula-educacao` | partially mapped |
| PT-071-02 | 32 | Share education data across governments | `lula-educacao` | partially mapped |
| PT-072-01 | 32–33 | Maintain national teacher salary floor | `lula-professores` | mapped |
| PT-072-02 | 32–33 | Continue licensing-degree aid | `lula-professores` | mapped |
| PT-072-03 | 32–33 | Teacher placement support | `lula-professores` | mapped |
| PT-074-01 | 33 | Expand technical institutes in underserved areas | `lula-institutos-federais` | partially mapped |
| PT-075-01 | 33–34 | Complete existing campuses | `lula-ensino-superior` | partially mapped |
| PT-075-02 | 33–34 | Complete Ceará ITA unit | `lula-ensino-superior` | partially mapped |
| PT-075-03 | 33–34 | Implement Indigenous University | `lula-ensino-superior` | partially mapped |
| PT-075-04 | 33–34 | Implement Sport University | `lula-ensino-superior` | partially mapped |
| PT-075-05 | 33–34 | Expand and decentralize higher education | `lula-ensino-superior` | partially mapped |
| PT-075-06 | 33–34 | Improve student assistance | `lula-ensino-superior` | partially mapped |
| PT-075-07 | 33–34 | Expand postgraduate coverage | `lula-ensino-superior` | partially mapped |
| PT-076-01 | 34 | Build university hospitals and link them to Agora Tem Especialistas | `lula-especialistas` | partially mapped |
| PT-079-01 | 34–35 | Expand multidisciplinary family-health teams | `lula-atencao-basica` | partially mapped |
| PT-079-02 | 34–35 | Quality-linked financing in vulnerable territories | `lula-atencao-basica` | partially mapped |
| PT-080-01 | 35 | Teleconsultation and remote guidance in primary care | `lula-saude-digital` | mapped |
| PT-X016 | 35 | More diagnostic tests in primary care | `lula-atencao-basica` | partially mapped |
| PT-X017 | 35 | Integrate primary and specialist and pharmaceutical care | `lula-saude-digital` | mapped |
| PT-081-01 | 35 | Integrated health record | `lula-saude-digital` | mapped |
| PT-081-02 | 35 | Mobile booking and test results | `lula-saude-digital` | mapped |
| PT-081-03 | 35 | AI triage and clinical-risk prioritization | `lula-saude-digital` | mapped |
| PT-X018 | 35 | Retain Mais Médicos professionals and family-medicine specialization | `lula-atencao-basica` | partially mapped |
| PT-082-01 | 36 | Universalize municipal oral-health care | `lula-saude-bucal` | mapped |
| PT-082-02 | 36 | Supply dental equipment | `lula-saude-bucal` | mapped |
| PT-083-01 | 36 | Keep Farmácia Popular fully free | `lula-saude` | partially mapped |
| PT-083-02 | 36 | Review medicine list | `lula-saude` | partially mapped |
| PT-083-03 | 36 | Continue adult diapers | `lula-saude` | partially mapped |
| PT-083-04 | 36 | Expand pickup sites and alternatives where pharmacies are absent | `lula-saude` | partially mapped |
| PT-084-01 | 36 | Include chronic-disease diagnostic and monitoring tests | `lula-saude` | partially mapped |
| PT-085-01 | 36 | Expand vaccination access and campaigns | `lula-vacinacao` | partially mapped |
| PT-086-01 | 36–37 | Prioritize school vaccination | `lula-vacinacao` | partially mapped |
| PT-086-02 | 36–37 | Expand dengue and RSV coverage | `lula-vacinacao` | partially mapped |
| PT-086-03 | 36–37 | Incorporate new vaccines | `lula-vacinacao` | partially mapped |
| PT-087-01 | 37 | Expand third shifts and mobile units and campaigns | `lula-especialistas` | partially mapped |
| PT-087-02 | 37 | Private SUS capacity through financial or debt credits | `lula-especialistas` | partially mapped |
| PT-088-01 | 37–38 | Modernize diagnostic equipment and hospitals | `lula-especialistas` | partially mapped |
| PT-088-02 | 37–38 | Telehealth and robotic surgery facilities | `lula-especialistas` | partially mapped |
| PT-089-01 | 38 | Single transparent clinically prioritized digital queue | `lula-saude-digital` | mapped |
| PT-089-02 | 38 | Regional patient transport | `lula-saude-digital` | mapped |
| PT-090-01 | 38 | Expand oncology network and treatments | `lula-cancer` | mapped |
| PT-090-02 | 38 | Consolidate remote biopsy diagnosis | `lula-cancer` | mapped |
| PT-090-03 | 38 | Expand UNACON and CACON radiotherapy and surgery | `lula-cancer` | mapped |
| PT-091-01 | 38 | Early breast and cervical cancer care | `lula-saude-mulheres` | mapped |
| PT-091-02 | 38 | Endometriosis care | `lula-saude-mulheres` | mapped |
| PT-091-03 | 38 | Free long-acting contraception | `lula-saude-mulheres` | mapped |
| PT-092-01 | 38–39 | Menstrual supplies | `lula-saude-mulheres` | mapped |
| PT-092-02 | 38–39 | Reduce maternal mortality especially among Black women | `lula-saude-mulheres` | mapped |
| PT-092-03 | 38–39 | Rural birth access | `lula-saude-mulheres` | mapped |
| PT-092-04 | 38–39 | Integrate SAMU and Rede Alyne | `lula-saude-mulheres` | mapped |
| PT-092-05 | 38–39 | Maternal lodging and perinatal ambulances and Amazon obstetric nurses | `lula-saude-mulheres` | mapped |
| PT-093-01 | 39 | Expand psychosocial network and CAPS for youth | `lula-saude-mental` | mapped |
| PT-094-01 | 39 | Autism and neurodivergence care | `lula-saude-mental` | mapped |
| PT-094-02 | 39 | Care for women experiencing violence | `lula-saude-mental` | mapped |
| PT-094-03 | 39 | Expand gambling-related care | `lula-saude-mental` | mapped |
| PT-095-01 | 39 | Public health and domestic research-industry collaboration | `lula-industria-saude` | partially mapped |
| PT-096-01 | 39–40 | Improve technology partnerships | `lula-industria-saude` | partially mapped |
| PT-096-02 | 39–40 | Biodiversity-derived active pharmaceutical ingredients | `lula-industria-saude` | partially mapped |
| PT-096-03 | 39–40 | Genomic sequencing research | `lula-industria-saude` | partially mapped |
| PT-098-01 | 40–41 | Improve Aldir Blanc and Rouanet | `lula-fomento-cultural` | partially mapped |
| PT-098-02 | 40–41 | Decentralize funding | `lula-fomento-cultural` | partially mapped |
| PT-098-03 | 40–41 | Strengthen participatory cultural governance | `lula-fomento-cultural` | partially mapped |
| PT-099-01 | 41 | Preserve cultural heritage | `lula-fomento-cultural` | partially mapped |
| PT-099-02 | 41 | Protect traditional knowledge holders and their authorship | `lula-fomento-cultural` | partially mapped |
| PT-100-01 | 41 | Community cultural infrastructure | `lula-fomento-cultural` | partially mapped |
| PT-100-02 | 41 | Stable funding and shared governance for Pontos de Cultura | `lula-fomento-cultural` | partially mapped |
| PT-101-01 | 41–42 | Maintain cultural facilities | `lula-fomento-cultural` | partially mapped |
| PT-101-02 | 41–42 | Support artistic circulation and mobility | `lula-fomento-cultural` | partially mapped |
| PT-102-01 | 42 | Seek streaming regulation | `lula-audiovisual` | partially mapped |
| PT-102-02 | 42 | Improve audiovisual governance | `lula-audiovisual` | partially mapped |
| PT-102-03 | 42 | Industrial policy for audiovisual production | `lula-audiovisual` | partially mapped |
| PT-103-01 | 42 | Digital copyright law | `lula-audiovisual` | partially mapped |
| PT-103-02 | 42 | AI regulation and creator compensation | `lula-audiovisual` | partially mapped |
| PT-104-01 | 42 | Cultural diplomacy and international circulation | `lula-fomento-cultural` | partially mapped |
| PT-105-01 | 42 | Creative-business credit | `lula-fomento-cultural` | partially mapped |
| PT-105-02 | 42 | Technical artistic training | `lula-fomento-cultural` | partially mapped |
| PT-106-01 | 42–43 | Support games industry | `lula-fomento-cultural` | partially mapped |
| PT-107-01 | 43 | Integrate arts into school curricula | `lula-fomento-cultural` | partially mapped |
| PT-108-01 | 43 | Expand Bolsa Atleta | `lula-esporte` | partially mapped |
| PT-108-02 | 43 | Maintain state-company sponsorship | `lula-esporte` | partially mapped |
| PT-109-01 | 43 | Host Women's Football World Cup | `lula-esporte` | partially mapped |
| PT-110-01 | 43–44 | Implement Sport University | `lula-esporte` | partially mapped |
| PT-110-02 | 43–44 | National sports research and technology network | `lula-esporte` | partially mapped |
| PT-111-01 | 44 | Expand Arenas Brasil | `lula-esporte` | partially mapped |
| PT-114-01 | 45 | Expand MCMV across income bands | `lula-moradia` | partially mapped |
| PT-114-02 | 45 | Expand Compra Assistida | `lula-moradia` | partially mapped |
| PT-114-03 | 45 | Improve construction and procedures | `lula-moradia` | partially mapped |
| PT-114-04 | 45 | Support social-movement participation | `lula-moradia` | partially mapped |
| PT-114-05 | 45 | Use federal land and property fund | `lula-moradia` | partially mapped |
| PT-114-06 | 45 | Expand Reforma Casa Brasil | `lula-moradia` | partially mapped |
| PT-115-01 | 45–46 | Complete existing Periferia Viva works | `lula-urbanizacao-periferias` | partially mapped |
| PT-115-02 | 45–46 | Select more projects | `lula-urbanizacao-periferias` | partially mapped |
| PT-116-01 | 46 | Universal treated-water and sewer access prioritizing peripheries | `lula-saneamento` | mapped |
| PT-117-01 | 46 | Metropolitan and medium-city integration investments | `lula-mobilidade` | partially mapped |
| PT-118-01 | 46–47 | High-capacity public transport | `lula-mobilidade` | partially mapped |
| PT-118-02 | 46–47 | Electrify fleets | `lula-mobilidade` | partially mapped |
| PT-118-03 | 46–47 | Support domestic transport equipment | `lula-mobilidade` | partially mapped |
| PT-119-01 | 47 | Improve civil defense response | `lula-adaptacao-climatica` | partially mapped |
| PT-119-02 | 47 | Green infrastructure and resilient urban land use | `lula-adaptacao-climatica` | partially mapped |
| PT-120-01 | 47 | Support waste and sewage solutions including biogas and biomethane | `lula-residuos` | mapped |
| PT-123-01 | 48 | Increase infrastructure and innovative industrial investment | `lula-industria` | partially mapped |
| PT-124-01 | 48–49 | Maintain fiscal framework | `lula-regra-fiscal` | mapped |
| PT-124-02 | 48–49 | Seek sustained lower interest with inflation control | `lula-regra-fiscal` | mapped |
| PT-125-01 | 49 | Maintain price stability and real-income growth | `lula-regra-fiscal` | mapped |
| PT-126-01 | 49 | Strengthen financial regulators | `lula-mercado-capitais` | partially mapped |
| PT-126-02 | 49 | Infrastructure debentures | `lula-mercado-capitais` | partially mapped |
| PT-126-03 | 49 | Equity investment funds | `lula-mercado-capitais` | partially mapped |
| PT-126-04 | 49 | Receivables market | `lula-mercado-capitais` | partially mapped |
| PT-126-05 | 49 | Institutional long-term investors | `lula-mercado-capitais` | partially mapped |
| PT-127-01 | 49–50 | Monitor household and business debt | `lula-apostas` | partially mapped |
| PT-127-02 | 49–50 | Maintain guarantee funds | `lula-apostas` | partially mapped |
| PT-127-03 | 49–50 | Control excessive betting | `lula-apostas` | partially mapped |
| PT-127-04 | 49–50 | Responsible credit rules | `lula-apostas` | partially mapped |
| PT-128-01 | 50 | Strengthen reindustrialization focused on innovation | `lula-industria` | partially mapped |
| PT-129-01 | 50 | Coordinate industrial and scientific and trade policies | `lula-industria` | partially mapped |
| PT-131-01 | 50 | Expand science and innovation investment | `lula-industria` | partially mapped |
| PT-132-01 | 50–51 | Continue scientist return and retention program | `lula-industria` | partially mapped |
| PT-133-01 | 51 | Target industrial finance and procurement | `lula-industria` | partially mapped |
| PT-133-02 | 51 | Local-content preferences | `lula-industria` | partially mapped |
| PT-133-03 | 51 | Maintain FNDCT financing | `lula-industria` | partially mapped |
| PT-X019 | 51 | Incentives using sustainable taxonomy | `lula-mercado-carbono` | partially mapped |
| PT-134-01 | 51–52 | Ecological fiscal and financial instruments | `lula-mercado-carbono` | partially mapped |
| PT-134-02 | 51–52 | Regulate SBCE with industrial policy | `lula-mercado-carbono` | partially mapped |
| PT-135-01 | 52 | Expand domestic strategic production | `lula-industria` | partially mapped |
| PT-135-02 | 52 | Digitize and renew industrial machinery | `lula-industria` | partially mapped |
| PT-136-01 | 52 | Critical-minerals and rare-earth policy | `lula-minerais` | mapped |
| PT-136-02 | 52 | Domestic mapping and processing and value addition | `lula-minerais` | mapped |
| PT-137-01 | 52 | Promote industrial exports and trade defense | `lula-integracao-regional` | partially mapped |
| PT-138-01 | 52 | Use biodiversity and clean energy in industrial development | `lula-industria` | partially mapped |
| PT-139-01 | 52 | Just low-carbon industrial transition | `lula-industria` | partially mapped |
| PT-140-01 | 52–53 | Expand PAC and update long-term transport planning | `lula-logistica` | partially mapped |
| PT-141-01 | 53 | Continue road concessions | `lula-logistica` | partially mapped |
| PT-141-02 | 53 | New rail auctions and contract renegotiation | `lula-logistica` | partially mapped |
| PT-142-01 | 53–54 | Regional airport investments and new air routes | `lula-logistica` | partially mapped |
| PT-143-01 | 54 | New port leases and channel-maintenance concessions | `lula-logistica` | partially mapped |
| PT-144-01 | 54 | Brazilian governance of strategic digital infrastructure | `lula-ia-infraestrutura` | partially mapped |
| PT-145-01 | 54 | Domestic datacenter and cloud and AI ecosystem | `lula-ia-infraestrutura` | partially mapped |
| PT-146-01 | 54–55 | Nationally operated supercomputers | `lula-ia-infraestrutura` | partially mapped |
| PT-146-02 | 54–55 | Mandatory environmental safeguards for datacenters | `lula-ia-infraestrutura` | partially mapped |
| PT-146-03 | 54–55 | Local-content and domestic computing commitments | `lula-ia-infraestrutura` | partially mapped |
| PT-147-01 | 55 | Portuguese and other language models | `lula-ia-infraestrutura` | partially mapped |
| PT-147-02 | 55 | National training-data infrastructure and rules | `lula-ia-infraestrutura` | partially mapped |
| PT-148-01 | 55 | AI adoption in agriculture and health and finance | `lula-ia-infraestrutura` | partially mapped |
| PT-148-02 | 55 | Domestic research and hardware support | `lula-ia-infraestrutura` | partially mapped |
| PT-148-03 | 55 | Digitize small businesses | `lula-ia-infraestrutura` | partially mapped |
| PT-149-01 | 55 | Train digital specialists | `lula-ia-infraestrutura` | partially mapped |
| PT-150-01 | 55 | Expand optical fiber and rural 5G | `lula-ia-infraestrutura` | partially mapped |
| PT-150-02 | 55 | Prioritize underserved regions | `lula-ia-infraestrutura` | partially mapped |
| PT-150-03 | 55 | Maintain FUST investment | `lula-ia-infraestrutura` | partially mapped |
| PT-151-01 | 55 | Algorithm transparency | `lula-ia-infraestrutura` | partially mapped |
| PT-151-02 | 55 | Trace synthetic content | `lula-ia-infraestrutura` | partially mapped |
| PT-152-01 | 55–56 | Regional development policy and constitutional funds | `lula-desenvolvimento-regional` | partially mapped |
| PT-153-01 | 56 | Regulate national regional-development fund | `lula-desenvolvimento-regional` | partially mapped |
| PT-154-01 | 56 | Territorial balance in infrastructure and procurement and innovation | `lula-desenvolvimento-regional` | partially mapped |
| PT-X020 | 56 | Amazon biodiversity industries and sustainable-development funding | `lula-desenvolvimento-regional` | partially mapped |
| PT-155-01 | 56 | Attract low-emission electricity-intensive industry to Northeast | `lula-desenvolvimento-regional` | partially mapped |
| PT-156-01 | 57 | Develop regional tourism destinations | `lula-turismo` | mapped |
| PT-156-02 | 57 | Creative-sector tourism collaboration | `lula-turismo` | mapped |
| PT-156-03 | 57 | Themed itineraries | `lula-turismo` | mapped |
| PT-156-04 | 57 | International promotion | `lula-turismo` | mapped |
| PT-157-01 | 57 | Small-business innovation and exports and green transition | `lula-pequenas-empresas-mercados` | partially mapped |
| PT-157-02 | 57 | Women's entrepreneurship | `lula-pequenas-empresas-mercados` | partially mapped |
| PT-X021 | 57 | Simplify small-business environment and fair reform taxation | `lula-pequenas-empresas-mercados` | partially mapped |
| PT-X022 | 57 | Expand small-business procurement access and exports | `lula-pequenas-empresas-mercados` | partially mapped |
| PT-158-01 | 58 | Guarantee-backed credit | `lula-pequenos-negocios` | partially mapped |
| PT-158-02 | 58 | Public-private equity funds for growing firms | `lula-pequenos-negocios` | partially mapped |
| PT-159-01 | 58 | Expand Brasil Mais Produtivo digitalization credit | `lula-pequenos-negocios` | partially mapped |
| PT-X023 | 58 | Strengthen food-security participatory governance | `lula-alimentacao` | unmapped |
| PT-160-01 | 58–59 | Maintain international food-security cooperation | `lula-alimentacao` | unmapped |
| PT-160-02 | 58–59 | Help meet school-food procurement targets | `lula-alimentacao` | unmapped |
| PT-160-03 | 58–59 | Retain harmful-product advertising rules | `lula-alimentacao` | unmapped |
| PT-160-04 | 58–59 | Apply selective tax to harmful products | `lula-alimentacao` | unmapped |
| PT-162-01 | 59 | Expand family-farming credit | `lula-agricultura-familiar` | partially mapped |
| PT-162-02 | 59 | Agroecology and organic credit | `lula-agricultura-familiar` | partially mapped |
| PT-162-03 | 59 | Youth and women and cooperative credit | `lula-agricultura-familiar` | partially mapped |
| PT-162-04 | 59 | Simplify digital applications | `lula-agricultura-familiar` | partially mapped |
| PT-163-01 | 59–60 | Expand food procurement PAA | `lula-agricultura-familiar` | partially mapped |
| PT-163-02 | 59–60 | Expand technical assistance | `lula-agricultura-familiar` | partially mapped |
| PT-163-03 | 59–60 | Ease family-agroindustry interstate sales | `lula-agricultura-familiar` | partially mapped |
| PT-164-01 | 60 | Support small-farm mechanization | `lula-agricultura-familiar` | partially mapped |
| PT-165-01 | 60 | Strengthen Garantia-Safra and family-farm insurance | `lula-seguro-rural` | partially mapped |
| PT-166-01 | 60 | Advance PLANAPO | `lula-agricultura-familiar` | partially mapped |
| PT-166-02 | 60 | Expand productive forests and agroforestry | `lula-agricultura-familiar` | partially mapped |
| PT-167-01 | 60 | Domestic biological inputs | `lula-agricultura-familiar` | partially mapped |
| PT-167-02 | 60 | Incentives for degraded-land and spring recovery | `lula-agricultura-familiar` | partially mapped |
| PT-168-01 | 60 | Settle camped families | `lula-acesso-terra` | partially mapped |
| PT-168-02 | 60 | Improve settlements and land credit | `lula-acesso-terra` | partially mapped |
| PT-168-03 | 60 | Northern land regularization | `lula-acesso-terra` | partially mapped |
| PT-168-04 | 60 | Traditional-territory titles | `lula-acesso-terra` | partially mapped |
| PT-169-01 | 60–61 | Expand PRONERA | `lula-acesso-terra` | partially mapped |
| PT-169-02 | 60–61 | Rural clean water and ecological sanitation | `lula-acesso-terra` | partially mapped |
| PT-169-03 | 60–61 | Expand cisterns | `lula-acesso-terra` | partially mapped |
| PT-169-04 | 60–61 | Universal rural renewable electricity | `lula-acesso-terra` | partially mapped |
| PT-169-05 | 60–61 | Prevent rural violence and protect defenders | `lula-acesso-terra` | partially mapped |
| PT-170-01 | 61 | Implement artisanal-fishing plan and support family aquaculture | `lula-pesca-artesanal` | mapped |
| PT-171-01 | 61 | Protect fishing territories and community livelihoods | `lula-pesca-artesanal` | mapped |
| PT-172-01 | 61 | Expand commercial agricultural credit | `lula-agropecuaria` | unmapped |
| PT-172-02 | 61 | Finance irrigation and machinery | `lula-agropecuaria` | unmapped |
| PT-172-03 | 61 | Diversify capital-market funding | `lula-agropecuaria` | unmapped |
| PT-172-04 | 61 | Simplify credit procedures | `lula-agropecuaria` | unmapped |
| PT-173-01 | 61 | National rural climate-resilience program | `lula-agropecuaria` | unmapped |
| PT-173-02 | 61 | Irrigation and soil conservation | `lula-agropecuaria` | unmapped |
| PT-173-03 | 61 | Precision farming and no-till | `lula-agropecuaria` | unmapped |
| PT-173-04 | 61 | Weather monitoring and early warnings | `lula-agropecuaria` | unmapped |
| PT-174-01 | 61–62 | Support integrated crop-livestock-forest production | `lula-agropecuaria` | unmapped |
| PT-175-01 | 62 | Strengthen rural insurance | `lula-seguro-rural` | partially mapped |
| PT-176-01 | 62 | Develop systemic-catastrophe loss instrument | `lula-seguro-rural` | partially mapped |
| PT-176-02 | 62 | Risk-management education and financial protection | `lula-seguro-rural` | partially mapped |
| PT-177-01 | 62 | Agricultural commercial diplomacy and missions | `lula-integracao-regional` | partially mapped |
| PT-178-01 | 62 | Recover degraded pasture | `lula-rastreabilidade-rebanho` | partially mapped |
| PT-178-02 | 62 | Improve animal genetics and precision nutrition | `lula-rastreabilidade-rebanho` | partially mapped |
| PT-178-03 | 62 | Individual lifetime cattle tracing | `lula-rastreabilidade-rebanho` | partially mapped |
| PT-179-01 | 62–63 | Strengthen Embrapa biotechnology and resilient cultivars | `lula-agropecuaria` | unmapped |
| PT-179-02 | 62–63 | Rural connectivity | `lula-agropecuaria` | unmapped |
| PT-X024 | 63 | Expand ethanol and biodiesel and sustainable aviation fuel | `lula-biocombustiveis` | partially mapped |
| PT-180-01 | 63 | Use agricultural byproducts for bioenergy and biogas | `lula-biocombustiveis` | partially mapped |
| PT-181-01 | 63 | Expand domestic fertilizer production | `lula-petroleo-combustiveis` | partially mapped |
| PT-183-01 | 64 | Combat energy poverty | `lula-acesso-energia` | mapped |
| PT-184-01 | 64 | Expand renewables and storage | `lula-energia-renovavel` | partially mapped |
| PT-184-02 | 64 | Replace fossil fuels progressively with lower-carbon alternatives | `lula-energia-renovavel` | partially mapped |
| PT-185-01 | 64 | Electrify public-transport fleets and expand rail | `lula-mobilidade` | partially mapped |
| PT-186-01 | 65 | Include climate risk in energy planning | `lula-energia-renovavel` | partially mapped |
| PT-186-02 | 65 | Coordinate transmission and regional demand | `lula-energia-renovavel` | partially mapped |
| PT-187-01 | 65 | Expand and repower hydropower subject to safeguards | `lula-energia-renovavel` | partially mapped |
| PT-187-02 | 65 | Accelerate coal reduction | `lula-energia-renovavel` | partially mapped |
| PT-188-01 | 65 | Continue transmission auctions | `lula-energia-renovavel` | partially mapped |
| PT-188-02 | 65 | Expand battery investment | `lula-energia-renovavel` | partially mapped |
| PT-X025 | 66 | Debate lower electricity costs with sector sustainability | `lula-acesso-energia` | mapped |
| PT-189-01 | 66 | Mitigate exposure to international price shocks | `lula-petroleo-combustiveis` | partially mapped |
| PT-X026 | 66 | Promote natural gas and biomethane as complementary sources | `lula-energia-renovavel` | partially mapped |
| PT-X027 | 67 | Expand and integrate gas transport and distribution networks | `lula-petroleo-combustiveis` | partially mapped |
| PT-190-01 | 67 | Expand onshore and offshore investment | `lula-petroleo-combustiveis` | partially mapped |
| PT-190-02 | 67 | Revitalize mature fields | `lula-petroleo-combustiveis` | partially mapped |
| PT-190-03 | 67 | Return Petrobras to fuel distribution | `lula-petroleo-combustiveis` | partially mapped |
| PT-190-04 | 67 | Expand refining and LNG logistics | `lula-petroleo-combustiveis` | partially mapped |
| PT-191-01 | 67 | Low-carbon Petrobras investment | `lula-petroleo-combustiveis` | partially mapped |
| PT-191-02 | 67 | Revise REPETRO for decarbonization | `lula-petroleo-combustiveis` | partially mapped |
| PT-192-01 | 67 | Local-content procurement supporting naval industry | `lula-petroleo-combustiveis` | partially mapped |
| PT-193-01 | 68 | Improve RenovaBio for later-generation fuels | `lula-biocombustiveis` | partially mapped |
| PT-193-02 | 68 | Strengthen Petrobras biofuel activity | `lula-biocombustiveis` | partially mapped |
| PT-194-01 | 68 | Expand sustainable aviation and maritime fuels and biomethane | `lula-biocombustiveis` | partially mapped |
| PT-194-02 | 68 | Integrated bioenergy policy considering water and land | `lula-biocombustiveis` | partially mapped |
| PT-195-01 | 68 | Preserve peaceful nuclear applications | `lula-energia-nuclear` | mapped |
| PT-195-02 | 68 | Autonomous fuel cycle | `lula-energia-nuclear` | mapped |
| PT-195-03 | 68 | Conditional responsible uranium use | `lula-energia-nuclear` | mapped |
| PT-197-01 | 70 | Net-zero deforestation by 2030 | `lula-desmatamento` | partially mapped |
| PT-197-02 | 70 | Implement integrated fire management | `lula-desmatamento` | partially mapped |
| PT-197-03 | 70 | Enforce forest laws | `lula-desmatamento` | partially mapped |
| PT-198-01 | 70–71 | Allocate public land to conservation and traditional territories and settlements | `lula-acesso-terra` | partially mapped |
| PT-199-01 | 71 | International roadmap against deforestation | `lula-desmatamento` | partially mapped |
| PT-200-01 | 71 | Implement national climate commitments | `lula-adaptacao-climatica` | partially mapped |
| PT-201-01 | 71 | Join global fossil-transition roadmap debate with energy safeguards | `lula-energia-renovavel` | partially mapped |
| PT-202-01 | 71 | Expand climate finance | `lula-mercado-carbono` | partially mapped |
| PT-202-02 | 71 | Maintain Fundo Clima and Eco Invest | `lula-mercado-carbono` | partially mapped |
| PT-202-03 | 71 | Implement TFFF governance | `lula-mercado-carbono` | partially mapped |
| PT-X028 | 71 | Regional climate planning partnerships | `lula-adaptacao-climatica` | partially mapped |
| PT-203-01 | 71 | Encourage private natural reserves | `lula-biodiversidade` | partially mapped |
| PT-203-02 | 71 | Integrate conservation and sustainable tourism in national parks | `lula-biodiversidade` | partially mapped |
| PT-204-01 | 71–72 | Expand ProPatinhas | `lula-protecao-animal` | mapped |
| PT-204-02 | 71–72 | Continue SinPatinhas | `lula-protecao-animal` | mapped |
| PT-204-03 | 71–72 | Animal-rights conference in 2028 | `lula-protecao-animal` | mapped |
| PT-204-04 | 71–72 | Strengthen sanctions against mistreatment | `lula-protecao-animal` | mapped |
| PT-205-01 | 72 | Improve environmental-service payments | `lula-biodiversidade` | partially mapped |
| PT-205-02 | 72 | Legal recognition of biocultural restoration | `lula-biodiversidade` | partially mapped |
| PT-206-01 | 72 | Caatinga climate action | `lula-biodiversidade` | partially mapped |
| PT-206-02 | 72 | Permanent Semi-arid climate financing | `lula-biodiversidade` | partially mapped |
| PT-207-01 | 72 | Strengthen environmental inspection | `lula-desmatamento` | partially mapped |
| PT-207-02 | 72 | Supply-chain due diligence and traceability | `lula-desmatamento` | partially mapped |
| PT-207-03 | 72 | Satellite and AI crime monitoring | `lula-desmatamento` | partially mapped |
| PT-208-01 | 72–73 | Restore watersheds and water infrastructure | `lula-adaptacao-climatica` | partially mapped |
| PT-208-02 | 72–73 | Institutionalize adaptation planning | `lula-adaptacao-climatica` | partially mapped |
| PT-208-03 | 72–73 | Local extreme-heat plans | `lula-adaptacao-climatica` | partially mapped |
| PT-208-04 | 72–73 | Improve protection protocols for displaced people | `lula-adaptacao-climatica` | partially mapped |
| PT-X029 | 74 | Continue real minimum-wage appreciation policy | `lula-renda` | mapped |
| PT-X030 | 74 | Link public finance and procurement to quality jobs | `lula-empregabilidade` | partially mapped |
| PT-210-01 | 74 | Expand professional training | `lula-empregabilidade` | partially mapped |
| PT-210-02 | 74 | AI-based national employment platform | `lula-empregabilidade` | partially mapped |
| PT-210-03 | 74 | Create socially useful work opportunities | `lula-empregabilidade` | partially mapped |
| PT-211-01 | 74 | Combat fraudulent contractor classification | `lula-fiscalizacao-trabalho` | mapped |
| PT-212-01 | 74–75 | Define platform employment and remuneration and protections | `lula-trabalho-apps` | mapped |
| PT-212-02 | 74–75 | Algorithm transparency | `lula-trabalho-apps` | mapped |
| PT-212-03 | 74–75 | Retrain displaced workers | `lula-trabalho-apps` | mapped |
| PT-213-01 | 75 | Pursue 40-hour week and end 6x1 without salary cuts | `lula-jornada` | mapped |
| PT-214-01 | 75 | Revise precarious labor rules and outsourcing fraud | `lula-fiscalizacao-trabalho` | mapped |
| PT-X031 | 75 | Restore union assistance at termination | `lula-negociacao-coletiva` | partially mapped |
| PT-215-01 | 75 | Fight forced and child labor | `lula-fiscalizacao-trabalho` | mapped |
| PT-X032 | 75 | Include disabled people in employment | `lula-acessibilidade` | partially mapped |
| PT-216-01 | 75 | Mandatory company action plans | `lula-igualdade-salarial` | partially mapped |
| PT-216-02 | 75 | Progressive equal-pay targets | `lula-igualdade-salarial` | partially mapped |
| PT-216-03 | 75 | Broader inclusion and anti-discrimination | `lula-igualdade-salarial` | partially mapped |
| PT-217-01 | 75–76 | Support popular cooperatives | `lula-economia-solidaria` | unmapped |
| PT-217-02 | 75–76 | Territorial production networks | `lula-economia-solidaria` | unmapped |
| PT-217-03 | 75–76 | Technical assistance and incubation | `lula-economia-solidaria` | unmapped |
| PT-217-04 | 75–76 | Productive credit and public procurement | `lula-economia-solidaria` | unmapped |
| PT-218-01 | 76 | Self-employed credit and training | `lula-pequenos-negocios` | partially mapped |
| PT-218-02 | 76 | Technical and commercial support | `lula-pequenos-negocios` | partially mapped |
| PT-218-03 | 76 | Digital inclusion and tax simplification | `lula-pequenos-negocios` | partially mapped |
| PT-218-04 | 76 | Social protection during work interruptions | `lula-pequenos-negocios` | partially mapped |
| PT-219-01 | 76 | Strengthen collective bargaining and update union representation | `lula-negociacao-coletiva` | partially mapped |
| PT-220-01 | 76 | Bargaining training and mediation and arbitration | `lula-negociacao-coletiva` | partially mapped |
| PT-221-01 | 76–77 | Regulate public-sector collective bargaining | `lula-negociacao-coletiva` | partially mapped |
| PT-222-01 | 77 | Modernize benefit services | `lula-previdencia` | mapped |
| PT-223-01 | 77 | Diversify pension financing | `lula-previdencia` | mapped |
| PT-223-02 | 77 | Flexible contributions for discontinuous careers | `lula-previdencia` | mapped |
| PT-224-01 | 77 | Pension and accident and maternity coverage for platform work | `lula-trabalho-apps` | mapped |
| PT-226-01 | 78 | Strengthen defense industrial and technological base | `lula-defesa-tecnologia` | partially mapped |
| PT-227-01 | 78–79 | Cyber defense of infrastructure and government data | `lula-defesa-tecnologia` | partially mapped |
| PT-228-01 | 79 | Civilian and democratically accountable state intelligence | `lula-defesa-tecnologia` | partially mapped |
| PT-229-01 | 79 | Border and Amazon and maritime surveillance | `lula-defesa-tecnologia` | partially mapped |
| PT-229-02 | 79 | Border infrastructure and neighboring-country cooperation | `lula-defesa-tecnologia` | partially mapped |
| PT-231-01 | 79–80 | Independent non-interventionist constitutional foreign policy | `lula-integracao-regional` | partially mapped |
| PT-232-01 | 80 | Deepen Mercosur | `lula-integracao-regional` | partially mapped |
| PT-232-02 | 80 | South American multimodal connections to Pacific and Caribbean | `lula-integracao-regional` | partially mapped |
| PT-233-01 | 80 | Common South American energy market | `lula-integracao-regional` | partially mapped |
| PT-233-02 | 80 | Strengthen OTCA cooperation | `lula-integracao-regional` | partially mapped |
| PT-234-01 | 80 | Diversify global partnerships and trade agreements | `lula-integracao-regional` | partially mapped |
| PT-235-01 | 80 | Reciprocity and peaceful multilateral cooperation | `lula-integracao-regional` | partially mapped |
| PT-236-01 | 80–81 | African cooperation | `lula-integracao-regional` | partially mapped |
| PT-236-02 | 80–81 | South Atlantic peace | `lula-integracao-regional` | partially mapped |
| PT-236-03 | 80–81 | CPLP and African Union and ASEAN partnerships | `lula-integracao-regional` | partially mapped |
| PT-237-01 | 81 | Cooperation with Asia and Middle East and Europe | `lula-integracao-regional` | partially mapped |
| PT-238-01 | 81 | Reform UN Security Council representation | `lula-reforma-onu` | partially mapped |
| PT-238-02 | 81 | Restore WTO dispute settlement | `lula-reforma-onu` | partially mapped |
| PT-238-03 | 81 | Reform IMF and World Bank | `lula-reforma-onu` | partially mapped |
| PT-238-04 | 81 | Strengthen development banks and BRICS mechanisms | `lula-reforma-onu` | partially mapped |
| PT-239-01 | 81 | Strengthen BRICS and South-South and G20 ties | `lula-integracao-regional` | partially mapped |
| PT-240-01 | 81 | Expand South-South cooperation | `lula-cooperacao-tecnica` | partially mapped |
| PT-X033 | 81 | Accelerate SDGs and negotiate post-2030 agenda | `lula-cooperacao-tecnica` | partially mapped |
| PT-241-01 | 81 | Implement Global Alliance Against Hunger | `lula-cooperacao-tecnica` | partially mapped |
| PT-241-02 | 81 | Support TFFF | `lula-cooperacao-tecnica` | partially mapped |
| PT-242-01 | 81–82 | International AI and digital governance with data safeguards | `lula-ia-infraestrutura` | partially mapped |
| PT-243-01 | 82 | Uphold international gender and racial equality commitments | `lula-cooperacao-tecnica` | partially mapped |
| PT-244-01 | 82–83 | Consular assistance | `lula-cooperacao-tecnica` | partially mapped |
| PT-244-02 | 82–83 | Diaspora participation | `lula-cooperacao-tecnica` | partially mapped |
| PT-245-01 | 83 | Oppose foreign subordination | `lula-integracao-regional` | partially mapped |
| PT-246-01 | 83 | Defend national sovereignty | `lula-integracao-regional` | partially mapped |
