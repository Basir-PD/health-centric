'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '../i18n/provider';

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
      'Our comprehensive panel tests 100+ biomarkers across key health categories including cardiovascular health (cholesterol, triglycerides, inflammation markers), metabolic function (blood sugar, insulin, HbA1c), thyroid health (TSH, T3, T4), hormones (testosterone, estrogen, cortisol), vitamins and minerals (D, B12, iron, magnesium), and organ function markers (liver, kidney).',
  },
  {
    question: 'Do I need to fast before taking the test?',
    answer:
      'No fasting is required for our standard panels. However, for the most accurate lipid panel results (cholesterol, triglycerides), we recommend collecting your sample in the morning before eating. Specific instructions will be included with your kit based on the test you order.',
  },
  {
    question: 'How is my health data protected?',
    answer:
      'We take data security seriously. All health information is encrypted using industry-standard protocols and stored in HIPAA-compliant systems. We never sell your data to third parties. You have full control over your information and can request deletion at any time.',
  },
  {
    question: 'Can I share my results with my doctor?',
    answer:
      'Absolutely! We encourage you to share your results with your healthcare provider. You can easily download a PDF report or grant your doctor direct access to your dashboard. Many of our members use Health Centric results to have more informed conversations with their physicians.',
  },
  {
    question: 'What if my results show something concerning?',
    answer:
      'If our physicians identify any results that require immediate attention, we\'ll reach out to you directly. For less urgent findings, your personalized report will include clear recommendations and next steps. You can also schedule a consultation with our medical team to discuss your results in detail.',
  },
  {
    question: 'Is Health Centric covered by insurance?',
    answer:
      'While we don\'t bill insurance directly, many of our members use their HSA or FSA funds to pay for testing. We provide itemized receipts that you can submit to your insurance for potential reimbursement. Our transparent pricing means no surprise bills.',
  },
];

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  const isAccordionInView = useInView(accordionRef, { once: true, amount: 0.1 });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            <span
              className="font-medium text-gray-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {t('faq.title')}
            </span>
            <span
              className="italic ml-2"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif', color: 'var(--color-brand)' }}
            >
              {t('faq.titleHighlight')}
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-4 text-gray-500 text-base lg:text-lg"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('faq.subtitle')}
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          ref={accordionRef}
          initial="hidden"
          animate={isAccordionInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                openIndex === index
                  ? 'border-gray-200 bg-[#faf8f5]'
                  : 'border-gray-100 bg-white hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span
                  className={`text-base font-medium pr-4 transition-colors ${
                    openIndex === index ? 'text-gray-900' : 'text-gray-700'
                  }`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={openIndex === index ? { backgroundColor: 'var(--color-brand)', color: 'white' } : { backgroundColor: '#f3f4f6', color: '#6b7280' }}
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                  <div className="px-6 pb-5">
                    <p
                      className="text-gray-600 leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isAccordionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
            Still have questions?{' '}
            <a
              href="#contact"
              className="font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--color-brand)' }}
            >
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
