'use client'

import { motion } from 'framer-motion'

export default function MapEmbed() {
  // Aspin Business Center, Sheikh Zayed Road, Dubai, UAE
  // Using Google Maps embed with place query
  const mapUrl = "https://www.google.com/maps?q=Aspin+Business+Center+Sheikh+Zayed+Road+Dubai+UAE&output=embed"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card p-2 rounded-2xl overflow-hidden"
    >
      <div className="relative w-full h-96 rounded-xl overflow-hidden">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="The Vega Wealth Office Location"
          className="absolute inset-0"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 text-gray-900">Visit Our Office</h3>
        <p className="text-gray-600">
          Aspin Business Center, Sheikh Zayed Road, Dubai, UAE. Schedule a visit to discuss your financial goals in person.
        </p>
      </div>
    </motion.div>
  )
}








