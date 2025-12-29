'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function HIPAANotice() {
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
            HIPAA Notice of Privacy Practices
          </h1>

          <p className="text-sm text-gray-500 mb-12" style={{ fontFamily: 'var(--font-body)' }}>
            Effective Date: December 29, 2024
          </p>

          <div className="prose prose-gray max-w-none" style={{ fontFamily: 'var(--font-body)' }}>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10">
              <p className="text-blue-800 font-medium mb-2">THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION.</p>
              <p className="text-blue-700">PLEASE REVIEW IT CAREFULLY.</p>
            </div>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Our Commitment to Your Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Health Centric is committed to protecting the privacy of your health information. We are required by law to maintain the privacy of your Protected Health Information (PHI), provide you with this Notice of our legal duties and privacy practices, and notify you following a breach of unsecured PHI.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This Notice applies to all health information we create, receive, maintain, or transmit in connection with our laboratory testing services. We are required to follow the terms of this Notice currently in effect.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                What is Protected Health Information (PHI)?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Protected Health Information includes any individually identifiable health information that relates to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Your past, present, or future physical or mental health condition</li>
                <li>The provision of health care services to you</li>
                <li>Payment for health care services</li>
                <li>Laboratory test results and biomarker data</li>
                <li>Demographic information (name, address, date of birth, etc.)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                How We May Use and Disclose Your PHI
              </h2>

              <h3 className="text-lg font-medium text-gray-800 mb-3 mt-6">Uses and Disclosures Without Your Authorization</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may use or disclose your PHI without your authorization for the following purposes:
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <p className="font-medium text-gray-800">Treatment</p>
                  <p className="text-gray-600 text-sm mt-1">To provide, coordinate, or manage your health care and related services. This includes sharing test results with healthcare providers you have designated.</p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <p className="font-medium text-gray-800">Payment</p>
                  <p className="text-gray-600 text-sm mt-1">To bill and collect payment for services provided. This may include sharing information with your health plan or HSA/FSA administrator.</p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <p className="font-medium text-gray-800">Health Care Operations</p>
                  <p className="text-gray-600 text-sm mt-1">For quality assessment, accreditation, auditing, training, business planning, and other operational activities.</p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <p className="font-medium text-gray-800">As Required by Law</p>
                  <p className="text-gray-600 text-sm mt-1">When required by federal, state, or local law, including public health reporting, abuse or neglect reporting, and legal proceedings.</p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <p className="font-medium text-gray-800">Health and Safety</p>
                  <p className="text-gray-600 text-sm mt-1">To prevent a serious threat to your health and safety or the health and safety of others.</p>
                </div>
              </div>

              <h3 className="text-lg font-medium text-gray-800 mb-3 mt-6">Uses and Disclosures Requiring Your Authorization</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The following uses and disclosures require your written authorization:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Marketing purposes (unless face-to-face communications or promotional gifts of nominal value)</li>
                <li>Sale of your PHI</li>
                <li>Most uses of psychotherapy notes</li>
                <li>Uses and disclosures not described in this Notice</li>
                <li>Sharing with employers (except as required by law)</li>
                <li>Research purposes (unless a waiver is approved)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Your Rights Regarding Your PHI
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the following rights regarding your Protected Health Information:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-gray-300 pl-4">
                  <p className="font-medium text-gray-800">Right to Access</p>
                  <p className="text-gray-600 text-sm mt-1">You may inspect and obtain a copy of your PHI. We may charge a reasonable fee for copies. Requests must be made in writing.</p>
                </div>

                <div className="border-l-4 border-gray-300 pl-4">
                  <p className="font-medium text-gray-800">Right to Amend</p>
                  <p className="text-gray-600 text-sm mt-1">You may request amendments to your PHI if you believe it is incorrect or incomplete. We may deny the request in certain circumstances.</p>
                </div>

                <div className="border-l-4 border-gray-300 pl-4">
                  <p className="font-medium text-gray-800">Right to an Accounting of Disclosures</p>
                  <p className="text-gray-600 text-sm mt-1">You may request a list of disclosures we have made of your PHI for purposes other than treatment, payment, or operations.</p>
                </div>

                <div className="border-l-4 border-gray-300 pl-4">
                  <p className="font-medium text-gray-800">Right to Request Restrictions</p>
                  <p className="text-gray-600 text-sm mt-1">You may request restrictions on how we use or disclose your PHI. We are not required to agree to all restrictions, except for disclosures to health plans for services you paid for in full out of pocket.</p>
                </div>

                <div className="border-l-4 border-gray-300 pl-4">
                  <p className="font-medium text-gray-800">Right to Confidential Communications</p>
                  <p className="text-gray-600 text-sm mt-1">You may request that we communicate with you about health matters in a certain way or at a certain location.</p>
                </div>

                <div className="border-l-4 border-gray-300 pl-4">
                  <p className="font-medium text-gray-800">Right to a Paper Copy</p>
                  <p className="text-gray-600 text-sm mt-1">You may request a paper copy of this Notice at any time, even if you agreed to receive it electronically.</p>
                </div>

                <div className="border-l-4 border-gray-300 pl-4">
                  <p className="font-medium text-gray-800">Right to Revoke Authorization</p>
                  <p className="text-gray-600 text-sm mt-1">If you provided written authorization for a use or disclosure, you may revoke it at any time in writing. Revocation will not affect actions already taken.</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Our Responsibilities
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are required to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Maintain the privacy of your PHI</li>
                <li>Provide you with this Notice of our legal duties and privacy practices</li>
                <li>Abide by the terms of this Notice currently in effect</li>
                <li>Notify you if a breach occurs that may have compromised the privacy or security of your PHI</li>
                <li>Use or disclose only the minimum necessary PHI to accomplish the intended purpose</li>
                <li>Obtain your written authorization before using or disclosing your PHI for marketing, sale, or other purposes not described in this Notice</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Breach Notification
              </h2>
              <p className="text-gray-600 leading-relaxed">
                In the event of a breach of unsecured PHI, we will notify you as required by law. Notification will include a description of what happened, the types of information involved, steps you should take to protect yourself, what we are doing to investigate and mitigate the breach, and contact information for questions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Changes to This Notice
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to change this Notice and make the new provisions effective for all PHI we maintain. If we make a material change to this Notice, we will post the revised Notice on our website and make it available upon request. The effective date of this Notice is listed at the top of this page.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Filing a Complaint
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you believe your privacy rights have been violated, you may file a complaint:
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
                <p className="text-gray-700 font-medium">With Health Centric:</p>
                <p className="text-gray-600 mt-2">Privacy Officer</p>
                <p className="text-gray-600">Email: privacy@healthcentric.com</p>
                <p className="text-gray-600">Address: Panama City, Panama</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <p className="text-gray-700 font-medium">With the U.S. Department of Health and Human Services:</p>
                <p className="text-gray-600 mt-2">Office for Civil Rights</p>
                <p className="text-gray-600">Website: www.hhs.gov/ocr</p>
                <p className="text-gray-600">Toll-Free: 1-877-696-6775</p>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>You will not be retaliated against for filing a complaint.</strong>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For more information about our privacy practices, to exercise your rights, or to obtain a copy of this Notice, contact:
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <p className="text-gray-700 font-medium">Health Centric Privacy Office</p>
                <p className="text-gray-600 mt-2">Email: privacy@healthcentric.com</p>
                <p className="text-gray-600">Phone: Available upon request</p>
                <p className="text-gray-600">Address: Panama City, Republic of Panama</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Acknowledgment
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By using our Services, you acknowledge that you have received and reviewed this Notice of Privacy Practices. We will retain a record of your acknowledgment.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
