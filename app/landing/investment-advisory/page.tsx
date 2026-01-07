'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, BarChart3, Globe, PieChart, TrendingUp } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

// Note: Metadata cannot be exported from client components
// SEO is handled via layout.tsx

export default function InvestmentAdvisoryLanding() {
  return (
    <div className="pt-32 md:pt-40 pb-16">
      {/* Hero Section */}
      <section className="container-custom py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="bg-primary-blue/10 text-primary-blue px-4 py-2 rounded-full text-sm font-semibold">
                Expert Investment Advisory
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Maximize Your Investment Returns with Expert Advisory
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional investment advisory services in Dubai. Get personalized portfolio management strategies to grow your wealth.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Check className="text-primary-green" size={20} />
                <span className="text-gray-700">Diversified Portfolios</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="text-primary-green" size={20} />
                <span className="text-gray-700">Risk Management</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="text-primary-green" size={20} />
                <span className="text-gray-700">Regular Monitoring</span>
              </div>
            </div>
            <a
              href="#contact-form"
              className="btn-primary inline-flex items-center"
            >
              Get Investment Advice
              <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <BarChart3 className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">15+</h3>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <PieChart className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                    <p className="text-gray-600">Active Portfolios</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <TrendingUp className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AED 2B+</h3>
                    <p className="text-gray-600">Assets Managed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-br from-primary-blue/5 to-primary-green/5 py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">
            Our Investment Advisory Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Global Investment Opportunities',
                description: 'Access to international markets and diversified investment options across multiple asset classes.',
              },
              {
                icon: BarChart3,
                title: 'Portfolio Analysis & Optimization',
                description: 'Comprehensive portfolio analysis to identify opportunities and optimize your investment strategy.',
              },
              {
                icon: TrendingUp,
                title: 'Performance Monitoring',
                description: 'Regular monitoring and rebalancing to ensure your portfolio stays aligned with your goals.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="container-custom py-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Get Expert Investment Advice Today
            </h2>
            <p className="text-xl text-gray-600">
              Schedule a free consultation to discuss your investment goals and get personalized recommendations.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Investments?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our expert advisors help you build a diversified portfolio that aligns with your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '971502575675'}?text=${encodeURIComponent("Hello, I'm interested in your investment advisory services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

