'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ahmed Al Mansoori',
    role: 'Entrepreneur',
    location: 'Dubai, UAE',
    content: 'The Vega Wealth transformed my approach to financial planning. Their expert advice helped me optimize my investments and secure my family\'s future. Highly recommended!',
    rating: 5,
    image: '👤',
  },
  {
    name: 'Priya Sharma',
    role: 'NRI Investor',
    location: 'Mumbai, India',
    content: 'As an NRI, I needed specialized guidance for cross-border investments. The team at Vega Wealth understood my unique needs and created a perfect strategy.',
    rating: 5,
    image: '👤',
  },
  {
    name: 'Michael Thompson',
    role: 'Senior Executive',
    location: 'Dubai, UAE',
    content: 'Professional, transparent, and results-driven. The Vega Wealth team helped me build a robust investment portfolio that aligns with my long-term goals.',
    rating: 5,
    image: '👤',
  },
  {
    name: 'Fatima Ali',
    role: 'Business Owner',
    location: 'Abu Dhabi, UAE',
    content: 'Their estate planning services are exceptional. They made complex processes simple and ensured my legacy is protected for future generations.',
    rating: 5,
    image: '👤',
  },
  {
    name: 'Rajesh Kumar',
    role: 'IT Professional',
    location: 'Dubai, UAE',
    content: 'The mortgage advisory service saved me time and money. They negotiated the best rates and terms for my home loan. Outstanding service!',
    rating: 5,
    image: '👤',
  },
  {
    name: 'Sarah Johnson',
    role: 'Financial Controller',
    location: 'Dubai, UAE',
    content: 'Comprehensive insurance planning that covers all aspects of my life. Peace of mind knowing my family is protected. Thank you, Vega Wealth!',
    rating: 5,
    image: '👤',
  },
]

export default function Testimonials() {
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
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by professionals, entrepreneurs, and investors across the UAE
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 text-primary-blue/20" size={40} />
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

