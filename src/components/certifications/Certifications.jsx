import { useState } from 'react'
import { motion } from 'framer-motion'
import { certifications, education } from '@/data/profile'

function FlipCard({ cert, index }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="[perspective:1000px] h-44"
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] cursor-pointer"
        style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        <div className="absolute inset-0 [backface-visibility:hidden] border hairline rounded-xl bg-ink-soft/40 p-6 flex flex-col justify-between">
          <span className="status-tag tag-pass w-fit">Certified</span>
          <h3 className="font-display text-base text-paper leading-snug">{cert.title}</h3>
        </div>
        <div
          className="absolute inset-0 [backface-visibility:hidden] border border-signal rounded-xl bg-ink-soft p-6 flex flex-col justify-center items-center text-center gap-2"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <span className="font-mono text-xs text-slate uppercase tracking-wider">Issued by</span>
          <span className="font-display text-lg text-signal">{cert.issuer}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 md:py-36 border-t hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <span className="status-tag tag-neutral mb-6 w-fit">Certifications & Education</span>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-paper leading-tight mt-4 mb-14 max-w-xl">
          Credentials, verified.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {certifications.map((cert, i) => (
            <FlipCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>

        <div className="border-t hairline pt-10 grid sm:grid-cols-2 gap-8 max-w-2xl">
          {education.map((ed) => (
            <div key={ed.degree}>
              <div className="font-mono text-xs text-slate-dim">{ed.period}</div>
              <h3 className="font-display text-lg text-paper mt-1">{ed.degree}</h3>
              <div className="text-signal text-sm mt-0.5">{ed.school}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
