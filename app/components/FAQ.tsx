'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How does the at-home blood collection work?',
    answer:
      'Our at-home collection kit uses a simple finger-prick method. You\'ll receive everything you need, including detailed instructions, a lancet, collection tube, and pre-paid return envelope. The entire process takes about 5 minutes. Once collected, simply mail your sample back using the provided envelope, and your results will be ready within 48 hours.',
  },
  {
    question: 'How accurate are the test results?',
    answer:
      'Our tests are processed in CLIA-certified and CAP-accredited laboratories, the same facilities used by major hospitals and healthcare providers. We maintain rigorous quality control standards to ensure accuracy comparable to traditional lab testing. All results are reviewed by licensed physicians before being released.',
  },
  {
    question: 'What biomarkers are included in the comprehensive panel?',
    answer:
      'Our comprehensive panel tests 80+ biomarkers across key health categories including cardiovascular health (cholesterol, triglycerides, inflammation markers), metabolic function (blood sugar, insulin, HbA1c), thyroid health (TSH, T3, T4), hormones (testosterone, estrogen, cortisol), vitamins and minerals (D, B12, iron, magnesium), and organ function markers (liver, kidney).',
  },
  {
    question: 'Do I need to fast before taking the test?',
    answer:
      'No fasting is required for our standard panels. However, for the most accurate lipid panel results (cholesterol, triglycerides), we recommend collecting your sample in the morning before eating. Specific instructions will be included with your kit based on the test you order.',
  },
  {
    question: 'How is my health data protected?',
    answer:
      'We take data security seriously. All health information is encrypted using industry-standard protocols and stored in HIPAA-compliant systems. We never sell your data to third parties. You have full control over your information and can request deletion at any time. Our platform undergoes regular security audits to ensure the highest level of protection.',
  },
  {
    question: 'Can I share my results with my doctor?',
    answer:
      'Absolutely! We encourage you to share your results with your healthcare provider. You can easily download a PDF report or grant your doctor direct access to your dashboard. Many of our members use VitalPath results to have more informed conversations with their physicians.',
  },
  {
    question: 'What if my results show something concerning?',
    answer:
      'If our physicians identify any results that require immediate attention, we\'ll reach out to you directly. For less urgent findings, your personalized report will include clear recommendations and next steps. You can also schedule a consultation with our medical team to discuss your results in detail. We always recommend following up with your primary care provider for any significant findings.',
  },
  {
    question: 'How often should I test?',
    answer:
      'For most people, we recommend comprehensive testing every 3-6 months to track progress and catch changes early. If you\'re actively working on improving specific health markers, more frequent testing (every 6-8 weeks) can help you fine-tune your approach. Your personalized action plan will include specific retesting recommendations based on your results.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about VitalPath testing.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0">
                  <svg
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
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
                  <div className="border-t border-gray-100 px-6 py-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a
              href="#contact"
              className="font-medium text-teal-600 hover:text-teal-700"
            >
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
