# MAHIKA brand website

Single-page brand introduction site (React + Vite, static output). No server is needed: `npm run build` produces a `dist/` folder you upload to any static host.

## Commands
| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server (also serves `/meesho`, `/flipkart`, `/amazon`) |
| `npm run assets` | Re-create web images in `public/assets` from `raw/` |
| `npm run favicon` | Rebuild the M-only transparent favicon files |
| `npm run build` | Build to `dist/`, then fail if any `[TO BE …]` placeholder text is in the output |
| `npm test` | Unit tests for the redirect URL validator |

## Adding content
All copy and business details are in `src/content/siteContent.js`. A field set to `null` (or an empty array) is not rendered. A section with no content is left out of the page and the navigation. Fill in approved content only, rebuild, and upload `dist/`. See `MISSING_CONTENT.md`.

## Marketplace redirects (no server)
`/meesho`, `/flipkart` and `/amazon` are small static pages generated at build time from `config/marketplaces.json`.

**To change a destination:** edit `config/marketplaces.json` (set `"enabled": true` and the `"url"`), run `npm run build`, upload `dist/`. A change takes effect as soon as the new files are uploaded; a rebuild *is* required.

- Only `https://` URLs on an allowlisted marketplace host are accepted (`scripts/redirects.mjs`). Anything else produces a "Coming soon" page and a build warning.
- A disabled or empty destination shows a branded "Coming soon" page.
- These pages redirect with an HTML `meta refresh` plus `location.replace`, **not an HTTP 302**. Browsers and QR scanners follow it, but link-preview bots that don't run JavaScript may see the interstitial page instead.
- `dist/404.html` is emitted for unknown paths. Whether unknown URLs return a real 404 status depends on the host (Netlify, Cloudflare Pages and GitHub Pages use it automatically; on Apache add `ErrorDocument 404 /404.html`).
- The host must serve `/meesho/` from `meesho/index.html`, which static hosts do by default.

## Deploy
1. `npm run build`
2. Upload the contents of `dist/` to the site root of `www.mahika.world`.
3. Test `/`, `/meesho`, `/flipkart`, `/amazon`, and scan any QR code that points at them. These routes are **not confirmed live** until this is done on the real host.

## Notes
- Colours in `src/styles/tokens.css` are provisional, sampled from the logos, until the owner approves them.
- No analytics or tracking is included.
- The Google Fonts stylesheet (Cormorant Garamond, Jost) is loaded from `fonts.googleapis.com`; fonts are not yet owner-approved.
