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
  title: 'The Vega Wealth - Your Path to Prosperity | Financial Advisory Dubai',
  description: 'Premium wealth management, financial planning, and investment advisory services in Dubai, UAE. Expert financial advisors for NRI investors, professionals, and HNIs. Licensed & regulated financial advisory firm managing AED 2B+ in assets.',
  keywords: [
    'Wealth Management Dubai',
    'Financial Advisor Dubai',
    'Investment Advisory UAE',
    'Financial Planning Dubai',
    'NRI Wealth Management UAE',
    'Best Financial Advisor Dubai',
    'Top Wealth Management Dubai',
    'Dubai Financial Services',
    'Financial Consultant Dubai',
    'Portfolio Management Dubai',
  ],
  openGraph: {
    title: 'The Vega Wealth - Your Path to Prosperity | Financial Advisory Dubai',
    description: 'Premium wealth management, financial planning, and investment advisory services in Dubai, UAE. Expert financial advisors for NRI investors, professionals, and HNIs.',
    url: 'https://vegawalth.com',
    images: ['/logo1.png'],
  },
  alternates: {
    canonical: 'https://vegawalth.com',
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

