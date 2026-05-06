# Captanova — Premium Mindset Coaching Website

A high-converting, production-ready Next.js website for the Captanova mindset coaching brand.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Custom CSS
- **Fonts**: Cormorant Garamond (display) + Jost (body) + DM Mono
- **Payments**: Razorpay
- **Email**: Resend (primary) / Nodemailer SMTP (fallback)
- **Analytics**: Meta Pixel
- **Hosting**: Vercel (recommended)

---

## 📦 Getting Started

### 1. Install Dependencies

```bash
cd captanova
npm install
# Also install razorpay (used server-side)
npm install razorpay
```

### 2. Configure Environment Variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in your values:

| Variable | Description |
|---|---|
| `RAZORPAY_KEY_ID` | Your Razorpay Test/Live Key ID |
| `RAZORPAY_KEY_SECRET` | Your Razorpay Key Secret |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Same Key ID (exposed to browser) |
| `RESEND_API_KEY` | From resend.com |
| `EMAIL_FROM` | Verified sender email |
| `NEXT_PUBLIC_META_PIXEL_ID` | From Meta Business Manager |
| `NEXT_PUBLIC_SITE_URL` | Your live URL (e.g. https://captanova.in) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number with country code (e.g. 919812345678) |

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔑 API Keys — Where to Get Them

### Razorpay
1. Go to [razorpay.com](https://razorpay.com) → Sign up
2. Dashboard → Settings → API Keys → Generate Test Keys
3. Add `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` to `.env.local`
4. For production: complete KYC and switch to Live keys

### Resend (Email)
1. Go to [resend.com](https://resend.com) → Sign up (free tier available)
2. Add & verify your sending domain
3. API Keys → Create API Key
4. Add `RESEND_API_KEY` to `.env.local`
5. Update `EMAIL_FROM` to your verified domain email

### Meta Pixel
1. Go to [business.facebook.com](https://business.facebook.com)
2. Events Manager → Connect Data Sources → Web → Meta Pixel
3. Create a pixel → Copy the Pixel ID
4. Add as `NEXT_PUBLIC_META_PIXEL_ID` in `.env.local`

### Google Sheets (Lead Storage — Optional)
1. Create a Google Cloud project
2. Enable Google Sheets API
3. Create a Service Account → Download JSON credentials
4. Share your Google Sheet with the service account email
5. Add spreadsheet ID and credentials to `.env.local`
6. Uncomment the Google Sheets code in `src/app/api/lead/route.ts`

---

## 🚢 Deployment to Vercel

### Option A: Vercel CLI
```bash
npm install -g vercel
vercel
# Follow prompts — select your project, framework (Next.js)
```

### Option B: GitHub Integration
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Select your repo
4. In Environment Variables section, add all variables from `.env.example`
5. Deploy

### Custom Domain
1. Vercel Dashboard → Your Project → Settings → Domains
2. Add `captanova.in` and `www.captanova.in`
3. Update DNS records at your registrar as instructed by Vercel

---

## 📁 Folder Structure

```
captanova/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (SEO, Pixel, fonts)
│   │   ├── page.tsx                # Homepage
│   │   ├── sitemap.ts              # Auto-generated sitemap
│   │   ├── robots.ts               # Robots.txt
│   │   ├── not-found.tsx           # 404 page
│   │   ├── about/page.tsx          # About page
│   │   ├── contact/page.tsx        # Contact + lead form
│   │   ├── programs/
│   │   │   ├── page.tsx            # All programs listing
│   │   │   └── [slug]/             # Dynamic program page
│   │   │       ├── page.tsx        # SSG + metadata
│   │   │       └── ProgramPageClient.tsx  # Razorpay checkout
│   │   ├── payment/
│   │   │   ├── success/page.tsx    # Post-payment success
│   │   │   └── failure/page.tsx    # Payment failure
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── api/
│   │       ├── lead/route.ts       # Lead capture + email
│   │       └── payment/
│   │           ├── create-order/route.ts  # Razorpay order creation
│   │           └── verify/route.ts        # Payment signature verification
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── PainSection.tsx
│   │   │   ├── TransformSection.tsx
│   │   │   ├── ProgramsOverview.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── LeadCaptureSection.tsx
│   │   │   └── CtaSection.tsx
│   │   └── ui/
│   │       ├── WhatsAppButton.tsx
│   │       └── ScrollProgress.tsx
│   ├── lib/
│   │   ├── programs.ts             # All program data
│   │   └── useScrollReveal.ts      # Scroll animation hook
│   └── styles/
│       └── globals.css             # Global styles + design system
├── public/
│   └── og-image.svg               # Open Graph image
├── .env.example                   # Environment variable template
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Adding/Editing Programs

All programs are defined in `src/lib/programs.ts`. To add a new program:

```typescript
{
  id: 'unique_id',
  slug: 'url-slug',
  category: 'core' | 'mini',
  name: 'Program Name',
  tagline: 'Short tagline',
  description: 'Full description...',
  price: 9999,           // in INR
  originalPrice: 19999,  // optional, for showing discount
  currency: 'INR',
  duration: '6 Weeks',
  format: 'Video + Workbooks',
  thumbnail: '/programs/image.jpg',
  featured: true,        // optional
  badge: 'New',          // optional
  benefits: ['Benefit 1', 'Benefit 2'],
  modules: [
    { title: 'Module 1: ...', description: '...' }
  ],
}
```

---

## 🔧 Customization

### Colors
Edit in `tailwind.config.js` and `src/styles/globals.css`:
- `--gold`: Primary accent color (`#C9A84C`)
- `--obsidian`: Background color (`#080808`)
- `--off-white`: Text color (`#F5F3EF`)

### WhatsApp Number
Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local` (format: country code + number, e.g. `919812345678`)

### Fonts
Change fonts in `src/styles/globals.css` and `tailwind.config.js`. Current: Cormorant Garamond + Jost + DM Mono.

---

## 📊 Tracking Events

Meta Pixel events are fired at:
- `PageView` — every page load (in layout.tsx)
- `Lead` — when lead form is submitted
- `Purchase` — on successful payment verification
- `Contact` — on contact form submission

---

## 🔒 Security Notes

- Payment signature verification happens server-side (`/api/payment/verify`)
- Never expose `RAZORPAY_KEY_SECRET` to the browser
- All form inputs are validated server-side before processing
- HTTPS is enforced on Vercel by default

---

Built with ❤️ for transformation.
