import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Lock, Eye, FileCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - The Vega Wealth | Data Protection & Privacy',
  description: 'Privacy Policy for The Vega Wealth. Learn how we protect and handle your personal information in compliance with UAE data protection regulations. Your financial data security is our priority.',
  keywords: [
    'Privacy Policy The Vega Wealth',
    'Data Protection Dubai',
    'Financial Data Security Dubai',
    'Privacy Policy Financial Advisor Dubai',
    'UAE Data Protection',
    'Financial Privacy Dubai',
  ],
  openGraph: {
    title: 'Privacy Policy - The Vega Wealth | Data Protection & Privacy',
    description: 'Privacy Policy for The Vega Wealth. Learn how we protect your personal information in compliance with UAE data protection regulations.',
    url: 'https://vegawalth.com/privacy',
    images: ['/logo1.png'],
  },
  alternates: {
    canonical: 'https://vegawalth.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="pt-24 md:pt-36 pb-20">
      <div className="bg-gradient-primary section-padding">
        <div className="container-custom text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="text-white" size={40} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your privacy and data protection are our top priorities
          </p>
          <p className="text-sm text-white/80 mt-4">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="glass-card p-8 md:p-12 rounded-2xl space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-bold mb-4 gradient-text">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Vega Wealth ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our financial advisory services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website and services, you consent to the collection and use of information in accordance with this policy. We operate in compliance with the UAE Data Protection Law and international best practices for financial services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <div className="flex items-center mb-4">
                <FileCheck className="text-primary-blue mr-3" size={28} />
                <h2 className="text-3xl font-bold gradient-text">Information We Collect</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect the following types of personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Name, contact details (email, phone, address)</li>
                <li>Date of birth and nationality</li>
                <li>Financial information (income, assets, investment goals)</li>
                <li>Identification documents (passport, Emirates ID)</li>
                <li>Bank account and payment information</li>
                <li>Employment and professional information</li>
                <li>Risk tolerance and investment preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Website usage data and analytics</li>
                <li>IP address and browser information</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Device information and location data</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section>
              <div className="flex items-center mb-4">
                <Eye className="text-primary-blue mr-3" size={28} />
                <h2 className="text-3xl font-bold gradient-text">How We Use Your Information</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>To provide and improve our financial advisory services</li>
                <li>To create personalized financial plans and investment strategies</li>
                <li>To communicate with you about our services and respond to inquiries</li>
                <li>To comply with legal and regulatory requirements</li>
                <li>To prevent fraud and ensure security</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To analyze website usage and improve user experience</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section>
              <div className="flex items-center mb-4">
                <Lock className="text-primary-blue mr-3" size={28} />
                <h2 className="text-3xl font-bold gradient-text">Data Protection & Security</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure servers and databases with restricted access</li>
                <li>Regular security audits and assessments</li>
                <li>Employee training on data protection</li>
                <li>Compliance with UAE financial regulations</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-3xl font-bold mb-4 gradient-text">Data Sharing & Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>With your explicit consent</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transfer or merger (with notice)</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-3xl font-bold mb-4 gradient-text">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under UAE data protection laws, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
                <li>File a complaint with relevant authorities</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-3xl font-bold mb-4 gradient-text">Cookies & Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookies through your browser settings, though this may affect website functionality.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-3xl font-bold mb-4 gradient-text">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-3xl font-bold mb-4 gradient-text">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-3xl font-bold mb-4 gradient-text">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-primary/5 p-6 rounded-xl border border-primary-blue/20">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> <a href="mailto:privacy@vegawalth.com" className="text-primary-blue hover:underline">privacy@vegawalth.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+971501234567" className="text-primary-blue hover:underline">+971 50 123 4567</a></p>
                <p><strong>Address:</strong> Dubai, United Arab Emirates</p>
              </div>
            </section>

            {/* Back Link */}
            <div className="pt-8 border-t border-gray-200">
              <Link href="/" className="text-primary-blue hover:underline font-semibold inline-flex items-center">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

