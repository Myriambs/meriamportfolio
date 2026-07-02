import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ParticleField from '@/scenes/ParticleField'
import { profile, heroStats } from '@/data/profile'
import { usePerformanceTier } from '@/hooks/usePerformanceTier'

const LOG_LINES = [
  { text: 'initializing test environment...', delay: 0 },
  { text: `> running suite: production-readiness`, delay: 400 },
  { text: `> 250+ cycles executed`, delay: 900, tag: 'PASS' },
  { text: `> 180+ defects filed & traced`, delay: 1350, tag: 'PASS' },
  { text: `> 45+ user stories covered`, delay: 1800, tag: 'PASS' },
  { text: `> status: production ready`, delay: 2300, tag: 'SHIPPED' },
]

function TerminalLog() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const timers = LOG_LINES.map((line, i) =>
      setTimeout(() => setVisibleCount(i + 1), line.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="font-mono text-xs md:text-sm bg-ink-soft/80 border border-line rounded-md px-4 py-4 md:px-5 md:py-5 backdrop-blur-sm w-full max-w-md">
      <div className="flex items-center gap-1.5 mb-3 opacity-60">
        <span className="w-2 h-2 rounded-full bg-flag/70" />
        <span className="w-2 h-2 rounded-full bg-slate/70" />
        <span className="w-2 h-2 rounded-full bg-signal/70" />
        <span className="ml-2 text-slate text-[0.65rem] tracking-wider">qa_session.log</span>
      </div>
      <div className="space-y-1.5 min-h-[132px]">
        {LOG_LINES.slice(0, visibleCount).map((line, i) => (
          <div key={i} className="flex items-center justify-between gap-3 text-slate">
            <span>{line.text}</span>
            {line.tag && (
              <span className={`status-tag ${line.tag === 'SHIPPED' ? 'tag-pass' : 'tag-pass'} shrink-0`}>
                {line.tag}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const tier = usePerformanceTier()

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <ParticleField tier={tier} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="status-tag tag-neutral mb-6 w-fit"
          >
            {profile.location} — Open to QA / Frontend / Instructor roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl font-medium tracking-tight text-paper"
          >
            Meriam Ben Salah.
            <br />
            <span className="text-slate">I test what others</span>
            <br />
            <span className="text-signal">ship with confidence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-slate text-base md:text-lg max-w-xl leading-relaxed"
          >
           Full-stack JavaScript developer with 4+ years of hands-on experience building and teaching web apps ,
            skills that evolved into a QA Automation practice spanning manual and automation testing,now expanding into AI-assisted testing workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="/cv/Meriam_Ben_Salah_QA.pdf"
              download
              className="px-5 py-3 bg-signal text-ink font-mono text-xs uppercase tracking-wider rounded-md hover:bg-paper transition-colors"
            >
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="px-5 py-3 border border-line text-paper font-mono text-xs uppercase tracking-wider rounded-md hover:border-signal hover:text-signal transition-colors"
            >
              Email me
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 border border-line text-paper font-mono text-xs uppercase tracking-wider rounded-md hover:border-signal hover:text-signal transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 border border-line text-paper font-mono text-xs uppercase tracking-wider rounded-md hover:border-signal hover:text-signal transition-colors"
            >
              LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl"
          >
            {heroStats.map((stat) => (
              <div key={stat.id}>
                <div className="font-mono text-[0.65rem] text-slate-dim">{stat.id}</div>
                <div className="font-display text-2xl md:text-3xl text-paper mt-1">{stat.value}</div>
                <div className="text-xs text-slate mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="justify-self-center md:justify-self-end"
        >
          <TerminalLog />
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-slate">
        <span className="font-mono text-[0.6rem] tracking-widest uppercase">Scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-slate to-transparent" />
      </div>
    </section>
  )
}
