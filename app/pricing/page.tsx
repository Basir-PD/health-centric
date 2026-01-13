'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const plans = [
  {
    name: 'Essential Panel',
    description: 'Perfect for getting started with health tracking',
    price: 149,
    period: '/test',
    popular: false,
    features: [
      '40+ biomarkers tested',
      'Basic metabolic panel',
      'Lipid panel (cholesterol)',
      'Thyroid function (TSH)',
      'Physician review',
      'Digital results in 48 hours',
      'At-home collection kit',
    ],
    cta: 'Get Started',
    ctaStyle: 'outline',
  },
  {
    name: 'Comprehensive Panel',
    description: 'Our most popular option for complete insights',
    price: 299,
    period: '/test',
    popular: true,
    features: [
      '70+ biomarkers tested',
      'Everything in Essential',
      'Hormone panel (testosterone, estrogen, cortisol)',
      'Vitamin & mineral levels (D, B12, iron, magnesium)',
      'Inflammation markers (CRP, homocysteine)',
      'Liver & kidney function',
      'Personalized action plan',
      'Priority support',
    ],
    cta: 'Get Started',
    ctaStyle: 'solid',
  },
  {
    name: 'Subscribe & Save',
    description: 'Quarterly testing for ongoing optimization',
    price: 199,
    originalPrice: 299,
    period: '/test',
    popular: false,
    badge: 'Save 33%',
    features: [
      'Everything in Comprehensive',
      'Test every 3 months',
      'Trend analysis dashboard',
      'Track changes over time',
      'Priority scheduling',
      'Dedicated health advisor',
      'Cancel anytime',
    ],
    cta: 'Subscribe Now',
    ctaStyle: 'outline',
  },
];

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and HSA/FSA cards. You can also use PayPal or Apple Pay for a seamless checkout experience.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes! We offer a 30-day satisfaction guarantee. If you\'re not completely satisfied with your experience, contact us for a full refund.',
  },
  {
    question: 'Can I use my HSA or FSA funds?',
    answer: 'Absolutely! Health Centric tests are eligible for HSA and FSA spending. We provide itemized receipts for easy reimbursement.',
  },
  {
    question: 'What\'s included in the at-home collection kit?',
    answer: 'Your kit includes everything needed for a simple blood draw: collection tubes, alcohol prep pads, bandages, a prepaid shipping label, and clear instructions. A certified nurse will visit your home to perform the collection.',
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#faf8f5] dark:bg-gray-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium" style={{ color: 'var(--color-brand)' }}>
                Simple, Transparent Pricing
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 dark:text-white tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Invest in your{' '}
              <span
                className="italic"
                style={{ fontFamily: 'Georgia, serif', color: 'var(--color-brand)' }}
              >
                future health
              </span>
            </h1>

            <p
              className="mt-4 text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Choose the plan that fits your health goals. No hidden fees, no surprise charges. HSA/FSA eligible.
            </p>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" style={{ color: 'var(--color-brand)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                30-day guarantee
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" style={{ color: 'var(--color-brand)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Ley 81 compliant
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.9/5 rating
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-white dark:bg-gray-900 shadow-2xl shadow-gray-900/10 dark:shadow-gray-950/30 ring-2 ring-[#b8654a]'
                    : 'bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-xl'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div
                      className="rounded-full px-4 py-1.5 text-xs font-semibold text-white shadow-lg flex items-center gap-1.5"
                      style={{ backgroundColor: 'var(--color-brand)' }}
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Save badge */}
                {plan.badge && (
                  <div className="absolute -top-3 right-4">
                    <div
                      className="rounded-full px-3 py-1 text-xs font-bold"
                      style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#16a34a' }}
                    >
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className={plan.popular ? 'mt-2' : ''}>
                  <h3
                    className="text-lg font-semibold text-gray-900 dark:text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{plan.description}</p>
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    ${plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>
                  {plan.originalPrice && (
                    <span className="text-sm text-gray-400 line-through ml-2">
                      ${plan.originalPrice}
                    </span>
                  )}
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full mt-0.5"
                        style={{ backgroundColor: 'rgba(184, 101, 74, 0.1)' }}
                      >
                        <svg
                          className="h-3 w-3"
                          style={{ color: 'var(--color-brand)' }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/test"
                  className={`mt-8 block w-full rounded-xl px-6 py-4 text-center text-sm font-semibold transition-all duration-300 ${
                    plan.ctaStyle === 'solid'
                      ? 'text-white hover:brightness-110'
                      : 'border-2 hover:bg-[rgba(184,101,74,0.05)]'
                  }`}
                  style={
                    plan.ctaStyle === 'solid'
                      ? { backgroundColor: 'var(--color-brand)', boxShadow: '0 10px 25px -5px rgba(184, 101, 74, 0.4)' }
                      : { borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }
                  }
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* HSA/FSA note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400"
          >
            All plans are HSA/FSA eligible. No subscription required for one-time purchases.
          </motion.p>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900/50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What's included in every test
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400">Premium care at every step of your health journey</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                ),
                title: 'At-Home Collection',
                description: 'Certified nurse visits your home or office at your convenience',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
                title: 'MINSA-Certified Labs',
                description: 'Same facilities used by major hospitals',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                ),
                title: 'Physician Review',
                description: 'Licensed doctors review every result',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                ),
                title: '48-Hour Results',
                description: 'Fast turnaround with digital delivery',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center p-6"
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                  style={{ backgroundColor: 'rgba(184, 101, 74, 0.1)' }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: 'var(--color-brand)' }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Pricing questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  openFaq === index
                    ? 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg shadow-gray-900/5 dark:shadow-gray-950/30'
                    : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-gray-200 dark:hover:border-gray-700'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                      openFaq === index ? 'rotate-180 bg-[var(--color-brand)] text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More questions link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--color-brand)' }}
            >
              View all FAQs
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 sm:p-12 text-center"
            style={{ backgroundColor: 'rgba(184, 101, 74, 0.08)' }}
          >
            <h2
              className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to take control of your health?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Join 50,000+ members who have discovered a smarter approach to preventive health.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/test"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                style={{ backgroundColor: 'var(--color-brand)' }}
              >
                Get Started Today
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 shadow-sm transition-all hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600"
              >
                Talk to an Advisor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="pb-16">
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
