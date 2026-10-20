# Auditoria de cobertura dos programas oficiais

Consulta: 20/10/2026. Resultado: **a base não contempla integralmente os programas**. Esta rodada identificou lacunas concretas; não concluiu o inventário exaustivo e não aprovou nenhum texto para publicação.

## Base e método

A fotografia examinada de `src/content.json` contém 120 cards de propostas: 65 de Lula e 55 de Flávio. SHA-256: `252e8fbdc886b1d0e0fd03867c09d9bdb751319f011f1963313e91cbe5a21415`.

Foram lidos os títulos e resumos de todos os cards e, nos assuntos abaixo, também seus parágrafos e implicações. Uma busca literal em todos os campos dos cards foi usada como apoio, nunca como prova isolada de ausência. Uma menção temática genérica não equivale a cadastrar todas as medidas do tema.

Os dois documentos abriram diretamente no domínio oficial do TSE nesta rodada:

- [Programa PT — 84 páginas](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt).
- [Programa PL — 76 páginas](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pl).

As páginas abaixo são físicas, iniciadas em 1. A ferramenta de leitura usa índice iniciado em zero. Foram solicitadas imagens das páginas 57/PT e 26/PL; a ferramenta retornou referências sem pixels utilizáveis. Portanto, a conferência realizada foi textual, não visual. Data de depósito, versão e hash dos PDFs ainda precisam ser fixados antes da reconciliação final.

## Lula: lacunas documentadas

Fonte primária de todas as linhas: [programa PT no TSE](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt).

| Página | Medida no programa, em síntese | Situação na base | Tratamento recomendado |
|---|---|---|---|
| 57 | Desenvolver destinos e roteiros turísticos; promover o Brasil no exterior. | Não há card de turismo nem descrição equivalente. | Criar medida de turismo; comparar com `flavio-turismo`, distinguindo instrumentos. |
| 71–72 | Ampliar ProPatinhas, continuar SinPatinhas e combater maus-tratos. | `lula-biodiversidade` trata genericamente de espécies e ecossistemas; não registra esses compromissos. | Acrescentar proteção animal como medida própria. |
| 57 | Ampliar compras governamentais de pequenas empresas e apoiar sua inserção exportadora. | `lula-pequenos-negocios` cobre crédito; não cobre esses instrumentos. | Completar ou desmembrar o card; não contar crédito duas vezes. |

Esses achados demonstram propostas existentes que ainda não estavam representadas; não validam os números históricos ou promessas de resultado narrados no programa.

## Flávio: lacunas documentadas

Fonte primária de todas as linhas: [programa PL no TSE](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pl).

| Página | Medida no programa, em síntese | Situação na base | Tratamento recomendado |
|---|---|---|---|
| 26 | Usar IA para agendar consultas e exames, buscando vagas disponíveis. | `flavio-prontuario-cpf` cobre integração do histórico; não descreve agendamento. | Acrescentar submedida digital, preservando distinção entre promessa e resultado. |
| 27 | Simplificar outorgas de irrigação e acelerar titulação do pequeno proprietário rural. | `flavio-agro-alimentos` cobre logística, seguro e fertilizantes. | Criar medida de regularização e procedimentos rurais. |
| 28 | Integrar cadastros e controles para rastrear cadeias produtivas. | A referência a rastreabilidade existente é de emendas parlamentares; não é equivalente. | Acrescentar medida rural/ambiental; evitar substituição por rótulo genérico. |

A própria página 26 também documenta o prontuário único. O card hoje atribuído à seleção da Band pode receber a fonte primária do programa, sem apagar a evidência de que houve uma fala no debate.

## O que isso muda para comparações e compartilhamento

1. Não liberar afirmação “não tem proposta” por haver um card vazio. O caso de turismo demonstra risco concreto: existe proposta de Lula no programa, embora ainda não haja card correspondente.
2. Tampouco liberar “não encontramos nos documentos consultados” como conclusão definitiva antes de terminar a busca temática nos documentos completos e canais oficiais definidos na metodologia.
3. Na prévia editorial, o vazio deve ser tratado como cadastro em conferência. Uma imagem externa com apenas uma posição deve permanecer bloqueada até existir evidência explícita de conclusão da busca para aquele tema.
4. A presença de duas posições não basta: ambos os textos e suas fontes precisam de conferência e aprovação editorial.
5. 65 e 55 são contagens de cards, não de propostas atômicas. Um card pode reunir vários compromissos; não usar esses totais como prova de cobertura integral nem como denominador do programa sem explicar a unidade.

## Trabalho necessário para fechamento

- Fixar cópia, versão, paginação e hash de cada programa oficial.
- Percorrer todas as páginas, separando compromisso futuro, histórico, diagnóstico e crítica.
- Registrar cada compromisso em matriz: candidato, medida, página, paráfrase, card correspondente, cobertura completa/parcial/ausente e revisão.
- Deduplicar compromissos repetidos e desmembrar pacotes antes de calcular qualquer percentual.
- Conferir complementos oficiais de campanha separadamente do programa depositado no TSE, com datas e versões.
- Fazer revisão visual das passagens citadas e revisão editorial das inserções antes de alterar status.

Esta entrega é uma auditoria parcial com omissões comprovadas. Não afirma cobertura de 100%, não mede quantas propostas faltam no total e não muda `status`, `verification` ou permissões de publicação.

## Incorporação na prévia — 20/10/2026

As seis lacunas desta rodada foram cadastradas como rascunhos: `lula-turismo`, `lula-protecao-animal`, `lula-pequenas-empresas-mercados`, `flavio-agendamento-saude`, `flavio-regularizacao-rural` e `flavio-rastreabilidade-rural`. A base passou a 126 cards (68 de Lula e 58 de Flávio). Turismo ganhou comparação direta; isso não certifica completude dos demais temas.

O build público e o compartilhamento público de comparações agora exigem também a conferência e aprovação de `programCoverage`, além da revisão dos textos. A prévia editorial continua disponível com marca de revisão. Teste isolado confirmou que aprovar os textos não contorna o bloqueio de cobertura.
