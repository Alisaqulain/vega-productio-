'use client'

import { motion } from 'framer-motion'
import { Briefcase, Shield, TrendingUp } from 'lucide-react'
import dynamic from 'next/dynamic'

const ParallaxBackground = dynamic(() => import('@/components/ParallaxBackground'), {
  ssr: false,
})

const indicators = [
  {
    icon: Briefcase,
    title: 'Experience',
    description: 'Decades of successful wealth management',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Acting in your best interests, always',
  },
  {
    icon: TrendingUp,
    title: 'Results',
    description: 'Proven track record of client success',
  },
]

export default function TrustIndicators() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Parallax background - same style as services page */}
      <ParallaxBackground
        imageSrc="/meeting 3.png"
        blur={2}
        overlayOpacity={0.25}
        speed={0.3}
      />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-4 font-bold">
            Why Choose Us?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto italic font-semibold">
            Experience. Integrity. Commitment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon
            return (
              <motion.div
                key={indicator.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: '-50px' }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="text-center"
              >
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 bg-primary-navy rounded-lg flex items-center justify-center mx-auto mb-6"
                  whileHover={{
                    rotateY: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <Icon className="text-white" size={32} />
                </motion.div>
                <h3 className="heading-serif text-xl md:text-2xl text-neutral-900 mb-3 font-bold">
                  {indicator.title}
                </h3>
                <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-xs mx-auto font-medium">
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

