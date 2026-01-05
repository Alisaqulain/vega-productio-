import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You - The Vega Wealth | We\'ll Contact You Soon',
  description: 'Thank you for contacting The Vega Wealth. Our team will get back to you shortly to discuss your financial goals.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}





