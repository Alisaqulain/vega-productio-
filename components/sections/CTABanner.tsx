'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="section-padding bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Start Your Journey to Prosperity?
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-8 md:mb-10 leading-relaxed">
            Schedule a free consultation with our financial experts and discover how we can help you achieve your financial goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center group"
            >
              Get Started Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center group"
            >
              <Calendar className="mr-2" size={20} />
              Schedule Consultation
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div>
              <div className="text-3xl font-bold mb-2">Free Consultation</div>
              <div className="text-white/80">No obligation, expert advice</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Personalized Plans</div>
              <div className="text-white/80">Tailored to your needs</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Transparent Pricing</div>
              <div className="text-white/80">Clear, upfront fees</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

