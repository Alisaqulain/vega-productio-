'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ParallaxBackground = dynamic(() => import('@/components/ParallaxBackground'), {
  ssr: false,
})

export default function CTABanner() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Parallax background - image clearly visible */}
      <ParallaxBackground
        imageSrc="/meeting 1.png"
        blur={2}
        overlayOpacity={0.25}
        speed={0.25}
      />
      
      {/* Dark overlay for text contrast - image still visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/40 via-neutral-800/35 to-primary-navy/40 z-[1]">
        {/* Subtle texture for depth */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      <div className="container-custom relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="heading-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Plan for Tomorrow, Today
          </h2>
          <p className="text-xl md:text-2xl text-neutral-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Contact us to start building your financial future.
          </p>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center text-base md:text-lg px-12 py-5 md:px-14 md:py-6 min-h-[56px] md:min-h-[64px]"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

