# Deployment Checklist

## Pre-Deployment Setup

### 1. Environment Variables
Create `.env.local` file with the following variables:

```env
# SMTP Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
SMTP_TO=info@thevegawealth.com

# WhatsApp Configuration
NEXT_PUBLIC_WHATSAPP_NUMBER=971501234567

# OpenAI API (Optional - for chatbot)
OPENAI_API_KEY=your-openai-api-key

# Site URL
NEXT_PUBLIC_SITE_URL=https://thevegawealth.com
```

### 2. Assets
- [x] Logo file is at `public/logo.jpeg` (already in place)
- [ ] Update Google Maps embed URL in `components/MapEmbed.tsx` with actual office location

### 3. Configuration
- [ ] Update contact email addresses in Footer component
- [ ] Update phone numbers throughout the site
- [ ] Update social media links in Footer (if applicable)
- [ ] Review and update testimonials if needed

### 4. Testing
- [ ] Test contact form submission
- [ ] Verify email delivery
- [ ] Test WhatsApp button functionality
- [ ] Test chatbot interactions
- [ ] Verify all links work correctly
- [ ] Test responsive design on mobile/tablet
- [ ] Check browser compatibility

### 5. SEO
- [ ] Verify meta descriptions on all pages
- [ ] Check JSON-LD schema markup
- [ ] Test sitemap.xml accessibility
- [ ] Verify robots.txt configuration
- [ ] Add actual logo URL to schema (if hosted elsewhere)

### 6. Performance
- [ ] Run Lighthouse audit (target: 95+)
- [ ] Optimize images (if any added)
- [ ] Check bundle size

## Deployment Steps

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Import your GitHub repository
   - Add all environment variables in Vercel dashboard
   - Deploy

3. **Post-Deployment**
   - Test the live site
   - Verify email functionality
   - Test WhatsApp integration
   - Submit sitemap to Google Search Console
   - Set up Google Analytics (optional)

## Features Implemented

✅ Next.js 14 App Router  
✅ Responsive design (mobile, tablet, desktop)  
✅ WhatsApp floating button (all pages)  
✅ Contact form with email + WhatsApp delivery  
✅ Email API with Nodemailer  
✅ AI-ready chatbot component  
✅ SEO optimization (metadata, JSON-LD, sitemap, robots.txt)  
✅ Premium UI/UX with glassmorphism and gradients  
✅ Framer Motion animations  
✅ All 5 service sections  
✅ Home, About, Services, Contact pages  
✅ Tailwind CSS styling  

## Support

For issues or questions, refer to:
- README.md for general setup
- LOGO_INSTRUCTIONS.md for logo setup
- Next.js documentation: https://nextjs.org/docs
- Vercel documentation: https://vercel.com/docs

