import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/profile'

export default function Projects() {
  const [openId, setOpenId] = useState(projects[0]?.id ?? null)

  return (
    <section id="projects" className="relative py-28 md:py-36 border-t hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <span className="status-tag tag-neutral mb-6 w-fit">Projects</span>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-paper leading-tight mt-4 mb-14 max-w-xl">
          Built to be tested,
          <br />
          not just to ship.
        </h2>

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => {
            const isOpen = openId === project.id
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="border hairline rounded-xl overflow-hidden bg-ink-soft/30"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : project.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-6 text-left"
                >
                  <div className="flex items-baseline gap-4 flex-wrap">
                    <span className="font-mono text-xs text-slate-dim">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-display text-xl md:text-2xl text-paper">{project.title}</h3>
                    <span className="status-tag tag-neutral hidden sm:inline-flex">{project.tag}</span>
                  </div>
                  <span className="font-mono text-xs text-slate shrink-0">
                    {isOpen ? '— collapse' : '+ expand'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 pt-2 grid md:grid-cols-[1.4fr_1fr] gap-8">
                        <div>
                          <p className="text-slate text-sm mb-4">{project.period}</p>
                          <ul className="flex flex-col gap-2.5">
                            {project.details.map((d, di) => (
                              <li key={di} className="text-paper/90 text-sm leading-relaxed flex gap-3">
                                <span className="text-signal font-mono text-xs mt-0.5 shrink-0">›</span>
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="font-mono text-xs uppercase tracking-wider text-slate mb-3">
                            Tech stack
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((t) => (
                              <span key={t} className="text-xs font-mono px-2.5 py-1 rounded border border-line text-slate">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
