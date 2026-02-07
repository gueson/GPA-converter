import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'GPA Converter to 4.0 Scale - Free & Accurate GPA Calculator',
  description: 'Convert your GPA from Chinese 100-point scale/5-point scale to 4.0 scale for study abroad. No ads, instant results.',
  keywords: 'GPA converter 4.0 scale, 中国GPA转4.0, 百分制转GPA',
  openGraph: {
    title: 'GPA Converter to 4.0 Scale',
    description: 'Convert your GPA from Chinese 100-point scale/5-point scale to 4.0 scale for study abroad.',
    type: 'website',
  },
  verification: {
    google: 'dSvyi8ugxh5gSyQK40vW2UI6EG_luAKTEf3793gGE6c'
  },
  alternates: {
    canonical: 'https://gpa-converter.vercel.app'
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9172002935096787" crossOrigin="anonymous"></script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}