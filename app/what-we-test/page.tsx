'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useTranslation } from '../i18n/provider';
import { ReactNode } from 'react';

interface Biomarker {
  nameKey: string;
  unit: string;
  normalRange: string;
  optimalRange: string;
}

interface TestCategory {
  titleKey: string;
  descriptionKey: string;
  biomarkerCount: number;
  icon: ReactNode;
  biomarkers: Biomarker[];
}

const testCategories: TestCategory[] = [
  {
    titleKey: 'biomarkers.categories.cbc.title',
    descriptionKey: 'biomarkers.categories.cbc.description',
    biomarkerCount: 9,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
    ),
    biomarkers: [
      { nameKey: 'biomarkers.cbc.hemoglobin', unit: 'g/dL', normalRange: '12-18', optimalRange: '13-17' },
      { nameKey: 'biomarkers.cbc.hematocrit', unit: '%', normalRange: '36-54', optimalRange: '38-50' },
      { nameKey: 'biomarkers.cbc.mcv', unit: 'fL', normalRange: '78-98', optimalRange: '82-92' },
      { nameKey: 'biomarkers.cbc.mch', unit: 'pg', normalRange: '26-32', optimalRange: '27-31' },
      { nameKey: 'biomarkers.cbc.mchc', unit: 'g/dL', normalRange: '32-36', optimalRange: '33-35' },
      { nameKey: 'biomarkers.cbc.rdw', unit: '%', normalRange: '11-16', optimalRange: '11-14' },
      { nameKey: 'biomarkers.cbc.leukocytes', unit: '10³/µL', normalRange: '4-10', optimalRange: '4.5-7.5' },
      { nameKey: 'biomarkers.cbc.platelets', unit: '10³/µL', normalRange: '140-450', optimalRange: '180-350' },
      { nameKey: 'biomarkers.cbc.mpv', unit: 'fL', normalRange: '7.5-15', optimalRange: '8-11' },
    ],
  },
  {
    titleKey: 'biomarkers.categories.glucose.title',
    descriptionKey: 'biomarkers.categories.glucose.description',
    biomarkerCount: 5,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    ),
    biomarkers: [
      { nameKey: 'biomarkers.glucose.fasting', unit: 'mg/dL', normalRange: '60-110', optimalRange: '75-95' },
      { nameKey: 'biomarkers.glucose.hba1c', unit: '%', normalRange: '4.5-5.7', optimalRange: '<5.5' },
      { nameKey: 'biomarkers.glucose.insulin', unit: 'µIU/mL', normalRange: '0-30', optimalRange: '2-6' },
      { nameKey: 'biomarkers.glucose.homaIr', unit: '-', normalRange: '<2', optimalRange: '<1.5' },
      { nameKey: 'biomarkers.glucose.cPeptide', unit: 'ng/mL', normalRange: '0.8-3.1', optimalRange: '1.0-2.5' },
    ],
  },
  {
    titleKey: 'biomarkers.categories.lipid.title',
    descriptionKey: 'biomarkers.categories.lipid.description',
    biomarkerCount: 6,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    ),
    biomarkers: [
      { nameKey: 'biomarkers.lipid.totalCholesterol', unit: 'mg/dL', normalRange: '50-200', optimalRange: '<180' },
      { nameKey: 'biomarkers.lipid.ldl', unit: 'mg/dL', normalRange: '30-130', optimalRange: '<70' },
      { nameKey: 'biomarkers.lipid.hdl', unit: 'mg/dL', normalRange: '40-60', optimalRange: '>60' },
      { nameKey: 'biomarkers.lipid.triglycerides', unit: 'mg/dL', normalRange: '<150', optimalRange: '<80' },
      { nameKey: 'biomarkers.lipid.vldl', unit: 'mg/dL', normalRange: '2-30', optimalRange: '<20' },
      { nameKey: 'biomarkers.lipid.apoB', unit: 'mg/dL', normalRange: '<100', optimalRange: '<70' },
    ],
  },
  {
    titleKey: 'biomarkers.categories.liver.title',
    descriptionKey: 'biomarkers.categories.liver.description',
    biomarkerCount: 8,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    ),
    biomarkers: [
      { nameKey: 'biomarkers.liver.ast', unit: 'IU/L', normalRange: '5-40', optimalRange: '10-25' },
      { nameKey: 'biomarkers.liver.alt', unit: 'IU/L', normalRange: '5-40', optimalRange: '10-25' },
      { nameKey: 'biomarkers.liver.ggt', unit: 'IU/L', normalRange: '9-60', optimalRange: '10-30' },
      { nameKey: 'biomarkers.liver.alp', unit: 'IU/L', normalRange: '35-129', optimalRange: '50-90' },
      { nameKey: 'biomarkers.liver.totalBilirubin', unit: 'mg/dL', normalRange: '0.1-1.2', optimalRange: '0.3-1.0' },
      { nameKey: 'biomarkers.liver.directBilirubin', unit: 'mg/dL', normalRange: '0-0.3', optimalRange: '<0.2' },
      { nameKey: 'biomarkers.liver.albumin', unit: 'g/dL', normalRange: '3.5-5.0', optimalRange: '4.0-5.0' },
      { nameKey: 'biomarkers.liver.totalProtein', unit: 'g/dL', normalRange: '6.0-8.3', optimalRange: '6.5-8.0' },
    ],
  },
  {
    titleKey: 'biomarkers.categories.kidney.title',
    descriptionKey: 'biomarkers.categories.kidney.description',
    biomarkerCount: 5,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
    ),
    biomarkers: [
      { nameKey: 'biomarkers.kidney.bun', unit: 'mg/dL', normalRange: '7-20', optimalRange: '10-16' },
      { nameKey: 'biomarkers.kidney.creatinine', unit: 'mg/dL', normalRange: '0.6-1.3', optimalRange: '0.7-1.0' },
      { nameKey: 'biomarkers.kidney.egfr', unit: 'mL/min/1.73m²', normalRange: '>60', optimalRange: '>90' },
      { nameKey: 'biomarkers.kidney.uricAcid', unit: 'mg/dL', normalRange: '2.4-7.0', optimalRange: '3.5-6.0' },
      { nameKey: 'biomarkers.kidney.cystatinC', unit: 'mg/L', normalRange: '0.5-1.0', optimalRange: '<0.8' },
    ],
  },
  {
    titleKey: 'biomarkers.categories.thyroid.title',
    descriptionKey: 'biomarkers.categories.thyroid.description',
    biomarkerCount: 4,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    biomarkers: [
      { nameKey: 'biomarkers.thyroid.tsh', unit: 'µIU/mL', normalRange: '0.4-4.0', optimalRange: '1.0-2.5' },
      { nameKey: 'biomarkers.thyroid.freeT4', unit: 'ng/dL', normalRange: '0.8-1.8', optimalRange: '1.0-1.5' },
      { nameKey: 'biomarkers.thyroid.freeT3', unit: 'pg/mL', normalRange: '2.3-4.2', optimalRange: '2.8-3.8' },
      { nameKey: 'biomarkers.thyroid.tpoAntibodies', unit: 'IU/mL', normalRange: '<35', optimalRange: '<20' },
    ],
  },
  {
    titleKey: 'biomarkers.categories.cardiac.title',
    descriptionKey: 'biomarkers.categories.cardiac.description',
    biomarkerCount: 4,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    ),
    biomarkers: [
      { nameKey: 'biomarkers.cardiac.hsCrp', unit: 'mg/L', normalRange: '<3.0', optimalRange: '<1.0' },
      { nameKey: 'biomarkers.cardiac.homocysteine', unit: 'µmol/L', normalRange: '5-15', optimalRange: '<10' },
      { nameKey: 'biomarkers.cardiac.bnp', unit: 'pg/mL', normalRange: '<100', optimalRange: '<50' },
      { nameKey: 'biomarkers.cardiac.lpa', unit: 'nmol/L', normalRange: '<75', optimalRange: '<30' },
    ],
  },
  {
    titleKey: 'biomarkers.categories.hormones.title',
    descriptionKey: 'biomarkers.categories.hormones.description',
    biomarkerCount: 7,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    ),
    biomarkers: [
      { nameKey: 'biomarkers.hormones.testosterone', unit: 'ng/dL', normalRange: '300-1000', optimalRange: '500-800' },
      { nameKey: 'biomarkers.hormones.estradiol', unit: 'pg/mL', normalRange: '10-40', optimalRange: '20-30' },
      { nameKey: 'biomarkers.hormones.dheas', unit: 'µg/dL', normalRange: '80-560', optimalRange: '200-400' },
      { nameKey: 'biomarkers.hormones.cortisol', unit: 'µg/dL', normalRange: '6-23', optimalRange: '10-18' },
      { nameKey: 'biomarkers.hormones.igf1', unit: 'ng/mL', normalRange: '101-267', optimalRange: '150-250' },
      { nameKey: 'biomarkers.hormones.shbg', unit: 'nmol/L', normalRange: '10-57', optimalRange: '20-50' },
      { nameKey: 'biomarkers.hormones.prolactin', unit: 'ng/mL', normalRange: '2-18', optimalRange: '<15' },
    ],
  },
  {
    titleKey: 'biomarkers.categories.vitamins.title',
    descriptionKey: 'biomarkers.categories.vitamins.description',
    biomarkerCount: 5,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    ),
    biomarkers: [
      { nameKey: 'biomarkers.vitamins.vitaminD', unit: 'ng/mL', normalRange: '30-100', optimalRange: '50-80' },
      { nameKey: 'biomarkers.vitamins.vitaminB12', unit: 'pg/mL', normalRange: '200-900', optimalRange: '>500' },
      { nameKey: 'biomarkers.vitamins.folate', unit: 'ng/mL', normalRange: '>3', optimalRange: '>10' },
      { nameKey: 'biomarkers.vitamins.ferritin', unit: 'ng/mL', normalRange: '20-300', optimalRange: '50-150' },
      { nameKey: 'biomarkers.vitamins.magnesium', unit: 'mg/dL', normalRange: '1.7-2.4', optimalRange: '2.0-2.4' },
    ],
  },
  {
    titleKey: 'biomarkers.categories.enzymes.title',
    descriptionKey: 'biomarkers.categories.enzymes.description',
    biomarkerCount: 4,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    ),
    biomarkers: [
      { nameKey: 'biomarkers.enzymes.ldh', unit: 'U/L', normalRange: '140-280', optimalRange: '150-220' },
      { nameKey: 'biomarkers.enzymes.amylase', unit: 'U/L', normalRange: '28-100', optimalRange: '40-80' },
      { nameKey: 'biomarkers.enzymes.lipase', unit: 'U/L', normalRange: '0-160', optimalRange: '20-100' },
      { nameKey: 'biomarkers.enzymes.ck', unit: 'U/L', normalRange: '30-200', optimalRange: '50-150' },
    ],
  },
  {
    titleKey: 'biomarkers.categories.toxicology.title',
    descriptionKey: 'biomarkers.categories.toxicology.description',
    biomarkerCount: 8,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    ),
    biomarkers: [
      { nameKey: 'biomarkers.toxicology.lead', unit: 'µg/dL', normalRange: '<10', optimalRange: '<2' },
      { nameKey: 'biomarkers.toxicology.mercury', unit: 'µg/L', normalRange: '<10', optimalRange: '<3' },
      { nameKey: 'biomarkers.toxicology.arsenic', unit: 'µg/L', normalRange: '<50', optimalRange: '<15' },
      { nameKey: 'biomarkers.toxicology.cadmium', unit: 'µg/L', normalRange: '<5', optimalRange: '<1' },
      { nameKey: 'biomarkers.toxicology.aluminum', unit: 'µg/L', normalRange: '<10', optimalRange: '<5' },
      { nameKey: 'biomarkers.toxicology.copper', unit: 'µg/dL', normalRange: '70-140', optimalRange: '80-120' },
      { nameKey: 'biomarkers.toxicology.zinc', unit: 'µg/dL', normalRange: '60-130', optimalRange: '80-110' },
      { nameKey: 'biomarkers.toxicology.selenium', unit: 'µg/L', normalRange: '70-150', optimalRange: '100-130' },
    ],
  },
];

// Calculate total biomarkers
const totalBiomarkers = testCategories.reduce((sum, cat) => sum + cat.biomarkerCount, 0);

export default function WhatWeTestPage() {
  const { t } = useTranslation();

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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <span className="text-sm font-medium" style={{ color: 'var(--color-brand)' }}>
                {t('biomarkers.badge')}
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 dark:text-white tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {t('biomarkers.heroTitle')}{' '}
              <span
                className="italic"
                style={{ fontFamily: 'Georgia, serif', color: 'var(--color-brand)' }}
              >
                {t('biomarkers.heroTitleHighlight')}
              </span>
            </h1>

            <p
              className="mt-4 text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {t('biomarkers.heroSubtitle')}
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              <div className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-display)' }}
                >
                  {totalBiomarkers}+
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('biomarkers.statBiomarkers')}</div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-display)' }}
                >
                  {testCategories.length}
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('biomarkers.statCategories')}</div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-display)' }}
                >
                  48h
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('biomarkers.statResults')}</div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600" />
                <span className="text-gray-500 dark:text-gray-400">{t('biomarkers.normalRange')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-brand)' }} />
                <span className="text-gray-500 dark:text-gray-400">{t('biomarkers.optimalRange')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Test Categories */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {testCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="bg-white dark:bg-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
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
                    <div>
                      <h3
                        className="text-xl font-semibold text-gray-900 dark:text-white"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {t(category.titleKey)}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t(category.descriptionKey)}</p>
                    </div>
                  </div>
                  <div
                    className="rounded-full px-4 py-1.5 text-sm font-semibold self-start sm:self-auto"
                    style={{ backgroundColor: 'rgba(184, 101, 74, 0.1)', color: 'var(--color-brand)' }}
                  >
                    {category.biomarkerCount} {t('biomarkers.markers')}
                  </div>
                </div>

                {/* Biomarkers Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {t('biomarkers.tableBiomarker')}
                        </th>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {t('biomarkers.tableUnit')}
                        </th>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {t('biomarkers.tableNormal')}
                        </th>
                        <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {t('biomarkers.tableOptimal')}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                      {category.biomarkers.map((biomarker, i) => (
                        <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                            {t(biomarker.nameKey)}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                            {biomarker.unit}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                            {biomarker.normalRange}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                              style={{ backgroundColor: 'rgba(184, 101, 74, 0.1)', color: 'var(--color-brand)' }}
                            >
                              {biomarker.optimalRange}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              {t('biomarkers.howItWorksTitle')}
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400">{t('biomarkers.howItWorksSubtitle')}</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                titleKey: 'biomarkers.step1Title',
                descriptionKey: 'biomarkers.step1Description',
              },
              {
                step: '2',
                titleKey: 'biomarkers.step2Title',
                descriptionKey: 'biomarkers.step2Description',
              },
              {
                step: '3',
                titleKey: 'biomarkers.step3Title',
                descriptionKey: 'biomarkers.step3Description',
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  {t(item.titleKey)}
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{t(item.descriptionKey)}</p>
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
            className="rounded-3xl p-8 sm:p-12 text-center bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl"
          >
            <h2
              className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {t('biomarkers.ctaTitle')}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              {t('biomarkers.ctaSubtitle')}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/test"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                style={{ backgroundColor: 'var(--color-brand)' }}
              >
                {t('biomarkers.ctaButton')}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 shadow-sm transition-all hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600"
              >
                {t('biomarkers.ctaPricing')}
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
            {t('biomarkers.backHome')}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
