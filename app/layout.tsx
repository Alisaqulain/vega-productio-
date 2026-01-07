import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'
import ConditionalNavbar from '@/components/ConditionalNavbar'
import Footer from '@/components/Footer'
import GoogleTagManager from '@/components/GoogleTagManager'
import GoogleAnalytics from '@/components/GoogleAnalytics'

// Lazy load heavy components
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), {
  ssr: false,
})
const Chatbot = dynamic(() => import('@/components/Chatbot'), {
  ssr: false,
})
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), {
  ssr: false,
})
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'), {
  ssr: false,
})
const FinancialBackground = dynamic(() => import('@/components/FinancialBackground'), {
  ssr: false,
})
const MobileStickyCTA = dynamic(() => import('@/components/MobileStickyCTA'), {
  ssr: false,
})
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), {
  ssr: false,
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://thevegawealth.com'),
  title: {
    default: 'The Vega Wealth | Vega Wealth Dubai | Wealth Management Company Dubai',
    template: '%s | The Vega Wealth - Financial Advisory Dubai',
  },
  description: 'Premium wealth management, financial planning, and investment advisory services in Dubai, UAE. Expert financial advisors for NRI investors, professionals, and HNIs. Licensed & regulated financial advisory firm.',
  keywords: [
    'Wealth Management Dubai',
    'Financial Advisor Dubai',
    'Investment Advisory UAE',
    'Financial Planning Dubai',
    'NRI Wealth Management UAE',
    'Financial Advisory Services Dubai',
    'Wealth Management Company Dubai',
    'Financial Planner Dubai',
    'Investment Advisor Dubai',
    'Estate Planning Dubai',
    'Insurance Planning UAE',
    'Mortgage Advisory Dubai',
    'Financial Consultant Dubai',
    'Portfolio Management Dubai',
    'Retirement Planning Dubai',
    'Tax Planning Dubai',
    'NRI Financial Services UAE',
    'Dubai Financial Services',
    'Wealth Management UAE',
    'Financial Advisory Firm Dubai',
    'Best Financial Advisor Dubai',
    'Top Wealth Management Dubai',
    'Professional Financial Planning Dubai',
    'Financial Services Dubai',
    'Wealth Advisor Dubai',
  ],
  authors: [{ name: 'The Vega Wealth' }],
  creator: 'The Vega Wealth',
  publisher: 'The Vega Wealth',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thevegawealth.com',
    siteName: 'The Vega Wealth',
    title: 'The Vega Wealth | Vega Wealth Dubai | Wealth Management Company Dubai',
    description: 'Premium wealth management, financial planning, and investment advisory services in Dubai, UAE. Expert financial advisors for NRI investors, professionals, and HNIs.',
    images: [
      {
        url: '/logo1.png',
        width: 1200,
        height: 630,
        alt: 'The Vega Wealth - Financial Advisory Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Vega Wealth | Vega Wealth Dubai | Wealth Management Company Dubai',
    description: 'Premium wealth management, financial planning, and investment advisory services in Dubai, UAE.',
    images: ['/logo1.png'],
    creator: '@vegawalth',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo1.png',
    shortcut: '/logo1.png',
    apple: '/logo1.png',
  },
  alternates: {
    canonical: 'https://thevegawealth.com',
  },
  category: 'Financial Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo1.png" />
        <link rel="canonical" href="https://thevegawealth.com" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "The Vega Wealth",
              "alternateName": ["Vega Wealth", "Vega Wealth Dubai", "The Vega Wealth Dubai"],
              "description": "The Vega Wealth - Leading wealth management company in Dubai, UAE. Expert financial advisory services for investors, high-net-worth individuals, and business owners. Vega Wealth Dubai offers comprehensive wealth management, investment advisory, and financial planning services.",
              "url": "https://thevegawealth.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://thevegawealth.com/logo1.png",
                "width": 512,
                "height": 512
              },
              "image": "https://thevegawealth.com/logo1.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Aspin Business Center, Sheikh Zayed Road",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "addressCountry": "AE",
                "postalCode": "00000"
              },
              "areaServed": {
                "@type": "Country",
                "name": "United Arab Emirates",
                "sameAs": "https://en.wikipedia.org/wiki/United_Arab_Emirates"
              },
              "serviceType": [
                "Wealth Management",
                "Financial Planning",
                "Investment Advisory",
                "Insurance Planning",
                "Estate Planning",
                "Mortgage Advisory",
                "Portfolio Management",
                "Retirement Planning",
                "Tax Planning",
                "NRI Financial Services"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Financial Advisory Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Wealth Management Dubai",
                      "description": "Comprehensive wealth management services for high-net-worth individuals"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Investment Advisory UAE",
                      "description": "Expert investment advisory and portfolio management services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Financial Planning Dubai",
                      "description": "Personalized financial planning and goal-based strategies"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "The Vega Wealth",
              "alternateName": "Vega Wealth",
              "additionalName": "Vega Wealth Dubai",
              "url": "https://thevegawealth.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://thevegawealth.com/logo1.png",
                "width": 512,
                "height": 512
              },
              "image": "https://thevegawealth.com/logo1.png",
              "description": "Premium wealth management and financial advisory services in Dubai, UAE",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "telephone": "+971-50-257-5675",
                "email": "Info@thevegawealth.com",
                "areaServed": "AE",
                "availableLanguage": ["English", "Arabic", "Hindi", "Urdu"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/vegawalth",
                "https://twitter.com/vegawalth",
                "https://www.facebook.com/vegawalth"
              ],
              "foundingDate": "2010",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "50+"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "The Vega Wealth",
              "alternateName": "Vega Wealth Dubai",
              "image": "https://thevegawealth.com/logo1.png",
              "@id": "https://thevegawealth.com",
              "url": "https://thevegawealth.com",
              "telephone": "+971-50-257-5675",
              "priceRange": "$$",
              "description": "The Vega Wealth - Leading wealth management company in Dubai, UAE. Expert financial advisory services for investors, high-net-worth individuals, and business owners.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Aspin Business Center, Sheikh Zayed Road",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.2048,
                "longitude": 55.2708
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        <LoadingScreen />
        <GoogleTagManager />
        <GoogleAnalytics />
        <FinancialBackground />
        <ConditionalNavbar />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Chatbot />
        <ScrollProgress />
        <ScrollToTop />
        <MobileStickyCTA />
      </body>
    </html>
  )
}

