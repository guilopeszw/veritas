# Veritas

[English — versão principal](README.md) · Português (Brasil)

Informação independente, com fontes, sobre a eleição presidencial brasileira.
Compare candidatos, propostas e evidências em português simples. O projeto também
pretende acompanhar o cumprimento das propostas após a eleição; isso é uma direção
futura, não uma funcionalidade já certificada.

**Código aberto · prévia editorial · site ainda não publicado.**
A licença MIT do código não equivale a aprovação editorial nem autorização de deploy.

## O que você encontra

- Perfis, bens declarados, canais oficiais e histórico político.
- Propostas lado a lado por assunto, com pesquisa e filtros.
- Linha do tempo, checagens, evidências de debates e contexto internacional.
- Recursos de compartilhamento sujeitos às regras de revisão e publicação.

## Executar localmente

Requisitos: Python 3.10+ e Node.js 20+. Não há dependências npm para instalar.

```sh
git clone https://github.com/guilopeszw/veritas.git
cd veritas
npm run check
npm run build
npm run preview
```

Abra http://127.0.0.1:4173. A prévia editorial pode conter material que não integra
a edição pública. Para gerar a prévia filtrada:

```sh
python3 scripts/build.py --release-review
```

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `src/app.js` | Rotas, componentes, pesquisa e compartilhamento |
| `src/style.css` | Estilos e adaptação ao celular |
| `src/content.json` | Textos, fontes e estados de revisão |
| `src/assets/` | Fotografias e outros recursos visuais |
| `scripts/` | Builds, verificações e controles de publicação |
| `docs/` | Documentação e registros datados de apuração |
| `.github/` | Validação automática e responsáveis pela revisão |

## Fontes e publicação

Uma promessa em programa oficial não comprova viabilidade ou resultado futuro.
A ausência de dados cadastrados não prova que um candidato não tenha proposta.
Conferência factual e aprovação editorial são etapas diferentes.

O build público exige aprovação do resumo criptográfico exato da edição filtrada
e autorização separada de lançamento. Nunca publique `dist/` para contornar esses
controles. O projeto Cloudflare Pages `eleicoesveritas` está preparado, sem deploy;
o domínio escolhido é `eleicoesveritas.com.br`.

## Documentação

- [Como contribuir](CONTRIBUTING.pt-BR.md)
- [Segurança e publicação](SECURITY.pt-BR.md)
- [Índice de documentação](docs/README.pt-BR.md)
- [Créditos e licenças das imagens](ATTRIBUTIONS.md)
- [Licença do código](LICENSE)

Relatórios antigos são registros de uma versão e não certificados de aprovação
atual. As imagens mantêm suas próprias licenças. Em caso de divergência entre os
guias, consulte a versão principal em inglês e abra uma correção.
