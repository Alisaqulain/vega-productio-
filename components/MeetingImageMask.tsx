'use client'

import { CSSProperties } from 'react'

interface MeetingImageMaskProps {
  image: string
  className?: string
  children?: React.ReactNode
  opacity?: number
  blur?: number
}

/**
 * Component to mask white gaps in meeting images
 * Uses dark overlays, blur, radial vignette, and CSS pseudo-elements
 */
export default function MeetingImageMask({
  image,
  className = '',
  children,
  opacity = 0.5,
  blur = 3,
}: MeetingImageMaskProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={
        {
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'scale(1.1)',
          transformOrigin: 'center center',
        } as CSSProperties
      }
    >
      {/* Dark gradient overlay to mask white gaps */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(30, 41, 59, ${opacity * 0.6}) 0%,
            rgba(51, 65, 85, ${opacity * 0.5}) 30%,
            rgba(30, 41, 59, ${opacity * 0.6}) 60%,
            rgba(15, 23, 42, ${opacity * 0.7}) 100%
          )`,
          filter: blur > 0 ? `blur(${blur}px)` : 'none',
        }}
      />

      {/* Radial vignette to darken edges and mask gaps */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse at center,
            transparent 0%,
            transparent 40%,
            rgba(15, 23, 42, ${opacity * 0.4}) 70%,
            rgba(15, 23, 42, ${opacity * 0.6}) 100%
          )`,
        }}
      />

      {/* Additional overlay to mask any remaining white spaces */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            circle at 20% 30%,
            rgba(30, 41, 59, ${opacity * 0.3}) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 80% 70%,
            rgba(30, 41, 59, ${opacity * 0.3}) 0%,
            transparent 50%
          )`,
        }}
      />

      {/* Subtle blur overlay for cinematic effect */}
      {blur > 0 && (
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: `blur(${blur * 0.5}px)`,
            WebkitBackdropFilter: `blur(${blur * 0.5}px)`,
          }}
        />
      )}

      {/* Content */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  )
}

