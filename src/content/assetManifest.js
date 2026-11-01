// Asset manifest: derived web files in public/assets and where each is used.
// Originals live in raw/ and are never modified.
export const assets = {
  logoHorizontal: { src: '/assets/logo-horizontal-720.webp', w: 720, h: 240, alt: 'MAHIKA' },
  logoStacked: { src: '/assets/logo-stacked-960.webp', w: 960, h: 918, alt: 'MAHIKA – Made with Love. Chosen with Trust.' },
  emblem: { src: '/assets/emblem-640.webp', w: 640, h: 640, alt: 'MAHIKA emblem' },
  heroBanner: {
    src: '/assets/hero-banner-2056.webp',
    srcSet: '/assets/hero-banner-1000.webp 1000w, /assets/hero-banner-2056.webp 2056w',
    w: 2056,
    h: 676,
    alt: 'MAHIKA lifestyle collage: clothing, gifts, home decor and candles',
  },
}
