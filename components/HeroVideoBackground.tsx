'use client'

import { useEffect, useRef, useState } from 'react'

interface HeroVideoBackgroundProps {
  videoSrc: string
  overlay?: 'dark' | 'light'
  overlayOpacity?: number
}

export default function HeroVideoBackground({
  videoSrc,
  overlay = 'dark',
  overlayOpacity = 0.5,
}: HeroVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
      video.play().catch(() => {
        // Autoplay failed, user interaction required
      })
    }

    video.addEventListener('loadeddata', handleLoadedData)
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [])

  const overlayColor = overlay === 'dark' 
    ? `rgba(15, 23, 42, ${overlayOpacity})` 
    : `rgba(255, 255, 255, ${overlayOpacity})`

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          filter: 'brightness(0.85) contrast(1.1)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            ${overlayColor} 0%,
            ${overlayColor} 50%,
            ${overlayColor} 100%
          )`,
        }}
      />
      
      {/* Additional subtle gradient for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse at center,
            transparent 0%,
            ${overlay === 'dark' ? 'rgba(15, 23, 42, 0.3)' : 'rgba(255, 255, 255, 0.2)'} 100%
          )`,
        }}
      />
    </div>
  )
}

