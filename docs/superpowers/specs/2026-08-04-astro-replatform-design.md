# teamhtech.com — Replatform to Astro

**Date:** 2026-08-04
**Status:** Approved

## Goal

Modernise the HTECH marketing site: replace the unmaintained Gatsby 4 / React 17
stack with Astro, fix accumulated bugs, and make deploys automatic. The site's
appearance and copy stay as they are — this is a stack and hygiene exercise, not
a redesign.

## Background

The site is three static pages (home, about, contacts) built from the Gatsby
default starter. It was last deployed on 3 February 2023. A commit from
19 January 2026 (`400b371`) corrected the office address but never reached
production, because the deploy workflow is `workflow_dispatch`-only and nobody
triggered it. The live site therefore still shows a superseded address.

Gatsby has seen effectively no development since Netlify wound down the team, so
staying on it means repeating this migration later.

## Target stack

| Concern         | Current                                       | Target                                  |
| --------------- | --------------------------------------------- | --------------------------------------- |
| Framework       | Gatsby 4.5, React 17                          | Astro 7                                 |
| Styling         | Tailwind 3 + PostCSS                          | Tailwind 4 via `@tailwindcss/vite`      |
| Node            | 16.13.1 (EOL)                                 | 24 LTS                                  |
| Head / SEO      | `gatsby-plugin-react-helmet`                  | Native `<head>` in a layout             |
| Images          | Hotlinked from Unsplash                       | Local, via `astro:assets`               |
| Package manager | yarn (installed ad hoc in CI)                 | npm                                     |
| Deploy          | Manual trigger → `peaceiris/actions-gh-pages` | Push to `main` → `actions/deploy-pages` |

The site should ship approximately zero JavaScript, replacing a React bundle of
roughly 100 KB.

## Structure

```
src/
  config/site.ts        single source of truth: company, address, VAT, emails, nav
  layouts/Base.astro    <html> shell, SEO meta, global styles
  components/
    Nav.astro           navigation and mobile menu
    Header.astro        page header with background image
    Footer.astro
  pages/
    index.astro
    about.astro
    contacts.astro
  assets/               hero photography, optimised at build time
  styles/global.css
public/
  CNAME  favicon.svg  robots.txt  og-image.png
```

`src/config/site.ts` exists specifically to prevent the class of bug that let the
footer and contacts page disagree about the office address. Both read the same
constant.

## Decisions

**The mobile menu is reimplemented, not ported.** It currently uses a Headless UI
`Popover`, which requires React. Reintroducing React for a single button would
negate the reason for moving to Astro, so the menu becomes roughly twenty lines
of vanilla JavaScript. Behaviour must be at parity or better: `aria-expanded`,
`aria-controls`, close on Escape, focus moved into the panel on open and returned
to the trigger on close. This is the only component whose behaviour is rewritten
rather than translated, and so the one needing the most careful testing.

**Deployment moves to the official GitHub Pages action.** This requires setting
_Settings → Pages → Source_ to _GitHub Actions_ in the repository — a manual step
the author cannot perform. The fallback, if that is unwelcome, is
`peaceiris/actions-gh-pages@v4` publishing to a `gh-pages` branch, which needs no
settings change. `public/CNAME` must survive the build either way.

## Bugs fixed

- `nav.tsx` builds a Tailwind hover class by string interpolation
  (`hover:${linkColorHover}`). Tailwind cannot see the class at build time, so
  navigation hover states do not work at all. Classes become static.
- The footer hardcodes both a stale address (_Corso di Porta Nuova, 34_) and the
  year 2022. The address comes from config; the year is computed at build.
- The contacts page and footer disagree on the office address. Correct value:
  Via Spadari, 2, 20123 Milano.
- The homepage renders `<Seo />` with no title, which both violates the
  component's own `propTypes` and leaves the page titled with only the site name.
  Every page gets an explicit title.
- `index.tsx` imports `Fragment`, `Popover`, `Transition`, `MenuIcon`, `XIcon`
  and `graphql`, none of which it uses.
- Both images carry empty `alt` attributes while being decorative-but-meaningful
  content images. They get real alternative text.
- The logo is hotlinked from `tailwindui.com` and is a generic placeholder, not
  HTECH's mark. It becomes a typographic wordmark set in the site's typeface.
- `package.json` still declares itself `gatsby-starter-default`, authored by Kyle
  Mathews, with `repository` pointing at the Gatsby starter.
- No favicon, sitemap, `robots.txt`, or Open Graph image.

## Verification

Content parity is proven rather than assumed. The visible text and link targets
of each page are extracted from both the current production HTML (captured
beforehand) and the new build, then diffed. The only differences permitted are
the deliberate ones: the corrected address, the wordmark replacing the
placeholder logo, and added metadata.

Alongside that: `astro check` for type correctness, a successful production
build, and a local serve to exercise the mobile menu and every internal link.

Note that the captured baseline predates commit `400b371`, so it shows the older
_Piazza San Babila, 5_ address. This appears in the diff as an expected delta.

## Out of scope

Visual redesign, new pages, copy rewriting, and any change to what the site says
about HTECH. Those were considered and explicitly deferred.
