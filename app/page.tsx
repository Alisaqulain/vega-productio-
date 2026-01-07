import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import TrustIndicators from '@/components/sections/TrustIndicators'
import SectionDivider from '@/components/SectionDivider'

// Lazy load below-the-fold components
const ServicesOverview = dynamic(() => import('@/components/sections/ServicesOverview'), {
  loading: () => <div className="min-h-[400px]" />,
})
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <div className="min-h-[400px]" />,
})
const CTABanner = dynamic(() => import('@/components/sections/CTABanner'), {
  loading: () => <div className="min-h-[300px]" />,
})

export const metadata: Metadata = {
  title: 'The Vega Wealth | Vega Wealth Dubai | Wealth Management Company Dubai',
  description: 'The Vega Wealth - Leading wealth management company in Dubai, UAE. Expert financial advisory services for investors, high-net-worth individuals, and business owners. Vega Wealth Dubai offers comprehensive wealth management, investment advisory, and financial planning services.',
  keywords: [
    'thevegawealth',
    'vega wealth',
    'vega wealth dubai',
    'wealth management company in dubai',
    'financial advisory services dubai',
    'The Vega Wealth',
    'Vega Wealth Dubai',
    'Wealth Management Dubai',
    'Financial Advisor Dubai',
    'Investment Advisory UAE',
    'Financial Planning Dubai',
    'Best Financial Advisor Dubai',
    'Top Wealth Management Dubai',
    'Dubai Financial Services',
    'Financial Consultant Dubai',
    'Portfolio Management Dubai',
  ],
  openGraph: {
    title: 'The Vega Wealth | Vega Wealth Dubai | Wealth Management Company Dubai',
    description: 'The Vega Wealth - Leading wealth management company in Dubai, UAE. Expert financial advisory services for investors, high-net-worth individuals, and business owners.',
    url: 'https://thevegawealth.com',
    images: ['/logo1.png'],
  },
  alternates: {
    canonical: 'https://thevegawealth.com',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <TrustIndicators />
      <SectionDivider />
      <ServicesOverview />
      <SectionDivider />
      <Testimonials />
      <CTABanner />
    </>
  )
}

