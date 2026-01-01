'use client'

import { motion } from 'framer-motion'

export default function MapEmbed() {
  // Using Google Maps embed - Replace with actual office coordinates
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785096443245!2d55.27078231500941!3d25.197197983894545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24d%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1234567890"

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
          We're located in the heart of Dubai. Schedule a visit to discuss your financial goals in person.
        </p>
      </div>
    </motion.div>
  )
}


