# Segurança e publicação

[English — versão principal](SECURITY.md) · Português (Brasil)

## Comunicar vulnerabilidades

Use Security → Report a vulnerability no GitHub, se disponível. Caso contrário,
contate @guilopeszw em privado. Não publique senhas, tokens ou detalhes de exploração
em issues públicas.

## Quem pode alterar e publicar

Código público não concede acesso de escrita ou deploy. Na conferência de 21/10/2026,
@guilopeszw é o único colaborador. A `main` exige check `validate`, uma aprovação,
revisão do responsável, descarte de aprovações antigas e resolução das conversas.
Force push e exclusão estão bloqueados. O administrador mantém a exceção para seus
commits diretos expressamente autorizados.

A validação automática usa token somente de leitura e checkout fixado por hash,
sem persistir credenciais. Não há workflow de deploy ou publicação por GitHub Pages.
O ambiente `production` aceita apenas `main`; a aprovação deve ser conferida após
mudanças de visibilidade e antes de habilitar qualquer workflow de publicação.

O projeto Cloudflare Pages `eleicoesveritas` usa envio manual, sem integração Git.
Ainda não houve deploy. O domínio escolhido é `eleicoesveritas.com.br`. A lista de
membros da Cloudflare contém apenas o proprietário e não havia tokens pessoais ou
de conta na conferência de 21/10/2026. Isso não comprova que a chave global nunca
foi compartilhada. Use autenticação em dois fatores e revise os acessos.

## Travas de lançamento

Abrir o repositório não autoriza publicar o site. O build público exige aprovação do
hash exato da edição filtrada em `src/release-approval.json` e autorização separada
`launchApproved`. Alterar o conteúdo invalida o hash aprovado.

Somente a pasta `public/`, gerada por `python3 scripts/build.py --public`, pode ser
usada em um lançamento. Não publique `dist/` nem `release-review/` para contornar
as travas. Nunca inclua credenciais no Git. Nenhum scanner ou proteção garante
segurança absoluta; confira a aplicação efetiva das regras antes de cada alteração
no processo de deploy.
