'use client'

import { useEffect } from 'react'

export function PerformanceOptimizer() {
  useEffect(() => {
    // Font optimization
    document.documentElement.classList.add('font-optimized')

    // Image optimization
    const lazyImages = document.querySelectorAll('img[loading="lazy"]')
    if ('loading' in HTMLImageElement.prototype) {
      lazyImages.forEach(img => {
        if (img instanceof HTMLImageElement) {
          img.loading = 'lazy'
        }
      })
    }

    // Animation optimization
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) {
      document.documentElement.classList.add('reduce-motion')
    }

    // Clean up on unmount
    return () => {
      document.documentElement.classList.remove('font-optimized')
    }
  }, [])

  return null
}
