'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Briefcase, CheckCircle, ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'

const ParallaxBackground = dynamic(() => import('@/components/ParallaxBackground'), {
  ssr: false,
})

const benefits = [
  'Will and testament planning',
  'Trust establishment and management',
  'Inheritance tax optimization',
  'Asset protection strategies',
  'Power of attorney and healthcare directives',
  'Multi-jurisdictional estate planning for NRI clients',
]

export default function EstatePlanning() {
  return (
    <section id="estate-planning" className="relative section-padding overflow-hidden">
      {/* Parallax background - clearly visible */}
      <ParallaxBackground
        imageSrc="/dubai5.png"
        blur={2}
        overlayOpacity={0.25}
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
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Legacy Protection</h3>
                  <p className="text-gray-600">
                    Ensure your wealth is transferred to your heirs according to your wishes with proper estate planning.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary-green/5 to-primary-blue/5 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Tax Efficiency</h3>
                  <p className="text-gray-600">
                    Minimize inheritance taxes and estate costs through strategic planning and structure optimization.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary-blue/5 to-primary-green/5 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Cross-Border Planning</h3>
                  <p className="text-gray-600">
                    Specialized expertise in multi-jurisdictional estate planning for clients with assets across countries.
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
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
              <Briefcase className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Estate Planning</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Secure your legacy and ensure your wealth is transferred to future generations according to your wishes. Our estate planning services help you protect your assets, minimize taxes, and provide for your loved ones.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We understand the complexities of estate planning, especially for NRI clients with assets in multiple jurisdictions. Our advisors work with legal experts to create comprehensive estate plans.
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

