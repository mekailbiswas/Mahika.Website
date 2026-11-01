// Fails the build if a literal placeholder reaches the published files.
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const patterns = [/\[TO BE [A-Z ]+/, /\[OPTIONAL/, /\[FLIPKART_STORE_URL\]/, /\[AMAZON_STORE_URL\]/, /\[DESCRIPTION TO BE/]
const bad = []
const walk = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f)
    if (statSync(p).isDirectory()) walk(p)
    else if (/\.(html|js|css|json)$/.test(f)) {
      const text = readFileSync(p, 'utf8')
      for (const re of patterns) if (re.test(text)) bad.push(`${p}: ${re}`)
    }
  }
}
walk('dist')
if (bad.length) { console.error('Placeholder text found in build:\n' + bad.join('\n')); process.exit(1) }
console.log('placeholder check passed')
