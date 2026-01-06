'use client'

import { motion } from 'framer-motion'

interface ImageContentSectionProps {
  title: string
  content: React.ReactNode
  imageSrc: string
  imageAlt?: string
}

export default function ImageContentSection({
  title,
  content,
  imageSrc,
  imageAlt = 'Content image',
}: ImageContentSectionProps) {
  return (
    <section className="section-padding relative z-10">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-sm">
              {title}
            </h2>
            {content}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
          >
            <img
              src={imageSrc.replace(/ /g, '%20')}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

