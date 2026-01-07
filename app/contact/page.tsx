import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import MapEmbed from '@/components/MapEmbed'
import PageHeader from '@/components/PageHeader'

const PageBackgroundImage = dynamic(() => import('@/components/PageBackgroundImage'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Contact Us - The Vega Wealth | Dubai Financial Advisory | Free Consultation',
  description: 'Get in touch with The Vega Wealth for expert financial advisory services in Dubai, UAE. Schedule a free consultation today. Call +971 50 257 5675 or email Info@thevegawealth.com',
  keywords: [
    'Contact Financial Advisor Dubai',
    'Financial Advisory Dubai Contact',
    'Wealth Management Dubai Contact',
    'Financial Planner Dubai Phone',
    'Dubai Financial Services Contact',
    'Financial Advisor Dubai Email',
    'Free Financial Consultation Dubai',
    'Schedule Financial Consultation Dubai',
  ],
  openGraph: {
    title: 'Contact Us - The Vega Wealth | Dubai Financial Advisory',
    description: 'Get in touch with The Vega Wealth for expert financial advisory services in Dubai, UAE. Schedule a free consultation today.',
    url: 'https://thevegawealth.com/contact',
    images: ['/logo1.png'],
  },
  alternates: {
    canonical: 'https://thevegawealth.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Premium background image - no video */}
      <PageBackgroundImage 
        imageSrc="/meeting 5.png"
        overlay="light"
        overlayOpacity={0.4}
      />
      <div className="pt-36 md:pt-44 relative z-10">
        <PageHeader 
          title="Contact Us"
          subtitle="Let's discuss how we can help you achieve your financial goals"
          dubaiImage="/dubai3.png"
        />
        <div className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <ContactForm />
              <ContactInfo />
            </div>
            <MapEmbed />
          </div>
        </div>
      </div>
    </>
  )
}

