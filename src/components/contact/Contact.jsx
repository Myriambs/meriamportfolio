import { profile } from '@/data/profile'
import ContactVisual from './ContactVisual'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 border-t hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div>
          <span className="status-tag tag-neutral mb-6 w-fit">Contact</span>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-paper leading-tight mt-4 max-w-xl">
            Open to new opportunities.
          </h2>
          <p className="text-slate text-sm md:text-base mt-6 max-w-xl leading-relaxed">
            Open to QA engineering, frontend development, and technical instructor roles.
            Based in {profile.location}, available remote.
          </p>

          <div className="mt-10 flex flex-col gap-3 font-mono text-sm md:text-base">
            <a href={`mailto:${profile.email}`} className="text-paper hover:text-signal transition-colors w-fit">
              {profile.email}
            </a>
            <span className="text-slate">{profile.phone}</span>
          </div>

          <div className="mt-8 flex gap-3">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="status-tag tag-neutral hover:text-signal hover:border-signal transition-colors">
              LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="status-tag tag-neutral hover:text-signal hover:border-signal transition-colors">
              GitHub
            </a>
            <a href={profile.links.gitlab} target="_blank" rel="noreferrer" className="status-tag tag-neutral hover:text-signal hover:border-signal transition-colors">
              GitLab
            </a>
          </div>
        </div>

        <ContactVisual />
      </div>
    </section>
  )
}