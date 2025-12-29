'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '../i18n/provider';

const diseases1 = [
  'Lead toxicity', 'Alzheimer\'s disease', 'Graves\' disease', 'Ovarian cancer',
  'Hypothyroidism', 'Celiac disease', 'PCOS', 'Prostate cancer', 'Addison\'s disease',
  'Type 2 Diabetes', 'Hemochromatosis', 'Lupus', 'Rheumatoid arthritis', 'Anemia',
  'Pancreatic cancer', 'Colon cancer', 'Breast cancer', 'Bladder cancer', 'Lymphoma',
  'Leukemia', 'Melanoma', 'Hepatitis B', 'Hepatitis C', 'HIV', 'Syphilis',
];

const diseases2 = [
  'Heart disease', 'Kidney disease', 'Liver dysfunction', 'Thyroid disorders',
  'Metabolic syndrome', 'Osteoporosis', 'Multiple sclerosis', 'Chronic fatigue',
  'Vitamin deficiencies', 'Autoimmune disorders', 'Hormone imbalances', 'Lyme disease',
  'Insulin resistance', 'Hyperthyroidism', 'Hashimoto\'s disease', 'Cushing syndrome',
  'Gout', 'Hypogonadism', 'Adrenal insufficiency', 'Pernicious anemia', 'Thalassemia',
];

const diseases3 = [
  'Fatty liver disease', 'Cirrhosis', 'Cholesterol disorders', 'Atherosclerosis',
  'Coronary artery disease', 'Stroke risk', 'Deep vein thrombosis', 'Pulmonary embolism',
  'Iron deficiency', 'B12 deficiency', 'Folate deficiency', 'Vitamin D deficiency',
  'Zinc deficiency', 'Magnesium deficiency', 'Calcium disorders', 'Electrolyte imbalances',
];

const diseases4 = [
  'Chronic kidney disease', 'Glomerulonephritis', 'Nephrotic syndrome', 'UTI markers',
  'Prediabetes', 'Gestational diabetes', 'Metabolic dysfunction', 'Obesity markers',
  'Inflammation markers', 'Oxidative stress', 'Testosterone deficiency', 'Estrogen imbalance',
  'Cortisol dysfunction', 'Growth hormone deficiency', 'Parathyroid disorders', 'Bone loss',
];


function MarqueeRow({ diseases, direction = 'left', speed = 30 }: { diseases: string[]; direction?: 'left' | 'right'; speed?: number }) {
  const doubled = [...diseases, ...diseases];

  return (
    <div className="relative overflow-hidden py-2">
      <div
        className="flex gap-3"
        style={{
          animation: `${direction === 'left' ? 'marquee-left' : 'marquee-right'} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((disease, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 text-sm text-gray-700 font-medium whitespace-nowrap shadow-sm hover:bg-white hover:shadow-md transition-all duration-300"
          >
            {disease}
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
    <section id="how-it-works" className="relative bg-[#faf8f5] py-16 sm:py-20 lg:py-28 overflow-hidden">
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
            className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl"
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
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#faf8f5] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#faf8f5] to-transparent z-10 pointer-events-none" />

          {/* Disease Marquees */}
          <div className="space-y-2 sm:space-y-3">
            <MarqueeRow diseases={diseases1} direction="left" speed={45} />
            <MarqueeRow diseases={diseases2} direction="right" speed={50} />
            <MarqueeRow diseases={diseases3} direction="left" speed={42} />
            <MarqueeRow diseases={diseases4} direction="right" speed={48} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
