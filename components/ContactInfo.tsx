'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/tracking'

export default function ContactInfo() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '971502575675'
  const defaultMessage = encodeURIComponent(
    "Hello Vega Wealth, I'm interested in your financial advisory services."
  )

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('contact_page')
    const url = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`
    window.open(url, '_blank')
  }

  const handlePhoneClick = () => {
    trackPhoneClick('+971502575675')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold mb-6 gradient-text">Contact Information</h2>
        <p className="text-gray-600 mb-8">
          Reach out to us through any of the following channels. We're here to help you on your path to prosperity.
        </p>
      </div>

      <div className="glass-card p-6 rounded-2xl">
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1 text-gray-900">Office Address</h3>
            <p className="text-gray-600">
              Aspin Business Center<br />
              Sheikh Zayed Road<br />
              Dubai, UAE
            </p>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 rounded-2xl">
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1 text-gray-900">Phone</h3>
            <a
              href="tel:+971502575675"
              onClick={handlePhoneClick}
              className="text-primary-blue hover:underline"
            >
              +971 50 257 5675
            </a>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 rounded-2xl">
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1 text-gray-900">Email</h3>
            <a
              href="mailto:Info@vegawealth.com"
              className="text-primary-blue hover:underline"
            >
              Info@vegawealth.com
            </a>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 rounded-2xl">
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1 text-gray-900">Business Hours</h3>
            <p className="text-gray-600">
              Sunday - Thursday: 9:00 AM - 6:00 PM<br />
              Friday - Saturday: By Appointment
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={handleWhatsAppClick}
        className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
      >
        <MessageCircle className="mr-2" size={24} />
        Chat on WhatsApp
      </button>
    </motion.div>
  )
}




