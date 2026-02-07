import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - GPA Converter to 4.0 Scale',
  description: 'Learn about how we collect, use, and protect your data on our GPA converter tool.',
  keywords: 'GPA converter privacy policy',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E3F2FD] to-white py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#333333] mb-2">Privacy Policy</h1>
          <p className="text-lg text-gray-600">GPA Converter to 4.0 Scale</p>
        </header>

        {/* Main Content */}
        <main className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-[#333333] mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to GPA Converter. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and protect your data when you use our GPA converter tool.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#333333] mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not collect any personal information from users of our GPA converter tool. When you use our tool, we do not ask for or store:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>Your name, email address, or contact information</li>
                <li>Your GPA scores or any academic data</li>
                <li>Any identifiable information about you</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#333333] mb-4">3. Usage Data</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use third-party analytics tools to collect anonymous usage data, which helps us improve our service. This data includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>Website traffic and usage patterns</li>
                <li>Browser type and operating system</li>
                <li>Referral sources</li>
                <li>Page views and session duration</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                This data is collected in an anonymous form and cannot be used to identify you personally.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#333333] mb-4">4. Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may use cookies to enhance your user experience. Cookies are small text files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>Remember your preferences</li>
                <li>Analyze website traffic</li>
                <li>Improve our service</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can disable cookies through your browser settings if you prefer not to accept them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#333333] mb-4">5. Data Protection</h2>
              <p className="text-gray-700 leading-relaxed">
                Since we do not collect any personal information, there is no risk of your personal data being compromised through our service. We take reasonable measures to protect the integrity and security of our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#333333] mb-4">6. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#333333] mb-4">7. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#333333] mb-4">8. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                Email: support@gpa-converter.online
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#333333] mb-4">9. Effective Date</h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy is effective as of January 24, 2026.
              </p>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <div className="flex justify-center gap-6">
            <a href="/" className="hover:text-[#FFB74D] transition-colors">Home</a>
            <a href="/disclaimer" className="hover:text-[#FFB74D] transition-colors">Disclaimer</a>
          </div>
        </footer>
      </div>
    </div>
  )
}