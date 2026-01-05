'use client'

interface CityscapeBackgroundProps {
  opacity?: number
  blur?: number
  className?: string
}

export default function CityscapeBackground({
  opacity = 0.15,
  blur = 80,
  className = '',
}: CityscapeBackgroundProps) {
  // Cityscape with various building heights - similar to reference image
  const cityscapeSVG = encodeURIComponent(`
    <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cityGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1E293B" stop-opacity="0.1"/>
          <stop offset="50%" stop-color="#334155" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#1E293B" stop-opacity="0.15"/>
        </linearGradient>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F8F6F2" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#F5E6D3" stop-opacity="0.1"/>
        </linearGradient>
      </defs>
      
      <!-- Sky gradient -->
      <rect width="100%" height="100%" fill="url(#skyGrad)"/>
      
      <!-- Cityscape buildings - various heights -->
      <g opacity="${opacity}" fill="url(#cityGrad)">
        <!-- Left side buildings -->
        <path d="M0,1080 L0,800 L40,750 L80,700 L120,650 L160,600 L200,550 L240,500 L280,450 L320,400 L360,350 L400,300 L440,250 L480,200 L520,150 L560,100 L600,50 L640,0 L680,30 L720,60 L760,90 L800,120 L840,150 L880,180 L920,210 L960,240 L1000,270 L1000,1080 Z"/>
        
        <!-- Center tall building (like Empire State) -->
        <path d="M600,1080 L600,200 L620,180 L640,160 L660,140 L680,120 L700,100 L720,80 L740,60 L760,40 L780,20 L800,0 L820,20 L840,40 L860,60 L880,80 L900,100 L920,120 L940,140 L960,160 L980,180 L1000,200 L1000,1080 Z"/>
        
        <!-- Right side buildings -->
        <path d="M1000,1080 L1020,900 L1040,750 L1060,600 L1080,450 L1100,300 L1120,150 L1140,0 L1160,50 L1180,150 L1200,300 L1220,450 L1240,600 L1260,750 L1280,900 L1300,1080 Z"/>
        
        <!-- Additional buildings -->
        <path d="M200,1080 L220,850 L240,700 L260,550 L280,400 L300,250 L320,100 L340,0 L360,50 L380,150 L400,300 L420,450 L440,600 L460,750 L480,900 L500,1080 Z"/>
        
        <path d="M1300,1080 L1320,950 L1340,800 L1360,650 L1380,500 L1400,350 L1420,200 L1440,50 L1460,0 L1480,50 L1500,200 L1520,350 L1540,500 L1560,650 L1580,800 L1600,950 L1620,1080 Z"/>
        
        <path d="M1620,1080 L1640,1000 L1660,850 L1680,700 L1700,550 L1720,400 L1740,250 L1760,100 L1780,0 L1800,100 L1820,250 L1840,400 L1860,550 L1880,700 L1900,850 L1920,1000 L1920,1080 Z"/>
      </g>
    </svg>
  `)

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Blurred cityscape background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,${cityscapeSVG}")`,
          filter: `blur(${blur}px)`,
          opacity: opacity,
          transform: 'scale(1.05)',
          transformOrigin: 'center bottom',
          backgroundPosition: 'center bottom',
        }}
      />
      
      {/* Warm light overlay - matches reference image tones */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(248, 246, 242, 0.5) 0%, 
            rgba(245, 230, 211, 0.3) 30%,
            rgba(248, 246, 242, 0.4) 60%,
            rgba(245, 230, 211, 0.25) 100%)`,
        }}
      />
      
      {/* Subtle atmospheric glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, 
            rgba(255, 255, 255, 0.4) 0%, 
            transparent 50%)`,
        }}
      />
    </div>
  )
}




