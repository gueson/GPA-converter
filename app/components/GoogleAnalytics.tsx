'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: any[]
    gtag?: (...args: any[]) => void
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Google Analytics 4 Tracking Code
    const script = document.createElement('script')
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-HDTW3TLZEJ'
    script.async = true
    document.head.appendChild(script)

    // Configure GA4
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', 'G-HDTW3TLZEJ')

    return () => {
      // No cleanup needed for GA4 script
    }
  }, [])

  return null
}