# CLAUDE.md

Guidance for agents and developers working in this repository.

## What this is

The marketing site at [teamhtech.com](https://teamhtech.com): three static pages
(home, about, contacts) built with Astro and Tailwind CSS, served by GitHub
Pages. It was migrated off Gatsby in August 2026.

## Commands

Use **npm**, not yarn. The Node version is pinned in `.node-version` (nodenv).

| Command           | Does                                |
| ----------------- | ----------------------------------- |
| `npm install`     | Install dependencies                |
| `npm run dev`     | Dev server at http://localhost:4321 |
| `npm run build`   | Production build into `dist/`       |
| `npm run preview` | Serve the built site                |
| `npm run check`   | Type-check (`astro check`)          |
| `npm run format`  | Prettier over the whole repo        |

Before claiming a change works, run `npm run check` **and** `npm run build`.
There is no test suite; the build and the type-check are the gate.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yaml`, which builds the site
and pushes `dist/` to the **`gh-pages` branch** via `peaceiris/actions-gh-pages`.
GitHub Pages serves that branch.

The repository's Pages source must stay on **Deploy from a branch → `gh-pages`
→ `/ (root)`**. Do not switch it to "GitHub Actions" without also replacing the
workflow — the two approaches are mutually exclusive.

Deploys used to be manual (`workflow_dispatch` only). That is why an address
correction committed in January 2026 sat unpublished until August. Keep deploys
automatic.

## Things that will silently break the site

These are not hypothetical. Each one either has bitten this repo or was caught
just before it did.

**`public/` is source, not output.** Under Gatsby, `public/` was the build
directory and was gitignored. Under Astro the build goes to `dist/` and
`public/` holds files copied verbatim to the site root. If `public/` is ever
gitignored again, `CNAME` disappears and the custom domain breaks.

**`public/.nojekyll` is load-bearing.** GitHub Pages runs Jekyll over the
`gh-pages` branch, and Jekyll discards directories whose names begin with an
underscore. Astro emits all CSS, JS and images into `_astro/`. Without
`.nojekyll` the site deploys with no styling and no images. Do not remove it.

**`public/CNAME` holds the custom domain.** It must survive into `dist/`, which
it does automatically because Astro copies `public/` verbatim. If it goes
missing, teamhtech.com stops resolving to this site.

**Never build Tailwind class names by string interpolation.** Tailwind scans
source for complete literal class names. The old React nav did
``className={`hover:${colour}`}``, so that class was never generated and
navigation hover states silently did nothing for years. Write both variants out
in full and pick between them:

```ts
const linkClass = darkBg
  ? "font-medium text-gray-400 hover:text-gray-200"
  : "font-medium text-gray-500 hover:text-gray-900"
```

**Astro emits no whitespace between adjacent expressions.** `{a}` and `{b}` on
separate lines render as `ab`, not `a b`. Prettier will happily split a line and
introduce this. It produced `© 2026HTECH S.r.l.` in the footer once. For display
strings that mix values and punctuation, assemble them in the frontmatter:

```ts
const line = `© ${year} ${site.legalName} • VAT ${site.vat} • ${addressOneLine}`
```

## Company details live in one place

Address, VAT number, email addresses and navigation links are all in
[`src/config/site.ts`](src/config/site.ts). Read them from there.

Do not hardcode them into a page. The footer and the contacts page previously
held separate copies of the office address and drifted apart, so the site
displayed two different addresses at once.

## Structure

```
src/
  config/site.ts     company details, used everywhere
  layouts/Base.astro the page shell and every SEO meta tag
  components/        Nav, Header, Footer
  pages/             one file per route
  assets/            images, optimised at build time by astro:assets
public/              copied verbatim to the site root (CNAME, .nojekyll, favicon,
                     robots.txt, og-image.png)
dist/                build output, gitignored
```

## Conventions

- Images belong in `src/assets/` and are rendered with `<Image>` from
  `astro:assets`, which produces responsive WebP. Do not hotlink remote images;
  every image on the site used to be pulled from Unsplash at page load.
- Decorative images (the page-header background, which sits behind a colour
  overlay) take `alt=""`. Images carrying meaning take real alt text.
- The site ships no framework JavaScript. If something needs interactivity,
  prefer a small inline `<script>` over adding a React island — the mobile menu
  in `src/components/Nav.astro` is the pattern to follow, including its
  `aria-expanded`, Escape handling and focus management.
- Every page passes an explicit `title` to `Base.astro`. The old homepage
  shipped with an empty `<title>`.

## Changing copy

Appearance and wording are deliberate and were carried over verbatim from the
Gatsby site. Do not rewrite copy as a side effect of another change.

One known wart, left alone on purpose: the About page reads "We help investment
managers solving their hardest…". Fix it only if asked.
