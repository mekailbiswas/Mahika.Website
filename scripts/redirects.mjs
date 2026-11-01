// Marketplace redirect pages are generated at build time from
// config/marketplaces.json. To change a destination: edit that file,
// run `npm run build`, upload dist/.
export const ALLOWED_HOSTS = [
  'meesho.com', 'www.meesho.com',
  'flipkart.com', 'www.flipkart.com', 'dl.flipkart.com',
  'amazon.in', 'www.amazon.in', 'amzn.in', 'amzn.to',
]

export const ROUTES = ['meesho', 'flipkart', 'amazon']

// Returns a normalised URL string, or null if the destination is not acceptable.
export function validateDestination(raw) {
  if (typeof raw !== 'string' || !raw.trim()) return null
  let u
  try { u = new URL(raw.trim()) } catch { return null }
  if (u.protocol !== 'https:') return null
  if (u.username || u.password) return null
  if (!ALLOWED_HOSTS.includes(u.hostname)) return null
  return u.toString()
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const STYLE = `body{margin:0;min-height:100vh;display:grid;place-items:center;background:#fff8f4;color:#5a3320;font-family:Georgia,serif;text-align:center;padding:24px}
a{color:#b4545f}img{width:140px;height:auto}`

export function redirectPage(url) {
  const safe = esc(url)
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Redirecting – MAHIKA</title><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=${safe}">
<link rel="canonical" href="${safe}"><style>${STYLE}</style></head><body><main>
<img src="/assets/logo-stacked-480.webp" alt="MAHIKA"><p>Taking you to our store…</p>
<p><a href="${safe}">Continue</a></p></main>
<script>location.replace(${JSON.stringify(url)})</script></body></html>`
}

export function unavailablePage(name) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>MAHIKA</title><meta name="robots" content="noindex"><style>${STYLE}</style></head><body><main>
<img src="/assets/logo-stacked-480.webp" alt="MAHIKA"><h1>Coming soon</h1>
<p>Our ${esc(name)} store link isn’t available just yet.</p><p><a href="/">Visit MAHIKA</a></p></main></body></html>`
}

export function notFoundPage() {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Page not found – MAHIKA</title><meta name="robots" content="noindex"><style>${STYLE}</style></head><body><main>
<img src="/assets/logo-stacked-480.webp" alt="MAHIKA"><h1>Page not found</h1><p><a href="/">Back to MAHIKA</a></p></main></body></html>`
}
