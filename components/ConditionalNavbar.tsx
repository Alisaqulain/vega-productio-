'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

export default function ConditionalNavbar() {
  const pathname = usePathname()
  const isLandingPage = pathname?.startsWith('/landing')
  
  // Don't show navbar on landing pages
  if (isLandingPage) {
    return null
  }
  
  return <Navbar />
}





