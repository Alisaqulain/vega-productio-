'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Fast, lightweight loader - 600-800ms
    const duration = 700
    const startTime = Date.now()
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / duration) * 100, 100)
      setProgress(newProgress)
      
      if (newProgress >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          setIsLoading(false)
        }, 100)
      }
    }, 16) // ~60fps

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] bg-gradient-to-b from-primary-navy via-neutral-800 to-primary-navy flex flex-col items-center justify-center"
        >
          {/* Minimal progress bar - fintech style */}
          <div className="w-full max-w-xs px-8">
            <div className="h-0.5 bg-neutral-700/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-gold via-yellow-400 to-accent-gold"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
                style={{
                  boxShadow: '0 0 10px rgba(201, 169, 97, 0.5)',
                }}
              />
            </div>
          </div>
          
          {/* Optional: Minimal spinner using brand colors */}
          <motion.div
            className="mt-8 w-8 h-8 border-2 border-accent-gold/30 border-t-accent-gold rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

