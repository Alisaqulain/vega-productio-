import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Check, Award, Users, TrendingUp, Shield, Clock, Globe } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import ContactForm from '@/components/ContactForm'

const PageBackgroundImage = dynamic(() => import('@/components/PageBackgroundImage'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Why Choose The Vega Wealth in Dubai | Best Wealth Management Company Dubai',
  description: 'Discover why The Vega Wealth is the best wealth management company in Dubai. 15+ years experience, AED 2B+ assets under management, 500+ satisfied clients. Expert financial advisory services for investors and high-net-worth individuals.',
  keywords: [
    'Why Choose The Vega Wealth',
    'Best Wealth Management Company Dubai',
    'Vega Wealth Dubai',
    'The Vega Wealth',
    'Financial Advisor Dubai',
    'Wealth Management Dubai',
    'Financial Advisory Services Dubai',
    'Top Financial Advisor Dubai',
  ],
  openGraph: {
    title: 'Why Choose The Vega Wealth in Dubai | Best Wealth Management Company',
    description: 'Discover why The Vega Wealth is the best wealth management company in Dubai. 15+ years experience, AED 2B+ assets under management.',
    url: 'https://thevegawealth.com/why-choose-vega-wealth',
    images: ['/logo1.png'],
  },
  alternates: {
    canonical: 'https://thevegawealth.com/why-choose-vega-wealth',
  },
}

export default function WhyChooseVegaWealthPage() {
  return (
    <>
      <PageBackgroundImage 
        imageSrc="/meeting 3.png"
        overlay="light"
        overlayOpacity={0.3}
      />
      <div className="pt-36 md:pt-44 relative z-10">
        <PageHeader 
          title="Why Choose The Vega Wealth in Dubai"
          subtitle="Leading wealth management company in Dubai, UAE - Trusted by 500+ clients managing AED 2B+ in assets"
          dubaiImage="/dubai1.png"
        />

        <div className="section-padding">
          <div className="container-custom max-w-6xl">
            {/* Introduction */}
            <section className="glass-card p-8 md:p-12 rounded-2xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                The Vega Wealth - Your Trusted Partner for Wealth Management in Dubai
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p className="text-lg leading-relaxed">
                  When searching for the best wealth management company in Dubai, The Vega Wealth stands out as a premier financial advisory firm. With over 15 years of experience serving investors, high-net-worth individuals, and business owners in Dubai and across the UAE, we have built a reputation for excellence, trust, and results.
                </p>
                <p className="text-lg leading-relaxed">
                  The Vega Wealth, also known as Vega Wealth Dubai, offers comprehensive financial advisory services designed to help you preserve and grow your wealth. Our team of licensed financial advisors combines deep market knowledge with personalized service to deliver wealth management solutions that align with your unique financial goals.
                </p>
              </div>
            </section>

            {/* Key Differentiators */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8 text-center">
                What Makes The Vega Wealth the Best Choice in Dubai?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-xl">
                  <Award className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">15+ Years of Proven Excellence</h3>
                  <p className="text-gray-600">
                    The Vega Wealth has been serving clients in Dubai for over 15 years, building deep expertise in the UAE financial market and establishing long-term relationships with investors and high-net-worth individuals.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <TrendingUp className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">AED 2B+ Assets Under Management</h3>
                  <p className="text-gray-600">
                    We manage over AED 2 billion in client assets, demonstrating our capability to handle significant wealth and our clients' trust in The Vega Wealth's expertise.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <Users className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">500+ Satisfied Clients</h3>
                  <p className="text-gray-600">
                    Trusted by over 500 clients including professionals, business owners, and high-net-worth individuals in Dubai and across the UAE. Our client retention rate speaks to our commitment to excellence.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <Shield className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">Licensed & Regulated</h3>
                  <p className="text-gray-600">
                    The Vega Wealth is a licensed and regulated financial advisory firm in Dubai, ensuring full compliance with UAE financial regulations and providing you with peace of mind.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <Clock className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">Personalized Service</h3>
                  <p className="text-gray-600">
                    Every financial plan is customized to your unique situation. We take time to understand your goals, risk tolerance, and financial circumstances before recommending strategies.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <Globe className="text-primary-blue mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">Dubai Market Expertise</h3>
                  <p className="text-gray-600">
                    Deep understanding of the Dubai and UAE financial landscape, including local regulations, tax implications, and investment opportunities specific to the region.
                  </p>
                </div>
              </div>
            </section>

            {/* Services Overview */}
            <section className="glass-card p-8 md:p-12 rounded-2xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">
                Comprehensive Financial Advisory Services in Dubai
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Wealth Management</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <Check className="text-primary-blue flex-shrink-0 mt-1" size={20} />
                      <span>Portfolio management and asset allocation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="text-primary-blue flex-shrink-0 mt-1" size={20} />
                      <span>Risk assessment and management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="text-primary-blue flex-shrink-0 mt-1" size={20} />
                      <span>Wealth preservation strategies</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Investment Advisory</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <Check className="text-primary-blue flex-shrink-0 mt-1" size={20} />
                      <span>Stock and equity investments</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="text-primary-blue flex-shrink-0 mt-1" size={20} />
                      <span>Real estate investment advisory</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="text-primary-blue flex-shrink-0 mt-1" size={20} />
                      <span>Alternative investment strategies</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Financial Planning</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <Check className="text-primary-blue flex-shrink-0 mt-1" size={20} />
                      <span>Retirement planning</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="text-primary-blue flex-shrink-0 mt-1" size={20} />
                      <span>Education funding strategies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="text-primary-blue flex-shrink-0 mt-1" size={20} />
                      <span>Tax planning and optimization</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Specialized Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <Check className="text-primary-blue flex-shrink-0 mt-1" size={20} />
                      <span>NRI wealth management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="text-primary-blue flex-shrink-0 mt-1" size={20} />
                      <span>Estate planning and legacy management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="text-primary-blue flex-shrink-0 mt-1" size={20} />
                      <span>Insurance planning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="glass-card p-8 md:p-12 rounded-2xl bg-gradient-primary text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Experience The Vega Wealth Difference
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  Join 500+ satisfied clients who trust The Vega Wealth for their wealth management needs in Dubai. Schedule a free consultation today.
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <ContactForm />
              </div>
            </section>

            {/* Internal Links */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Learn more about The Vega Wealth:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about" className="text-primary-blue hover:underline font-semibold">
                  About The Vega Wealth
                </Link>
                <Link href="/services" className="text-primary-blue hover:underline font-semibold">
                  Our Services
                </Link>
                <Link href="/wealth-management-dubai" className="text-primary-blue hover:underline font-semibold">
                  Wealth Management Dubai
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

