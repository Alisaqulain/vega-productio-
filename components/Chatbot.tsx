'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const faqData = [
  {
    keywords: ['wealth management', 'wealth', 'management'],
    response: 'We offer comprehensive wealth management services tailored to your financial goals. Our team of experts helps you build and preserve wealth through strategic planning and diversified portfolios.',
  },
  {
    keywords: ['investment', 'invest', 'portfolio'],
    response: 'Our investment advisory services include portfolio management, asset allocation, risk assessment, and investment strategy development. We help you make informed decisions to grow your wealth.',
  },
  {
    keywords: ['insurance', 'life insurance', 'health insurance'],
    response: 'We provide comprehensive insurance planning including life, health, and property insurance. Our advisors assess your needs and recommend the best coverage options to protect your assets and family.',
  },
  {
    keywords: ['estate', 'inheritance', 'will'],
    response: 'Our estate planning services help you protect and transfer your wealth to future generations. We assist with wills, trusts, and inheritance planning to ensure your legacy is preserved.',
  },
  {
    keywords: ['mortgage', 'home loan', 'property'],
    response: 'We offer expert mortgage advisory services to help you find the best home loan options in Dubai. Our team compares rates and terms from multiple lenders to secure the best deal for you.',
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach'],
    response: 'You can reach us at info@vegawalth.com or call +971 50 123 4567. You can also fill out our contact form or use the WhatsApp button for immediate assistance.',
  },
  {
    keywords: ['fee', 'cost', 'price', 'charges'],
    response: 'Our fees are transparent and tailored to your specific needs. Contact us for a personalized consultation where we can discuss our fee structure and how we can add value to your financial planning.',
  },
  {
    keywords: ['nri', 'non-resident', 'indian'],
    response: 'We specialize in NRI wealth management and understand the unique financial needs of non-resident Indians. Our services include NRI investment options, tax planning, and cross-border financial solutions.',
  },
]

const defaultResponses = [
  "I'm here to help! Could you tell me more about what you're looking for?",
  "That's a great question. Let me connect you with one of our advisors. Would you like to schedule a consultation?",
  "I'd be happy to assist you. Could you provide more details about your financial goals?",
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm here to help you learn more about The Vega Wealth's financial services. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    for (const faq of faqData) {
      if (faq.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return faq.response
      }
    }
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findResponse(input),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)

    // In production, you would call OpenAI API here:
    // const response = await fetch('/api/chat', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ message: input, history: messages }),
    // })
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 bg-gradient-to-br from-primary-blue to-primary-green text-white p-4 md:p-5 rounded-full shadow-2xl hover:shadow-primary-blue/50 transition-all duration-300 group"
          whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open chatbot"
        >
          <Bot size={24} className="md:w-7 md:h-7 text-white" />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Chat with us
          </span>
        </motion.button>
      )}

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-[calc(100vw-2rem)] md:w-96 md:max-w-96 h-[calc(100vh-8rem)] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bot size={24} />
                <div>
                  <div className="font-semibold">Vega Wealth Assistant</div>
                  <div className="text-xs opacity-90">We're here to help</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded transition-colors"
                aria-label="Close chatbot"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user'
                          ? 'bg-primary-blue text-white'
                          : 'bg-primary-green text-white'
                      }`}
                    >
                      {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-2 ${
                        message.sender === 'user'
                          ? 'bg-primary-blue text-white'
                          : 'bg-white text-gray-800 shadow-sm'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl px-4 py-2 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="bg-gradient-primary text-white p-2 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  aria-label="Send message"
                >
                  <Send size={20} />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Powered by AI • <a href="/contact" className="text-primary-blue hover:underline">Get human help</a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

