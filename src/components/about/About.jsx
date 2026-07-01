import { motion } from 'framer-motion'
import { careerPath, profile } from '@/data/profile'

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 border-t hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-16">
          <div>
            <span className="status-tag tag-neutral mb-6">About</span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-paper leading-tight mt-4">
              A non-linear path,
              <br />
              used on purpose.
            </h2>
            <p className="mt-6 text-slate leading-relaxed max-w-md">
              {profile.profileStatement}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
            <div className="flex flex-col gap-10">
              {careerPath.map((step, i) => (
                <motion.div
                  key={step.stage}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative pl-8"
                >
                  <span
                    className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${
                      i === careerPath.length - 1
                        ? 'bg-signal border-signal'
                        : 'bg-ink border-line'
                    }`}
                  />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-lg text-paper">{step.stage}</h3>
                    <span className="font-mono text-xs text-signal">{step.org}</span>
                    <span className="font-mono text-[0.7rem] text-slate-dim">{step.period}</span>
                  </div>
                  <p className="text-slate text-sm mt-2 leading-relaxed max-w-lg">{step.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
