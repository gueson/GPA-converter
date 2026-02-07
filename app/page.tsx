'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

type GPAScale = 'cn_percent' | 'cn_5scale'

type FormInputs = {
  score: string
}

interface ConversionRule {
  min: number
  max: number
  gpa: number
}

const conversionRules: Record<GPAScale, ConversionRule[]> = {
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
}

function calculateGPA(score: number, scale: GPAScale): number {
  const rules = conversionRules[scale]
  for (const rule of rules) {
    if (score >= rule.min && score <= rule.max) {
      return rule.gpa
    }
  }
  return 0.0
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
    const numericScore = parseFloat(score)
    if (!isNaN(numericScore)) {
      setResult(calculateGPA(numericScore, scale))
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
              <div className="flex rounded-lg overflow-hidden border border-gray-300">
                <button
                  type="button"
                  onClick={() => handleScaleChange('cn_percent')}
                  className={`flex-1 py-3 px-4 font-medium transition-colors ${scale === 'cn_percent' ? 'bg-primary' : 'bg-white'}`}
                >
                  百分制
                </button>
                <button
                  type="button"
                  onClick={() => handleScaleChange('cn_5scale')}
                  className={`flex-1 py-3 px-4 font-medium transition-colors ${scale === 'cn_5scale' ? 'bg-primary' : 'bg-white'}`}
                >
                  5分制
                </button>
              </div>
            </div>

            {/* GPA Input */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-text">Your GPA:</label>
              <input
                type="number"
                placeholder={`Enter your GPA ${scale === 'cn_percent' ? '(0-100)' : '(0-5)'}`}
                step="0.1"
                min="0"
                max={scale === 'cn_percent' ? 100 : 5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-lg"
                {...register('score')}
              />
              <p className="text-sm text-gray-500">
                Example: {scale === 'cn_percent' ? '85 (for 100-point scale)' : '4.2 (for 5-point scale)'}
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
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {conversionRules[scale].map((rule, index) => (
                    <li key={index}>
                      {rule.min}-{rule.max} → {rule.gpa}
                    </li>
                  ))}
                </ul>
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