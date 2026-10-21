# Security and deployment

## Reporting vulnerabilities

Use GitHub's **Security → Report a vulnerability** if available. If private
reporting is unavailable, contact the maintainer, **@guilopeszw**, privately;
do not publish secrets or exploit instructions in public issues.

## Access model

The following is the configuration record from 2026-10-20, not a guarantee that
GitHub settings cannot change. Recheck enforcement before the first deployment.

- The repository is temporarily private at the maintainer's request.
- The MIT code license remains. Making the repository public requires a separate
  maintainer decision.
- `main` is configured to require a PR and the `validate` check, with review.
  The administrator retains bypass/recovery access. Maintainer-authorized direct
  pushes have used that exception.
- Force pushes and deletion of the default branch are configured as blocked.
- Actions uses a read-only token. PR CI does not receive production secrets.
- There is no `pull_request_target`, self-hosted runner, or privileged execution
  of fork code in this configuration.
- There is no deployment workflow; GitHub Pages is not enabled.
- The `production` environment accepts only `main`. After the repository became
  private, GitHub removed the required reviewer. Restoring it returned HTTP 422:
  the current plan does not support that protection for this private repository.
- Do not add automatic deployment until effective maintainer authorization is
  enforced. Stored settings are not proof that protections are applied.

There is no guarantee against every attack. Administrators can change rules.
Protect accounts with passkeys/2FA and review collaborators, tokens, and audit
logs. Never commit long-lived tokens. Future deployment must use minimal
permissions, a reviewed workflow, and effective release protection.

## First release

Permission to open-source the code does not approve content or launch.
`python3 scripts/build.py --public` applies the same filter as `--release-review`,
excluding pending debate metrics, program-completeness metadata and atomic downloads.
It requires the exact filtered content hash approved in `src/release-approval.json`
and separate `launchApproved`. Approval of one filtered edition does not approve
the full research corpus. A content change invalidates the approved hash. Only the generated `public/`
output may be used for a future release; never deploy `dist/` as a workaround.
