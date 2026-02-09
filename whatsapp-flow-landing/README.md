# WhatsApp Flow Landing

A professional SaaS landing page for WhatsApp Business Flow Management, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js 15** - Modern React framework with App Router
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎨 **Professional UI** - Clean and modern landing page design
- ✅ **TypeScript** - Full type safety
- 🔍 **SEO Optimized** - Meta tags and semantic HTML
- 🚀 **Fast Performance** - Optimized for production

## Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
cd whatsapp-flow-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
whatsapp-flow-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout component
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles with Tailwind
│   └── components/          # Reusable React components
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies
└── README.md                # This file
```

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript 5
- **Linting**: ESLint
- **Build Tool**: Next.js built-in

## Key Features

### Landing Page
- Hero section with call-to-action
- Feature showcase cards
- Professional footer

### Responsive Design
- Mobile-first approach
- Tailwind CSS breakpoints
- Touch-friendly interface

### Developer Experience
- Hot module reloading
- Fast refresh
- TypeScript support
- ESLint integration

## Environment Setup

Create a `.env.local` file for environment-specific variables:

```env
# Add your environment variables here
```

## Building for Production

```bash
npm run build
npm start
```

The `build` command creates an optimized production build in the `.next` folder.

## Deployment

This project is optimized for deployment on:
- **Vercel** (Recommended - uses Next.js natively)
- **AWS Amplify**
- **GitHub Pages** (with Static Export)
- Any Node.js hosting provider

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Performance

- Optimized images with Next.js Image component
- CSS-in-JS with Tailwind CSS
- Tree-shaking and code splitting
- Server-side rendering and Static generation support

## License

ISC

## Contact

For more information, visit [your-website.com](https://your-website.com)

---

Built with ❤️ using Next.js and Tailwind CSS
