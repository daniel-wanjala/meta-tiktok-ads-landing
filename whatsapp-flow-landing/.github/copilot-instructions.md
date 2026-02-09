# WhatsApp Flow Landing - Development Guidelines

## Project Overview
A modern Next.js landing page for WhatsApp Business Flow Management SAAS platform.

## Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint with TypeScript support

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:3000`

## Project Structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable components
└── lib/               # Utilities and helpers
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Development Workflow
1. Create feature branches for new features
2. Follow TypeScript strict mode practices
3. Use Tailwind CSS for styling
4. Run lint before committing changes

## Deployment
Ready for deployment on Vercel or any Node.js hosting.

## Contributing
Follow the established code style and commit conventions.
