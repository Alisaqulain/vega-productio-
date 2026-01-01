'use client'

import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <div className="relative py-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-blue/30 to-transparent" />
      </motion.div>
      <div className="relative flex justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-3 h-3 bg-gradient-primary rounded-full"
        />
      </div>
    </div>
  )
}


