import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'Google-Extended',
        disallow: ['/'],
      },
      {
        userAgent: 'Claude-Web',
        disallow: ['/'],
      },
      {
        userAgent: 'BardBot',
        disallow: ['/'],
      },
      {
        userAgent: 'BingPreview',
        disallow: ['/'],
      },
      {
        userAgent: 'FacebookBot',
        disallow: ['/'],
      },
      {
        userAgent: 'Anthropic-AI',
        disallow: ['/'],
      },
      {
        userAgent: 'PerplexityBot',
        disallow: ['/'],
      },
      {
        userAgent: ['*'],
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://gpa-converter.vercel.app/sitemap.xml',
    host: 'https://gpa-converter.vercel.app',
  }
}