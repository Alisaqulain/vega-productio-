'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  TrendingUp, 
  Briefcase, 
  Shield, 
  Home, 
  FileText,
  ArrowRight 
} from 'lucide-react'

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
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to help you achieve your goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-8 rounded-2xl group hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/0 via-primary-green/0 to-primary-blue/0 group-hover:from-primary-blue/5 group-hover:via-primary-green/5 group-hover:to-primary-blue/5 transition-all duration-500" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary-blue font-semibold hover:gap-2 transition-all group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-1 group-hover/link:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
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

