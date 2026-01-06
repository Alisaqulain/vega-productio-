'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, CheckCircle, ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'

const ParallaxBackground = dynamic(() => import('@/components/ParallaxBackground'), {
  ssr: false,
})

const benefits = [
  'Comprehensive financial assessment and goal setting',
  'Personalized financial roadmaps tailored to your life stage',
  'Cash flow management and budgeting strategies',
  'Retirement planning and wealth accumulation',
  'Tax optimization strategies',
  'Risk assessment and mitigation planning',
]

export default function FinancialPlanning() {
  return (
    <section id="financial-planning" className="relative section-padding overflow-hidden">
      {/* Parallax background - clear images */}
      <ParallaxBackground
        imageSrc="/dubai1.png"
        blur={0}
        overlayOpacity={0.2}
        speed={0.3}
      />
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
              <FileText className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Financial Planning</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Build a solid financial foundation with our comprehensive financial planning services. We help you create a roadmap that aligns with your life goals, whether you're starting your career, growing your family, or planning for retirement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our expert advisors assess your current financial situation, identify opportunities, and develop strategic plans to help you achieve long-term financial security and prosperity.
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
            initial={{ opacity: 0, x: 60, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{
              y: -12,
              rotateY: 2,
              scale: 1.02,
              transition: { duration: 0.4 },
            }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative"
          >
            {/* Glassmorphism card with hover lift */}
            <div className="bg-white/80 backdrop-blur-lg border border-white/50 p-8 rounded-2xl shadow-xl">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary-blue/5 to-primary-green/5 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Goal-Based Planning</h3>
                  <p className="text-gray-600">
                    We help you define and prioritize your financial goals, creating actionable plans to achieve them.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary-green/5 to-primary-blue/5 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Regular Reviews</h3>
                  <p className="text-gray-600">
                    Ongoing monitoring and adjustments to ensure your plan stays on track with your evolving needs.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary-blue/5 to-primary-green/5 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Holistic Approach</h3>
                  <p className="text-gray-600">
                    Comprehensive view of your finances, integrating all aspects of your financial life into one cohesive plan.
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

