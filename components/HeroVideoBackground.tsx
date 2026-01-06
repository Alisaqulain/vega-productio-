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

    const handleCanPlay = () => {
      setIsLoaded(true)
      video.play().catch(() => {
        // Autoplay failed, user interaction required
      })
    }

    // Try to play immediately
    video.play().catch(() => {
      // Autoplay failed, will try again on load
    })

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('canplay', handleCanPlay)
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [])

  const overlayColor = overlay === 'dark' 
    ? `rgba(15, 23, 42, ${overlayOpacity})` 
    : `rgba(255, 255, 255, ${overlayOpacity})`

  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          filter: 'brightness(0.85) contrast(1.1)',
          minWidth: '100%',
          minHeight: '100%',
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

