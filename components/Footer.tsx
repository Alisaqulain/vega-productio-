'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import { trackPhoneClick } from '@/lib/tracking'

export default function Footer() {
  const handlePhoneClick = () => {
    trackPhoneClick('+971501234567')
  }
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Financial Planning', href: '/services#financial-planning' },
    { name: 'Investment Advisory', href: '/services#investment-advisory' },
    { name: 'Insurance Planning', href: '/services#insurance-planning' },
    { name: 'Estate Planning', href: '/services#estate-planning' },
    { name: 'Mortgage Advisory', href: '/services#mortgage-advisory' },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-primary-navy via-neutral-800 to-primary-navy text-neutral-300 overflow-hidden z-20">
      {/* Solid background to cover page background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-navy via-neutral-800 to-primary-navy z-0" />
      {/* Subtle texture for depth */}
      <div 
        className="absolute inset-0 opacity-[0.015] z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="container-custom py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0">
                <Image
                  src="/logo1.png"
                  alt="The Vega Wealth"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 112px, 128px"
                />
              </div>
            </Link>
            <p className="text-sm text-neutral-400 mb-8 leading-relaxed max-w-xs">
              Premium wealth management and financial advisory services in Dubai, UAE.
            </p>
            <div className="flex space-x-5">
              <a
                href="https://linkedin.com/company/vegawalth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://instagram.com/vegawalth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://twitter.com/vegawalth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
              <a
                href="https://facebook.com/vegawalth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 text-neutral-400 flex-shrink-0" />
                <span className="text-sm text-neutral-400">
                  Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-neutral-400 flex-shrink-0" />
                <a
                  href="tel:+971501234567"
                  onClick={handlePhoneClick}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  +971 50 123 4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-neutral-400 flex-shrink-0" />
                <a
                  href="mailto:Accounts@thevegawealth.com"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  Accounts@thevegawealth.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © {currentYear} The Vega Wealth. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link href="/privacy" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-sm text-neutral-600">•</span>
            <a
              href="https://www.devspheresolutions.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Developed by <span className="font-medium">DevSphere Solutions</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

