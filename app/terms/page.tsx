'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TermsOfService() {
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
            Terms of Service
          </h1>

          <p className="text-sm text-gray-500 mb-12" style={{ fontFamily: 'var(--font-body)' }}>
            Last Updated: December 29, 2024
          </p>

          <div className="prose prose-gray max-w-none" style={{ fontFamily: 'var(--font-body)' }}>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to Health Centric. These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and Health Centric (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a company organized under the laws of the Republic of Panama.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing or using our website, mobile applications, health testing services, or any related services (collectively, the &quot;Services&quot;), you agree to be bound by these Terms, our Privacy Policy, and all applicable laws and regulations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE OUR SERVICES.</strong>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                2. Description of Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Health Centric provides comprehensive health testing and biomarker analysis services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Laboratory blood tests and biomarker analysis</li>
                <li>Health reports and personalized insights</li>
                <li>Access to CLIA-certified laboratory network</li>
                <li>Digital health tracking and monitoring tools</li>
                <li>Educational health content and resources</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Our Services are designed to provide you with health information and are intended to complement, not replace, the advice of qualified healthcare professionals.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                3. Medical Disclaimer
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-4">
                <p className="text-amber-800 font-medium mb-3">IMPORTANT MEDICAL DISCLAIMER</p>
                <p className="text-amber-700 leading-relaxed mb-3">
                  The information and test results provided through our Services are for informational and educational purposes only. They are NOT intended to:
                </p>
                <ul className="list-disc pl-6 text-amber-700 space-y-2 mb-3">
                  <li>Diagnose, treat, cure, or prevent any disease or medical condition</li>
                  <li>Substitute for professional medical advice, diagnosis, or treatment</li>
                  <li>Create a physician-patient relationship</li>
                  <li>Serve as emergency medical guidance</li>
                </ul>
                <p className="text-amber-700 leading-relaxed">
                  <strong>Always consult a qualified healthcare provider before making any health decisions or if you have questions about a medical condition. In case of a medical emergency, call your local emergency services immediately.</strong>
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Test results should be interpreted by a qualified healthcare professional in conjunction with your complete medical history, symptoms, and other diagnostic information. Individual biomarker values may vary based on numerous factors including age, sex, medications, diet, and underlying health conditions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                4. Eligibility and Account Registration
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To use our Services, you must:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Be at least 18 years of age (or have parental/guardian consent)</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Provide accurate, current, and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized account access</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                You are solely responsible for all activities that occur under your account. We reserve the right to suspend or terminate accounts that violate these Terms or are used fraudulently.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                5. Payment Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By purchasing our Services, you agree to the following:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Pricing:</strong> All prices are displayed in US Dollars (USD) unless otherwise specified. Prices are subject to change without prior notice.</li>
                <li><strong>Payment Methods:</strong> We accept major credit cards, debit cards, and other payment methods as displayed at checkout.</li>
                <li><strong>Billing:</strong> You authorize us to charge your designated payment method for all fees associated with your order.</li>
                <li><strong>Taxes:</strong> Prices may not include applicable taxes, which will be added at checkout based on your location.</li>
                <li><strong>HSA/FSA:</strong> Many of our services are eligible for Health Savings Account (HSA) and Flexible Spending Account (FSA) payment.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                6. Refund and Cancellation Policy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our refund policy is as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Before Sample Collection:</strong> Full refund available if you cancel before your laboratory appointment.</li>
                <li><strong>After Sample Collection:</strong> No refunds are available once your sample has been collected and submitted to the laboratory.</li>
                <li><strong>Service Issues:</strong> If you experience a problem with sample collection or results delivery, contact us within 14 days for resolution.</li>
                <li><strong>Processing Time:</strong> Approved refunds will be processed within 10 business days to your original payment method.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                To request a refund, contact our customer support team at support@healthcentric.com with your order details.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                7. Laboratory Services and Results
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Regarding laboratory testing:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>CLIA Certification:</strong> All laboratory testing is performed by CLIA-certified laboratories meeting federal quality standards.</li>
                <li><strong>Accuracy:</strong> While our partner laboratories maintain rigorous quality controls, no test is 100% accurate. Results should be confirmed with your healthcare provider if concerning.</li>
                <li><strong>Turnaround Time:</strong> Results are typically available within 3-7 business days, but may vary based on the specific tests ordered.</li>
                <li><strong>Result Delivery:</strong> Results are securely delivered through your online account. Critical values may be communicated directly.</li>
                <li><strong>Retesting:</strong> In rare cases where sample quality is insufficient, you may be asked to provide a new sample at no additional charge.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                8. Intellectual Property Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio, video, software, and compilations, are the exclusive property of Health Centric or our licensors and are protected by intellectual property laws.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You are granted a limited, non-exclusive, non-transferable license to access and use our Services for personal, non-commercial purposes. You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use our intellectual property without express written consent.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                9. Prohibited Conduct
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree NOT to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use our Services for any unlawful purpose or in violation of these Terms</li>
                <li>Provide false, misleading, or inaccurate information</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Use automated systems (bots, scrapers) to access our Services</li>
                <li>Interfere with or disrupt the integrity or performance of our Services</li>
                <li>Share your account credentials with third parties</li>
                <li>Use test results for insurance underwriting discrimination or employment decisions</li>
                <li>Resell, sublicense, or commercialize our Services without authorization</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                10. Limitation of Liability
              </h2>
              <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, HEALTH CENTRIC AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, AND LICENSORS SHALL NOT BE LIABLE FOR:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
                  <li>Damages resulting from your use or inability to use our Services</li>
                  <li>Damages resulting from any decisions made based on test results</li>
                  <li>Any unauthorized access to or alteration of your data</li>
                </ul>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our total liability for any claims arising from your use of our Services shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                11. Indemnification
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Health Centric and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising from: (a) your use of our Services; (b) your violation of these Terms; (c) your violation of any rights of another party; or (d) any claim that your actions caused damage to a third party.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                12. Disclaimer of Warranties
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Implied warranties of merchantability and fitness for a particular purpose</li>
                <li>Warranties of non-infringement</li>
                <li>Warranties that the Services will be uninterrupted, error-free, or secure</li>
                <li>Warranties regarding the accuracy, reliability, or completeness of any information</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                We do not warrant that test results will meet your specific expectations or that any health condition will be detected or diagnosed through our Services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                13. Governing Law and Dispute Resolution
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the Republic of Panama, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Dispute Resolution:</strong> Any dispute arising from or relating to these Terms or our Services shall be resolved as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Informal Resolution:</strong> We encourage you to contact us first at legal@healthcentric.com to attempt informal resolution.</li>
                <li><strong>Mediation:</strong> If informal resolution fails, disputes shall be submitted to mediation administered by a mutually agreed mediator in Panama City, Panama.</li>
                <li><strong>Arbitration:</strong> If mediation fails, disputes shall be resolved by binding arbitration in Panama City, Panama, in accordance with Panamanian arbitration law.</li>
                <li><strong>Class Action Waiver:</strong> You agree to resolve disputes on an individual basis and waive any right to participate in class action lawsuits or class-wide arbitration.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Notwithstanding the above, either party may seek injunctive relief in any court of competent jurisdiction to protect intellectual property rights.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                14. Termination
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Breach of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Request by law enforcement or government authorities</li>
                <li>Extended periods of inactivity</li>
                <li>Discontinuation of our Services</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Upon termination, your right to use our Services ceases immediately. Provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                15. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. Material changes will be posted on our website with an updated &quot;Last Updated&quot; date. Your continued use of our Services after changes are posted constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                16. Severability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                17. Entire Agreement
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms, together with our Privacy Policy and any other legal notices or policies published on our website, constitute the entire agreement between you and Health Centric regarding your use of our Services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                18. Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For questions about these Terms, please contact us:
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <p className="text-gray-700 font-medium">Health Centric</p>
                <p className="text-gray-600 mt-2">Legal Department</p>
                <p className="text-gray-600">Email: legal@healthcentric.com</p>
                <p className="text-gray-600">Address: Panama City, Republic of Panama</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                19. Acknowledgment
              </h2>
              <p className="text-gray-600 leading-relaxed">
                BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE. YOU FURTHER ACKNOWLEDGE THAT THESE TERMS CONSTITUTE A COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN YOU AND HEALTH CENTRIC.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
