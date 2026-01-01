'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-2xl shadow-2xl border-b border-neutral-100'
          : 'bg-white/80 backdrop-blur-xl'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 md:w-28 md:h-28 flex-shrink-0">
              <Image
                src="/logo1.png"
                alt="The Vega Wealth - Financial Advisory Dubai | Wealth Management Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 48px, 112px"
              />
            </div>
            <div className="hidden md:block">
              <div className="text-2xl font-extrabold gradient-text leading-tight">The Vega Wealth</div>
              <div className="text-xs text-gray-500 font-medium">Your Path to Prosperity</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 font-semibold text-sm transition-all duration-300 rounded-lg ${
                  pathname === link.href
                    ? 'text-primary-blue bg-primary-blue/5'
                    : 'text-neutral-700 hover:text-primary-blue hover:bg-neutral-50'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-primary rounded-full"
                  />
                )}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="ml-4 px-6 py-2.5 bg-gradient-primary text-white font-semibold text-sm rounded-xl shadow-lg shadow-primary-blue/25 hover:shadow-xl hover:shadow-primary-blue/40 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-neutral-100"
          >
            <div className="container-custom py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 font-medium ${
                    pathname === link.href
                      ? 'text-primary-blue'
                      : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary inline-block"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

