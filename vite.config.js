import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { ROUTES, validateDestination, redirectPage, unavailablePage, notFoundPage } from './scripts/redirects.mjs'

// Emits /meesho, /flipkart, /amazon (and 404.html) from config/marketplaces.json.
function marketplaceRedirects() {
  const load = () => JSON.parse(readFileSync('config/marketplaces.json', 'utf8')).marketplaces ?? {}
  return {
    name: 'mahika-marketplace-redirects',
    generateBundle() {
      const cfg = load()
      for (const name of ROUTES) {
        const entry = cfg[name]
        const url = entry?.enabled ? validateDestination(entry.url) : null
        if (entry?.enabled && !url) this.warn(`/${name}: destination is not an allowed HTTPS marketplace URL; serving "coming soon" page`)
        this.emitFile({ type: 'asset', fileName: `${name}/index.html`, source: url ? redirectPage(url) : unavailablePage(name[0].toUpperCase() + name.slice(1)) })
      }
      this.emitFile({ type: 'asset', fileName: '404.html', source: notFoundPage() })
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const name = ROUTES.find((r) => req.url === `/${r}` || req.url === `/${r}/`)
        if (!name) return next()
        const entry = load()[name]
        const url = entry?.enabled ? validateDestination(entry.url) : null
        res.setHeader('Content-Type', 'text/html')
        res.end(url ? redirectPage(url) : unavailablePage(name))
      })
    },
  }
}

export default defineConfig({ plugins: [react(), marketplaceRedirects()] })
