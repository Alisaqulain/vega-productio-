'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Shield, Users } from 'lucide-react'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-36 pb-20">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-pattern opacity-30" />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 md:px-5 md:py-2.5 bg-gradient-primary/10 backdrop-blur-sm rounded-full text-primary-blue font-bold text-xs md:text-sm border border-primary-blue/20 shadow-sm"
            >
              Premium Financial Advisory Services
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-extrabold mb-6 md:mb-8 leading-tight">
              <span className="gradient-text block mb-2">Your Path to</span>
              <span className="text-neutral-900 block">Prosperity</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-2xl text-neutral-600 mb-8 md:mb-10 leading-relaxed font-medium max-w-2xl">
              Expert wealth management and financial planning services in Dubai, UAE. 
              Trusted by professionals, HNIs, and NRI investors to secure their financial future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 mb-12 md:mb-16">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center group text-base md:text-lg px-6 py-3 md:px-10 md:py-5">
                Get Started Today
                <ArrowRight className="ml-2 md:ml-3 group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
              <Link href="/services" className="btn-secondary inline-flex items-center justify-center text-base md:text-lg px-6 py-3 md:px-10 md:py-5">
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-5xl font-extrabold gradient-text mb-2">
                  <AnimatedCounter value={500} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm md:text-base font-semibold text-neutral-600">Happy Clients</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-5xl font-extrabold gradient-text mb-2">
                  AED <AnimatedCounter value={2} suffix="B+" prefix="" />
                </div>
                <div className="text-xs sm:text-sm md:text-base font-semibold text-neutral-600">Assets Managed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-5xl font-extrabold gradient-text mb-2">
                  <AnimatedCounter value={15} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm md:text-base font-semibold text-neutral-600">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -12, scale: 1.05, rotate: 1 }}
                className="glass-card p-6 rounded-2xl border-2 border-transparent hover:border-primary-blue/20"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary-blue/30">
                  <TrendingUp className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Wealth Growth</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Strategic investment solutions for long-term wealth creation
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -12, scale: 1.05, rotate: -1 }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6 rounded-2xl mt-8 border-2 border-transparent hover:border-primary-green/20"
              >
                <div className="w-14 h-14 bg-gradient-secondary rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary-green/30">
                  <Shield className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Risk Management</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Comprehensive protection for your assets and investments
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -12, scale: 1.05, rotate: 1 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6 rounded-2xl border-2 border-transparent hover:border-primary-blue/20"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary-blue/30">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Expert Advisory</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Personalized financial guidance from certified professionals
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -12, scale: 1.05, rotate: -1 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6 rounded-2xl mt-8 border-2 border-transparent hover:border-primary-green/20"
              >
                <div className="w-14 h-14 bg-gradient-secondary rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary-green/30">
                  <TrendingUp className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Portfolio Optimization</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Data-driven strategies to maximize your returns
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

