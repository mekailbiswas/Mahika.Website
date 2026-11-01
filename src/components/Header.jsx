import { useState } from 'react'
import { assets } from '../content/assetManifest'
import Image from './Image'

export default function Header({ items, active }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#home" className="site-header__logo" aria-label="MAHIKA – home" onClick={close}>
          <Image asset={assets.logoHorizontal} eager alt="MAHIKA" />
        </a>
        {items.length > 1 && (
          <>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="primary-nav"
              onClick={() => setOpen((o) => !o)}
            >
              <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
              <span aria-hidden="true" className="nav-toggle__bars" />
            </button>
            <nav id="primary-nav" aria-label="Primary" className={`nav ${open ? 'is-open' : ''}`}>
              <ul>
                {items.map((it) => (
                  <li key={it.id}>
                    <a href={`#${it.id}`} aria-current={active === it.id ? 'true' : undefined} onClick={close}>
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>
    </header>
  )
}
