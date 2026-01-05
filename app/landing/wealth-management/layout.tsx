import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wealth Management Dubai - Expert Financial Advisory | The Vega Wealth',
  description: 'Professional wealth management services in Dubai. Expert financial advisors managing AED 2B+ in assets. Free consultation for NRI investors, professionals & HNIs.',
  keywords: [
    'Wealth Management Dubai',
    'Wealth Management UAE',
    'Financial Advisor Dubai',
    'Wealth Management Services Dubai',
    'Portfolio Management Dubai',
    'NRI Wealth Management',
  ],
  openGraph: {
    title: 'Wealth Management Dubai - Expert Financial Advisory | The Vega Wealth',
    description: 'Professional wealth management services in Dubai. Expert financial advisors managing AED 2B+ in assets.',
    url: 'https://vegawalth.com/landing/wealth-management',
    images: ['/logo1.png'],
  },
  alternates: {
    canonical: 'https://vegawalth.com/landing/wealth-management',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function WealthManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}





