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
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-neutral-200/30'
          : 'bg-white/0 backdrop-blur-md'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Left */}
          <Link href="/" className="group flex-shrink-0">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/logo1-removebg-preview.png"
                alt="The Vega Wealth"
                fill
                className="object-contain transition-opacity duration-300 group-hover:opacity-80"
                priority
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Center/Right */}
          <nav className="hidden md:flex items-center space-x-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 rounded-lg ${
                  pathname === link.href
                    ? 'text-primary-navy'
                    : 'text-neutral-700 hover:text-primary-navy'
                }`}
              >
                {link.label}
                {/* Active state indicator */}
                {pathname === link.href && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-gold rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Get Started Button - Right */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="px-6 py-2.5 bg-gradient-to-r from-accent-gold to-yellow-500 text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg hover:from-accent-gold-dark hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-primary-navy transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Glassmorphism */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-xl border-t border-neutral-200/50 shadow-lg"
          >
            <div className="container-custom py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 font-medium text-base rounded-lg transition-colors ${
                    pathname === link.href
                      ? 'text-primary-navy bg-neutral-100'
                      : 'text-neutral-700 hover:text-primary-navy hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-accent-gold to-yellow-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
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

