import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { profile } from '@/data/profile'

// To enable real email delivery, sign up at emailjs.com and set these three
// values in a .env file (see README) as VITE_EMAILJS_SERVICE_ID,
// VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-28 md:py-36 border-t hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16">
        <div>
          <span className="status-tag tag-neutral mb-6 w-fit">Contact</span>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-paper leading-tight mt-4">
            Let's talk about
            <br />
            your next release.
          </h2>
          <p className="text-slate text-sm mt-6 max-w-sm leading-relaxed">
            Open to QA engineering, frontend development, and technical instructor roles.
            Based in {profile.location}, available remote.
          </p>

          <div className="mt-10 flex flex-col gap-3 font-mono text-sm">
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 border hairline rounded-xl p-6 md:p-8 bg-ink-soft/40">
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-slate" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-2 w-full bg-transparent border-b border-line focus:border-signal outline-none py-2 text-paper text-sm transition-colors"
            />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-slate" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-2 w-full bg-transparent border-b border-line focus:border-signal outline-none py-2 text-paper text-sm transition-colors"
            />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-slate" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="mt-2 w-full bg-transparent border-b border-line focus:border-signal outline-none py-2 text-paper text-sm resize-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-2 px-5 py-3 bg-signal text-ink font-mono text-xs uppercase tracking-wider rounded-md hover:bg-paper transition-colors disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'sent' && (
            <p className="status-tag tag-pass w-fit">Message sent</p>
          )}
          {status === 'error' && (
            <p className="text-xs text-flag font-mono">
              EmailJS isn't configured yet — see README, or email directly instead.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
