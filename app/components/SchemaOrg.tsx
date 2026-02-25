'use client'

import Script from 'next/script'

export default function SchemaOrg() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Tool',
    'name': 'GPA Converter to 4.0 Scale',
    'description': 'Convert your GPA from 10 different scales to 4.0 scale for study abroad applications.',
    'url': 'https://www.gpa-converter.online',
    'keywords': ['GPA converter 4.0 scale', '中国GPA转4.0', '百分制转GPA', 'study abroad', 'international students'],
    'toolPurpose': 'Convert GPA scores between different grading systems',
    'offers': [{
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock'
    }],
    'provider': {
      '@type': 'Organization',
      'name': 'GPA Converter',
      'url': 'https://www.gpa-converter.online'
    }
  }

  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}