import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import FinancialPlanning from '@/components/services/FinancialPlanning'
import InvestmentAdvisory from '@/components/services/InvestmentAdvisory'
import InsurancePlanning from '@/components/services/InsurancePlanning'
import EstatePlanning from '@/components/services/EstatePlanning'
import MortgageAdvisory from '@/components/services/MortgageAdvisory'
import PageHeader from '@/components/PageHeader'

const PageBackgroundImage = dynamic(() => import('@/components/PageBackgroundImage'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Our Services - The Vega Wealth | Financial Advisory Services Dubai',
  description: 'Comprehensive financial services including wealth management, investment advisory, insurance planning, estate planning, and mortgage advisory in Dubai, UAE. Expert financial planning for NRI investors, professionals, and HNIs.',
  keywords: [
    'Financial Services Dubai',
    'Wealth Management Services Dubai',
    'Investment Advisory Services UAE',
    'Financial Planning Services Dubai',
    'Insurance Planning Dubai',
    'Estate Planning Services Dubai',
    'Mortgage Advisory Dubai',
    'Portfolio Management Dubai',
    'Retirement Planning Dubai',
    'Tax Planning Services Dubai',
    'NRI Financial Services UAE',
    'Financial Advisory Services Dubai',
  ],
  openGraph: {
    title: 'Our Services - The Vega Wealth | Financial Advisory Services Dubai',
    description: 'Comprehensive financial services for wealth management, investment, insurance, estate, and mortgage advisory in Dubai, UAE.',
    url: 'https://vegawalth.com/services',
    images: ['/logo1.png'],
  },
  alternates: {
    canonical: 'https://vegawalth.com/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Premium background image - no video */}
      <PageBackgroundImage 
        imageSrc="/meeting 4.png"
        overlay="light"
        overlayOpacity={0.4}
      />
      <div className="pt-36 md:pt-44 relative z-10">
        <PageHeader 
          title="Our Services"
          subtitle="Comprehensive financial solutions tailored to your unique needs"
          dubaiImage="/dubai2.png"
        />
        <FinancialPlanning />
        <InvestmentAdvisory />
        <InsurancePlanning />
        <EstatePlanning />
        <MortgageAdvisory />
      </div>
    </>
  )
}


