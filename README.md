# Veritas

[English](README.md) · [Português (Brasil)](README.pt-BR.md)

Independent, source-backed information about Brazil's presidential election.
Veritas helps readers compare candidates, understand proposals, and inspect the
evidence behind public claims. The website is written in plain Brazilian
Portuguese; English is the canonical documentation language, with Brazilian Portuguese guides.

**Status: open-source code · editorial preview · website not publicly deployed.**
The code is MIT-licensed. This does not imply editorial approval, verified
completeness, or authorization to publish the website.

## What the site provides

- Candidate profiles, declared assets, official channels, and political records.
- Side-by-side proposals grouped by the same policy topic, with search and filters.
- Timelines, fact-checking, debate evidence, and international-policy context.
- Comparison images formatted for Stories; public sharing remains gated by
  content approval and program-coverage verification.

## Run locally

Requires **Python 3.10+** and **Node.js 20+**. No npm dependencies are needed.

```sh
git clone https://github.com/guilopeszw/veritas.git
cd veritas
npm run check
npm run build
npm run preview
```

Open
[the local preview](http://127.0.0.1:4173). The homepage gallery supports desktop
pointer interaction and mobile swiping, with text and controls outside the
scrolling images.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/app.js` | Routing, components, search, and sharing |
| `src/style.css` | Visual design and responsive layout |
| `src/content.json` | Content, sources, and editorial/verification states |
| `src/assets/` | Photographs and other visual assets |
| `scripts/build.py` | Validation, preview generation, and publication gates |
| `aprovacoes.json` | Approval configuration |
| `.github/` | CI, review ownership, and contribution templates |
| `docs/` | Editorial audit records and design proposals |
| `dist/`, `public/` | Generated outputs, excluded from Git |

## Evidence and publication

Editorial approval and factual verification are separate. An official campaign
program supports attribution of a promise; it does not establish feasibility,
funding, effectiveness, or the truth of historical claims within it. Missing
content in our database is not evidence that a candidate has no proposal.

`npm run build:public` uses the same checked-content filter as release review.
It requires approval of the exact filtered content hash in `src/release-approval.json`
and separate launch authorization. Excluded coverage metrics are not published. Never bypass these gates or deploy
the editorial `dist/` output. There is no deployment workflow. An empty Cloudflare Pages project,
`eleicoesveritas`, is prepared for manual upload; no website has been deployed.
The selected domain is `eleicoesveritas.com.br`. See [security and deployment](SECURITY.md) for access-control limits.

## Documentation

- [Documentation index](docs/README.md)
- [Contribution guide](CONTRIBUTING.md) / [Como contribuir](CONTRIBUTING.pt-BR.md)
- [Verification record](VERIFICACAO.md)
- [Image attribution and licensing](ATTRIBUTIONS.md)
- [Program coverage audit](docs/programas-cobertura-auditoria.md)
- [Latest partial coverage review](docs/programas-cobertura-rodada-02.md)
- [Electoral dashboard options](docs/electoral-dashboards.md)

Audit reports are dated snapshots, not live approval certificates. Their older
counts and findings must be reconciled with `src/content.json` before release.
Photographs retain their individual licenses; the code license does not replace
their attribution or reuse requirements.
