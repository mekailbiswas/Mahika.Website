import { useEffect, useRef } from 'react'

export const motionAllowed = () =>
  typeof window !== 'undefined' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
  'IntersectionObserver' in window

// Scroll-aware reveal. Each time the element enters the viewport it animates in
// from the side it arrives from (below when scrolling down, above when scrolling
// up) and resets once it leaves, so it replays in both directions.
// Without JS or with reduced motion the element is never armed and stays visible.
export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !motionAllowed()) return
    el.dataset.from = 'below'
    el.classList.add('reveal-armed')
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
        } else {
          el.dataset.from = entry.boundingClientRect.top < 0 ? 'above' : 'below'
          el.classList.remove('is-visible')
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      el.classList.remove('reveal-armed', 'is-visible')
    }
  }, [])
  return ref
}

// Sets --py (px) on the element from its position in the viewport, for a gentle
// parallax. `range` is the maximum offset in px. Skipped when motion is reduced.
export function useParallax(range = 16) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !motionAllowed()) return
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      if (r.bottom < 0 || r.top > vh) return
      const progress = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2) // -1..1
      el.style.setProperty('--py', `${(-progress * range).toFixed(1)}px`)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [range])
  return ref
}
