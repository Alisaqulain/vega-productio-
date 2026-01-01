import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
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
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12 md:w-24 md:h-24 flex-shrink-0">
                <Image
                  src="/logo1.png"
                  alt="The Vega Wealth - Financial Advisory Dubai | Wealth Management Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 48px, 96px"
                />
              </div>
              <div>
                <div className="text-white font-bold">The Vega Wealth</div>
                <div className="text-xs">Your Path to Prosperity</div>
              </div>
            </Link>
            <p className="text-sm mb-4">
              Premium wealth management and financial advisory services in Dubai, UAE.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-primary-blue transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 text-primary-blue" />
                <span className="text-sm">
                  Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-blue" />
                <a
                  href="tel:+971501234567"
                  className="text-sm hover:text-primary-blue transition-colors"
                >
                  +971 50 123 4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-blue" />
                <a
                  href="mailto:info@vegawalth.com"
                  className="text-sm hover:text-primary-blue transition-colors"
                >
                  Accounts@thevegawealth.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {currentYear} The Vega Wealth. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link href="/privacy" className="text-sm hover:text-primary-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-primary-blue transition-colors">
              Terms of Service
            </Link>
            <span className="text-sm text-gray-500">•</span>
            <a
              href="https://www.devspheresolutions.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-primary-blue transition-colors"
            >
              Developed by <span className="font-semibold text-primary-blue">DevSphere Solutions</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

