# enka kanopi

A canopy for a self in motion — a quiet garden of essays and hand-drawn diagrams about identity, craft, and the body, kept openly unfinished as *Volume I · In Formation*. Built by hand with [Astro](https://astro.build): static output, warm paper, ink, one poppy mark held back for the places the eye should land.

---

**Run it**

```sh
npm install
npm run dev      # local, with live reload
npm run build    # static output → dist/
npm run guard    # the mechanical mirror — secrets + off-register check
npm run verify   # guard → type-check → build
```

Essays live in `src/content/` as Markdown/MDX, organised by growth stage — *seedling · budding · evergreen* — never by date. The drawing hand (glyphs, diagrams, tokens) lives in `src/components/` and `src/styles/`.

- Design language, tokens, named idioms — [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md) (the external reference — copy-pasteable attribution, cite as *Charts & Crafts*)
- Design reasoning, the working record — [`DESIGN-NOTES.md`](./DESIGN-NOTES.md)
- How the garden is tended (the note → mirror → grow chain, and the guard) — [`ARCHITECTURE.md`](./ARCHITECTURE.md)
- Machine-readable token manifest — [`/design-tokens.json`](https://www.enkakanopi.world/design-tokens.json)

Licensing is split: the **code** is MIT (borrow freely — components, layouts, tokens, build tooling), the **writing and drawings** are CC BY-NC-ND 4.0 (attribution required, non-commercial, no derivatives). See [`LICENSE`](./LICENSE) for the exact line between them, [`CONTRIBUTING.md`](./CONTRIBUTING.md) for what PRs are welcome, and [`SECURITY.md`](./.github/SECURITY.md) for how to report a vulnerability.
