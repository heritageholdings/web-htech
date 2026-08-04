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

Deployment uses the official `actions/deploy-pages` flow, which requires the
repository's **Settings → Pages → Source** to be set to **GitHub Actions**.

`public/CNAME` is what keeps the custom domain pointed at this site. It must
stay in `public/`, which is why that directory is deliberately not gitignored.
