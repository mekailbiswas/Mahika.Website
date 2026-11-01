# Asset manifest

Originals stay in `raw/` unmodified. Web files are produced by `npm run assets` (`scripts/optimise-assets.mjs`) into `public/assets/` and referenced from `src/content/assetManifest.js`.

| Original | Derived file(s) | Used in | Notes |
|---|---|---|---|
| Mahika Rose-Gold Botanical Monogram Logo (1).png | logo-horizontal-360/720.webp | Header | Alt "MAHIKA" |
| 1000173347.jpg | logo-stacked-480/960.webp | Hero, Footer, redirect pages | Logo with tagline; alt carries the tagline |
| Mahika Circular Pink Logo Emblem.png | emblem-256/640.webp | About section visual | |
| 1000173347.jpg (M monogram only) | favicon-16/32/192/512.png | Favicon, touch icon | M only, white background removed (transparent); built by `npm run favicon`; needs owner approval |
| Mahika_ Style, Home and Happiness.png | hero-banner-1000/2056.webp | Hero | Cropped to 2056x676 to drop the bottom strip ("Quality Products", "Fast & Reliable Delivery", "Secure Shopping", "Shop a Happier Life"); crop approved by owner |
| Mahika Rose Gold Heart Emblem Logo.png | none | Not used | Dark glow background and an illegible tagline; the brief rules out dark backgrounds |

## Section photos (plain crops of the supplied lifestyle banner, no retouching)
| Derived file | Banner region (px) | Used in | Notes |
|---|---|---|---|
| photo-home-decor.webp | x1610 y0 446x424 | What We Offer: Home Décor & Living | Lantern, flowers, candle |
| photo-home-essentials.webp | x1520 y445 300x225 | What We Offer: Home Essentials | Towels, reed diffuser; small source, use at card size only |

Kitchen & Dining and Lifestyle & Utility have no matching photo in the supplied files and show a numbered tile instead. Supply real photos and set `image` in `src/content/siteContent.js`. The About section shows the circular emblem as a decorative visual until an About photo is supplied.
