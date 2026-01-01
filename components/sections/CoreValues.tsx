'use client'

import { motion } from 'framer-motion'
import { Shield, Target, Users, TrendingUp, Heart, Award } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We operate with the highest ethical standards and complete transparency in all our dealings.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every interaction, delivering superior results and service quality.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our priority. We build long-term relationships based on trust and results.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'We leverage cutting-edge tools and strategies to provide the best financial solutions.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Heart,
    title: 'Commitment',
    description: 'We are dedicated to your financial journey, providing ongoing support and guidance.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Award,
    title: 'Expertise',
    description: 'Our team brings deep knowledge and experience across all aspects of wealth management.',
    color: 'from-teal-500 to-teal-600',
  },
]

export default function CoreValues() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Core Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-8 rounded-2xl text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

