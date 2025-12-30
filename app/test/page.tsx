'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import WaitlistForm from '../components/WaitlistForm';
import Navigation from '../components/Navigation';
import { useTranslation } from '../i18n/provider';

export default function TestPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      {/* Shared Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="mx-auto max-w-lg px-4 sm:px-6 pt-24 sm:pt-28 pb-10 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <div className="text-center mb-6 sm:mb-8">
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {t('waitlist.title')}
            </h1>
            <p
              className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-500"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {t('waitlist.subtitle')}
            </p>
          </div>

          {/* What's Included Box */}
          <div
            className="rounded-xl p-4 sm:p-5 mb-6 sm:mb-8"
            style={{ backgroundColor: 'rgba(184, 101, 74, 0.08)' }}
          >
            <h3
              className="text-sm font-semibold text-gray-900 mb-2 sm:mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {t('waitlist.whatsIncluded')}
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                t('waitlist.feature1'),
                t('waitlist.feature2'),
                t('waitlist.feature3'),
                t('waitlist.feature4'),
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                  <svg
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--color-brand)' }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span style={{ fontFamily: 'var(--font-body)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-100 shadow-sm">
            <WaitlistForm />
          </div>

          {/* WhatsApp Contact */}
          <div className="mt-5 sm:mt-6 text-center">
            <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3" style={{ fontFamily: 'var(--font-body)' }}>
              {t('waitlist.reachUs')}
            </p>
            <a
              href="https://wa.me/50768317334"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#25D366] hover:underline"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp: +507 6831 7334
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
