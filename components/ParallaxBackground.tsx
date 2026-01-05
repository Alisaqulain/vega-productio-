'use client'

import { useEffect, useRef, useState } from 'react'

interface ParallaxBackgroundProps {
  imageSrc: string
  blur?: number
  overlayOpacity?: number
  speed?: number
}

export default function ParallaxBackground({
  imageSrc,
  blur = 2,
  overlayOpacity = 0.25,
  speed = 0.3,
}: ParallaxBackgroundProps) {
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const yPos = -(rect.top * speed)
        setScrollY(yPos)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden z-0">
      {/* Parallax background image - clearly visible like services page */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY}px) scale(1.1)`,
          transformOrigin: 'center center',
          filter: blur > 0 ? `blur(${blur}px)` : 'none',
          transition: 'transform 0.1s ease-out',
        }}
      />
      
      {/* Light overlay for text readability - same as services page */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(255, 255, 255, ${overlayOpacity}) 0%,
            rgba(255, 255, 255, ${overlayOpacity * 0.95}) 50%,
            rgba(255, 255, 255, ${overlayOpacity}) 100%
          )`,
        }}
      />
    </div>
  )
}

