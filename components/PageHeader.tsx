'use client'

import dynamic from 'next/dynamic'

const DubaiBackground = dynamic(() => import('@/components/DubaiBackground'), {
  ssr: false,
})

interface PageHeaderProps {
  title: string
  subtitle: string
  dubaiImage: string // e.g., '/dubai1.png'
}

export default function PageHeader({ title, subtitle, dubaiImage }: PageHeaderProps) {
  return (
    <div className="relative section-padding overflow-hidden">
      {/* No background - video shows through completely */}
      
      <div className="container-custom text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-sm">
          {title}
        </h1>
        <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-sm font-medium">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

