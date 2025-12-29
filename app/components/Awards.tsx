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
  const trustRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const isTrustInView = useInView(trustRef, { once: true, amount: 0.3 });
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isAwardsInView = useInView(awardsRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
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
        {/* Trust Badges Row */}
        <motion.div
          ref={trustRef}
          initial="hidden"
          animate={isTrustInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-gray-100"
        >
          {[
            {
              icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>,
              label: t('awards.trust1')
            },
            {
              icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
              label: t('awards.trust2')
            },
            {
              icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
              label: t('awards.trust3')
            },
            {
              icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>,
              label: t('awards.trust4')
            },
          ].map((badge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-50 border border-gray-100"
            >
              <span className="text-gray-500">{badge.icon}</span>
              <span
                className="text-xs sm:text-sm font-medium text-gray-700"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {badge.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

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
