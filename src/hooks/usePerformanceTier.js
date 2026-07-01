import { useEffect, useState } from 'react'

// Returns 'high' | 'medium' | 'low' so 3D scenes can scale particle counts,
// geometry detail, and effects accordingly.
export function usePerformanceTier() {
  const [tier, setTier] = useState('high')

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    const isSmallScreen = window.innerWidth < 768
    const cores = navigator.hardwareConcurrency || 4
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setTier('off')
    } else if (isMobile || isSmallScreen || cores <= 4) {
      setTier('low')
    } else if (cores <= 8) {
      setTier('medium')
    } else {
      setTier('high')
    }
  }, [])

  return tier
}
