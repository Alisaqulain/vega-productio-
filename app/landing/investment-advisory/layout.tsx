import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investment Advisory Dubai - Expert Portfolio Management | The Vega Wealth',
  description: 'Professional investment advisory services in Dubai. Expert portfolio management for NRI investors, professionals & HNIs. Free consultation available.',
  keywords: [
    'Investment Advisory Dubai',
    'Investment Advisor Dubai',
    'Portfolio Management Dubai',
    'Investment Services UAE',
    'Financial Investment Dubai',
    'NRI Investment Advisory',
  ],
  openGraph: {
    title: 'Investment Advisory Dubai - Expert Portfolio Management | The Vega Wealth',
    description: 'Professional investment advisory services in Dubai. Expert portfolio management for NRI investors.',
    url: 'https://thevegawealth.com/landing/investment-advisory',
    images: ['/logo1.png'],
  },
  alternates: {
    canonical: 'https://thevegawealth.com/landing/investment-advisory',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function InvestmentAdvisoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}





