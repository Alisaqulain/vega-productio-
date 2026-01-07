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
  title: 'Financial Advisory Services Dubai | The Vega Wealth | Wealth Management Company',
  description: 'Comprehensive financial advisory services in Dubai, UAE. The Vega Wealth offers wealth management, investment advisory, insurance planning, estate planning, and mortgage advisory. Expert financial planning for investors, high-net-worth individuals, and business owners.',
  keywords: [
    'financial advisory services dubai',
    'wealth management company in dubai',
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
    'The Vega Wealth Services',
    'Vega Wealth Dubai Services',
  ],
  openGraph: {
    title: 'Our Services - The Vega Wealth | Financial Advisory Services Dubai',
    description: 'Comprehensive financial services for wealth management, investment, insurance, estate, and mortgage advisory in Dubai, UAE.',
    url: 'https://thevegawealth.com/services',
    images: ['/logo1.png'],
  },
  alternates: {
    canonical: 'https://thevegawealth.com/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Background image */}
      <PageBackgroundImage 
        imageSrc="/meeting1.avif"
        overlay="light"
        overlayOpacity={0.2}
      />
      <div className="pt-36 md:pt-44 relative z-10">
        <PageHeader 
          title="Financial Advisory Services Dubai"
          subtitle="Comprehensive wealth management and financial advisory solutions tailored to your unique needs in Dubai, UAE"
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


