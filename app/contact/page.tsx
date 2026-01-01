import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import MapEmbed from '@/components/MapEmbed'

export const metadata: Metadata = {
  title: 'Contact Us - The Vega Wealth | Dubai Financial Advisory | Free Consultation',
  description: 'Get in touch with The Vega Wealth for expert financial advisory services in Dubai, UAE. Schedule a free consultation today. Call +971 50 123 4567 or email Accounts@thevegawealth.com',
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
    url: 'https://vegawalth.com/contact',
    images: ['/logo1.png'],
  },
  alternates: {
    canonical: 'https://vegawalth.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-36">
      <div className="bg-gradient-primary section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your financial goals
          </p>
        </div>
      </div>
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
  )
}

