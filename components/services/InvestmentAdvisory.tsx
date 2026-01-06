'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'

const ParallaxBackground = dynamic(() => import('@/components/ParallaxBackground'), {
  ssr: false,
})

const benefits = [
  'Portfolio construction and asset allocation',
  'Risk assessment and tolerance evaluation',
  'Investment strategy development',
  'Market analysis and research insights',
  'Diversification across asset classes and geographies',
  'Performance monitoring and portfolio rebalancing',
]

export default function InvestmentAdvisory() {
  return (
    <section id="investment-advisory" className="relative section-padding overflow-hidden">
      {/* Parallax background - clear images */}
      <ParallaxBackground
        imageSrc="/dubai2.png"
        blur={0}
        overlayOpacity={0.2}
        speed={0.3}
      />
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="bg-white/80 backdrop-blur-lg border border-white/50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary-blue/5 to-primary-green/5 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Global Opportunities</h3>
                  <p className="text-gray-600">
                    Access to international markets and investment opportunities across stocks, bonds, real estate, and alternative investments.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary-green/5 to-primary-blue/5 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Risk Management</h3>
                  <p className="text-gray-600">
                    Sophisticated risk management strategies to protect your capital while pursuing growth opportunities.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary-blue/5 to-primary-green/5 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Data-Driven Decisions</h3>
                  <p className="text-gray-600">
                    Investment recommendations backed by comprehensive research and market analysis.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Investment Advisory</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Grow your wealth with expert investment advisory services. Our team provides strategic guidance to help you build and manage a diversified investment portfolio aligned with your risk profile and financial objectives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Whether you're investing for retirement, education, or wealth accumulation, we help you navigate complex markets and make informed investment decisions.
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
        </div>
      </div>
    </section>
  )
}

