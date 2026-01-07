import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Check, TrendingUp, BarChart3, Globe, Target, PieChart } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import ContactForm from '@/components/ContactForm'

const PageBackgroundImage = dynamic(() => import('@/components/PageBackgroundImage'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Investment Advisory for UAE Clients | The Vega Wealth | Portfolio Management Dubai',
  description: 'Expert investment advisory services for UAE clients. The Vega Wealth offers comprehensive portfolio management, investment strategies, and financial advisory in Dubai. Serving investors, high-net-worth individuals, and business owners.',
  keywords: [
    'Investment Advisory for UAE Clients',
    'Investment Advisory UAE',
    'Portfolio Management Dubai',
    'Investment Advisor Dubai',
    'Financial Investment Dubai',
    'The Vega Wealth',
    'Vega Wealth Dubai',
    'Investment Services UAE',
    'NRI Investment Advisory',
    'Dubai Investment Advisory',
  ],
  openGraph: {
    title: 'Investment Advisory for UAE Clients | The Vega Wealth',
    description: 'Expert investment advisory services for UAE clients. Comprehensive portfolio management and investment strategies in Dubai.',
    url: 'https://thevegawealth.com/investment-advisory-uae',
    images: ['/logo1.png'],
  },
  alternates: {
    canonical: 'https://thevegawealth.com/investment-advisory-uae',
  },
}

export default function InvestmentAdvisoryUAEPage() {
  return (
    <>
      <PageBackgroundImage 
        imageSrc="/meeting 4.png"
        overlay="light"
        overlayOpacity={0.3}
      />
      <div className="pt-36 md:pt-44 relative z-10">
        <PageHeader 
          title="Investment Advisory for UAE Clients"
          subtitle="Expert portfolio management and investment advisory services for investors, high-net-worth individuals, and business owners in Dubai, UAE"
          dubaiImage="/dubai2.png"
        />

        <div className="section-padding">
          <div className="container-custom max-w-6xl">
            {/* Introduction */}
            <section className="glass-card p-8 md:p-12 rounded-2xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                Professional Investment Advisory Services for UAE Clients
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p className="text-lg leading-relaxed">
                  The Vega Wealth provides comprehensive investment advisory services for UAE clients, including residents, expatriates, and NRI investors. Our expert team of licensed investment advisors in Dubai helps you build and manage investment portfolios that align with your financial goals, risk tolerance, and investment timeline.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether you're looking to invest in stocks, bonds, real estate, mutual funds, or alternative investments, The Vega Wealth offers personalized investment advisory services designed for the UAE market. We understand the unique investment landscape in Dubai and UAE, including regulatory requirements, tax implications, and local market opportunities.
                </p>
              </div>
            </section>

            {/* Services */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8 text-center">
                Comprehensive Investment Advisory Services in UAE
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-xl">
                  <BarChart3 className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">Portfolio Management</h3>
                  <p className="text-gray-600">
                    Professional portfolio management services including asset allocation, diversification, and rebalancing strategies tailored to your investment goals.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <TrendingUp className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">Stock & Equity Advisory</h3>
                  <p className="text-gray-600">
                    Expert stock selection, market analysis, and equity investment strategies for both local and international markets.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <PieChart className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">Mutual Funds Advisory</h3>
                  <p className="text-gray-600">
                    Comprehensive mutual fund selection and portfolio construction based on your risk profile and investment objectives.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <Target className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">Real Estate Investment</h3>
                  <p className="text-gray-600">
                    Strategic real estate investment advisory for Dubai and UAE property markets, including analysis and portfolio optimization.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <Globe className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">International Investments</h3>
                  <p className="text-gray-600">
                    Access to global investment opportunities with expert guidance on international diversification and currency management.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <Check className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">Alternative Investments</h3>
                  <p className="text-gray-600">
                    Advisory services for alternative investments including private equity, commodities, and structured products.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="glass-card p-8 md:p-12 rounded-2xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">
                Why Choose The Vega Wealth for Investment Advisory in UAE?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Check className="text-primary-blue flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">UAE Market Expertise</h3>
                    <p className="text-gray-700">
                      Deep understanding of the UAE investment landscape, including Dubai Stock Exchange, local regulations, and regional market dynamics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="text-primary-blue flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Personalized Investment Strategies</h3>
                    <p className="text-gray-700">
                      Every investment advisory plan is customized to your financial situation, goals, risk tolerance, and investment timeline.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="text-primary-blue flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">NRI Investment Solutions</h3>
                    <p className="text-gray-700">
                      Specialized investment advisory services for Non-Resident Indians, including FCNR deposits, NRE/NRO accounts, and cross-border investment strategies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="text-primary-blue flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Regular Portfolio Reviews</h3>
                    <p className="text-gray-700">
                      Ongoing portfolio monitoring and regular reviews to ensure your investments remain aligned with your goals and market conditions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="text-primary-blue flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Risk Management</h3>
                    <p className="text-gray-700">
                      Comprehensive risk assessment and management strategies to protect your investments while pursuing growth opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="glass-card p-8 md:p-12 rounded-2xl bg-gradient-primary text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Get Expert Investment Advisory for Your UAE Portfolio
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  Schedule a free consultation with The Vega Wealth investment advisors. Discover how we can help you build and manage a successful investment portfolio in Dubai and UAE.
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <ContactForm />
              </div>
            </section>

            {/* Internal Links */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Explore more services:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/services" className="text-primary-blue hover:underline font-semibold">
                  All Financial Services
                </Link>
                <Link href="/wealth-management-dubai" className="text-primary-blue hover:underline font-semibold">
                  Wealth Management Dubai
                </Link>
                <Link href="/about" className="text-primary-blue hover:underline font-semibold">
                  About The Vega Wealth
                </Link>
                <Link href="/contact" className="text-primary-blue hover:underline font-semibold">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

