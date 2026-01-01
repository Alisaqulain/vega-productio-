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
  // Wealth Management
  {
    keywords: ['wealth management', 'wealth', 'management', 'manage wealth', 'wealth building'],
    response: 'We offer comprehensive wealth management services tailored to your financial goals. Our team of experts helps you build and preserve wealth through strategic planning and diversified portfolios. We work with high-net-worth individuals, professionals, and families to create customized wealth strategies.',
  },
  {
    keywords: ['investment', 'invest', 'portfolio', 'investing', 'investment strategy'],
    response: 'Our investment advisory services include portfolio management, asset allocation, risk assessment, and investment strategy development. We help you make informed decisions to grow your wealth through diversified investments in stocks, bonds, real estate, and alternative assets.',
  },
  {
    keywords: ['insurance', 'life insurance', 'health insurance', 'insurance planning', 'insurance coverage'],
    response: 'We provide comprehensive insurance planning including life, health, property, and disability insurance. Our advisors assess your needs and recommend the best coverage options to protect your assets, family, and future financial security.',
  },
  {
    keywords: ['estate', 'inheritance', 'will', 'estate planning', 'legacy planning'],
    response: 'Our estate planning services help you protect and transfer your wealth to future generations. We assist with wills, trusts, inheritance planning, and tax-efficient wealth transfer strategies to ensure your legacy is preserved.',
  },
  {
    keywords: ['mortgage', 'home loan', 'property', 'mortgage advisory', 'property loan'],
    response: 'We offer expert mortgage advisory services to help you find the best home loan options in Dubai. Our team compares rates and terms from multiple lenders to secure the best deal for you, whether you\'re buying your first home or investing in property.',
  },
  
  // Contact & Communication
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'get in touch', 'contact us'],
    response: 'You can reach us at Accounts@thevegawealth.com or call +971 50 123 4567. You can also fill out our contact form on the website or use the WhatsApp button for immediate assistance. We\'re available Monday to Friday, 9 AM to 6 PM GST.',
  },
  {
    keywords: ['location', 'address', 'office', 'where are you', 'dubai office'],
    response: 'Our office is located in Dubai, United Arab Emirates. We serve clients across the UAE and internationally. For specific address details, please contact us via email or phone, and we\'ll be happy to provide our office location and schedule a meeting.',
  },
  {
    keywords: ['appointment', 'consultation', 'meeting', 'schedule', 'book'],
    response: 'We offer free initial consultations to discuss your financial goals. You can schedule an appointment by calling +971 50 123 4567, emailing Accounts@thevegawealth.com, or filling out our contact form. We also offer virtual consultations for your convenience.',
  },
  
  // Fees & Pricing
  {
    keywords: ['fee', 'cost', 'price', 'charges', 'pricing', 'how much'],
    response: 'Our fees are transparent and tailored to your specific needs. We offer various fee structures including percentage-based, fixed fees, or hourly rates depending on the services you require. Contact us for a personalized consultation where we can discuss our fee structure and how we can add value to your financial planning.',
  },
  {
    keywords: ['free', 'free consultation', 'no cost', 'complimentary'],
    response: 'Yes, we offer a free initial consultation to understand your financial situation and goals. During this consultation, we\'ll discuss your needs and explain how our services can help you. There\'s no obligation to proceed after the initial consultation.',
  },
  
  // NRI Services
  {
    keywords: ['nri', 'non-resident', 'indian', 'nri investment', 'nri planning'],
    response: 'We specialize in NRI wealth management and understand the unique financial needs of non-resident Indians. Our services include NRI investment options, tax planning, cross-border financial solutions, FCNR deposits, NRE/NRO accounts, and compliance with both UAE and Indian regulations.',
  },
  {
    keywords: ['fcnr', 'nre', 'nro', 'nri account', 'nri banking'],
    response: 'We assist NRIs with FCNR (Foreign Currency Non-Resident) deposits, NRE (Non-Resident External) accounts, and NRO (Non-Resident Ordinary) accounts. We help you choose the right banking solutions and investment options that comply with both UAE and Indian regulations.',
  },
  
  // Financial Planning
  {
    keywords: ['financial planning', 'financial plan', 'planning', 'financial goals'],
    response: 'Our financial planning services help you create a comprehensive roadmap for your financial future. We analyze your current situation, set realistic goals, and develop strategies for retirement, education, wealth accumulation, and legacy planning.',
  },
  {
    keywords: ['retirement', 'retirement planning', 'retire', 'pension'],
    response: 'We provide comprehensive retirement planning services to help you build a secure financial future. We analyze your retirement goals, estimate expenses, and create strategies for retirement savings, pension planning, and post-retirement income generation.',
  },
  {
    keywords: ['tax', 'tax planning', 'taxation', 'tax saving', 'tax advice'],
    response: 'Our tax planning services help you minimize tax liabilities while staying compliant with UAE and international tax regulations. We provide advice on tax-efficient investment strategies, cross-border tax planning, and compliance with FATCA and CRS requirements.',
  },
  {
    keywords: ['budget', 'budgeting', 'expense', 'cash flow'],
    response: 'We help you create and maintain budgets, manage cash flow, and optimize your spending. Our advisors analyze your income and expenses to identify opportunities for savings and better financial management.',
  },
  
  // Investment Services
  {
    keywords: ['stocks', 'equity', 'shares', 'stock market', 'trading'],
    response: 'We provide investment advisory for stocks and equities, helping you build a diversified portfolio. Our services include stock selection, portfolio rebalancing, market analysis, and risk management strategies tailored to your risk tolerance and goals.',
  },
  {
    keywords: ['bonds', 'fixed income', 'government bonds', 'corporate bonds'],
    response: 'We offer fixed income investment advisory including government bonds, corporate bonds, and sukuk. We help you build a balanced portfolio with appropriate bond allocations based on your risk profile and income needs.',
  },
  {
    keywords: ['mutual funds', 'funds', 'mutual fund', 'investment funds'],
    response: 'We provide guidance on mutual fund investments, helping you select the right funds based on your risk profile and goals. We analyze fund performance, fees, and help you build a diversified mutual fund portfolio.',
  },
  {
    keywords: ['real estate', 'property investment', 'real estate investment', 'property'],
    response: 'We offer real estate investment advisory services in Dubai and UAE. We help you identify investment opportunities, analyze property values, understand market trends, and structure property investments for optimal returns and tax efficiency.',
  },
  {
    keywords: ['crypto', 'cryptocurrency', 'bitcoin', 'digital assets'],
    response: 'We provide advisory on digital assets and cryptocurrency investments, helping you understand the risks and opportunities. We can help you incorporate digital assets into your portfolio with appropriate risk management strategies.',
  },
  {
    keywords: ['diversification', 'diversify', 'portfolio diversification'],
    response: 'Portfolio diversification is crucial for risk management. We help you diversify across asset classes, geographies, and sectors to reduce risk while maintaining growth potential. Our advisors create balanced portfolios tailored to your risk tolerance.',
  },
  {
    keywords: ['risk', 'risk management', 'risk assessment', 'risk tolerance'],
    response: 'We conduct comprehensive risk assessments to understand your risk tolerance and capacity. Our risk management strategies include diversification, asset allocation, and hedging techniques to protect your investments while pursuing growth.',
  },
  
  // Insurance Services
  {
    keywords: ['life insurance', 'term insurance', 'whole life'],
    response: 'We help you choose the right life insurance coverage based on your needs. We compare term life, whole life, and universal life policies from leading insurers to find the best coverage at competitive rates.',
  },
  {
    keywords: ['health insurance', 'medical insurance', 'health coverage'],
    response: 'We assist with health insurance planning, helping you select comprehensive medical coverage for yourself and your family. We compare plans from UAE insurers and international providers to find the best coverage for your needs.',
  },
  {
    keywords: ['property insurance', 'home insurance', 'building insurance'],
    response: 'We provide property insurance advisory to protect your real estate investments. We help you understand coverage options, compare policies, and ensure adequate protection for your properties in Dubai and UAE.',
  },
  {
    keywords: ['travel insurance', 'travel coverage'],
    response: 'We offer travel insurance advisory to protect you during international travel. We help you understand coverage options and select appropriate travel insurance policies for your trips.',
  },
  
  // Estate & Legacy Planning
  {
    keywords: ['trust', 'trusts', 'trust fund', 'trust planning'],
    response: 'We assist with trust planning to protect and manage your assets for future generations. We help you set up trusts, understand trust structures, and ensure your wealth is transferred according to your wishes.',
  },
  {
    keywords: ['will', 'wills', 'testament'],
    response: 'We help you create legally sound wills that reflect your wishes for asset distribution. We work with legal experts to ensure your will is properly drafted and complies with applicable laws in UAE and your home country.',
  },
  {
    keywords: ['inheritance', 'inheritance planning', 'succession'],
    response: 'Our inheritance planning services help you structure wealth transfer to minimize taxes and ensure smooth succession. We create comprehensive plans that protect your assets and provide for your heirs according to your wishes.',
  },
  
  // Mortgage & Property
  {
    keywords: ['home loan', 'housing loan', 'property finance'],
    response: 'We provide expert mortgage advisory to help you secure the best home loan in Dubai. We compare rates from multiple banks, help with pre-approval, and guide you through the entire mortgage process.',
  },
  {
    keywords: ['interest rate', 'mortgage rate', 'loan rate'],
    response: 'We monitor mortgage interest rates across UAE banks and help you secure the most competitive rates. We explain fixed vs. variable rates, help you choose the right option, and negotiate better terms on your behalf.',
  },
  {
    keywords: ['down payment', 'deposit', 'property deposit'],
    response: 'We advise on down payment requirements for property purchases in Dubai, which typically range from 15-25% depending on the property value and your residency status. We help you plan and structure your down payment efficiently.',
  },
  
  // Business & Corporate
  {
    keywords: ['business', 'corporate', 'business planning', 'corporate finance'],
    response: 'We provide financial advisory services for businesses and corporations, including business planning, cash flow management, corporate finance, and strategic financial consulting to help your business grow and succeed.',
  },
  {
    keywords: ['sme', 'small business', 'startup', 'entrepreneur'],
    response: 'We support SMEs and startups with financial planning, cash flow management, funding strategies, and business growth planning. We help entrepreneurs structure their finances for sustainable growth.',
  },
  
  // Education Planning
  {
    keywords: ['education', 'education planning', 'education fund', 'children education'],
    response: 'We help you plan for your children\'s education expenses, whether local or international. We create education savings plans, recommend investment strategies, and help you estimate and prepare for future education costs.',
  },
  
  // Debt Management
  {
    keywords: ['debt', 'debt management', 'loan', 'credit', 'pay off debt'],
    response: 'We provide debt management advisory to help you reduce and eliminate debt efficiently. We analyze your debt situation, create repayment strategies, and help you prioritize debts while maintaining your financial goals.',
  },
  {
    keywords: ['credit card', 'credit card debt', 'credit score'],
    response: 'We help you manage credit card debt and improve your credit score. We provide strategies for debt consolidation, credit card selection, and maintaining healthy credit while working toward your financial goals.',
  },
  
  // Savings & Emergency Fund
  {
    keywords: ['savings', 'save money', 'saving', 'emergency fund'],
    response: 'We help you build savings and emergency funds to provide financial security. We recommend savings strategies, appropriate emergency fund sizes (typically 3-6 months of expenses), and high-yield savings options.',
  },
  
  // Market Analysis
  {
    keywords: ['market', 'market analysis', 'market trends', 'economic'],
    response: 'We provide market analysis and economic insights to inform your investment decisions. Our advisors monitor global and regional markets, economic indicators, and provide regular updates on market conditions and opportunities.',
  },
  
  // Services Overview
  {
    keywords: ['services', 'what do you do', 'what services', 'offerings'],
    response: 'We offer comprehensive financial services including wealth management, investment advisory, financial planning, insurance planning, estate planning, mortgage advisory, tax planning, and NRI services. We tailor our services to meet your specific financial goals and needs.',
  },
  {
    keywords: ['about', 'about us', 'who are you', 'company'],
    response: 'The Vega Wealth is a premium financial advisory firm based in Dubai, UAE. We specialize in wealth management, investment advisory, and comprehensive financial planning for individuals, families, and businesses. With years of experience, we help clients achieve their financial goals and secure their future.',
  },
  
  // Qualifications & Expertise
  {
    keywords: ['qualified', 'certified', 'licensed', 'credentials', 'expertise'],
    response: 'Our team consists of certified financial advisors, wealth managers, and financial planners with extensive qualifications and experience. We are licensed and regulated, ensuring we meet the highest standards of professional excellence and ethical conduct.',
  },
  {
    keywords: ['experience', 'years', 'how long', 'established'],
    response: 'We have over 15 years of combined experience in financial advisory and wealth management. Our team has helped hundreds of clients across the UAE and internationally achieve their financial goals through expert guidance and personalized strategies.',
  },
  
  // Client Success
  {
    keywords: ['clients', 'success stories', 'testimonials', 'results'],
    response: 'We have successfully served over 500+ happy clients, managing assets worth AED 2B+. Our clients include professionals, high-net-worth individuals, families, and NRI investors who trust us with their financial future. You can read testimonials on our website.',
  },
  {
    keywords: ['assets', 'assets managed', 'portfolio size'],
    response: 'We currently manage assets worth over AED 2 billion on behalf of our clients. Our diverse client base includes individuals, families, and businesses with varying portfolio sizes, all receiving personalized attention and expert guidance.',
  },
  
  // Process & Approach
  {
    keywords: ['process', 'how it works', 'approach', 'methodology'],
    response: 'Our process begins with a free consultation to understand your financial situation and goals. We then conduct a comprehensive analysis, develop a customized plan, and implement strategies with regular monitoring and adjustments to keep you on track.',
  },
  {
    keywords: ['personalized', 'custom', 'tailored', 'individual'],
    response: 'Every financial plan we create is personalized to your unique situation, goals, and risk tolerance. We don\'t believe in one-size-fits-all solutions. Instead, we take time to understand your needs and create strategies specifically designed for you.',
  },
  
  // Investment Returns
  {
    keywords: ['returns', 'performance', 'roi', 'yield', 'earnings'],
    response: 'Investment returns vary based on your risk profile, asset allocation, and market conditions. We focus on long-term wealth creation with realistic return expectations. During our consultation, we\'ll discuss expected returns based on your specific investment strategy.',
  },
  
  // Risk & Safety
  {
    keywords: ['safe', 'secure', 'protected', 'regulated', 'licensed'],
    response: 'We are a licensed and regulated financial advisory firm in Dubai, ensuring your investments are handled with the highest standards of professionalism and compliance. We prioritize transparency, security, and client protection in all our services.',
  },
  
  // Minimum Investment
  {
    keywords: ['minimum', 'minimum investment', 'how much to invest', 'starting amount'],
    response: 'We work with clients at various investment levels. There\'s no fixed minimum, as we tailor our services to your needs. Whether you\'re just starting or have substantial assets, we can help. Contact us to discuss your specific situation.',
  },
  
  // Regular Updates
  {
    keywords: ['updates', 'reports', 'monitoring', 'review'],
    response: 'We provide regular portfolio reviews and updates to keep you informed about your investments. We schedule periodic meetings to review performance, discuss market conditions, and make adjustments to your financial plan as needed.',
  },
  
  // Market Volatility
  {
    keywords: ['volatility', 'market crash', 'recession', 'uncertainty', 'risky'],
    response: 'Market volatility is normal, and we help you navigate it with a well-diversified portfolio and long-term perspective. We design strategies that can weather market fluctuations while staying focused on your long-term financial goals.',
  },
  
  // Retirement Age
  {
    keywords: ['retirement age', 'when to retire', 'early retirement'],
    response: 'Retirement planning depends on your goals, savings, and lifestyle expectations. We help you determine the right retirement age, calculate required savings, and create strategies to achieve early retirement if that\'s your goal.',
  },
  
  // Inflation
  {
    keywords: ['inflation', 'inflation protection', 'purchasing power'],
    response: 'We factor inflation into all financial plans to ensure your purchasing power is maintained. Our investment strategies include inflation-protected assets and growth investments that outpace inflation over the long term.',
  },
  
  // UAE Specific
  {
    keywords: ['uae', 'dubai', 'emirates', 'gulf', 'middle east'],
    response: 'We specialize in financial services for UAE residents and expatriates. We understand the unique financial landscape in Dubai and UAE, including tax benefits, residency requirements, and local investment opportunities.',
  },
  {
    keywords: ['visa', 'residency', 'emirates id', 'uae residency'],
    response: 'UAE residency status affects your financial planning, especially for property investments and banking. We help you understand how residency status impacts your financial options and create strategies that work with your residency situation.',
  },
  
  // Banking
  {
    keywords: ['bank', 'banking', 'bank account', 'uae bank'],
    response: 'We provide guidance on banking solutions in UAE, helping you choose the right bank accounts, understand banking fees, and optimize your banking relationships. We work with major UAE banks and can help you navigate banking requirements.',
  },
  
  // Currency
  {
    keywords: ['currency', 'aed', 'dirham', 'exchange rate', 'forex'],
    response: 'We help you manage currency exposure and understand exchange rate impacts on your investments. For international clients, we provide strategies for managing multiple currencies and minimizing exchange rate risks.',
  },
  
  // Compliance
  {
    keywords: ['compliance', 'regulations', 'legal', 'fatca', 'crs'],
    response: 'We ensure all financial strategies comply with UAE regulations, FATCA, CRS, and other international compliance requirements. We help you stay compliant while optimizing your financial position.',
  },
  
  // Second Opinion
  {
    keywords: ['second opinion', 'review', 'evaluate', 'current advisor'],
    response: 'We offer second opinion services to review your current financial plan and investments. We provide an independent assessment and recommendations to ensure your financial strategy is optimal for your goals.',
  },
  
  // Family Planning
  {
    keywords: ['family', 'children', 'kids', 'family planning', 'future'],
    response: 'We help families plan for their financial future, including education funding, legacy planning, and wealth transfer. We create comprehensive family financial plans that secure your children\'s future while achieving your own financial goals.',
  },
  
  // Expatriates
  {
    keywords: ['expat', 'expatriate', 'expat financial planning', 'foreigner'],
    response: 'We specialize in financial planning for expatriates in UAE, understanding unique challenges like currency exposure, tax implications, and repatriation planning. We create strategies that work for your expat lifestyle.',
  },
  
  // Emergency Planning
  {
    keywords: ['emergency', 'crisis', 'unexpected', 'financial emergency'],
    response: 'We help you prepare for financial emergencies with adequate insurance, emergency funds, and contingency planning. We create strategies that protect you and your family from unexpected financial challenges.',
  },
  
  // Goal Setting
  {
    keywords: ['goals', 'financial goals', 'objectives', 'targets'],
    response: 'We help you define and prioritize your financial goals, whether it\'s buying a home, funding education, retiring early, or building wealth. We create actionable plans with timelines and milestones to achieve each goal.',
  },
  
  // Time Horizon
  {
    keywords: ['time', 'timeline', 'how long', 'duration', 'timeframe'],
    response: 'Financial planning timeframes vary based on your goals. Short-term goals (1-3 years) require different strategies than long-term goals (10+ years). We create time-appropriate investment strategies for each of your financial objectives.',
  },
  
  // Rebalancing
  {
    keywords: ['rebalance', 'rebalancing', 'adjust', 'modify portfolio'],
    response: 'We regularly review and rebalance portfolios to maintain your target asset allocation. Rebalancing ensures your portfolio stays aligned with your risk tolerance and goals as markets and your situation change.',
  },
  
  // Alternative Investments
  {
    keywords: ['alternative', 'private equity', 'hedge fund', 'commodities'],
    response: 'We provide advisory on alternative investments including private equity, hedge funds, commodities, and structured products. We help sophisticated investors diversify beyond traditional assets when appropriate.',
  },
  
  // Socially Responsible
  {
    keywords: ['esg', 'sustainable', 'ethical', 'socially responsible', 'green'],
    response: 'We offer ESG (Environmental, Social, Governance) and sustainable investment options for clients who want to align their investments with their values. We help you build portfolios that generate returns while making a positive impact.',
  },
  
  // Insurance Claims
  {
    keywords: ['claim', 'insurance claim', 'file claim'],
    response: 'We assist with insurance claims, helping you understand the process, required documentation, and ensuring you receive fair settlements. We work with you through the entire claims process.',
  },
  
  // Loan Comparison
  {
    keywords: ['compare', 'comparison', 'best', 'which is better'],
    response: 'We provide comprehensive comparisons of financial products, loans, insurance policies, and investment options. We analyze features, costs, and benefits to help you make informed decisions.',
  },
  
  // Financial Health Check
  {
    keywords: ['health check', 'financial review', 'assessment', 'evaluation'],
    response: 'We offer comprehensive financial health checks to evaluate your current financial situation, identify areas for improvement, and create action plans. This includes analyzing your net worth, cash flow, investments, and insurance coverage.',
  },
  
  // Wealth Transfer
  {
    keywords: ['transfer', 'wealth transfer', 'gift', 'donation'],
    response: 'We help you plan wealth transfers to family members, charities, or other beneficiaries in a tax-efficient manner. We structure transfers to minimize taxes while ensuring your wishes are fulfilled.',
  },
  
  // Business Succession
  {
    keywords: ['succession', 'business succession', 'handover', 'exit strategy'],
    response: 'We provide business succession planning to help you transfer your business to family members or partners smoothly. We create comprehensive plans that address ownership transfer, management transition, and tax implications.',
  },
  
  // Pre-nuptial Planning
  {
    keywords: ['marriage', 'prenup', 'pre-nuptial', 'wedding', 'marital'],
    response: 'We provide financial planning for couples, including pre-nuptial financial planning, joint financial goals, and strategies for managing finances together. We help couples align their financial futures.',
  },
  
  // Divorce Planning
  {
    keywords: ['divorce', 'separation', 'settlement'],
    response: 'We provide financial advisory during divorce or separation, helping you understand financial implications, asset division, and creating new financial plans for your post-divorce situation.',
  },
  
  // Charitable Giving
  {
    keywords: ['charity', 'donation', 'philanthropy', 'giving'],
    response: 'We help you incorporate charitable giving into your financial plan in a tax-efficient manner. We assist with setting up charitable trusts, donor-advised funds, and structuring donations to maximize impact.',
  },
  
  // Financial Independence
  {
    keywords: ['financial freedom', 'financial independence', 'fire', 'retire early'],
    response: 'We help you achieve financial independence and early retirement through strategic planning, aggressive savings, and smart investing. We create FIRE (Financial Independence, Retire Early) strategies tailored to your goals.',
  },
  
  // Market Timing
  {
    keywords: ['timing', 'when to invest', 'best time', 'market timing'],
    response: 'We don\'t believe in trying to time the market. Instead, we focus on time in the market with a disciplined, long-term approach. We help you invest regularly and stay invested through market cycles.',
  },
  
  // Dollar Cost Averaging
  {
    keywords: ['dca', 'dollar cost averaging', 'systematic investment'],
    response: 'We recommend dollar-cost averaging as an effective investment strategy. By investing fixed amounts regularly, you reduce the impact of market volatility and benefit from long-term market growth.',
  },
  
  // Financial Education
  {
    keywords: ['learn', 'education', 'teach', 'understand', 'explain'],
    response: 'We believe in financial education and take time to explain all strategies and recommendations. We ensure you understand your financial plan, investments, and the reasoning behind our advice. Knowledge empowers better decisions.',
  },
  
  // Confidentiality
  {
    keywords: ['confidential', 'privacy', 'secure', 'data protection'],
    response: 'We maintain strict confidentiality and data protection standards. All client information is kept secure and private. We comply with data protection regulations and never share your information without consent.',
  },
  
  // Referrals
  {
    keywords: ['refer', 'referral', 'recommend', 'friend', 'family'],
    response: 'We welcome referrals and are grateful when clients recommend us to friends and family. We treat every referral with the same high level of service and personalized attention. Thank you for trusting us!',
  },
  
  // Online Services
  {
    keywords: ['online', 'virtual', 'remote', 'video call', 'zoom'],
    response: 'We offer virtual consultations via video calls for your convenience. You can meet with our advisors online from anywhere, making it easy to access our services regardless of your location.',
  },
  
  // Language
  {
    keywords: ['language', 'arabic', 'hindi', 'urdu', 'english'],
    response: 'Our team is multilingual and can communicate in English, Arabic, Hindi, Urdu, and other languages. We ensure clear communication in your preferred language to make financial planning accessible.',
  },
  
  // Quick Questions
  {
    keywords: ['quick', 'fast', 'urgent', 'immediate'],
    response: 'We understand some financial questions need quick answers. While comprehensive planning takes time, we\'re available for urgent questions via phone, email, or WhatsApp. We prioritize responsive communication.',
  },
  
  // Guarantees
  {
    keywords: ['guarantee', 'promise', 'assure', 'certain'],
    response: 'While we can\'t guarantee specific investment returns (as markets are unpredictable), we guarantee our commitment to your financial success, transparent communication, and professional service. We work diligently to help you achieve your goals.',
  },
  
  // Reviews & Feedback
  {
    keywords: ['review', 'feedback', 'complaint', 'satisfaction'],
    response: 'We value your feedback and continuously strive to improve our services. If you have concerns or suggestions, please contact us directly. We take all feedback seriously and use it to enhance our client experience.',
  },
  
  // Market Research
  {
    keywords: ['research', 'analysis', 'report', 'insights'],
    response: 'We conduct ongoing market research and analysis to inform our investment recommendations. We provide regular market insights and reports to keep you informed about economic conditions and investment opportunities.',
  },
  
  // Technology
  {
    keywords: ['technology', 'digital', 'online platform', 'app', 'software'],
    response: 'We leverage modern technology and digital tools to provide efficient service and portfolio tracking. While we use technology to enhance our services, we maintain the personal touch that makes our advisory unique.',
  },
  
  // Industry Trends
  {
    keywords: ['trends', 'latest', 'new', 'innovative', 'cutting edge'],
    response: 'We stay current with financial industry trends, new investment products, regulatory changes, and innovative strategies. We incorporate relevant developments into our advisory services to provide you with modern solutions.',
  },
  
  // Relationship
  {
    keywords: ['relationship', 'partnership', 'long term', 'commitment'],
    response: 'We build long-term relationships with our clients, serving as trusted financial partners throughout your life journey. We\'re committed to your success and adapt our services as your needs and goals evolve.',
  },
]

const defaultResponses = [
  "I'm here to help! Could you tell me more about what you're looking for? I can assist with wealth management, investments, insurance, estate planning, mortgages, and more.",
  "That's a great question. I'd be happy to provide more information. Could you rephrase your question or provide more details about your financial goals?",
  "I'd be happy to assist you. Could you provide more details about your financial situation or goals? This will help me give you the most relevant advice.",
  "I understand you're looking for financial guidance. Could you tell me more about your specific needs? I can help with investment strategies, financial planning, insurance, or any other financial topic.",
  "That's an important question. To give you the best answer, could you share a bit more context? I'm here to help with all aspects of financial planning and wealth management.",
  "I'm here to guide you on your path to prosperity. Could you provide more details so I can offer the most relevant financial advice for your situation?",
  "Great question! I can help with various financial topics. Could you be more specific about what you'd like to know? I cover investments, insurance, estate planning, mortgages, and more.",
  "I'd love to help you with that. To provide the best guidance, could you share more details about your financial goals or situation?",
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Prosperity Advisor, your AI financial assistant from The Vega Wealth. I'm here to help you with all your financial questions - from wealth management and investments to insurance and estate planning. How can I assist you today?",
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
                  <div className="font-semibold">Prosperity Advisor</div>
                  <div className="text-xs opacity-90">Your Path to Financial Success</div>
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

