'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, CheckCircle, ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'

const ParallaxBackground = dynamic(() => import('@/components/ParallaxBackground'), {
  ssr: false,
})

const benefits = [
  'Mortgage pre-approval assistance',
  'Loan comparison from multiple lenders',
  'Interest rate negotiation',
  'Down payment optimization strategies',
  'Refinancing analysis and recommendations',
  'Documentation support and application management',
]

export default function MortgageAdvisory() {
  return (
    <section id="mortgage-advisory" className="relative section-padding overflow-hidden">
      {/* Parallax background - clear images */}
      <ParallaxBackground
        imageSrc="/dubai6.png"
        blur={0}
        overlayOpacity={0.2}
        speed={0.3}
      />
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
              <Home className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Mortgage Advisory</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Navigate the Dubai property market with confidence. Our mortgage advisory services help you find the best home loan options, secure competitive rates, and manage the entire mortgage process smoothly.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Whether you're a first-time buyer or looking to refinance, our experts compare options from leading banks and financial institutions to find the mortgage that best fits your needs and budget.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="text-primary-green flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/contact"
              className="btn-primary inline-flex items-center group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-lg border border-white/50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary-blue/5 to-primary-green/5 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Best Rates</h3>
                  <p className="text-gray-600">
                    Access to competitive mortgage rates from top lenders in the UAE market through our established relationships.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary-green/5 to-primary-blue/5 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Full Support</h3>
                  <p className="text-gray-600">
                    End-to-end assistance from application to approval, handling all documentation and lender communications.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary-blue/5 to-primary-green/5 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Time Savings</h3>
                  <p className="text-gray-600">
                    We do the research and comparison work, saving you time and ensuring you get the best deal available.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

