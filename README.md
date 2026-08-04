# HTECH Website

The site at [teamhtech.com](https://teamhtech.com), built with
[Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com) and
hosted on GitHub Pages.

## How to make changes for non developers

### Changing files

Use the
[GitHub online edit](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)
feature to change files.

When you commit your changes (step 7 of the guide above), create a new pull
request rather than committing directly to `main`.

### Deploying

Nothing to do. Merging to `main` builds and deploys the site automatically;
it goes live a couple of minutes later. Progress is visible on the
[Deploy workflow](https://github.com/heritageholdings/web-htech/actions/workflows/deploy.yaml)
dashboard.

This used to be a manual step, which is how a January 2026 address correction
sat unpublished for seven months.

### Changing company details

The address, VAT number, email addresses, and navigation links all live in one
file: [`src/config/site.ts`](src/config/site.ts). Edit them there and every page
updates. Do not hardcode them into a page — the footer and the contacts page
previously held separate copies of the address and drifted apart.

## Development

### Prerequisites

- [nodenv](https://github.com/nodenv/nodenv) (the required Node version is
  pinned in `.node-version`)
- npm

### Setup

```
$ npm install
```

### Develop

```
$ npm run dev
```

Serves the site at http://localhost:4321 with hot reloading.

### Other commands

| Command           | Does                                    |
| ----------------- | --------------------------------------- |
| `npm run build`   | Builds the production site into `dist/` |
| `npm run preview` | Serves the built site locally           |
| `npm run check`   | Type-checks the project                 |
| `npm run format`  | Formats all source files with Prettier  |

## Structure

```
src/
  config/site.ts     company details, used everywhere
  layouts/           the page shell, including all SEO meta tags
  components/        nav, page header, footer
  pages/             one file per route
  assets/            images, optimised at build time
public/              copied verbatim to the site root (CNAME, favicon, robots)
```

## Deployment notes

Pushing to `main` runs
[`.github/workflows/deploy.yaml`](.github/workflows/deploy.yaml), which builds
the site and pushes `dist/` to the **`gh-pages` branch**. GitHub Pages serves
that branch.

The repository's Pages source must stay on **Settings → Pages → Source → Deploy
from a branch → `gh-pages` → `/ (root)`**. No other configuration is needed.

Three files in `public/` are load-bearing. Astro copies that directory verbatim
to the site root, so they end up in `dist/` and then on `gh-pages`:

- **`CNAME`** points the custom domain at this site. Without it, teamhtech.com
  stops resolving here.
- **`.nojekyll`** stops GitHub Pages running Jekyll over the branch. Jekyll
  discards directories starting with an underscore, and Astro puts all CSS, JS
  and images in `_astro/` — so without this file the site deploys unstyled and
  imageless.
- **`robots.txt`** and `favicon.svg`, which are ordinary static files.

Note that `public/` is **source**, not build output — under Gatsby it was the
build directory and was gitignored. It must stay tracked in git.

For the full set of repository conventions and pitfalls, see
[CLAUDE.md](CLAUDE.md).
