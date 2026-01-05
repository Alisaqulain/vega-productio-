'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { 
  TrendingUp, 
  Briefcase, 
  Shield, 
  Home, 
  FileText,
  ArrowRight 
} from 'lucide-react'

const ParallaxBackground = dynamic(() => import('@/components/ParallaxBackground'), {
  ssr: false,
})

const services = [
  {
    icon: FileText,
    title: 'Financial Planning',
    description: 'Comprehensive financial roadmaps tailored to your life goals and aspirations.',
    href: '/services#financial-planning',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    description: 'Expert guidance on building diversified portfolios for long-term growth.',
    href: '/services#investment-advisory',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Shield,
    title: 'Insurance Planning',
    description: 'Protect what matters most with customized insurance solutions.',
    href: '/services#insurance-planning',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Briefcase,
    title: 'Estate Planning',
    description: 'Secure your legacy with strategic estate and inheritance planning.',
    href: '/services#estate-planning',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Home,
    title: 'Mortgage Advisory',
    description: 'Find the best mortgage solutions for your dream property in Dubai.',
    href: '/services#mortgage-advisory',
    color: 'from-teal-500 to-teal-600',
  },
]

export default function ServicesOverview() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Parallax background - same style as services page */}
      <ParallaxBackground
        imageSrc="/meeting 4.png"
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
          className="text-center mb-20 md:mb-24"
        >
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6 font-bold">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed font-semibold">
            Comprehensive financial solutions designed to help you achieve your goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.slice(0, 3).map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false, margin: '-50px' }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{
                  y: -12,
                  rotateY: 2,
                  scale: 1.02,
                  transition: { duration: 0.4 },
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="glass-card p-8 md:p-10 rounded-xl h-full flex flex-col group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-navy rounded-lg flex items-center justify-center mb-6 flex-shrink-0">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="heading-serif text-xl md:text-2xl text-neutral-900 mb-4 flex-shrink-0 font-bold">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-neutral-700 leading-relaxed flex-grow font-medium">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary inline-flex items-center">
            View All Services
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

