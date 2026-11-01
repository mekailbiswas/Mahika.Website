// Derives web-ready files in public/assets from the originals in raw/.
// Originals are never modified. The only crop is the hero banner's bottom
// strip, which contains claims the brand has not approved.
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'

const RAW = 'raw/'
const OUT = 'public/assets/'
mkdirSync(OUT, { recursive: true })

const BANNER_CROP_HEIGHT = 676 // strip with claims starts at y=679

const jobs = [
  { src: 'Mahika Rose-Gold Botanical Monogram Logo (1).png', name: 'logo-horizontal', widths: [360, 720] },
  { src: '1000173347.jpg', name: 'logo-stacked', widths: [480, 960] },
  { src: 'Mahika Circular Pink Logo Emblem.png', name: 'emblem', widths: [256, 640] },
  {
    src: 'Mahika_ Style, Home and Happiness.png',
    name: 'hero-banner',
    widths: [1000, 2056],
    crop: (m) => ({ left: 0, top: 0, width: m.width, height: BANNER_CROP_HEIGHT }),
  },
]

for (const job of jobs) {
  const meta = await sharp(RAW + job.src).metadata()
  const base = () => {
    let img = sharp(RAW + job.src)
    if (job.crop) img = img.extract(job.crop(meta))
    return img
  }
  for (const w of job.widths) {
    await base().resize({ width: w, withoutEnlargement: true }).webp({ quality: 88 }).toFile(`${OUT}${job.name}-${w}.webp`)
  }
}

// Favicons are built from the M monogram only by scripts/make-favicon.mjs
console.log('assets written to', OUT)

// Section photos: plain crops of the supplied lifestyle banner (no retouching).
// Source regions are small (~300-450px), so they are used at card size only.
const BANNER = RAW + 'Mahika_ Style, Home and Happiness.png'
const photos = [
  { name: 'photo-home-decor', region: { left: 1610, top: 0, width: 446, height: 424 } },
  { name: 'photo-home-essentials', region: { left: 1520, top: 445, width: 300, height: 225 } },
]
for (const p of photos) {
  await sharp(BANNER).extract(p.region).webp({ quality: 92 }).toFile(`${OUT}${p.name}.webp`)
}
console.log('photo crops written')
