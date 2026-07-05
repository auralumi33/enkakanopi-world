# Security policy

Thank you for taking the time to look. This repository is the source of
[enkakanopi.world](https://www.enkakanopi.world) — a small static site.
There is no user data, no accounts, no server-side state. But small doesn't
mean careless; if you've found something worth reporting, please tell me.

## Reporting a vulnerability

**Please do NOT open a public GitHub issue for security reports.**

Preferred channel — GitHub's private disclosure:

- Go to the **Security** tab on this repository → **Report a vulnerability**.
- GitHub routes the report to me privately.

Alternate channel — email:

- `hello@enkakanopi.world` — I read this address; put "security" in the
  subject line so it lands in the right thread.

Please include:

- A clear description of the issue.
- Steps to reproduce (if applicable).
- Any impact you're aware of.

I'll acknowledge receipt within 72 hours. I don't run a formal bounty
programme (this is a personal garden site, not a product), but I'm
genuinely grateful for the report and happy to credit you in the fix
commit if you'd like.

## Scope

In scope:
- Vulnerabilities in the site's code (Astro components, scripts, workflows).
- Supply-chain concerns (npm dependencies, GitHub Actions pins).
- Configuration issues (branch protection, secret exposure, CI settings).

Out of scope:
- Vulnerabilities in Vercel (the site's host) — report to
  [Vercel Security](https://vercel.com/security).
- Vulnerabilities in GitHub itself — report to
  [GitHub Security](https://bounty.github.com/).
- Findings that require physical access to a machine I control.
- Social-engineering the maintainer.

## What is NOT in scope but I still want to know about

- Personally identifying information exposed anywhere on the live site
  (beyond the author name "Fang Rika" and the public contact address).
- References to adjacent ventures / private doctrine in code, comments,
  or git history — those violate the site's firewall and should be
  reported the same way as a vulnerability.
