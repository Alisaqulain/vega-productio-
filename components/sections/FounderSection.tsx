'use client'

import { motion } from 'framer-motion'
import { Award, Briefcase, Users } from 'lucide-react'
import dynamic from 'next/dynamic'

const ParallaxBackground = dynamic(() => import('@/components/ParallaxBackground'), {
  ssr: false,
})

export default function FounderSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Parallax background - clear images */}
      <ParallaxBackground
        imageSrc="/meeting 2.png"
        blur={0}
        overlayOpacity={0.2}
        speed={0.3}
      />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Leadership <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced professionals dedicated to your financial success
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.4 },
            }}
            className="glass-card p-8 md:p-12 rounded-2xl"
          >
            <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
              <div className="text-center md:text-left">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto md:mx-0 mb-4">
                  VW
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                  Expert Financial Advisory Team
                </h3>
                <p className="text-gray-600 mb-4">
                  Our team brings decades of combined experience in wealth management, financial planning, and investment advisory across global markets.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="text-primary-blue mr-2" size={18} />
                    Certified Advisors
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Briefcase className="text-primary-blue mr-2" size={18} />
                    15+ Years Experience
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="text-primary-blue mr-2" size={18} />
                    500+ Clients
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                With a deep understanding of both local and international financial markets, our team specializes in serving UAE residents, NRI investors, and high-net-worth individuals. We combine global best practices with local market expertise to deliver personalized financial solutions that align with your unique goals and circumstances.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                Our commitment to transparency, integrity, and client success has established The Vega Wealth as a trusted name in Dubai's financial advisory landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

