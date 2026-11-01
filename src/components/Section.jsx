import Reveal from './Reveal'

// Titled section; `title` is optional and the aria-label falls back to `label`.
export default function Section({ id, label, title, className = '', children }) {
  return (
    <section
      id={id}
      className={`section ${className}`}
      aria-labelledby={title ? `${id}-title` : undefined}
      aria-label={title ? undefined : label}
    >
      <div className="container">
        {title && (
          <Reveal as="h2" id={`${id}-title`} className="section__title">
            {title}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
