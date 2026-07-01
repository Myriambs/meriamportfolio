import { motion } from 'framer-motion'
import { experience } from '@/data/profile'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36 border-t hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <span className="status-tag tag-neutral mb-6 w-fit">Experience</span>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-paper leading-tight mt-4 mb-16 max-w-xl">
          Measured, not just described.
        </h2>

        <div className="flex flex-col">
          {experience.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-12 py-10 border-t hairline first:border-t-0"
            >
              <div>
                <div className="font-mono text-xs text-slate-dim">{job.period}</div>
                <div className="font-mono text-xs text-signal mt-1">{job.location}</div>
              </div>

              <div>
                <h3 className="font-display text-2xl text-paper">{job.role}</h3>
                <div className="text-slate text-sm mt-1">{job.org}</div>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {job.bullets.map((b, bi) => (
                    <li key={bi} className="text-paper/85 text-sm leading-relaxed flex gap-3">
                      <span className="text-signal font-mono text-xs mt-0.5 shrink-0">›</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-6">
                  {job.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="font-display text-2xl text-signal">{stat.value}</div>
                      <div className="text-xs text-slate mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
