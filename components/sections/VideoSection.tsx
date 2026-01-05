'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const PremiumVideo = dynamic(() => import('@/components/PremiumVideo'), {
  ssr: false,
})

interface VideoSectionProps {
  videoSrc: string
  title?: string
  content?: React.ReactNode
  reverse?: boolean // If true, video on left, content on right
}

export default function VideoSection({
  videoSrc,
  title,
  content,
  reverse = false,
}: VideoSectionProps) {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          {content && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={reverse ? 'lg:order-2' : ''}
            >
              {title && (
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  {title}
                </h2>
              )}
              {content}
            </motion.div>
          )}

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`relative w-full h-[400px] md:h-[500px] ${reverse ? 'lg:order-1' : ''}`}
          >
            <PremiumVideo
              src={videoSrc}
              className="w-full h-full"
              autoplay={true}
              muted={true}
              loop={true}
              controls={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

