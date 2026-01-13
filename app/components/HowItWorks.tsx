'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '../i18n/provider';

// Biomarkers from complete blood count and glucose metabolism
const biomarkers1 = [
  'Hemoglobin', 'Hematocrit', 'MCV', 'MCH', 'MCHC', 'RDW', 'Leukocytes',
  'Platelets', 'MPV', 'Fasting Glucose', 'HbA1c', 'Fasting Insulin',
  'HOMA-IR', 'C-Peptide', 'Total Cholesterol', 'LDL Cholesterol',
];

// Lipid profile and liver function biomarkers
const biomarkers2 = [
  'HDL Cholesterol', 'Triglycerides', 'VLDL', 'Apo B', 'AST', 'ALT',
  'GGT', 'Alkaline Phosphatase', 'Total Bilirubin', 'Direct Bilirubin',
  'Albumin', 'Total Protein', 'BUN', 'Creatinine', 'eGFR', 'Uric Acid',
];

// Kidney, thyroid, and cardiac biomarkers
const biomarkers3 = [
  'Cystatin C', 'TSH', 'Free T4', 'Free T3', 'TPO Antibodies', 'hs-CRP',
  'Homocysteine', 'BNP', 'Lp(a)', 'Testosterone', 'Estradiol', 'DHEA-S',
  'Cortisol', 'IGF-1', 'SHBG', 'Prolactin',
];

// Vitamins, minerals, enzymes, and heavy metals
const biomarkers4 = [
  'Vitamin D', 'Vitamin B12', 'Folate', 'Ferritin', 'Magnesium', 'LDH',
  'Amylase', 'Lipase', 'CK', 'Lead', 'Mercury', 'Arsenic', 'Cadmium',
  'Aluminum', 'Copper', 'Zinc', 'Selenium',
];


function MarqueeRow({ biomarkers, direction = 'left', speed = 30 }: { biomarkers: string[]; direction?: 'left' | 'right'; speed?: number }) {
  const doubled = [...biomarkers, ...biomarkers];

  return (
    <div className="relative overflow-hidden py-2">
      <div
        className="flex gap-3"
        style={{
          animation: `${direction === 'left' ? 'marquee-left' : 'marquee-right'} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((biomarker, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-sm text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap shadow-sm hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300"
          >
            {biomarker}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const { t } = useTranslation();
  const headerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.5 });
  const isMarqueeInView = useInView(marqueeRef, { once: true, amount: 0.2 });

  const features = [
    t('howItWorks.feature1'),
    t('howItWorks.feature2'),
    t('howItWorks.feature3'),
  ];

  const featureVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const featureItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  return (
    <section id="how-it-works" className="relative bg-[#faf8f5] dark:bg-gray-950 py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2
            className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl xl:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t('howItWorks.title')}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl italic mt-1"
            style={{ fontFamily: 'Georgia, Cambria, \"Times New Roman\", Times, serif', color: 'var(--color-brand)' }}
          >
            {t('howItWorks.titleHighlight')}
          </motion.p>
        </motion.div>

        {/* Features */}
        <motion.div
          ref={featuresRef}
          initial="hidden"
          animate={isFeaturesInView ? 'visible' : 'hidden'}
          variants={featureVariants}
          className="flex flex-wrap justify-center gap-3 sm:gap-8 mb-8 sm:mb-12"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={featureItemVariants}
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <svg className="h-4 w-4 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee Container */}
        <motion.div
          ref={marqueeRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isMarqueeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          {/* Edge fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#faf8f5] dark:from-gray-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#faf8f5] dark:from-gray-950 to-transparent z-10 pointer-events-none" />

          {/* Biomarker Marquees */}
          <div className="space-y-2 sm:space-y-3">
            <MarqueeRow biomarkers={biomarkers1} direction="left" speed={45} />
            <MarqueeRow biomarkers={biomarkers2} direction="right" speed={50} />
            <MarqueeRow biomarkers={biomarkers3} direction="left" speed={42} />
            <MarqueeRow biomarkers={biomarkers4} direction="right" speed={48} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
