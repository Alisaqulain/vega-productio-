'use client'

import { useEffect, useState } from 'react'

export default function FinancialBackground() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Defer rendering to improve initial load
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Simplified graph lines - reduced complexity */}
      <svg
        className="absolute top-20 left-0 w-full h-full opacity-[0.02]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0,600 Q200,500 400,400 T800,300 T1200,200"
          stroke="#0EA5E9"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0,700 Q300,600 600,500 T1200,400"
          stroke="#10B981"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  )
}


