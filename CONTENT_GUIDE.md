# Devil Labs Portfolio — Content Edit Guide

> Quick reference for updating any content on the website.

---

## 📂 Project Structure

```
dev/
├── app/
│   ├── layout.js          ← Meta tags, SEO title, description
│   ├── page.js            ← Hero section, page layout order
│   ├── globals.css         ← Colors, fonts, animations, effects
│   └── sitemap.js          ← Sitemap URLs
├── components/
│   ├── Navbar.jsx          ← Navigation links
│   ├── EfficiencyEngine.jsx← Workflow process section
│   ├── ServicesShowcase.jsx← Services list + pricing
│   ├── SkillsOrbit.jsx     ← Skills & stats
│   ├── ProjectInventory.jsx← Projects / case studies
│   ├── Testimonials.jsx    ← Social reactions marquee
│   ├── FounderNarrative.jsx← About / IIT Patna story
│   ├── SocialBento.jsx     ← Social media links
│   ├── FAQAccordion.jsx    ← FAQ section
│   ├── ContactSection.jsx  ← Contact form
│   ├── ChatBot.jsx         ← Chatbot responses & jokes
│   ├── CustomCursor.jsx    ← Custom mouse cursor
│   ├── SEOIndex.jsx        ← JSON-LD structured data
│   └── Footer.jsx          ← Footer links
└── public/
    ├── profile.jpg         ← Your profile photo
    ├── resume-full.pdf     ← Resume file
    └── seo-keywords.md     ← SEO keyword database
```

---

## ✏️ What to Edit & Where

### Change Pricing
**File:** `components/ServicesShowcase.jsx` — **Lines 87-91**
```js
const pricing = [
  { tier: "Utility", price: "₹8,000", ... },
  { tier: "Growth", price: "₹10,000", ... },
  { tier: "Business", price: "₹35,000", ... },
  { tier: "Enterprise", price: "₹75,000+", ... },
];
```

### Change Services
**File:** `components/ServicesShowcase.jsx` — **Lines 6-85** (services array)

### Change Skills / Stats
**File:** `components/SkillsOrbit.jsx` — **Lines 5-50** (skills array), **Lines 130-136** (stats)

### Change Projects
**File:** `components/ProjectInventory.jsx` — Look for the projects array at top of file

### Change Testimonials / Social Reactions
**File:** `components/Testimonials.jsx` — **Lines 6-45** (reactions array)

### Change Hero Text
**File:** `app/page.js` — **Lines 73-75** (h1 heading), **Lines 107-110** (bio paragraph)

### Change About / Founder Story
**File:** `components/FounderNarrative.jsx` — Full story content

### Change Contact Info
**File:** `components/ContactSection.jsx` — Email, phone, WhatsApp URL
**File:** `components/Footer.jsx` — Social links & email

### Change Social Links
**File:** `components/SocialBento.jsx` — Platform URLs and usernames
**File:** `components/Footer.jsx` — Footer social links

### Change FAQ Questions
**File:** `components/FAQAccordion.jsx` — FAQ array at top

### Change Chatbot Responses
**File:** `components/ChatBot.jsx` — **Lines 6-14** (devJokes), **Lines 16-70** (botResponses)

### Change Navigation Links
**File:** `components/Navbar.jsx` — Nav items array

### Change SEO / Meta Tags
**File:** `app/layout.js` — **Lines 4-48** (metadata object)
**File:** `components/SEOIndex.jsx` — JSON-LD structured data

### Change Colors / Fonts
**File:** `app/globals.css` — **Lines 4-10** (@theme), **Lines 12-16** (:root)
- Accent color: `#CFB53B` (Satin Gold)
- Background: `#0A0A0A`
- Heading font: Playfair Display
- Body font: Inter

### Change Profile Photo
Replace `public/profile.jpg` with your new photo (keep same filename)

### Change Resume
Replace `public/resume-full.pdf` with updated resume

### Change SEO Keywords
**File:** `public/seo-keywords.md` — Add/remove keywords by tier

---

## 🚀 Deploy Commands

```bash
# Local development
npm run dev

# Production build
npm run build

# Push to GitHub
git add .
git commit -m "update content"
git push origin main
```
