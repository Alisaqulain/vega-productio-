import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - The Vega Wealth | Terms & Conditions',
  description: 'Terms of Service for The Vega Wealth. Read our terms and conditions for using our financial advisory services in Dubai, UAE.',
  openGraph: {
    title: 'Terms of Service - The Vega Wealth',
    description: 'Terms of Service for The Vega Wealth. Read our terms and conditions.',
  },
}

export default function TermsPage() {
  return (
    <div className="pt-24 md:pt-36 pb-20">
      <div className="bg-gradient-primary section-padding">
        <div className="container-custom text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="text-white" size={40} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Please read these terms carefully before using our services
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
              <h2 className="text-3xl font-bold mb-4 gradient-text">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to The Vega Wealth. These Terms of Service ("Terms") govern your access to and use of our website, financial advisory services, and related services (collectively, the "Services") provided by The Vega Wealth, a financial advisory firm operating in Dubai, United Arab Emirates.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services. These Terms constitute a legally binding agreement between you and The Vega Wealth.
              </p>
            </section>

            {/* Acceptance */}
            <section>
              <div className="flex items-center mb-4">
                <CheckCircle className="text-primary-blue mr-3" size={28} />
                <h2 className="text-3xl font-bold gradient-text">2. Acceptance of Terms</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                By using our website or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. You represent that you are at least 18 years old and have the legal capacity to enter into these Terms.
              </p>
            </section>

            {/* Services Description */}
            <section>
              <h2 className="text-3xl font-bold mb-4 gradient-text">3. Services Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Vega Wealth provides the following financial advisory services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Wealth Management and Financial Planning</li>
                <li>Investment Advisory Services</li>
                <li>Insurance Planning</li>
                <li>Estate Planning</li>
                <li>Mortgage Advisory</li>
                <li>Financial Consultation and Analysis</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                All services are provided in accordance with UAE financial regulations and international best practices. We reserve the right to modify, suspend, or discontinue any service at any time.
              </p>
            </section>

            {/* Client Responsibilities */}
            <section>
              <div className="flex items-center mb-4">
                <Scale className="text-primary-blue mr-3" size={28} />
                <h2 className="text-3xl font-bold gradient-text">4. Client Responsibilities</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Provide accurate, complete, and current information</li>
                <li>Disclose all relevant financial information truthfully</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Pay all fees and charges as agreed</li>
                <li>Notify us immediately of any changes to your financial situation</li>
                <li>Use our services only for lawful purposes</li>
                <li>Maintain the confidentiality of your account credentials</li>
              </ul>
            </section>

            {/* Fees and Payment */}
            <section>
              <h2 className="text-3xl font-bold mb-4 gradient-text">5. Fees and Payment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our fee structure will be clearly communicated to you before you engage our services. Fees may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Consultation fees</li>
                <li>Asset management fees (percentage of assets under management)</li>
                <li>Transaction fees</li>
                <li>Performance-based fees (where applicable)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                All fees are payable in UAE Dirhams (AED) unless otherwise agreed. Payment terms will be specified in your service agreement. Late payments may incur additional charges.
              </p>
            </section>

            {/* Investment Risks */}
            <section>
              <div className="flex items-center mb-4">
                <AlertCircle className="text-primary-blue mr-3" size={28} />
                <h2 className="text-3xl font-bold gradient-text">6. Investment Risks & Disclaimers</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Important:</strong> All investments carry risk. Past performance does not guarantee future results. You acknowledge that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Investment values may fluctuate and you may lose capital</li>
                <li>We do not guarantee investment returns or outcomes</li>
                <li>Financial markets are subject to volatility and uncertainty</li>
                <li>You should carefully consider your risk tolerance before investing</li>
                <li>You should seek independent financial advice if needed</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our advice is based on information provided by you and our analysis, but we cannot guarantee the accuracy of all information or the success of any investment strategy.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-3xl font-bold mb-4 gradient-text">7. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content on our website, including text, graphics, logos, images, and software, is the property of The Vega Wealth or its licensors and is protected by UAE and international copyright laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-3xl font-bold mb-4 gradient-text">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>The Vega Wealth shall not be liable for any indirect, incidental, special, or consequential damages</li>
                <li>Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim</li>
                <li>We are not responsible for losses due to market conditions, regulatory changes, or force majeure events</li>
                <li>We are not liable for third-party actions or services</li>
              </ul>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-3xl font-bold mb-4 gradient-text">9. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify and hold harmless The Vega Wealth, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our Services, violation of these Terms, or infringement of any rights of another party.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-3xl font-bold mb-4 gradient-text">10. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Either party may terminate the service agreement:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>With written notice as specified in your service agreement</li>
                <li>Immediately for breach of these Terms</li>
                <li>Upon completion of the agreed services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Upon termination, you remain responsible for all fees and charges incurred up to the termination date. We may retain your information as required by law or for legitimate business purposes.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-3xl font-bold mb-4 gradient-text">11. Governing Law & Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, specifically the laws of the Emirate of Dubai. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-3xl font-bold mb-4 gradient-text">12. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of our Services after such changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            {/* Severability */}
            <section>
              <h2 className="text-3xl font-bold mb-4 gradient-text">13. Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be replaced with a valid provision that most closely reflects the intent of the original.
              </p>
            </section>

            {/* Entire Agreement */}
            <section>
              <h2 className="text-3xl font-bold mb-4 gradient-text">14. Entire Agreement</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms, together with our Privacy Policy and any service-specific agreements, constitute the entire agreement between you and The Vega Wealth regarding the use of our Services and supersede all prior agreements and understandings.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-primary/5 p-6 rounded-xl border border-primary-blue/20">
              <h2 className="text-3xl font-bold mb-4 gradient-text">15. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> <a href="mailto:legal@vegawalth.com" className="text-primary-blue hover:underline">legal@vegawalth.com</a></p>
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

