'use client'

import { useEffect, useRef, useState } from 'react'

interface PremiumVideoProps {
  src: string
  className?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  playsInline?: boolean
  onLoadStart?: () => void
}

export default function PremiumVideo({
  src,
  className = '',
  autoplay = true,
  muted = true,
  loop = true,
  controls = false,
  playsInline = true,
  onLoadStart,
}: PremiumVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Disable autoplay on mobile for better UX
    if (isMobile && autoplay) {
      video.pause()
    }

    const handleLoadedData = () => {
      setIsLoaded(true)
    }

    video.addEventListener('loadeddata', handleLoadedData)
    if (onLoadStart) {
      video.addEventListener('loadstart', onLoadStart)
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      if (onLoadStart) {
        video.removeEventListener('loadstart', onLoadStart)
      }
    }
  }, [isMobile, autoplay, onLoadStart])

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoplay && !isMobile}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline={playsInline}
        className="w-full h-full object-cover rounded-xl shadow-2xl transition-opacity duration-700"
        style={{
          opacity: isLoaded ? 1 : 0,
          filter: 'brightness(0.98) contrast(1.02)',
        }}
        preload="metadata"
      />
      
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl animate-pulse" />
      )}

      {/* Mobile play overlay */}
      {isMobile && !controls && (
        <button
          onClick={() => {
            if (videoRef.current) {
              videoRef.current.play()
            }
          }}
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors rounded-xl group"
          aria-label="Play video"
        >
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg
              className="w-8 h-8 text-primary-navy ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  )
}

