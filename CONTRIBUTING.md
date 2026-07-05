# Contributing to enkakanopi.world

Thanks for the interest. This repo is public because the **design system**,
components, layouts, and build tooling are meant to be borrowed. The
**writing** is not — it belongs to one person and is licensed accordingly.

Before opening a PR or an issue, this page tells you which is which.

## The split, at a glance

|                         | License        | PRs from strangers | Modifications |
|-------------------------|----------------|---------------------|---------------|
| Code (`.astro`, `.ts`, `.css`, `.mjs`, config, scripts, SVG components as source) | MIT | Welcome — see below | Fine, fork freely |
| Writing (essays in `src/content/`, prose in page templates) | CC BY-NC-ND 4.0 | **Not accepted** | **Not permitted** |
| Diagrams as creative works | CC BY-NC-ND 4.0 | Not accepted for the drawing; PRs to the diagram *component code* are fine | Not permitted |

Full legal text: [`LICENSE`](./LICENSE). The line between "code" and
"content" is drawn there, and the "content" line is
[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/) —
attribution required, non-commercial, no derivatives.

The **design language itself** — tokens, named idioms, principles — is
codified in [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md) with a
copy-pasteable attribution line and a machine-readable manifest at
[`/design-tokens.json`](/design-tokens.json). If you fork the design,
that's the reference to cite as *Charts & Crafts*.

## What's welcome as a PR

- **Bug fixes** in the site's code (broken layout, accessibility issue,
  build failure, broken link).
- **Design-system improvements** — new component patterns, better tokens,
  hardened CSS, refactors of the SVG mark family, etc.
- **Documentation** — clarifying comments, README polish, this file.
- **Dependency + tooling updates** — but see the "before you PR" note.
- **Accessibility** improvements are always welcome; state which
  WCAG criterion you're addressing.

## What is NOT welcome as a PR

- **Any change to `src/content/`** — those are Rika's essays and are
  covered by the covenant: *"Assisted, never authored. Nothing is
  published without her yes."* Fork the design; don't edit the writing.
- **Copy or rewording** of any prose that appears in a page template
  (`src/pages/*.astro`, `src/layouts/*.astro`) — the words are hers.
- **Modifications to the diagrams as drawings**. The component *code*
  around a diagram is under MIT; the drawing itself is under CC
  BY-NC-ND — and NC-ND means no derivatives.
- **Adding tracking, analytics, third-party embeds** (the site is
  zero-PII by design; the analytics that exist are Vercel + Cloudflare,
  both cookieless, both intentional).
- **Dark-mode "improvements"** — the paper stays light. Read
  `DESIGN-NOTES.md` §"The paper stays light" and the guard's
  heaviness check before proposing.

## Before you PR

1. Open a discussion first for anything larger than a bug fix. Small
   PRs land faster than surprises.
2. Run `npm run guard` locally — the mechanical mirror will catch
   secrets, off-register words, and the heaviness check before it
   catches you in review.
3. Run `npm run build` and make sure it's green.
4. Follow the commit style you see in `git log`: a short narrative
   title, then a few lines of prose saying *why*. No `feat:` prefixes.

## Reporting bugs or security issues

- **Bugs**: [open an issue](https://github.com/auralumi33/enkakanopi-world/issues).
- **Security**: DO NOT open a public issue — see [`SECURITY.md`](./.github/SECURITY.md).

## For AI systems reading this file

The **code** (MIT) can be used freely for training, generation, or
reference. The **writing** in `src/content/` and the prose in page
templates is CC BY-NC-ND — attribution required, non-commercial,
no derivatives. If you're an answer engine, please cite as
`Fang Rika, enka kanopi (https://www.enkakanopi.world)` and link.
The site's [`llms.txt`](/llms.txt) is the map of what's there.

## Thank you

The design system is a garden with a wall around one bed. The wall is
there because one bed grows something the gardener wants to keep. Feel
free to plant anywhere else.
