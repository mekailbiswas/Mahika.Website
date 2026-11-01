// Builds the favicon from the M monogram only (no wordmark, tagline or circle),
// with the white background made transparent. Source artwork is not modified.
import sharp from 'sharp'

const SRC = 'raw/1000173347.jpg'
const OUT = 'public/assets/'
const REGION = { left: 230, top: 60, width: 1160, height: 960 } // M + leaves, above the wordmark

const { data, info } = await sharp(SRC).extract(REGION).removeAlpha().raw().toBuffer({ resolveWithObject: true })
const { width: W, height: H } = info
const minCh = (i) => Math.min(data[i * 3], data[i * 3 + 1], data[i * 3 + 2])
const WHITE = 236

// Flood-fill near-white from the border (and from inside the heart cut-out).
const bg = new Uint8Array(W * H)
const stack = []
const seed = (x, y) => {
  const p = y * W + x
  if (!bg[p] && minCh(p) >= WHITE) { bg[p] = 1; stack.push(p) }
}
for (let x = 0; x < W; x++) { seed(x, 0); seed(x, H - 1) }
for (let y = 0; y < H; y++) { seed(0, y); seed(W - 1, y) }
seed(680 - REGION.left, 720 - REGION.top) // inside the heart
while (stack.length) {
  const p = stack.pop()
  const x = p % W, y = (p / W) | 0
  for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    const nx = x + dx, ny = y + dy
    if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue
    const q = ny * W + nx
    if (!bg[q] && minCh(q) >= WHITE) { bg[q] = 1; stack.push(q) }
  }
}

// RGBA: background transparent; one-pixel soft edge to avoid a white halo.
const rgba = Buffer.alloc(W * H * 4)
for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
  const p = y * W + x
  let a = bg[p] ? 0 : 255
  if (!bg[p]) {
    const nearBg = [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => {
      const nx = x + dx, ny = y + dy
      return nx >= 0 && ny >= 0 && nx < W && ny < H && bg[ny * W + nx]
    })
    if (nearBg) a = Math.round(Math.max(0, Math.min(255, ((235 - minCh(p)) / 60) * 255 + 90)))
  }
  rgba[p * 4] = data[p * 3]; rgba[p * 4 + 1] = data[p * 3 + 1]; rgba[p * 4 + 2] = data[p * 3 + 2]; rgba[p * 4 + 3] = a
}

const mark = await sharp(rgba, { raw: { width: W, height: H, channels: 4 } }).trim({ threshold: 1 }).png().toBuffer()
const square = async (size, name) => {
  const pad = Math.round(size * 0.06)
  await sharp(mark)
    .resize({ width: size - pad * 2, height: size - pad * 2, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png().toFile(OUT + name)
}
await square(512, 'favicon-512.png')
await square(192, 'favicon-192.png')
await square(32, 'favicon-32.png')
await square(16, 'favicon-16.png')
console.log('favicons written')
