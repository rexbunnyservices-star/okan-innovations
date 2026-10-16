# Okan Innovations

Marketing site for Okan Innovations — a design-and-build contractor
(interior design, decoration, electrical, MEP) based in Dehradun, Uttarakhand.

Built with [Astro](https://astro.build) (static output), deployed to GitHub Pages.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Preview the built site |
| `npm run check` | Runs the quote-builder self-test (12 assertions) |

## Editing content

All copy, services, projects, and contact details live in a single file:
`src/lib/content.ts`. Change it there — no need to touch the page templates.

> **TODO before launch:** `site.whatsapp`, `site.phone`, and `site.email` are
> still placeholders. Replace them in `src/lib/content.ts`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site, runs the checks, and force-pushes `dist/` to the `gh-pages` branch.
Pages serves that branch.

Live URL: <https://rexbunnyservices-star.github.io/okan-innovations/>

The site is hosted under the `/okan-innovations` subpath, so any root-absolute
URL in markup must be wrapped with the `u()` helper from `src/lib/urls.ts`.
