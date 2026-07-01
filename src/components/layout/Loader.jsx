import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + Math.random() * 18 + 6)
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(() => setVisible(false), 350)
          setTimeout(() => onDone?.(), 750)
        }
        return next
      })
    }, 140)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center"
        >
          <div className="font-mono text-xs text-slate mb-4 tracking-wider">
            loading portfolio.exe
          </div>
          <div className="w-56 h-px bg-line relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-signal"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.15 }}
            />
          </div>
          <div className="font-mono text-[0.65rem] text-slate-dim mt-3">
            {Math.floor(progress)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
