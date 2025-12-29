'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '../i18n/provider';

const testCategories = [
  {
    title: 'Thyroid & hormones',
    biomarkerCount: 14,
    tests: [
      'TSH (Thyroid Stimulating)',
      'Free T3 & T4',
      'Testosterone Panel',
      'Estradiol & Progesterone',
    ],
  },
  {
    title: 'Early risk detection',
    biomarkerCount: 28,
    tests: [
      'Multi-Cancer Screening',
      'PSA (Prostate Health)',
      'CA-125 (Ovarian)',
      'Heavy Metals Panel',
    ],
  },
  {
    title: 'Heart & metabolism',
    biomarkerCount: 22,
    tests: [
      'Advanced Lipid Panel',
      'Lp(a) Cardiovascular',
      'ApoB & ApoA1 Ratio',
      'HbA1c & Fasting Glucose',
    ],
  },
  {
    title: 'Longevity markers',
    biomarkerCount: 19,
    tests: [
      'IGF-1 (Growth Factor)',
      'DHEA-S (Adrenal Health)',
      'Homocysteine Levels',
    ],
  },
  {
    title: 'Brain & stress',
    biomarkerCount: 12,
    tests: [
      'Cortisol (AM/PM)',
      'hs-CRP Inflammation',
      'Vitamin B12 & Folate',
    ],
  },
];

export default function ValueProposition() {
  const { t } = useTranslation();
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  return (
    <section id="tests" className="relative bg-[#faf8f5] py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-gray-900"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
          >
            {t('valueProposition.title')}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto px-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('valueProposition.subtitle')}
          </motion.p>
        </motion.div>

        {/* Test Categories Grid */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={isGridInView ? 'visible' : 'hidden'}
          variants={gridVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 sm:p-8 lg:p-10 hover:bg-white/60 transition-colors duration-300 border-b border-gray-200 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0 lg:border-r lg:[&:nth-child(3n)]:border-r-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r"
            >
              {/* Title */}
              <h3
                className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 leading-snug tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {category.title}
              </h3>

              {/* Biomarker count */}
              <div className="mt-2 sm:mt-3 flex items-center gap-2 text-xs sm:text-[13px]" style={{ color: 'var(--color-brand)' }}>
                <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd"/>
                </svg>
                <span className="font-semibold tracking-wide">{category.biomarkerCount} Biomarkers</span>
              </div>

              {/* Test list */}
              <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-2.5">
                {category.tests.map((test, i) => (
                  <div
                    key={i}
                    className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {test}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* +More Card */}
          <motion.div
            variants={cardVariants}
            className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center hover:bg-white/60 transition-colors duration-300"
          >
            <div
              className="text-lg sm:text-xl lg:text-2xl font-medium"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand)' }}
            >
              +More
            </div>
            <p
              className="mt-2 sm:mt-3 text-lg sm:text-xl lg:text-2xl italic text-gray-600 leading-snug"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
            >
              Complete health<br />in one test
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
