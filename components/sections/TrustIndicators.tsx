'use client'

import { motion } from 'framer-motion'
import { Award, Globe, CheckCircle } from 'lucide-react'

const indicators = [
  {
    icon: Award,
    title: 'Licensed & Regulated',
    description: 'Fully licensed financial advisory firm in Dubai',
  },
  {
    icon: Globe,
    title: 'Global Expertise',
    description: 'International experience with local knowledge',
  },
  {
    icon: CheckCircle,
    title: 'Transparent Fees',
    description: 'Clear, upfront pricing with no hidden costs',
  },
]

export default function TrustIndicators() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">The Vega Wealth</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by hundreds of clients across the UAE for our expertise, transparency, and results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon
            return (
              <motion.div
                key={indicator.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-8 rounded-2xl text-center border-2 border-transparent hover:border-primary-blue/20"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary-blue/30">
                  <Icon className="text-white" size={36} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-gray-900">
                  {indicator.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {indicator.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

