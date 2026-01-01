'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '../i18n/provider';

const awards = [
  {
    name: 'APICTA Award',
    description: 'Asia Pacific ICT Alliance Award for Healthcare Innovation',
    image: '/awards/awards-apicta.png',
  },
  {
    name: 'GP Innovation Award',
    description: 'General Practice Innovation Excellence',
    image: '/awards/awards-gp.png',
  },
  {
    name: 'ICT Division Award',
    description: 'Outstanding Achievement in Health Technology',
    image: '/awards/awards-ict-division.png',
  },
  {
    name: 'Innovation Award',
    description: 'Healthcare Innovation Recognition',
    image: '/awards/awards-innovation.png',
  },
  {
    name: 'Seeds Award',
    description: 'Emerging Healthcare Startup Excellence',
    image: '/awards/awards-seeds.png',
  },
  {
    name: 'Social Venture Award',
    description: 'Social Impact in Healthcare',
    image: '/awards/awards-social-venture.png',
  },
];

export default function Awards() {
  const { t } = useTranslation();
  const headerRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isAwardsInView = useInView(awardsRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const awardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl tracking-tight">
            <span
              className="font-medium text-gray-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {t('awards.sectionTitle')}
            </span>
            <span
              className="italic ml-2"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif', color: 'var(--color-brand)' }}
            >
              {t('awards.sectionTitleHighlight')}
            </span>
          </h2>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          ref={awardsRef}
          initial="hidden"
          animate={isAwardsInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16"
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={awardVariants}
              className="group flex flex-col items-center text-center"
            >
              {/* Award Image Container - Fixed size for all */}
              <div className="relative h-12 w-28 sm:h-14 sm:w-32 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={award.image}
                  alt={award.name}
                  fill
                  className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>

              {/* Award Info - Hidden on mobile, shown on hover on desktop */}
              <div className="mt-3 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p
                  className="text-xs font-medium text-gray-700"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {award.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isAwardsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-sm text-gray-400"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {t('awards.subtitle')}
        </motion.p>
      </div>
    </section>
  );
}
