import { profile } from '@/data/profile'

export default function Footer() {
  return (
    <footer className="border-t hairline py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-dim">
        <span>© {new Date().getFullYear()} {profile.name}. Built with React & Three.js.</span>
        <span className="status-tag tag-pass">All systems operational</span>
      </div>
    </footer>
  )
}
