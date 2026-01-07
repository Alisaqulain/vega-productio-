'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, MessageCircle } from 'lucide-react'
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/tracking'

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePhoneClick = () => {
    trackPhoneClick('+971502575675')
  }

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('sticky_mobile_cta')
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '971502575675'
    const message = encodeURIComponent("Hello Vega Wealth, I'm interested in your financial advisory services.")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-neutral-200 shadow-2xl">
      <div className="container-custom py-3">
        <div className="flex gap-3">
          <a
            href="tel:+971502575675"
            onClick={handlePhoneClick}
            className="flex-1 bg-primary-navy text-white px-4 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary-navy-dark transition-colors min-h-[48px]"
          >
            <Phone size={18} />
            Call
          </a>
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 bg-[#25D366] text-white px-4 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#20BA5A] transition-colors min-h-[48px]"
          >
            <MessageCircle size={18} />
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}




