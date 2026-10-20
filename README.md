# Veritas

Informação eleitoral em português simples, com perfis, propostas comparáveis,
fontes e contexto. Iniciativa independente e não oficial do Projeto Veritas.

**Prévia editorial em desenvolvimento.** Abrir o código não significa que os
textos estejam aprovados ou que o site esteja publicado. Consulte os estados
individuais em `src/content.json`, `aprovacoes.json` e `VERIFICACAO.md`.

## Rodar localmente

Requisitos: Python 3.10+ e Node.js 20+. Sem dependências npm.

```sh
npm run check
npm run build
npm run preview
```

Abra http://127.0.0.1:4173. A galeria da home responde ao mouse no desktop e ao
deslize no celular. Texto e botões permanecem fora da área rolável.

## Organização

- `src/app.js`: navegação, componentes, busca e compartilhamento.
- `src/style.css`: identidade visual e responsividade.
- `src/content.json`: dados, fontes e estados editoriais.
- `src/assets/`: fotografias e recursos visuais.
- `scripts/build.py`: validação, prévia e barreira de publicação.
- `.github/`: CI, responsáveis por revisão e modelo de PR.
- `dist/` e `public/`: saídas geradas, fora do Git.

## Contribuir e publicar

Leia [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md) e
[ATTRIBUTIONS.md](ATTRIBUTIONS.md). O código é MIT; fotos têm licenças próprias.
PRs executam somente validações, sem deploy. O ambiente de produção exige
aprovação do mantenedor. Ainda não existe hospedagem pública configurada.

`npm run build:public` só funciona após aprovação editorial, conferência das
fontes, cobertura completa e autorização de lançamento. Não contorne a barreira.
