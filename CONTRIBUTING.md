# Como contribuir

Abra uma issue para discutir mudanças maiores e envie um pull request a `main`.
Não é necessário acesso de escrita. Forks e pull requests não publicam o site.

## Desenvolvimento

Requisitos: Python 3.10+ e Node.js 20+ (sem dependências npm).

```sh
npm run check
npm run build
npm run preview
```

Teste desktop, teclado e larguras de 320 e 390 px. Preserve a preferência por
movimento reduzido, contraste, foco visível e nomes acessíveis dos controles.
Não inclua arquivos gerados, segredos, dados pessoais não públicos ou imagens
sem licença de reutilização. Atualize ATTRIBUTIONS.md ao trocar fotos.

## Conteúdo

Use português simples, fontes rastreáveis e datas. Separe fatos, alegações,
defesas, propostas e interpretações. Aplique o mesmo critério aos candidatos.
Mudanças editoriais precisam de revisão: mantenha `status: draft` até aprovação
do mantenedor e `verification: checked` somente com conferência documental.
Nunca remova as barreiras de publicação para fazer o build passar.

## Commits

Faça commits pequenos, com uma finalidade cada, no padrão Conventional Commits:
`feat:`, `fix:`, `docs:`, `ci:`, `chore:`. Explique no PR o problema, a mudança,
as fontes quando aplicáveis e as verificações realizadas.

O mantenedor revisa código e conteúdo antes de integrar. Sugestões e críticas
são bem-vindas; ataques pessoais, exposição de dados e manipulação de fontes não.
