'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { useTranslation } from '../i18n/provider';

const videoSources = ['/hero-main.mp4', '/hero.mp4'];

export default function Hero() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const switchVideo = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videoSources.length);
      setIsFading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    const interval = setInterval(() => {
      switchVideo();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentVideoIndex, switchVideo]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gray-900"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <video
          ref={videoRef}
          key={currentVideoIndex}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
        >
          <source src={videoSources[currentVideoIndex]} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col items-center justify-center text-center py-20">

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <span className="h-px w-8 sm:w-12 bg-white/40" />
            <span
              className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-white/70"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {t('hero.eyebrow')}
            </span>
            <span className="h-px w-8 sm:w-12 bg-white/40" />
          </div>

          {/* Main Headline */}
          <h1 className="max-w-4xl">
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight"
              style={{ fontFamily: 'var(--font-display)', lineHeight: '1.1' }}
            >
              {t('hero.headline1')}
            </span>
            <span
              className="block mt-2 sm:mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
              style={{
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontStyle: 'italic',
                color: 'var(--color-brand-light)',
                lineHeight: '1.1'
              }}
            >
              {t('hero.headline2')}
            </span>
          </h1>

          {/* Description */}
          <p
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#get-started"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--color-brand)',
                boxShadow: '0 0 30px rgba(184, 101, 74, 0.4)',
              }}
            >
              {t('hero.cta')}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#tests"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white/90 border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              {t('hero.ctaSecondary')}
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-white/50">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{t('hero.trustClia')}</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>{t('hero.trustHipaa')}</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{t('hero.trustHsa')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] uppercase tracking-widest">{t('hero.scroll')}</span>
          <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
