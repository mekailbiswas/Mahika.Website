import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { About, Vision, Offer, Why, Contact, sectionHasContent } from './components/Sections'
import { useActiveSection } from './hooks/useActiveSection'

// A section (and its nav entry) appears only when approved content exists.
const SECTIONS = [
  { id: 'about', label: 'About', Component: About, ok: sectionHasContent.about },
  { id: 'vision', label: 'Vision', Component: Vision, ok: sectionHasContent.vision },
  { id: 'offer', label: 'What We Offer', Component: Offer, ok: sectionHasContent.offer },
  { id: 'why', label: 'Why MAHIKA', Component: Why, ok: sectionHasContent.why },
  { id: 'contact', label: 'Contact', Component: Contact, ok: sectionHasContent.contact },
]

export default function App() {
  const visible = SECTIONS.filter((s) => s.ok())
  const navItems = [{ id: 'home', label: 'Home' }, ...visible.map(({ id, label }) => ({ id, label }))]
  const active = useActiveSection(navItems.map((n) => n.id))
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header items={navItems} active={active} />
      <main id="main">
        <Hero />
        {visible.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </main>
      <Footer items={navItems} />
    </>
  )
}
