// Tracking utilities for Google Analytics, GTM, and Google Ads

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', eventName, eventParams)
  }

  // Google Tag Manager
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    ;(window as any).dataLayer.push({
      event: eventName,
      ...eventParams,
    })
  }
}

// Form submission tracking
export const trackFormSubmission = (formType: string, formData?: Record<string, any>) => {
  // Always track event for GA4/GTM analytics
  trackEvent('form_submit', {
    form_type: formType,
    ...formData,
  })

  // Google Ads conversion tracking - only fire if not disabled
  // This allows us to fire conversion on thank-you page instead of form submission
  const shouldFireConversion = formData?.fire_conversion !== false
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID

  if (shouldFireConversion && typeof window !== 'undefined' && (window as any).gtag) {
    if (conversionId) {
      try {
        ;(window as any).gtag('event', 'conversion', {
          send_to: conversionId,
          value: 1.0,
          currency: 'AED',
        })
        // Log for debugging (only in development)
        if (process.env.NODE_ENV === 'development') {
          console.log('✅ Form conversion fired:', conversionId)
        }
      } catch (error) {
        console.error('❌ Error firing form conversion:', error)
      }
    } else {
      console.warn('⚠️ NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID not set')
    }
  }
}

// Phone click tracking
export const trackPhoneClick = (phoneNumber: string) => {
  trackEvent('phone_click', {
    phone_number: phoneNumber,
  })

  // Google Ads conversion tracking for phone calls
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_ID

  if (typeof window !== 'undefined' && (window as any).gtag) {
    if (conversionId) {
      try {
        ;(window as any).gtag('event', 'conversion', {
          send_to: conversionId,
          value: 1.0,
          currency: 'AED',
        })
        // Log for debugging (only in development)
        if (process.env.NODE_ENV === 'development') {
          console.log('✅ Phone conversion fired:', conversionId)
        }
      } catch (error) {
        console.error('❌ Error firing phone conversion:', error)
      }
    } else {
      console.warn('⚠️ NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_ID not set')
    }
  }
}

// WhatsApp click tracking
export const trackWhatsAppClick = (source?: string) => {
  trackEvent('whatsapp_click', {
    source: source || 'unknown',
  })

  // Google Ads conversion tracking for WhatsApp
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_ID

  if (typeof window !== 'undefined' && (window as any).gtag) {
    if (conversionId) {
      try {
        ;(window as any).gtag('event', 'conversion', {
          send_to: conversionId,
          value: 1.0,
          currency: 'AED',
        })
        // Log for debugging (only in development)
        if (process.env.NODE_ENV === 'development') {
          console.log('✅ WhatsApp conversion fired:', conversionId)
        }
      } catch (error) {
        console.error('❌ Error firing WhatsApp conversion:', error)
      }
    } else {
      console.warn('⚠️ NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_ID not set')
    }
  }
}

// Page view tracking
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('config', process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    })
  }
}




