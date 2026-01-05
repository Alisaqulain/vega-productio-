# Tracking & Analytics Setup Guide

## Overview

This website includes comprehensive tracking and analytics setup for:
- Google Tag Manager (GTM)
- Google Analytics 4 (GA4)
- Google Ads Conversion Tracking

## Environment Variables Required

Add these to your `.env.local` file (or Vercel environment variables):

### 1. Google Tag Manager
```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```
**How to get:**
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new container or use existing
3. Copy the Container ID (format: GTM-XXXXXXX)

### 2. Google Analytics 4
```env
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```
**How to get:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a GA4 property
3. Go to Admin > Data Streams
4. Copy the Measurement ID (format: G-XXXXXXXXXX)

### 3. Google Ads Conversion Tracking
```env
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX/XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_ID=AW-XXXXXXXXXX/XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_ID=AW-XXXXXXXXXX/XXXXXXXXXX
```
**How to get:**
1. Go to [Google Ads](https://ads.google.com/)
2. Tools & Settings > Conversions
3. Create conversion actions:
   - **Form Submission**: Track when users submit the contact form
   - **Phone Call**: Track when users click phone numbers
   - **WhatsApp Click**: Track when users click WhatsApp buttons
4. Copy the Conversion ID and Label (format: AW-XXXXXXXXXX/XXXXXXXXXX)

## Tracked Events

### 1. Form Submissions
- **Event Name**: `form_submit`
- **Trigger**: When contact form is successfully submitted
- **Data Tracked**: Form type, name, email, phone
- **Conversion**: Yes (NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID)

### 2. Phone Clicks
- **Event Name**: `phone_click`
- **Trigger**: When user clicks a phone number link
- **Data Tracked**: Phone number
- **Conversion**: Yes (NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_ID)

### 3. WhatsApp Clicks
- **Event Name**: `whatsapp_click`
- **Trigger**: When user clicks WhatsApp button
- **Data Tracked**: Source (floating_button, contact_page, etc.)
- **Conversion**: Yes (NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_ID)

### 4. Page Views
- **Event Name**: Automatic (GA4)
- **Trigger**: On every page navigation
- **Data Tracked**: Page path, page title

## Implementation Details

### Components
- `components/GoogleTagManager.tsx` - GTM container
- `components/GoogleAnalytics.tsx` - GA4 tracking
- `lib/tracking.ts` - Tracking utility functions

### Usage in Components
```typescript
import { trackFormSubmission, trackPhoneClick, trackWhatsAppClick } from '@/lib/tracking'

// Track form submission
trackFormSubmission('contact_form', { name, email, phone })

// Track phone click
trackPhoneClick('+971501234567')

// Track WhatsApp click
trackWhatsAppClick('floating_button')
```

## Testing

### 1. Test GTM
1. Install [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Visit your website
3. Check if GTM container loads

### 2. Test GA4
1. Go to GA4 > Reports > Realtime
2. Visit your website
3. Check if events appear in realtime

### 3. Test Google Ads Conversions
1. Go to Google Ads > Tools & Settings > Conversions
2. Click on a conversion action
3. Check "Recent activity" tab
4. Submit a form or click tracked elements
5. Verify conversions appear (may take 24-48 hours)

## Privacy & Compliance

- All tracking respects user privacy
- No personal data is sent to analytics platforms
- Complies with GDPR and CCPA requirements
- Consider adding cookie consent banner for EU users

## Troubleshooting

### GTM not loading
- Check `NEXT_PUBLIC_GTM_ID` is set correctly
- Verify GTM container is published
- Check browser console for errors

### GA4 not tracking
- Check `NEXT_PUBLIC_GA4_MEASUREMENT_ID` is set correctly
- Verify GA4 property is active
- Check browser console for errors

### Conversions not showing
- Verify conversion IDs are correct
- Check conversion actions are active in Google Ads
- Allow 24-48 hours for data to appear
- Test in Google Ads conversion tracking tool





