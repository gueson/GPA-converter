'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

type GPAScale = 'cn_percent' | 'cn_5scale' | 'uk_7scale' | 'au_4scale' | 'letter_grade' | 'canada_4scale' | 'europe_ects' | 'japan_gpa' | 'korea_gpa' | 'india_gpa'

type FormInputs = {
  score: string
}

interface ConversionRule {
  min: number
  max: number
  gpa: number
}

const conversionRules: Record<Exclude<GPAScale, 'letter_grade' | 'japan_gpa'>, ConversionRule[]> = {
  cn_percent: [
    { min: 90, max: 100, gpa: 4.0 },
    { min: 85, max: 89, gpa: 3.7 },
    { min: 80, max: 84, gpa: 3.3 },
    { min: 75, max: 79, gpa: 3.0 },
    { min: 70, max: 74, gpa: 2.7 },
    { min: 65, max: 69, gpa: 2.3 },
    { min: 60, max: 64, gpa: 2.0 },
    { min: 0, max: 59, gpa: 0.0 },
  ],
  cn_5scale: [
    { min: 4.8, max: 5.0, gpa: 4.0 },
    { min: 4.5, max: 4.7, gpa: 3.7 },
    { min: 4.0, max: 4.4, gpa: 3.3 },
    { min: 3.5, max: 3.9, gpa: 3.0 },
    { min: 3.0, max: 3.4, gpa: 2.7 },
    { min: 2.5, max: 2.9, gpa: 2.3 },
    { min: 2.0, max: 2.4, gpa: 2.0 },
    { min: 0, max: 1.9, gpa: 0.0 },
  ],
  uk_7scale: [
    { min: 7.0, max: 7.0, gpa: 4.0 },
    { min: 6.5, max: 6.9, gpa: 3.7 },
    { min: 6.0, max: 6.4, gpa: 3.3 },
    { min: 5.5, max: 5.9, gpa: 3.0 },
    { min: 5.0, max: 5.4, gpa: 2.7 },
    { min: 4.5, max: 4.9, gpa: 2.3 },
    { min: 4.0, max: 4.4, gpa: 2.0 },
    { min: 0, max: 3.9, gpa: 0.0 },
  ],
  au_4scale: [
    { min: 4.0, max: 4.0, gpa: 4.0 },
    { min: 3.0, max: 3.9, gpa: 3.0 },
    { min: 2.0, max: 2.9, gpa: 2.0 },
    { min: 1.0, max: 1.9, gpa: 1.0 },
    { min: 0, max: 0.9, gpa: 0.0 },
  ],
  canada_4scale: [
    { min: 4.0, max: 4.0, gpa: 4.0 },
    { min: 3.7, max: 3.9, gpa: 3.7 },
    { min: 3.3, max: 3.6, gpa: 3.3 },
    { min: 3.0, max: 3.2, gpa: 3.0 },
    { min: 2.7, max: 2.9, gpa: 2.7 },
    { min: 2.3, max: 2.6, gpa: 2.3 },
    { min: 2.0, max: 2.2, gpa: 2.0 },
    { min: 1.7, max: 1.9, gpa: 1.7 },
    { min: 1.3, max: 1.6, gpa: 1.3 },
    { min: 1.0, max: 1.2, gpa: 1.0 },
    { min: 0, max: 0.9, gpa: 0.0 },
  ],
  europe_ects: [
    { min: 30, max: 30, gpa: 4.0 },
    { min: 27, max: 29, gpa: 3.7 },
    { min: 24, max: 26, gpa: 3.3 },
    { min: 21, max: 23, gpa: 3.0 },
    { min: 18, max: 20, gpa: 2.7 },
    { min: 15, max: 17, gpa: 2.3 },
    { min: 12, max: 14, gpa: 2.0 },
    { min: 9, max: 11, gpa: 1.7 },
    { min: 6, max: 8, gpa: 1.3 },
    { min: 3, max: 5, gpa: 1.0 },
    { min: 0, max: 2, gpa: 0.0 },
  ],
  korea_gpa: [
    { min: 4.5, max: 4.5, gpa: 4.0 },
    { min: 4.0, max: 4.4, gpa: 3.7 },
    { min: 3.5, max: 3.9, gpa: 3.3 },
    { min: 3.0, max: 3.4, gpa: 3.0 },
    { min: 2.5, max: 2.9, gpa: 2.7 },
    { min: 2.0, max: 2.4, gpa: 2.3 },
    { min: 1.5, max: 1.9, gpa: 2.0 },
    { min: 1.0, max: 1.4, gpa: 1.7 },
    { min: 0.5, max: 0.9, gpa: 1.3 },
    { min: 0, max: 0.4, gpa: 0.0 },
  ],
  india_gpa: [
    { min: 9, max: 10, gpa: 4.0 },
    { min: 8, max: 8.9, gpa: 3.7 },
    { min: 7, max: 7.9, gpa: 3.3 },
    { min: 6, max: 6.9, gpa: 3.0 },
    { min: 5, max: 5.9, gpa: 2.7 },
    { min: 4, max: 4.9, gpa: 2.3 },
    { min: 3, max: 3.9, gpa: 2.0 },
    { min: 0, max: 2.9, gpa: 0.0 },
  ],
}

function calculateGPA(score: number | string, scale: GPAScale): number {
  if (scale === 'letter_grade' || scale === 'japan_gpa') {
    // Handle letter grades
    const letterGrade = score as string
    if (scale === 'japan_gpa') {
      const letterToGPA: Record<string, number> = {
        'S': 4.0,
        'A': 3.5,
        'B': 3.0,
        'C': 2.0,
        'D': 1.0,
        'F': 0.0
      }
      return letterToGPA[letterGrade.toUpperCase()] || 0.0
    } else {
      const letterToGPA: Record<string, number> = {
        'A+': 4.0,
        'A': 4.0,
        'A-': 3.7,
        'B+': 3.3,
        'B': 3.0,
        'B-': 2.7,
        'C+': 2.3,
        'C': 2.0,
        'C-': 1.7,
        'D+': 1.3,
        'D': 1.0,
        'F': 0.0
      }
      return letterToGPA[letterGrade.toUpperCase()] || 0.0
    }
  } else {
    // Handle numerical scales
    const numericScore = typeof score === 'string' ? parseFloat(score) : score
    if (isNaN(numericScore)) return 0.0
    
    const rules = conversionRules[scale as Exclude<GPAScale, 'letter_grade' | 'japan_gpa'>]
    if (!rules) return 0.0
    
    for (const rule of rules) {
      if (numericScore >= rule.min && numericScore <= rule.max) {
        return rule.gpa
      }
    }
    return 0.0
  }
}

export default function Home() {
  const [scale, setScale] = useState<GPAScale>('cn_percent')
  const [result, setResult] = useState<number>(0.0)
  const [copied, setCopied] = useState<boolean>(false)
  
  const { register, watch, reset } = useForm<FormInputs>({
    defaultValues: {
      score: ''
    }
  })
  
  const score = watch('score')
  
  // Calculate GPA when score or scale changes
  useEffect(() => {
    if (score) {
      setResult(calculateGPA(score, scale))
    } else {
      setResult(0.0)
    }
  }, [score, scale])

  const handleScaleChange = (newScale: GPAScale) => {
    setScale(newScale)
    reset()
  }

  const handleCopyResult = async () => {
    await navigator.clipboard.writeText(result.toFixed(1))
    setCopied(true)
    
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text mb-2">GPA Converter</h1>
          <p className="text-lg text-gray-600">Convert to 4.0 Scale - Free & Accurate</p>
        </header>

        {/* Main Content */}
        <main className="bg-white rounded-xl shadow-lg p-8">
          {/* Conversion Form */}
          <div className="space-y-6">
            {/* Scale Selector */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-text">Scale:</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                <button
                  type="button"
                  onClick={() => handleScaleChange('cn_percent')}
                  className={`py-3 px-2 font-medium transition-colors rounded-lg ${scale === 'cn_percent' ? 'bg-primary' : 'bg-white border border-gray-300'}`}
                >
                  百分制
                </button>
                <button
                  type="button"
                  onClick={() => handleScaleChange('cn_5scale')}
                  className={`py-3 px-2 font-medium transition-colors rounded-lg ${scale === 'cn_5scale' ? 'bg-primary' : 'bg-white border border-gray-300'}`}
                >
                  5分制
                </button>
                <button
                  type="button"
                  onClick={() => handleScaleChange('uk_7scale')}
                  className={`py-3 px-2 font-medium transition-colors rounded-lg ${scale === 'uk_7scale' ? 'bg-primary' : 'bg-white border border-gray-300'}`}
                >
                  英国7分制
                </button>
                <button
                  type="button"
                  onClick={() => handleScaleChange('au_4scale')}
                  className={`py-3 px-2 font-medium transition-colors rounded-lg ${scale === 'au_4scale' ? 'bg-primary' : 'bg-white border border-gray-300'}`}
                >
                  澳洲4分制
                </button>
                <button
                  type="button"
                  onClick={() => handleScaleChange('letter_grade')}
                  className={`py-3 px-2 font-medium transition-colors rounded-lg ${scale === 'letter_grade' ? 'bg-primary' : 'bg-white border border-gray-300'}`}
                >
                  字母制
                </button>
                <button
                  type="button"
                  onClick={() => handleScaleChange('canada_4scale')}
                  className={`py-3 px-2 font-medium transition-colors rounded-lg ${scale === 'canada_4scale' ? 'bg-primary' : 'bg-white border border-gray-300'}`}
                >
                  加拿大4分制
                </button>
                <button
                  type="button"
                  onClick={() => handleScaleChange('europe_ects')}
                  className={`py-3 px-2 font-medium transition-colors rounded-lg ${scale === 'europe_ects' ? 'bg-primary' : 'bg-white border border-gray-300'}`}
                >
                  欧洲ECTS
                </button>
                <button
                  type="button"
                  onClick={() => handleScaleChange('japan_gpa')}
                  className={`py-3 px-2 font-medium transition-colors rounded-lg ${scale === 'japan_gpa' ? 'bg-primary' : 'bg-white border border-gray-300'}`}
                >
                  日本GPA
                </button>
                <button
                  type="button"
                  onClick={() => handleScaleChange('korea_gpa')}
                  className={`py-3 px-2 font-medium transition-colors rounded-lg ${scale === 'korea_gpa' ? 'bg-primary' : 'bg-white border border-gray-300'}`}
                >
                  韩国GPA
                </button>
                <button
                  type="button"
                  onClick={() => handleScaleChange('india_gpa')}
                  className={`py-3 px-2 font-medium transition-colors rounded-lg ${scale === 'india_gpa' ? 'bg-primary' : 'bg-white border border-gray-300'}`}
                >
                  印度GPA
                </button>
              </div>
            </div>

            {/* GPA Input */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-text">Your GPA:</label>
              {(scale === 'letter_grade' || scale === 'japan_gpa') ? (
                <input
                  type="text"
                  placeholder={scale === 'letter_grade' ? "Enter your letter grade (e.g., A+, B, C-)" : "Enter your letter grade (e.g., S, A, B)"}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-lg"
                  {...register('score')}
                />
              ) : (
                <input
                  type="number"
                  placeholder={`Enter your GPA ${scale === 'cn_percent' ? '(0-100)' : scale === 'cn_5scale' ? '(0-5)' : scale === 'uk_7scale' ? '(0-7)' : scale === 'au_4scale' ? '(0-4)' : scale === 'canada_4scale' ? '(0-4)' : scale === 'europe_ects' ? '(0-30)' : scale === 'korea_gpa' ? '(0-4.5)' : '(0-10)'}`}
                  step="0.1"
                  min="0"
                  max={scale === 'cn_percent' ? 100 : scale === 'cn_5scale' ? 5 : scale === 'uk_7scale' ? 7 : scale === 'au_4scale' ? 4 : scale === 'canada_4scale' ? 4 : scale === 'europe_ects' ? 30 : scale === 'korea_gpa' ? 4.5 : 10}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-lg"
                  {...register('score')}
                />
              )}
              <p className="text-sm text-gray-500">
                Example: {scale === 'cn_percent' ? '85 (for 100-point scale)' : scale === 'cn_5scale' ? '4.2 (for 5-point scale)' : scale === 'uk_7scale' ? '6.5 (for UK 7-point scale)' : scale === 'au_4scale' ? '3.5 (for Australian 4-point scale)' : scale === 'letter_grade' ? 'A- (for letter grade scale)' : scale === 'canada_4scale' ? '3.7 (for Canadian 4-point scale)' : scale === 'europe_ects' ? '27 (for European ECTS scale)' : scale === 'japan_gpa' ? 'A (for Japanese GPA scale)' : '8.5 (for Indian GPA scale)'}
              </p>
            </div>

            {/* Result Display */}
            <div className="bg-secondary rounded-xl p-6">
              <h2 className="text-lg font-medium text-text mb-4">4.0 Scale Result:</h2>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold text-text">{result.toFixed(1)}</div>
                <button
                  onClick={handleCopyResult}
                  className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-accent hover:bg-orange-500 text-white'}`}
                >
                  {copied ? (
                    <>
                      <i className="fas fa-check"></i>
                      Copied!
                    </>
                  ) : (
                    <>
                      <i className="fas fa-copy"></i>
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Conversion Rules */}
            <div className="mt-8 p-4 bg-primary rounded-lg">
              <h3 className="text-lg font-medium text-text mb-2">Conversion Rules:</h3>
              <div>
                {scale === 'letter_grade' ? (
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>A+, A → 4.0</li>
                    <li>A- → 3.7</li>
                    <li>B+ → 3.3</li>
                    <li>B → 3.0</li>
                    <li>B- → 2.7</li>
                    <li>C+ → 2.3</li>
                    <li>C → 2.0</li>
                    <li>C- → 1.7</li>
                    <li>D+ → 1.3</li>
                    <li>D → 1.0</li>
                    <li>F → 0.0</li>
                  </ul>
                ) : scale === 'japan_gpa' ? (
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>S → 4.0</li>
                    <li>A → 3.5</li>
                    <li>B → 3.0</li>
                    <li>C → 2.0</li>
                    <li>D → 1.0</li>
                    <li>F → 0.0</li>
                  </ul>
                ) : (
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {conversionRules[scale as Exclude<GPAScale, 'letter_grade' | 'japan_gpa'>].map((rule, index) => (
                      <li key={index}>
                        {rule.min}-{rule.max} → {rule.gpa}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="mt-4">
                <a 
                  href={
                    scale === 'cn_percent' ? '/scales/cn_percent' :
                    scale === 'cn_5scale' ? '/scales/cn_5scale' :
                    scale === 'uk_7scale' ? '/scales/uk' :
                    scale === 'au_4scale' ? '/scales/australian' :
                    scale === 'letter_grade' ? '/scales/letter' :
                    scale === 'canada_4scale' ? '/scales/canadian' :
                    scale === 'europe_ects' ? '/scales/european' :
                    scale === 'japan_gpa' ? '/scales/japanese' :
                    scale === 'korea_gpa' ? '/scales/korean' :
                    '/scales/indian'
                  } 
                  className="text-accent hover:underline text-sm font-medium"
                >
                  了解更多关于{scale === 'cn_percent' ? '百分制' : scale === 'cn_5scale' ? '5分制' : scale === 'uk_7scale' ? '英国7分制' : scale === 'au_4scale' ? '澳洲4分制' : scale === 'letter_grade' ? '字母制' : scale === 'canada_4scale' ? '加拿大4分制' : scale === 'europe_ects' ? '欧洲ECTS' : scale === 'japan_gpa' ? '日本GPA' : scale === 'korea_gpa' ? '韩国GPA' : '印度GPA'}的转换规则 →
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>This tool provides reference only, not official academic certification.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</a>
          </div>
        </footer>
      </div>
    </div>
  )
}