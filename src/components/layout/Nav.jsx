import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-ink/80 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-16 md:h-20">
        <button
          onClick={() => goTo('hero')}
          className="font-mono text-sm tracking-widest text-paper hover:text-signal transition-colors"
          aria-label="Back to top"
        >
          MB<span className="text-signal">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => goTo(s.id)}
                className={`font-mono text-xs tracking-wider uppercase transition-colors relative py-1 ${
                  active === s.id ? 'text-signal' : 'text-slate hover:text-paper'
                }`}
              >
                {s.label}
                {active === s.id && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-signal" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="/cv/Meriam_Ben_Salah_QA.pdf"
          download
          className="hidden md:inline-flex status-tag tag-pass hover:bg-signal hover:text-ink transition-colors"
        >
          Download CV
        </a>

        <button
          className="md:hidden text-paper font-mono text-xs tracking-wider uppercase"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-t border-line px-6 py-6 flex flex-col gap-4">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => goTo(s.id)}
              className="font-mono text-sm uppercase tracking-wider text-left text-slate hover:text-signal"
            >
              {s.label}
            </button>
          ))}
          <a href="/cv/Meriam_Ben_Salah_QA.pdf" download className="status-tag tag-pass w-fit mt-2">
            Download CV
          </a>
        </div>
      )}
    </header>
  )
}
