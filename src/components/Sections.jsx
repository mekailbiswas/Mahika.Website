import { about, vision, offer, why, contact } from '../content/siteContent'
import { assets } from '../content/assetManifest'
import { useParallax } from '../hooks/useReveal'
import Section from './Section'
import Reveal from './Reveal'
import Image from './Image'

const has = (v) => (Array.isArray(v) ? v.length > 0 : Boolean(v))

export const sectionHasContent = {
  about: () => has(about.intro) || has(about.story),
  vision: () => has(vision.mission) || has(vision.vision) || has(vision.purpose) || has(vision.values),
  offer: () => has(offer.categories),
  why: () => has(why.commitments),
  contact: () =>
    [contact.legalName, contact.gstin, contact.address, contact.phone, contact.whatsapp, contact.email, contact.hours].some(has) ||
    has(contact.social),
}

export function About() {
  const floatRef = useParallax(22)
  return (
    <Section id="about" label="About MAHIKA" title={about.heading}>
      <div className="about">
        <div className="about__text">
          {about.intro && <Reveal as="p" className="lead">{about.intro}</Reveal>}
          {about.story.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 80}>{p}</Reveal>
          ))}
        </div>
        <Reveal className="about__visual" delay={120}>
          <div ref={floatRef} className="parallax">
            {about.image ? (
              <img src={about.image.src} alt={about.image.alt} width={about.image.w} height={about.image.h} loading="lazy" decoding="async" />
            ) : (
              <Image asset={assets.emblem} alt="" sizes="(min-width: 900px) 380px, 70vw" />
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export function Vision() {
  return (
    <Section id="vision" label="Our vision and motive" title={vision.heading}>
      <div className="grid grid--2">
        {vision.mission && (
          <Reveal className="block">
            <h3>Mission</h3>
            <p>{vision.mission}</p>
          </Reveal>
        )}
        {vision.vision && (
          <Reveal className="block" delay={80}>
            <h3>Vision</h3>
            <p>{vision.vision}</p>
          </Reveal>
        )}
      </div>
      {vision.purpose && <Reveal as="p" className="lead">{vision.purpose}</Reveal>}
      {vision.values.length > 0 && (
        <ul className="grid grid--3 plain-list">
          {vision.values.map((v, i) => (
            <Reveal as="li" key={v.title} className="block" delay={i * 80}>
              <h3>{v.title}</h3>
              {v.text && <p>{v.text}</p>}
            </Reveal>
          ))}
        </ul>
      )}
    </Section>
  )
}

export function Offer() {
  return (
    <Section id="offer" label="What we offer" title={offer.heading}>
      <ul className="grid grid--2 plain-list">
        {offer.categories.map((c, i) => (
          <Reveal as="li" key={c.title} className="block block--card" delay={(i % 2) * 100}>
            <div className="block__media">
              {c.image ? (
                <img src={c.image.src} alt={c.image.alt} width={c.image.w} height={c.image.h} loading="lazy" decoding="async" />
              ) : (
                <span className="block__index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              )}
            </div>
            <h3>{c.title}</h3>
            {c.text && <p>{c.text}</p>}
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

export function Why() {
  return (
    <Section id="why" label="Why choose MAHIKA" title={why.heading}>
      <ul className="grid grid--2 plain-list">
        {why.commitments.map((c, i) => (
          <Reveal as="li" key={c.title} className="block" delay={i * 80}>
            <h3>{c.title}</h3>
            {c.text && <p>{c.text}</p>}
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

export function Contact() {
  const rows = [
    contact.legalName && ['Business name', contact.legalName],
    contact.gstin && ['GSTIN', contact.gstin],
    contact.address && ['Address', contact.address],
    contact.hours && ['Hours', contact.hours],
    contact.phone && ['Phone', <a key="p" href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a>],
    contact.whatsapp && ['WhatsApp', <a key="w" href={contact.whatsapp} rel="noopener noreferrer" target="_blank">Message us on WhatsApp</a>],
    contact.email && ['Email', <a key="e" href={`mailto:${contact.email}`}>{contact.email}</a>],
  ].filter(Boolean)
  return (
    <Section id="contact" label="Contact and business information" title={contact.heading}>
      <Reveal as="dl" className="details">
        {rows.map(([k, v]) => (
          <div key={k} className="details__row">
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </Reveal>
      {contact.social.length > 0 && (
        <ul className="social plain-list">
          {contact.social.map((s) => (
            <li key={s.url}>
              <a href={s.url} rel="noopener noreferrer" target="_blank">{s.label}</a>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
