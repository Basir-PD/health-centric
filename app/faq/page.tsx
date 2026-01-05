'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const faqs = [
  {
    question: 'How does the blood collection work?',
    answer:
      'Choose the option that works best for you: have a certified nurse visit your home or office for a quick blood draw, or visit one of our partner labs near you. The process takes about 10 minutes and is performed by trained healthcare professionals. Your results will be ready within 48 hours.',
    category: 'Process',
  },
  {
    question: 'How accurate are the test results?',
    answer:
      'Our tests are processed in MINSA-certified laboratories, the same facilities used by major hospitals and healthcare providers. We maintain rigorous quality control standards to ensure accuracy comparable to traditional lab testing. All results are reviewed by licensed physicians before being released.',
    category: 'Quality',
  },
  {
    question: 'What biomarkers are included in the comprehensive panel?',
    answer:
      'Our comprehensive panel tests 100+ biomarkers across key health categories including cardiovascular health (cholesterol, triglycerides, inflammation markers), metabolic function (blood sugar, insulin, HbA1c), thyroid health (TSH, T3, T4), hormones (testosterone, estrogen, cortisol), vitamins and minerals (D, B12, iron, magnesium), and organ function markers (liver, kidney).',
    category: 'Testing',
  },
  {
    question: 'Do I need to fast before taking the test?',
    answer:
      'No fasting is required for our standard panels. However, for the most accurate lipid panel results (cholesterol, triglycerides), we recommend collecting your sample in the morning before eating. Specific instructions will be included with your kit based on the test you order.',
    category: 'Process',
  },
  {
    question: 'How is my health data protected?',
    answer:
      'We take data security seriously. All health information is encrypted using industry-standard protocols and stored in systems compliant with Panama\'s Ley 81 (Personal Data Protection Law). We never sell your data to third parties. You have full control over your information and can request deletion at any time.',
    category: 'Privacy',
  },
  {
    question: 'Can I share my results with my doctor?',
    answer:
      'Absolutely! We encourage you to share your results with your healthcare provider. You can easily download a PDF report or grant your doctor direct access to your dashboard. Many of our members use Health Centric results to have more informed conversations with their physicians.',
    category: 'Results',
  },
  {
    question: 'What if my results show something concerning?',
    answer:
      'If our physicians identify any results that require immediate attention, we\'ll reach out to you directly. For less urgent findings, your personalized report will include clear recommendations and next steps. You can also schedule a consultation with our medical team to discuss your results in detail.',
    category: 'Results',
  },
  {
    question: 'Is Health Centric covered by insurance?',
    answer:
      'While we don\'t bill insurance directly, many of our members use their HSA or FSA funds to pay for testing. We provide itemized receipts that you can submit to your insurance for potential reimbursement. Our transparent pricing means no surprise bills.',
    category: 'Pricing',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ backgroundColor: 'rgba(184, 101, 74, 0.1)' }}
            >
              <svg
                className="w-4 h-4"
                style={{ color: 'var(--color-brand)' }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium" style={{ color: 'var(--color-brand)' }}>
                Help Center
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Frequently Asked{' '}
              <span
                className="italic"
                style={{ fontFamily: 'Georgia, serif', color: 'var(--color-brand)' }}
              >
                Questions
              </span>
            </h1>

            <p
              className="mt-4 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Everything you need to know about Health Centric. Can't find what you're looking for? Feel free to reach out to our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? 'border-gray-200 bg-white shadow-lg shadow-gray-900/5'
                    : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-md hover:shadow-gray-900/5'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span
                      className={`text-base sm:text-lg font-medium transition-colors ${
                        openIndex === index ? 'text-gray-900' : 'text-gray-700'
                      }`}
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`flex-shrink-0 h-9 w-9 flex items-center justify-center rounded-full transition-all duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    style={
                      openIndex === index
                        ? { backgroundColor: 'var(--color-brand)', color: 'white' }
                        : { backgroundColor: '#f3f4f6', color: '#6b7280' }
                    }
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-gray-100">
                        <p
                          className="mt-4 text-gray-600 leading-relaxed"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <div
              className="rounded-2xl p-8 sm:p-10 text-center"
              style={{ backgroundColor: 'rgba(184, 101, 74, 0.08)' }}
            >
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5"
                style={{ backgroundColor: 'rgba(184, 101, 74, 0.15)' }}
              >
                <svg
                  className="w-7 h-7"
                  style={{ color: 'var(--color-brand)' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>

              <h3
                className="text-xl sm:text-2xl font-medium text-gray-900 mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Still have questions?
              </h3>

              <p
                className="text-gray-600 mb-6 max-w-md mx-auto"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Our team is here to help. Reach out and we'll get back to you within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-brand)' }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Us
                </Link>

                <a
                  href="https://wa.me/50768317334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-white text-gray-700 border border-gray-200 shadow-sm transition-all hover:shadow-md hover:border-gray-300"
                >
                  <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
