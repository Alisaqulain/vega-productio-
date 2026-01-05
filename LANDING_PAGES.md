# Google Ads Landing Pages

## Overview

Dedicated landing pages optimized for Google Ads campaigns. These pages are designed for maximum conversion with:
- No main navigation (reduces distractions)
- Focused content on specific services
- Prominent contact forms
- Clear call-to-action buttons
- Conversion tracking enabled

## Available Landing Pages

### 1. Wealth Management Landing
**URL**: `/landing/wealth-management`

**Target Keywords:**
- Wealth Management Dubai
- Wealth Management UAE
- Financial Advisor Dubai
- Portfolio Management Dubai

**Features:**
- Hero section with key benefits
- Trust indicators (500+ clients, AED 2B+ assets)
- Service benefits section
- Contact form
- CTA section

### 2. Investment Advisory Landing
**URL**: `/landing/investment-advisory`

**Target Keywords:**
- Investment Advisory Dubai
- Investment Advisor Dubai
- Portfolio Management Dubai
- Investment Services UAE

**Features:**
- Hero section with investment focus
- Service highlights
- Contact form
- CTA section

## Design Features

### Layout
- **No Navbar**: Removes navigation distractions
- **Clean Design**: Focused on conversion
- **Mobile Responsive**: Optimized for all devices
- **Fast Loading**: Lazy loaded components

### Conversion Elements
- **Hero Section**: Clear value proposition
- **Trust Indicators**: Social proof (clients, assets, experience)
- **Benefits Section**: Key advantages highlighted
- **Contact Form**: Prominent, easy to fill
- **Multiple CTAs**: WhatsApp and form submission options

## Tracking

All landing pages include:
- Google Tag Manager
- Google Analytics 4
- Google Ads conversion tracking
- Form submission tracking
- Phone click tracking
- WhatsApp click tracking

## Usage in Google Ads

### Campaign Setup
1. Create a new campaign in Google Ads
2. Set landing page URL to one of the landing pages
3. Enable conversion tracking
4. Use relevant keywords matching the landing page focus

### Best Practices
- Match ad copy to landing page content
- Use specific landing pages for specific ad groups
- Test different landing pages for A/B testing
- Monitor conversion rates in Google Ads

## Creating New Landing Pages

To create a new landing page:

1. Create a new folder in `app/landing/[page-name]/`
2. Create `page.tsx` with:
   - SEO metadata
   - Hero section
   - Benefits/services section
   - Contact form
   - CTA section
3. Update `app/sitemap.ts` to include the new page
4. Test the page and verify tracking

## Example Structure

```
app/landing/
├── layout.tsx (no navbar layout)
├── wealth-management/
│   └── page.tsx
└── investment-advisory/
    └── page.tsx
```

## Performance

- All landing pages are optimized for:
  - Fast loading (< 3s)
  - Mobile responsiveness
  - SEO optimization
  - Conversion tracking

## Notes

- Landing pages use the same layout as main site (Footer, WhatsApp button)
- No navbar to reduce distractions
- All forms redirect to `/thank-you` page
- Conversion tracking is automatically enabled





