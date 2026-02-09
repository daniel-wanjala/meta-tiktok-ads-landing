import type { Metadata } from 'next'
import { DM_Sans, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'WhatsApp Flow Developer | Kenya\'s #1 Business Automation Expert',
  description: 'Transform your business with WhatsApp Flows. Kenya\'s leading WhatsApp Business automation expert specializing in custom flows, API integrations, and chatbot solutions.',
  keywords: 'WhatsApp Flow, WhatsApp Business, Automation, Kenya, M-Pesa Integration',
  authors: [{ name: 'WhatsApp Flow Developer Kenya' }],
  openGraph: {
    title: 'WhatsApp Flow Developer | Kenya\'s #1 Business Automation Expert',
    description: 'Transform your business with WhatsApp Flows. Custom flows, API integrations, and chatbot solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${bricolage.variable}`}>{children}</body>
    </html>
  )
}
