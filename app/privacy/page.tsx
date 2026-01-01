'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <main className="bg-[#faf8f5] min-h-screen">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              &larr; Back to Home
            </Link>
          </div>

          <h1
            className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-500 mb-12" style={{ fontFamily: 'var(--font-body)' }}>
            Last Updated: December 29, 2024
          </p>

          <div className="prose prose-gray max-w-none" style={{ fontFamily: 'var(--font-body)' }}>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                1. Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Health Centric (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile applications, and health testing services (collectively, the &quot;Services&quot;).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We operate in compliance with Panama Law 81 of March 26, 2019 (Personal Data Protection Law) and other applicable international data protection standards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree, please discontinue use of our Services immediately.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                2. Information We Collect
              </h2>

              <h3 className="text-lg font-medium text-gray-800 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">We may collect the following categories of personal information:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li><strong>Identity Information:</strong> Full name, date of birth, gender, government-issued identification numbers</li>
                <li><strong>Contact Information:</strong> Email address, phone number, mailing address</li>
                <li><strong>Account Information:</strong> Username, password, account preferences</li>
                <li><strong>Payment Information:</strong> Credit card details, billing address, transaction history</li>
                <li><strong>Health Information:</strong> Medical history, test results, biomarkers, health conditions, medications, and other Protected Health Information (PHI)</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">When you access our Services, we automatically collect:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, click patterns)</li>
                <li>Location data (with your consent)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-3">2.3 Information from Third Parties</h3>
              <p className="text-gray-600 leading-relaxed">
                We may receive information from MINSA-certified laboratories, healthcare providers, insurance companies, and identity verification services that you have authorized to share information with us.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                3. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Service Delivery:</strong> Processing orders, conducting health tests, delivering results, and providing personalized health insights</li>
                <li><strong>Communication:</strong> Sending appointment reminders, test results, health recommendations, and service updates</li>
                <li><strong>Account Management:</strong> Creating and managing your account, processing payments, and providing customer support</li>
                <li><strong>Improvement:</strong> Analyzing usage patterns to improve our Services, develop new features, and enhance user experience</li>
                <li><strong>Legal Compliance:</strong> Complying with applicable laws, regulations, and legal processes</li>
                <li><strong>Safety and Security:</strong> Detecting, preventing, and addressing fraud, security breaches, and technical issues</li>
                <li><strong>Research:</strong> Conducting anonymized, aggregated research to advance health science (only with explicit consent)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                4. Protected Health Information (PHI) &amp; Ley 81 Compliance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a provider of health-related services, we handle Protected Health Information (PHI) in accordance with Panama&apos;s Ley 81 regulations. This includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Implementing administrative, physical, and technical safeguards to protect PHI</li>
                <li>Training all employees on Ley 81 privacy and security requirements</li>
                <li>Maintaining Data Processing Agreements with all third parties who access PHI</li>
                <li>Providing you with access to your health records upon request</li>
                <li>Limiting PHI use and disclosure to the minimum necessary</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                You have the right to request restrictions on certain uses of your PHI, receive confidential communications, access and obtain copies of your health records, and request amendments to your PHI.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                5. Disclosure of Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Service Providers:</strong> CLIA-certified laboratories, payment processors, cloud hosting providers, and customer support services</li>
                <li><strong>Healthcare Providers:</strong> With your explicit consent, to physicians or healthcare providers you designate</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> For any other purpose with your explicit authorization</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>We do not sell your personal information or health data to third parties.</strong>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                6. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>256-bit SSL/TLS encryption for data in transit</li>
                <li>AES-256 encryption for data at rest</li>
                <li>Multi-factor authentication for account access</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and employee training</li>
                <li>Secure data centers with physical security measures</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience. Types of cookies we use:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                You can control cookies through your browser settings. Disabling certain cookies may affect site functionality.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                8. Your Rights Under Panama Law 81 of 2019
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Under Panama&apos;s Personal Data Protection Law, you have the following rights:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Right of Access:</strong> Request information about the personal data we hold about you</li>
                <li><strong>Right of Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right of Cancellation:</strong> Request deletion of your personal data (subject to legal retention requirements)</li>
                <li><strong>Right of Opposition:</strong> Object to certain processing of your personal data</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a structured, commonly used format</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise these rights, contact us at privacy@healthcentric.com. We will respond within 30 days.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                9. International Data Transfers
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Your information may be transferred to and processed in countries other than Panama, including the United States where our laboratory partners are located. We ensure appropriate safeguards are in place, including Standard Contractual Clauses and Business Associate Agreements, to protect your data in accordance with applicable laws.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                10. Data Retention
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal information for as long as necessary to provide our Services and comply with legal obligations. Health records are retained for a minimum of seven (7) years from the date of service, or longer as required by applicable law. You may request deletion of your account data, but certain information may be retained for legal, regulatory, or legitimate business purposes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                11. Children&apos;s Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our Services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. Health testing for minors requires parental or guardian consent and authorization.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                12. Changes to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy periodically. We will notify you of material changes by posting the new policy on our website and updating the &quot;Last Updated&quot; date. Your continued use of our Services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                13. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <p className="text-gray-700 font-medium">Health Centric</p>
                <p className="text-gray-600 mt-2">Data Protection Officer</p>
                <p className="text-gray-600">Email: privacy@healthcentric.com</p>
                <p className="text-gray-600">Address: Panama City, Panama</p>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                For complaints regarding data protection, you may also contact the Autoridad Nacional de Transparencia y Acceso a la Informacion (ANTAI) of Panama.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
