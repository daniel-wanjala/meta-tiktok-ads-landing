import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1a4d2e',
        sage: '#4f6f52',
        lime: '#b8d23b',
        sand: '#f8f4e8',
        charcoal: '#2d2d2d',
        green: {
          whatsapp: '#25d366',
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'slide-up': 'slide-up 0.8s ease-out',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
        'slide-up': {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
