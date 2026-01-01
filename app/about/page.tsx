import type { Metadata } from 'next'
import MissionVision from '@/components/sections/MissionVision'
import FounderSection from '@/components/sections/FounderSection'
import CoreValues from '@/components/sections/CoreValues'

export const metadata: Metadata = {
  title: 'About Us - The Vega Wealth | Our Mission & Vision',
  description: 'Learn about The Vega Wealth, our mission, vision, and core values. Leading financial advisory firm in Dubai, UAE.',
  openGraph: {
    title: 'About Us - The Vega Wealth',
    description: 'Learn about The Vega Wealth, our mission, vision, and core values.',
  },
}

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-36">
      <div className="bg-gradient-primary section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About The Vega Wealth
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your trusted partner in building lasting wealth and securing your financial future
          </p>
        </div>
      </div>
      <MissionVision />
      <FounderSection />
      <CoreValues />
    </div>
  )
}

