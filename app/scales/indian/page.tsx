import type { Metadata } from 'next'

// Indian GPA scale to 4.0 scale page
export const metadata: Metadata = {
  title: 'Indian GPA to 4.0 Scale Converter - Convert Indian Grades',
  description: 'Convert your Indian 10-point scale GPA to 4.0 scale for study abroad applications. Free, accurate, and easy to use.',
  keywords: 'Indian GPA converter, India GPA to 4.0, Indian 10 scale conversion, study abroad from India',
  openGraph: {
    title: 'Indian GPA to 4.0 Scale Converter',
    description: 'Convert your Indian 10-point scale GPA to 4.0 scale for study abroad applications.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.gpa-converter.online/scales/indian'
  }
}

export default function IndianGPAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-text mb-2">Indian GPA to 4.0 Scale Converter</h1>
          <p className="text-lg text-gray-600">Convert your Indian 10-point scale GPA to 4.0 scale</p>
        </header>

        {/* Main Content */}
        <main className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">Indian GPA to 4.0 Scale Conversion</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Indian higher education system uses a 10-point GPA scale, while many international universities (especially in the US) use a 4.0 scale. Our converter helps you easily convert your Indian GPA to the 4.0 scale for study abroad applications.
              </p>
            </section>

            {/* Conversion Table */}
            <section>
              <h2 className="text-xl font-semibold text-text mb-4">Conversion Table</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 border-b text-left">Indian 10-point Scale</th>
                      <th className="py-3 px-4 border-b text-left">4.0 Scale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border-b">9.0-10.0</td>
                      <td className="py-3 px-4 border-b">4.0</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">8.0-8.9</td>
                      <td className="py-3 px-4 border-b">3.7</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">7.0-7.9</td>
                      <td className="py-3 px-4 border-b">3.3</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">6.0-6.9</td>
                      <td className="py-3 px-4 border-b">3.0</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">5.0-5.9</td>
                      <td className="py-3 px-4 border-b">2.7</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">4.0-4.9</td>
                      <td className="py-3 px-4 border-b">2.3</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">3.0-3.9</td>
                      <td className="py-3 px-4 border-b">2.0</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">0.0-2.9</td>
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
                <li>Select "印度GPA" from the scale options</li>
                <li>Enter your Indian GPA score</li>
                <li>Get your converted 4.0 scale GPA instantly</li>
                <li>Copy the result for your applications</li>
              </ol>
            </section>

            {/* Tips */}
            <section>
              <h2 className="text-xl font-semibold text-text mb-4">Tips for Indian Students</h2>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>Check with your target universities for their specific conversion policies</li>
                <li>Some universities may have their own Indian GPA to 4.0 scale conversion methods</li>
                <li>Keep your original Indian transcripts for reference</li>
                <li>Use this converter as a general guide for your applications</li>
              </ul>
            </section>

            {/* Other Conversion Tools */}
            <section className="mt-8">
              <h2 className="text-xl font-semibold text-text mb-4">Other GPA Conversion Tools</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <a href="/scales/cn_percent" className="p-3 bg-primary rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="font-medium">Chinese 100-point</span>
                </a>
                <a href="/scales/cn_5scale" className="p-3 bg-primary rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="font-medium">Chinese 5-point</span>
                </a>
                <a href="/scales/uk" className="p-3 bg-primary rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="font-medium">UK 7-point</span>
                </a>
                <a href="/scales/australian" className="p-3 bg-primary rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="font-medium">Australian 4-point</span>
                </a>
                <a href="/scales/canadian" className="p-3 bg-primary rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="font-medium">Canadian 4-point</span>
                </a>
                <a href="/scales/european" className="p-3 bg-primary rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="font-medium">European ECTS</span>
                </a>
                <a href="/scales/japanese" className="p-3 bg-primary rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="font-medium">Japanese GPA</span>
                </a>
                <a href="/scales/korean" className="p-3 bg-primary rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="font-medium">Korean GPA</span>
                </a>
                <a href="/scales/letter" className="p-3 bg-primary rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="font-medium">Letter Grade</span>
                </a>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</a>
            <a href="mailto:support@gpa-converter.online" className="hover:text-accent transition-colors">Contact Us</a>
          </div>
          <div className="mt-6">
            <p>© {new Date().getFullYear()} GPA Converter. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ for international students</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
