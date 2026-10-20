# Contributing

Veritas is maintained by Projeto Veritas. The repository is currently private;
these guidelines also describe the intended public contribution workflow.
Discuss substantial changes in an issue before opening a pull request to `main`.
Contributors do not need deployment access. Forks and pull requests cannot
publish the website.

## Development

Requirements: Python 3.10+ and Node.js 20+. There are no npm dependencies.

```sh
npm run check
npm run build
npm run preview
```

For UI changes, check desktop, keyboard navigation, and 320 px and 390 px
viewports. Preserve reduced-motion preferences, contrast, visible focus, and
accessible control names. Simulated viewports are not physical-device tests.

Do not commit generated output, secrets, nonpublic personal information, or
images without reuse permission. Update [ATTRIBUTIONS.md](ATTRIBUTIONS.md) when
changing photographs.

## Language and editorial standards

Write documentation, repository metadata, and commit messages in English.
User-facing content remains in clear Brazilian Portuguese. Preserve official
names, source quotations, URLs, and machine identifiers when translating docs.

Use traceable sources and dates. Separate facts, allegations, responses,
proposals, and interpretation. Apply the same evidentiary standard to both
candidates. Official programs establish campaign commitments, not proven future
results. An empty comparison cell does not establish that a candidate has no
proposal.

Keep new or changed editorial material at `status: draft` until maintainer
approval. Set `verification: checked` only after documentary verification of
that version. Earlier approval does not automatically cover later additions.
Do not remove publication or coverage gates to make a build succeed.

For each new commitment, record the candidate, policy, source page or timestamp,
retrieval date, corresponding card, and unresolved questions. Avoid counting
several commitments in one card as a single exhaustive measure of a program.

## Commits and reviews

Use small, single-purpose Conventional Commits: `feat:`, `fix:`, `docs:`, `ci:`,
or `chore:`. Explain the problem, final behavior, supporting sources, and checks
performed. Maintainer-authorized direct commits to `main` are an exception to
the contributor PR workflow, not permission for anyone to bypass review.

Review code and editorial content before integration. Criticism and corrections
are welcome; harassment, exposure of private data, and source manipulation are not.
