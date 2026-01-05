'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const testCategories = [
  {
    title: 'Thyroid & Hormones',
    description: 'Comprehensive hormone analysis for metabolic and reproductive health',
    biomarkerCount: 14,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    tests: [
      { name: 'TSH (Thyroid Stimulating Hormone)', description: 'Primary thyroid function marker' },
      { name: 'Free T3 & T4', description: 'Active thyroid hormones' },
      { name: 'Testosterone Panel', description: 'Total and free testosterone levels' },
      { name: 'Estradiol & Progesterone', description: 'Female hormone balance' },
      { name: 'SHBG', description: 'Sex hormone binding globulin' },
      { name: 'LH & FSH', description: 'Pituitary hormones' },
    ],
  },
  {
    title: 'Early Risk Detection',
    description: 'Proactive screening for early disease markers',
    biomarkerCount: 28,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    tests: [
      { name: 'Multi-Cancer Screening', description: 'Early detection markers for multiple cancers' },
      { name: 'PSA (Prostate Health)', description: 'Prostate-specific antigen levels' },
      { name: 'CA-125 (Ovarian)', description: 'Ovarian cancer screening marker' },
      { name: 'Heavy Metals Panel', description: 'Lead, mercury, arsenic, cadmium levels' },
      { name: 'AFP (Liver)', description: 'Alpha-fetoprotein for liver health' },
      { name: 'CEA', description: 'Carcinoembryonic antigen' },
    ],
  },
  {
    title: 'Heart & Metabolism',
    description: 'Cardiovascular and metabolic health assessment',
    biomarkerCount: 22,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
    tests: [
      { name: 'Advanced Lipid Panel', description: 'LDL, HDL, triglycerides, total cholesterol' },
      { name: 'Lp(a) Cardiovascular', description: 'Genetic cardiovascular risk marker' },
      { name: 'ApoB & ApoA1 Ratio', description: 'Advanced lipid particle analysis' },
      { name: 'HbA1c & Fasting Glucose', description: 'Blood sugar control markers' },
      { name: 'Insulin', description: 'Metabolic function indicator' },
      { name: 'hs-CRP', description: 'High-sensitivity inflammation marker' },
    ],
  },
  {
    title: 'Longevity Markers',
    description: 'Biomarkers associated with healthy aging',
    biomarkerCount: 19,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    tests: [
      { name: 'IGF-1 (Growth Factor)', description: 'Insulin-like growth factor' },
      { name: 'DHEA-S (Adrenal Health)', description: 'Adrenal function and aging marker' },
      { name: 'Homocysteine Levels', description: 'Cardiovascular and cognitive health' },
      { name: 'Vitamin D', description: 'Essential for bone and immune health' },
      { name: 'Omega-3 Index', description: 'Essential fatty acid status' },
    ],
  },
  {
    title: 'Brain & Stress',
    description: 'Cognitive function and stress response markers',
    biomarkerCount: 12,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
    tests: [
      { name: 'Cortisol (AM/PM)', description: 'Stress hormone patterns' },
      { name: 'hs-CRP Inflammation', description: 'Systemic inflammation marker' },
      { name: 'Vitamin B12 & Folate', description: 'Essential for brain function' },
      { name: 'Ferritin', description: 'Iron storage and energy levels' },
      { name: 'Magnesium RBC', description: 'Cellular magnesium status' },
    ],
  },
  {
    title: 'Vitamins & Minerals',
    description: 'Essential nutrient status for optimal health',
    biomarkerCount: 15,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    ),
    tests: [
      { name: 'Vitamin D (25-OH)', description: 'Bone and immune health' },
      { name: 'Vitamin B12', description: 'Energy and nerve function' },
      { name: 'Iron Panel', description: 'Iron, TIBC, ferritin, transferrin' },
      { name: 'Magnesium', description: 'Muscle and nerve function' },
      { name: 'Zinc', description: 'Immune and skin health' },
      { name: 'Folate', description: 'Cell growth and DNA synthesis' },
    ],
  },
];

export default function WhatWeTestPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <span className="text-sm font-medium" style={{ color: 'var(--color-brand)' }}>
                Comprehensive Testing
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What we{' '}
              <span
                className="italic"
                style={{ fontFamily: 'Georgia, serif', color: 'var(--color-brand)' }}
              >
                test
              </span>
            </h1>

            <p
              className="mt-4 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              100+ biomarkers across the areas that matter most to your long-term health. One comprehensive panel, complete insights.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              <div className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-display)' }}
                >
                  100+
                </div>
                <div className="mt-1 text-sm text-gray-500">Biomarkers</div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-display)' }}
                >
                  6
                </div>
                <div className="mt-1 text-sm text-gray-500">Health Categories</div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-display)' }}
                >
                  48h
                </div>
                <div className="mt-1 text-sm text-gray-500">Results Ready</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Test Categories */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl"
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
                      {category.icon}
                    </svg>
                  </div>
                  <div
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: 'rgba(184, 101, 74, 0.1)', color: 'var(--color-brand)' }}
                  >
                    {category.biomarkerCount} markers
                  </div>
                </div>

                {/* Title & Description */}
                <h3
                  className="text-xl font-semibold text-gray-900"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{category.description}</p>

                {/* Tests List */}
                <div className="mt-6 space-y-3">
                  {category.tests.map((test, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: 'rgba(184, 101, 74, 0.1)' }}
                      >
                        <svg
                          className="w-3 h-3"
                          style={{ color: 'var(--color-brand)' }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{test.name}</div>
                        <div className="text-xs text-gray-500">{test.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-2xl sm:text-3xl font-medium text-gray-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              How testing works
            </h2>
            <p className="mt-3 text-gray-500">Simple, convenient, and comprehensive</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Book your test',
                description: 'Choose a time that works for you. A certified nurse will come to your home or office.',
              },
              {
                step: '2',
                title: 'Quick blood draw',
                description: 'The collection takes about 10 minutes. No fasting required for most panels.',
              },
              {
                step: '3',
                title: 'Get your results',
                description: 'Receive detailed results in 48 hours with physician review and personalized insights.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full text-xl font-bold text-white mb-4"
                  style={{ backgroundColor: 'var(--color-brand)' }}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 sm:p-12 text-center bg-white border border-gray-100 shadow-xl"
          >
            <h2
              className="text-2xl sm:text-3xl font-medium text-gray-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to understand your health?
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Get comprehensive insights from 100+ biomarkers with our at-home testing service.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/test"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                style={{ backgroundColor: 'var(--color-brand)' }}
              >
                Get Started
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold bg-white text-gray-700 border border-gray-200 shadow-sm transition-all hover:shadow-md hover:border-gray-300"
              >
                View Pricing
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
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
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
