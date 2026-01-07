'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, TrendingUp, Shield, Target } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

// Note: Metadata cannot be exported from client components
// SEO is handled via layout.tsx

export default function WealthManagementLanding() {
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
                Premium Wealth Management
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Grow Your Wealth with Expert Financial Advisory in Dubai
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Trusted by 500+ clients managing AED 2B+ in assets. Get personalized wealth management strategies tailored to your financial goals.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Check className="text-primary-green" size={20} />
                <span className="text-gray-700">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="text-primary-green" size={20} />
                <span className="text-gray-700">Licensed & Regulated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="text-primary-green" size={20} />
                <span className="text-gray-700">AED 2B+ Assets Managed</span>
              </div>
            </div>
            <a
              href="#contact-form"
              className="btn-primary inline-flex items-center"
            >
              Get Free Consultation
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
                    <TrendingUp className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                    <p className="text-gray-600">Happy Clients</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Shield className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AED 2B+</h3>
                    <p className="text-gray-600">Assets Under Management</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Target className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">15+</h3>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-primary-blue/5 to-primary-green/5 py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12">
            Why Choose Our Wealth Management Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Personalized Strategies',
                description: 'Custom wealth management plans tailored to your unique financial goals and risk tolerance.',
              },
              {
                icon: Shield,
                title: 'Licensed & Regulated',
                description: 'Fully licensed financial advisors in Dubai with strict regulatory compliance and transparency.',
              },
              {
                icon: TrendingUp,
                title: 'Proven Track Record',
                description: 'Consistent returns and wealth growth for our clients over 15+ years of experience.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              Start Your Wealth Management Journey Today
            </h2>
            <p className="text-xl text-gray-600">
              Get a free consultation with our expert financial advisors. No obligation, just expert advice.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Wealth?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 500+ satisfied clients who trust us with their financial future. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '971502575675'}?text=${encodeURIComponent("Hello, I'm interested in your wealth management services.")}`}
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

