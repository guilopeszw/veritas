# Como contribuir

[English — versão principal](CONTRIBUTING.md) · Português (Brasil)

O Veritas é mantido pelo Projeto Veritas. Use as
[issues](https://github.com/guilopeszw/veritas/issues) para sugerir melhorias ou
correções e envie um pull request para `main`. Converse antes sobre mudanças grandes.
Contribuir não concede acesso à hospedagem nem permissão para publicar.

## Desenvolvimento e validação

Use Python 3.10+ e Node.js 20+. Não há dependências npm.

```sh
npm run check
npm run build
python3 scripts/build.py --release-review
python3 scripts/test_release.py
node scripts/test_reader.mjs
npm run preview
```

Em mudanças de interface, confira computador, teclado e larguras de 320 e 390 px.
Preserve contraste, foco visível, nomes acessíveis e preferência por movimento
reduzido. Simular um tamanho de tela não substitui um teste em aparelho físico.

## Correções e fontes

Informe o link do card, o problema, a fonte, a data e, quando houver, página ou
timestamp exato. Separe fatos, acusações, respostas, propostas e interpretações.
Aplique os mesmos critérios aos dois candidatos. Não atribua intenção sem evidência.

Mantenha conteúdo novo ou alterado como `status: draft` até aprovação do responsável.
Use `verification: checked` somente após conferir documentalmente aquela versão.
Não remova travas de publicação para fazer um build passar. Não trate um campo vazio
como prova de ausência de proposta. Ao mapear compromissos, registre candidato,
medida, fonte, página/timestamp, data de consulta, card e dúvidas pendentes.

## Arquivos e idiomas

Não envie senhas, tokens, dados pessoais não públicos, mídia local de revisão nem
arquivos gerados. Use imagens com permissão de reutilização e atualize
[ATTRIBUTIONS.md](ATTRIBUTIONS.md).

Documentação principal, metadados do repositório e mensagens de commit ficam em
inglês. Atualize os guias PT-BR correspondentes. O site permanece em português
brasileiro simples. Preserve nomes oficiais, citações, URLs e identificadores.

## Commits e revisão

Faça commits pequenos com Conventional Commits (`feat:`, `fix:`, `docs:`, `ci:`,
`chore:`). Explique problema, mudança, fontes e validações no pull request.
O responsável pode autorizar commits diretos próprios; essa exceção não se estende
a contribuidores. Correções são bem-vindas; assédio, exposição de dados privados e
manipulação de fontes não são aceitos.

Para vulnerabilidades, siga [SECURITY.pt-BR.md](SECURITY.pt-BR.md), sem expor segredos
em issues públicas.
