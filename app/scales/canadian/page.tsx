import type { Metadata } from 'next'

// Canadian 4-point scale to 4.0 scale page
export const metadata: Metadata = {
  title: 'Canadian GPA to 4.0 Scale Converter - Convert Canadian GPA',
  description: 'Convert your Canadian 4-point scale GPA to 4.0 scale for study abroad applications. Free, accurate, and easy to use.',
  keywords: 'Canadian GPA converter, Canada GPA to 4.0, Canadian 4-point scale conversion, study abroad from Canada',
  openGraph: {
    title: 'Canadian GPA to 4.0 Scale Converter',
    description: 'Convert your Canadian 4-point scale GPA to 4.0 scale for study abroad applications.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.gpa-converter.online/scales/canadian'
  }
}

export default function CanadianGPAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-text mb-2">Canadian GPA to 4.0 Scale Converter</h1>
          <p className="text-lg text-gray-600">Convert your Canadian 4-point scale GPA to 4.0 scale</p>
        </header>

        {/* Main Content */}
        <main className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">Canadian 4-point Scale to 4.0 Scale Conversion</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Canadian higher education system uses a 4-point GPA scale, while many international universities (especially in the US) use a 4.0 scale. Our converter helps you easily convert your Canadian GPA to the 4.0 scale for study abroad applications.
              </p>
            </section>

            {/* Conversion Table */}
            <section>
              <h2 className="text-xl font-semibold text-text mb-4">Conversion Table</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 border-b text-left">Canadian 4-point Scale</th>
                      <th className="py-3 px-4 border-b text-left">4.0 Scale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border-b">4.0</td>
                      <td className="py-3 px-4 border-b">4.0</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">3.7-3.9</td>
                      <td className="py-3 px-4 border-b">3.7</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">3.3-3.6</td>
                      <td className="py-3 px-4 border-b">3.3</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">3.0-3.2</td>
                      <td className="py-3 px-4 border-b">3.0</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">2.7-2.9</td>
                      <td className="py-3 px-4 border-b">2.7</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">2.3-2.6</td>
                      <td className="py-3 px-4 border-b">2.3</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">2.0-2.2</td>
                      <td className="py-3 px-4 border-b">2.0</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">1.7-1.9</td>
                      <td className="py-3 px-4 border-b">1.7</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">1.3-1.6</td>
                      <td className="py-3 px-4 border-b">1.3</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">1.0-1.2</td>
                      <td className="py-3 px-4 border-b">1.0</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">0.0-0.9</td>
                      <td className="py-3 px-4">0.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* How to Use */}
            <section>
              <h2 className="text-xl font-semibold text-text mb-4">How to Use the Converter</h2>
              <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">
                <li>Go to the <a href="/" className="text-accent hover:underline">main GPA converter</a> page</li>
                <li>Select "加拿大4分制" from the scale options</li>
                <li>Enter your Canadian GPA score</li>
                <li>Get your converted 4.0 scale GPA instantly</li>
                <li>Copy the result for your applications</li>
              </ol>
            </section>

            {/* Tips */}
            <section>
              <h2 className="text-xl font-semibold text-text mb-4">Tips for Canadian Students</h2>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>Check with your target universities for their specific conversion policies</li>
                <li>Some universities may have their own Canadian GPA to 4.0 scale conversion methods</li>
                <li>Keep your original Canadian transcripts for reference</li>
                <li>Use this converter as a general guide for your applications</li>
              </ul>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <div className="flex justify-center gap-6">
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</a>
          </div>
        </footer>
      </div>
    </div>
  )
}
