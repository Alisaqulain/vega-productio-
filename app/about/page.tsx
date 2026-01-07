import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import MissionVision from '@/components/sections/MissionVision'
import FounderSection from '@/components/sections/FounderSection'
import CoreValues from '@/components/sections/CoreValues'
import PageHeader from '@/components/PageHeader'
import ImageContentSection from '@/components/sections/ImageContentSection'

const HeroVideoBackground = dynamic(() => import('@/components/HeroVideoBackground'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'About The Vega Wealth | Vega Wealth Dubai | Financial Advisory Firm Dubai',
  description: 'Learn about The Vega Wealth - leading wealth management company in Dubai, UAE. Our mission, vision, and core values. Trusted by 500+ clients managing AED 2B+ in assets. Vega Wealth Dubai offers expert financial advisory services.',
  keywords: [
    'About The Vega Wealth',
    'Vega Wealth Dubai',
    'The Vega Wealth Dubai',
    'Financial Advisory Firm Dubai',
    'Wealth Management Company Dubai',
    'Financial Advisor Dubai History',
    'Dubai Financial Services Company',
    'Best Financial Advisor Dubai',
    'Top Wealth Management Dubai',
    'Financial Planning Company Dubai',
  ],
  openGraph: {
    title: 'About Us - The Vega Wealth | Financial Advisory Dubai',
    description: 'Learn about The Vega Wealth, our mission, vision, and core values. Leading financial advisory firm in Dubai, UAE.',
    url: 'https://thevegawealth.com/about',
    images: ['/logo1.png'],
  },
  alternates: {
    canonical: 'https://thevegawealth.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Premium background video - fixed behind everything */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <HeroVideoBackground 
          videoSrc="/video1.mp4"
          overlay="light"
          overlayOpacity={0.2}
        />
      </div>
      <div className="relative pt-36 md:pt-44">
        <PageHeader 
          title="About The Vega Wealth - Leading Wealth Management Company in Dubai"
          subtitle="Your trusted partner in building lasting wealth and securing your financial future in Dubai, UAE"
          dubaiImage="/dubai1.png"
        />
      <ImageContentSection
        title="The Vega Wealth - Excellence in Financial Advisory Dubai"
        imageSrc="/meeting 1.png"
        imageAlt="The Vega Wealth Financial Advisory Excellence in Dubai"
        content={
          <div className="space-y-6">
            <p className="text-lg text-white leading-relaxed">
              With over 15 years of experience in the UAE financial services industry, The Vega Wealth has established itself as a trusted wealth management company in Dubai for high-net-worth individuals, professionals, and families seeking expert financial guidance.
            </p>
            <p className="text-lg text-white leading-relaxed">
              Our team of licensed financial advisors brings deep expertise in wealth management, investment advisory, and comprehensive financial planning, helping clients navigate complex financial decisions with confidence. Vega Wealth Dubai is your trusted partner for all financial advisory services.
            </p>
          </div>
        }
      />
        <MissionVision />
        <FounderSection />
        <CoreValues />
      </div>
    </>
  )
}

