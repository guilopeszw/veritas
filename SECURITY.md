# Security and deployment

[English](SECURITY.md) · [Português (Brasil)](SECURITY.pt-BR.md)

## Reporting vulnerabilities

Use GitHub Security → Report a vulnerability when available. Otherwise contact
maintainer @guilopeszw privately. Never post secrets or exploit details in public issues.

## Access model

Public source access does not grant write or deployment access. As checked on
2026-10-21, @guilopeszw is the sole repository collaborator. `main` requires the
`validate` status check, an approving review, code-owner review, dismissal of stale
reviews and resolution of conversations. Force pushes and branch deletion are blocked.
The owner retains administrator bypass for explicitly authorized direct commits.

CI uses a read-only token and a pinned checkout action without persisted credentials.
There is no deployment workflow, privileged fork workflow, or GitHub Pages deployment.
The production environment is restricted to `main`; its approval configuration must
be verified after repository visibility changes and before enabling any deploy workflow.

Cloudflare Pages project `eleicoesveritas` uses manual upload, without a Git connection.
No site deployment has been made. The selected domain is `eleicoesveritas.com.br`.
The account member list contains only the owner; no account or user API tokens were
listed at the 2026-10-21 check. This does not prove that the global API key has never
been shared. Never commit credentials. Keep account access and any future tokens
restricted to authorized maintainers; use 2FA and review access regularly.

## Release controls

Opening the repository does not authorize website publication. The public build
requires an approved exact filtered-content hash in `src/release-approval.json` and
separate `launchApproved` authorization. Changes invalidate the content hash.
Use only `python3 scripts/build.py --public` and its generated `public/` directory
for a release. Never deploy editorial `dist/` or bypass the gates. `release-review/`
is a local review output, not a substitute deployment path.

No scanner or branch rule guarantees absolute security. Review permissions and
actual enforcement before every change to the deployment model.
