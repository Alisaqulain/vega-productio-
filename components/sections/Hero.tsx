'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const HeroVideoBackground = dynamic(() => import('@/components/HeroVideoBackground'), {
  ssr: false,
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-36">
      {/* Premium background video - only on Hero */}
      <HeroVideoBackground 
        videoSrc="/video2.mp4"
        overlay="dark"
        overlayOpacity={0.55}
      />
      
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 md:space-y-8"
          >
            <h1 className="heading-large text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 leading-tight">
              Trusted Financial Guidance<br className="hidden md:block" /> for Your Future
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-200 leading-relaxed max-w-3xl mx-auto font-normal">
              Helping You Preserve and Grow Your Wealth
            </p>

            <div className="pt-4 md:pt-6">
              <Link 
                href="/contact" 
                className="btn-primary inline-flex items-center justify-center text-base md:text-lg px-10 py-4 md:px-12 md:py-5 min-h-[56px] md:min-h-[64px] shadow-xl hover:shadow-2xl"
              >
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

