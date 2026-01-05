'use client'

interface PageBackgroundImageProps {
  imageSrc: string
  overlay?: 'dark' | 'light'
  overlayOpacity?: number
}

export default function PageBackgroundImage({
  imageSrc,
  overlay = 'light',
  overlayOpacity = 0.3,
}: PageBackgroundImageProps) {
  const overlayColor = overlay === 'dark' 
    ? `rgba(15, 23, 42, ${overlayOpacity})` 
    : `rgba(255, 255, 255, ${overlayOpacity})`

  return (
    <div className="fixed inset-0 -z-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: 'scale(1.05)',
          transformOrigin: 'center center',
        }}
      />
      
      {/* Soft Overlay */}
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
      
      {/* Subtle gradient for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse at center,
            transparent 0%,
            ${overlay === 'dark' ? 'rgba(15, 23, 42, 0.2)' : 'rgba(255, 255, 255, 0.15)'} 100%
          )`,
        }}
      />
    </div>
  )
}

