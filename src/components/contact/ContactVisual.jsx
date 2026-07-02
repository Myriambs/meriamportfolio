import { motion } from 'framer-motion'

// Fills the right column of Contact with an animated "signal" —
// consistent with the terminal/status-tag language used in the Hero.
// To use a real photo instead, replace the contents of the outer
// div below with an <img src="/images/your-photo.jpg" .../>.
export default function ContactVisual() {
  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto flex items-center justify-center">
      {/* pulsing rings */}
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute rounded-full border border-signal/40"
          style={{ width: '100%', height: '100%' }}
          animate={{ scale: [0.5, 1.3], opacity: [0.6, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* static outer ring */}
      <div className="absolute w-[70%] h-[70%] rounded-full border border-line" />

      {/* core card */}
      <div className="relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-full bg-ink-soft border border-signal/50 flex flex-col items-center justify-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-signal shadow-[0_0_12px_2px_rgba(125,211,192,0.6)]" />
        <span className="font-mono text-[0.65rem] tracking-widest text-signal uppercase text-center px-4">
          Status: Open
        </span>
        <span className="font-mono text-[0.6rem] text-slate text-center px-6 leading-relaxed">
          Available for new roles
        </span>
      </div>
    </div>
  )
}