# Segurança e publicação

## Reportar vulnerabilidades

Use a aba Security > Report a vulnerability no GitHub. Não publique segredos ou
instruções de exploração em issues públicas. O mantenedor é @guilopeszw.

## Modelo de acesso

- Repositório público: qualquer pessoa pode ler e propor um PR; isso não concede escrita.
- `main` exige PR e o check `validate`, com revisão. O administrador conserva recuperação.
- Force pushes e exclusão da branch principal são bloqueados.
- Actions tem token somente de leitura. CI de PR não recebe segredos de produção.
- Não usamos `pull_request_target`, runners próprios ou execução de código de forks com privilégios.
- Não existe workflow de deploy nesta edição; GitHub Pages não está habilitado.
- O ambiente `production` exige aprovação de @guilopeszw e aceita somente `main`.

Não há garantia contra todo ataque. A conta administradora pode alterar as regras;
proteja-a com passkey/2FA e revise colaboradores, tokens e logs periodicamente.
Não adicione tokens duradouros ao código. Uma futura publicação deve usar permissões
mínimas, workflow revisado e ambiente protegido, após aprovação editorial.

## Primeira publicação

A autorização para abrir o código não aprova textos ou lançamento do site.
`python3 scripts/build.py --public` bloqueia conteúdo não aprovado/verificado,
cobertura incompleta ou ausência de `launchApproved`. Apenas a saída `public/`
pode ser usada no futuro deploy. Não publicar a prévia `dist/` como atalho.
