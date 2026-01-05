'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'
import dynamic from 'next/dynamic'

const ParallaxBackground = dynamic(() => import('@/components/ParallaxBackground'), {
  ssr: false,
})

export default function MissionVision() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Parallax background - same style as services page */}
      <ParallaxBackground
        imageSrc="/meeting 7.png"
        blur={2}
        overlayOpacity={0.25}
        speed={0.3}
      />
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{
              y: -8,
              rotateY: 2,
              scale: 1.02,
              transition: { duration: 0.4 },
            }}
            style={{ transformStyle: 'preserve-3d' }}
            className="glass-card p-8 md:p-12 rounded-2xl"
          >
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-6 gradient-text">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              To empower individuals and families in the UAE and beyond to achieve financial prosperity through expert guidance, personalized strategies, and unwavering commitment to their success.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that everyone deserves access to premium financial advisory services that help them build lasting wealth and secure their future.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{
              y: -8,
              rotateY: -2,
              scale: 1.02,
              transition: { duration: 0.4 },
            }}
            style={{ transformStyle: 'preserve-3d' }}
            className="glass-card p-8 md:p-12 rounded-2xl"
          >
            <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-6 gradient-text">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              To become the most trusted and respected financial advisory firm in the Middle East, recognized for our innovation, integrity, and exceptional client outcomes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision a future where financial planning is accessible, transparent, and results-driven, helping our clients navigate every stage of their financial journey with confidence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

