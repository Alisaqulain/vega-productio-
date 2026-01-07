import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Check, TrendingUp, Shield, Target, BarChart3, Users } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import ContactForm from '@/components/ContactForm'

const PageBackgroundImage = dynamic(() => import('@/components/PageBackgroundImage'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Wealth Management Services in Dubai | The Vega Wealth | Expert Financial Advisory',
  description: 'Professional wealth management services in Dubai, UAE. The Vega Wealth offers comprehensive wealth management solutions for investors, high-net-worth individuals, and business owners. Expert financial advisory managing AED 2B+ in assets.',
  keywords: [
    'wealth management company in dubai',
    'Wealth Management Services in Dubai',
    'Wealth Management Dubai',
    'The Vega Wealth',
    'Vega Wealth Dubai',
    'Financial Advisory Dubai',
    'Wealth Management UAE',
    'Portfolio Management Dubai',
    'NRI Wealth Management Dubai',
    'High Net Worth Wealth Management Dubai',
  ],
  openGraph: {
    title: 'Wealth Management Services in Dubai | The Vega Wealth',
    description: 'Professional wealth management services in Dubai, UAE. Expert financial advisory managing AED 2B+ in assets.',
    url: 'https://thevegawealth.com/wealth-management-dubai',
    images: ['/logo1.png'],
  },
  alternates: {
    canonical: 'https://thevegawealth.com/wealth-management-dubai',
  },
}

export default function WealthManagementDubaiPage() {
  return (
    <>
      <PageBackgroundImage 
        imageSrc="/meeting 5.png"
        overlay="light"
        overlayOpacity={0.3}
      />
      <div className="pt-36 md:pt-44 relative z-10">
        <PageHeader 
          title="Wealth Management Services in Dubai"
          subtitle="Comprehensive wealth management solutions for investors, high-net-worth individuals, and business owners in Dubai, UAE"
          dubaiImage="/dubai3.png"
        />

        <div className="section-padding">
          <div className="container-custom max-w-6xl">
            {/* Introduction */}
            <section className="glass-card p-8 md:p-12 rounded-2xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                Why Choose The Vega Wealth for Wealth Management in Dubai?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p className="text-lg leading-relaxed">
                  The Vega Wealth is a leading wealth management company in Dubai, UAE, specializing in comprehensive financial advisory services for investors, high-net-worth individuals, and business owners. With over 15 years of experience and managing AED 2B+ in client assets, we are your trusted partner for wealth management in Dubai.
                </p>
                <p className="text-lg leading-relaxed">
                  Our expert team of licensed financial advisors provides personalized wealth management strategies tailored to your unique financial goals, risk tolerance, and investment preferences. Whether you're a local resident, expatriate, or NRI investor, The Vega Wealth offers specialized wealth management services designed for the Dubai market.
                </p>
              </div>
            </section>

            {/* Services */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8 text-center">
                Comprehensive Wealth Management Services in Dubai
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-xl">
                  <TrendingUp className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">Portfolio Management</h3>
                  <p className="text-gray-600">
                    Expert portfolio management and asset allocation strategies to optimize returns while managing risk.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <Target className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">Financial Planning</h3>
                  <p className="text-gray-600">
                    Comprehensive financial planning to achieve your short-term and long-term wealth goals.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <Shield className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">Risk Management</h3>
                  <p className="text-gray-600">
                    Advanced risk assessment and mitigation strategies to protect your wealth.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <BarChart3 className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">Investment Advisory</h3>
                  <p className="text-gray-600">
                    Expert investment advisory services for stocks, bonds, real estate, and alternative investments.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <Users className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">NRI Wealth Management</h3>
                  <p className="text-gray-600">
                    Specialized wealth management services for Non-Resident Indians in Dubai and UAE.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <Check className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">Estate Planning</h3>
                  <p className="text-gray-600">
                    Comprehensive estate planning and wealth transfer strategies for future generations.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="glass-card p-8 md:p-12 rounded-2xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">
                Why The Vega Wealth is the Best Wealth Management Company in Dubai
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Check className="text-primary-blue flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">15+ Years of Experience</h3>
                    <p className="text-gray-700">
                      The Vega Wealth has been serving clients in Dubai and UAE for over 15 years, building a reputation for excellence in wealth management.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="text-primary-blue flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">AED 2B+ Assets Under Management</h3>
                    <p className="text-gray-700">
                      We manage over AED 2 billion in client assets, demonstrating our expertise and trust in the Dubai market.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="text-primary-blue flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">500+ Satisfied Clients</h3>
                    <p className="text-gray-700">
                      Trusted by over 500 clients including high-net-worth individuals, professionals, and business owners in Dubai.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="text-primary-blue flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Licensed & Regulated</h3>
                    <p className="text-gray-700">
                      The Vega Wealth is a licensed and regulated financial advisory firm in Dubai, ensuring compliance with UAE financial regulations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="text-primary-blue flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
                    <p className="text-gray-700">
                      Every wealth management strategy is customized to your unique financial situation, goals, and risk tolerance.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="glass-card p-8 md:p-12 rounded-2xl bg-gradient-primary text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Start Your Wealth Management Journey with The Vega Wealth
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  Schedule a free consultation with our expert wealth management advisors in Dubai. Discover how The Vega Wealth can help you achieve your financial goals.
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

