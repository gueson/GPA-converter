import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'GPA Converter to 4.0 Scale - Free & Accurate GPA Calculator',
  description: 'Convert GPA from 10 scales (Chinese, UK, Australian, European, etc.) to 4.0 scale. Free, no ads, instant results for study abroad applications.',
  keywords: '中国GPA转4.0, 百分制转GPA, UK GPA to 4.0, Australian GPA converter, Letter grade to GPA',
  openGraph: {
    title: 'GPA Converter to 4.0 Scale',
    description: 'Free GPA converter tool. Convert grades from 10 scales to 4.0 scale instantly.',
    type: 'website',
  },
  verification: {
    google: 'dSvyi8ugxh5gSyQK40vW2UI6EG_luAKTEf3793gGE6c'
  },
  alternates: {
    canonical: 'https://www.gpa-converter.online'
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
      <head>
      </head>
      <body>
        <GoogleAnalytics />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9172002935096787" crossOrigin="anonymous"></script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}