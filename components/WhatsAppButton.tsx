'use client'

import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '971501234567'
  const defaultMessage = encodeURIComponent(
    "Hello Vega Wealth, I'm interested in your financial advisory services."
  )

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`
    window.open(url, '_blank')
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-16 md:bottom-24 right-4 md:right-6 z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 group"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 md:w-8 md:h-8"
      >
        <path
          d="M16 0C7.164 0 0 7.164 0 16c0 2.825.744 5.475 2.041 7.771L0 32l8.479-1.988C10.648 31.287 13.214 32 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.341 0-4.542-.623-6.442-1.708l-.453-.271-4.69 1.099 1.121-4.573-.295-.469A13.26 13.26 0 012.667 16c0-7.364 5.97-13.333 13.333-13.333S29.333 8.636 29.333 16 23.364 29.333 16 29.333z"
          fill="currentColor"
        />
        <path
          d="M23.203 19.057c-.33-.165-1.952-.963-2.255-1.073-.303-.11-.524-.165-.744.165-.22.33-.851 1.073-1.043 1.293-.192.22-.384.248-.714.083-.33-.165-1.393-.514-2.654-1.638-.982-.875-1.646-1.954-1.838-2.284-.192-.33-.02-.509.144-.673.148-.148.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.744-1.793-1.018-2.456-.267-.642-.539-.555-.744-.566-.192-.011-.413-.012-.633-.012-.22 0-.578.083-.882.413-.303.33-1.16 1.134-1.16 2.767 0 1.633 1.188 3.212 1.354 3.434.165.22 2.335 3.558 5.664 4.986.787.338 1.402.54 1.878.691.789.247 1.507.212 2.075.128.634-.092 1.952-.798 2.226-1.568.274-.77.274-1.43.192-1.568-.083-.138-.303-.22-.633-.385z"
          fill="currentColor"
        />
      </svg>
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Chat on WhatsApp
      </span>
    </motion.button>
  )
}
