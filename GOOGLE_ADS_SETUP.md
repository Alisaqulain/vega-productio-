# Google Ads Conversion Tracking Setup Guide

## ✅ Code Implementation Complete

All conversion tracking code has been implemented and fixed:
- ✅ Form conversion fires on thank-you page (proper implementation)
- ✅ Phone click conversions implemented
- ✅ WhatsApp click conversions implemented
- ✅ Error handling and validation added
- ✅ GTM installed on all pages

---

## 📋 What You Need to Provide

### 1. Google Tag Manager (GTM) Container ID
**Required:** `NEXT_PUBLIC_GTM_ID`

**How to get it:**
1. Go to [Google Tag Manager](https://tagmanager.google.com)
2. Create a new container or use existing one
3. Copy the Container ID (format: `GTM-XXXXXXX`)
4. Example: `GTM-ABC1234`

**Where to add:** Environment variables in your hosting platform (Vercel, etc.)

---

### 2. Google Analytics 4 (GA4) Measurement ID
**Required:** `NEXT_PUBLIC_GA4_MEASUREMENT_ID`

**How to get it:**
1. Go to [Google Analytics](https://analytics.google.com)
2. Create a GA4 property (if you don't have one)
3. Go to Admin > Data Streams
4. Click on your web stream
5. Copy the Measurement ID (format: `G-XXXXXXXXXX`)
6. Example: `G-ABC123DEF4`

**Where to add:** Environment variables in your hosting platform

---

### 3. Google Ads Conversion IDs (3 Required)

You need to create 3 conversion actions in Google Ads:

#### A. Form Submission Conversion
**Required:** `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID`

**How to get it:**
1. Go to [Google Ads](https://ads.google.com)
2. Click **Tools & Settings** (wrench icon) > **Conversions**
3. Click **+ New conversion action**
4. Select **Website** as source
5. Choose **Submit lead form** as category
6. Name it: "Contact Form Submission"
7. Set value: Optional (or set to 1)
8. Set count: **One** (important!)
9. Set attribution: **Last click**
10. Click **Create and continue**
11. Copy the **Conversion ID and Label** (format: `AW-XXXXXXXXXX/XXXXXXXXXX`)
12. Example: `AW-123456789/AbCdEfGhIjKlMnOpQrStUvWxYz`

#### B. Phone Click Conversion
**Required:** `NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_ID`

**How to get it:**
1. Same as above, but:
2. Choose **Phone calls** as category
3. Name it: "Phone Call Click"
4. Copy the Conversion ID and Label

#### C. WhatsApp Click Conversion
**Required:** `NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_ID`

**How to get it:**
1. Same as above, but:
2. Choose **Other** as category
3. Name it: "WhatsApp Click"
4. Copy the Conversion ID and Label

---

## 🔧 How to Add Environment Variables

### For Vercel (Recommended):
1. Go to your Vercel project dashboard
2. Click **Settings** > **Environment Variables**
3. Add each variable:
   - `NEXT_PUBLIC_GTM_ID` = `GTM-XXXXXXX`
   - `NEXT_PUBLIC_GA4_MEASUREMENT_ID` = `G-XXXXXXXXXX`
   - `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` = `AW-XXXXXXXXXX/XXXXXXXXXX`
   - `NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_ID` = `AW-XXXXXXXXXX/XXXXXXXXXX`
   - `NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_ID` = `AW-XXXXXXXXXX/XXXXXXXXXX`
4. Select **Production**, **Preview**, and **Development** environments
5. Click **Save**
6. **Redeploy** your site for changes to take effect

### For Local Development (.env.local):
Create a file named `.env.local` in your project root:
```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX/XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_ID=AW-XXXXXXXXXX/XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_ID=AW-XXXXXXXXXX/XXXXXXXXXX
```

---

## ✅ Testing Checklist

After adding all environment variables:

### 1. Test GTM Installation
- [ ] Open your website
- [ ] Open browser DevTools (F12)
- [ ] Go to **Console** tab
- [ ] Type: `dataLayer` and press Enter
- [ ] Should see an array (not undefined)
- [ ] Check **Network** tab for `gtm.js` request

### 2. Test Form Conversion
- [ ] Fill out contact form
- [ ] Submit form
- [ ] Should redirect to `/thank-you` page
- [ ] Open DevTools > **Console**
- [ ] Should see: `✅ Form conversion fired: AW-XXXXXXXXXX/XXXXXXXXXX`
- [ ] Check **Network** tab for conversion pixel request

### 3. Test Phone Click Conversion
- [ ] Click any phone number link
- [ ] Open DevTools > **Console**
- [ ] Should see: `✅ Phone conversion fired: AW-XXXXXXXXXX/XXXXXXXXXX`
- [ ] Check **Network** tab for conversion pixel request

### 4. Test WhatsApp Click Conversion
- [ ] Click WhatsApp button
- [ ] Open DevTools > **Console**
- [ ] Should see: `✅ WhatsApp conversion fired: AW-XXXXXXXXXX/XXXXXXXXXX`
- [ ] Check **Network** tab for conversion pixel request

### 5. Test with GTM Preview Mode
- [ ] Go to [Google Tag Manager](https://tagmanager.google.com)
- [ ] Click **Preview** button
- [ ] Enter your website URL
- [ ] Navigate through your site
- [ ] Check that tags fire correctly:
  - Form submission tag
  - Phone click tag
  - WhatsApp click tag

### 6. Verify in Google Ads
- [ ] Go to Google Ads > **Tools & Settings** > **Conversions**
- [ ] Wait 24-48 hours after testing
- [ ] Check each conversion action shows test conversions
- [ ] Once verified, conversions will appear in real-time

---

## 🚨 Important Notes

1. **Conversion IDs Format:**
   - Must include both ID and Label: `AW-123456789/AbCdEfGhIjKlMnOpQrStUvWxYz`
   - Don't split them - use the full string

2. **Count Setting:**
   - Set all conversions to **"One"** (not "Many")
   - This prevents duplicate conversions

3. **Attribution:**
   - Use **"Last click"** for accurate tracking

4. **Testing:**
   - Conversions may take 24-48 hours to appear in Google Ads
   - Use GTM Preview Mode for immediate testing
   - Check browser console for errors

5. **Environment Variables:**
   - All variables must start with `NEXT_PUBLIC_` to work in browser
   - Must redeploy after adding variables
   - Variables are case-sensitive

---

## 📞 Need Help?

If conversions aren't firing:
1. Check browser console for errors
2. Verify environment variables are set correctly
3. Check GTM Preview Mode
4. Verify conversion IDs are correct format
5. Ensure site is redeployed after adding variables

---

## ✅ Summary

**You need to provide:**
1. ✅ GTM Container ID
2. ✅ GA4 Measurement ID  
3. ✅ Form Conversion ID
4. ✅ Phone Conversion ID
5. ✅ WhatsApp Conversion ID

**After providing:**
- Add as environment variables
- Redeploy site
- Test using checklist above
- Verify in Google Ads (24-48 hours)


