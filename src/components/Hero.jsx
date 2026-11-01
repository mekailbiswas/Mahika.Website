import { assets } from '../content/assetManifest'
import { hero, site } from '../content/siteContent'
import Image from './Image'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Welcome">
      <div className="container hero__inner">
        <div className="hero__logo hero-in" style={{ '--i': 0 }}>
          <Image asset={assets.logoStacked} eager sizes="(min-width: 900px) 360px, 70vw" alt={`${site.brand}. ${site.tagline}`} />
        </div>
        {hero.headline ? (
          <h1 className="hero__headline hero-in" style={{ '--i': 1 }}>{hero.headline}</h1>
        ) : (
          <h1 className="visually-hidden">{site.brand}</h1>
        )}
        {hero.intro && <p className="hero__intro hero-in" style={{ '--i': 2 }}>{hero.intro}</p>}
        {hero.cta && (
          <a className="btn hero-in" style={{ '--i': 3 }} href={hero.cta.href}>
            {hero.cta.label}
          </a>
        )}
      </div>
      <div className="hero__banner hero-in" style={{ '--i': 4 }}>
        <Image asset={assets.heroBanner} eager sizes="100vw" />
      </div>
    </section>
  )
}
