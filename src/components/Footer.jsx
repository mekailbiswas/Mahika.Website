import { assets } from '../content/assetManifest'
import { site, footer } from '../content/siteContent'
import Image from './Image'

export default function Footer({ items }) {
  const legal = [
    footer.privacyUrl && ['Privacy Policy', footer.privacyUrl],
    footer.termsUrl && ['Terms & Conditions', footer.termsUrl],
  ].filter(Boolean)
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <Image asset={assets.logoStacked} className="site-footer__logo" sizes="200px" alt={`${site.brand}. ${site.tagline}`} />
        {items.length > 1 && (
          <nav aria-label="Footer">
            <ul className="plain-list site-footer__nav">
              {items.map((it) => (
                <li key={it.id}><a href={`#${it.id}`}>{it.label}</a></li>
              ))}
            </ul>
          </nav>
        )}
        <p>{site.domain}</p>
        {legal.length > 0 && (
          <ul className="plain-list site-footer__nav">
            {legal.map(([l, u]) => (
              <li key={u}><a href={u}>{l}</a></li>
            ))}
          </ul>
        )}
        <p className="small">© {site.copyrightYear} {site.brand}. All rights reserved.</p>
      </div>
    </footer>
  )
}
