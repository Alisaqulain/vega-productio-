'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { trackFormSubmission, trackPhoneClick, trackWhatsAppClick } from '@/lib/tracking'

// Note: Metadata cannot be exported from client components
// SEO is handled via layout.tsx

export default function ThankYouPage() {
  // Fire form conversion tracking when page loads
  // This ensures conversion only fires after successful form submission and redirect
  useEffect(() => {
    // Track form conversion on thank-you page (primary conversion point)
    trackFormSubmission('contact_form', {
      page: 'thank_you',
      conversion_type: 'form_submission',
    })
  }, [])

  const handlePhoneClick = () => {
    trackPhoneClick('+971501234567')
  }

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('thank_you_page')
  }
  return (
    <div className="min-h-screen flex items-center justify-center pt-32 md:pt-40 pb-16 px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="mb-8 inline-block"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-primary-blue to-primary-green rounded-full flex items-center justify-center mx-auto shadow-2xl">
            <CheckCircle className="text-white" size={48} />
          </div>
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Thank You!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          We've received your enquiry and our team will contact you within 24 hours.
        </p>

        <div className="glass-card p-8 rounded-2xl mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            What Happens Next?
          </h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Initial Review</h3>
                <p className="text-gray-600">Our team will review your enquiry and understand your financial goals.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Personal Consultation</h3>
                <p className="text-gray-600">We'll schedule a free consultation to discuss your needs in detail.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Customized Plan</h3>
                <p className="text-gray-600">We'll create a personalized financial plan tailored to your goals.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+971501234567"
            onClick={handlePhoneClick}
            className="btn-primary inline-flex items-center justify-center"
          >
            <Phone className="mr-2" size={20} />
            Call Us Now
          </a>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '971501234567'}?text=${encodeURIComponent("Hello Vega Wealth, I just submitted an enquiry and would like to speak with you.")}`}
            onClick={handleWhatsAppClick}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="mr-2" size={20} />
            Chat on WhatsApp
          </a>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="text-primary-blue hover:text-primary-green transition-colors inline-flex items-center"
          >
            Return to Home
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}

