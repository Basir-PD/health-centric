'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#faf8f5]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 sm:gap-12">
          {/* Content Side */}
          <div className="lg:max-w-xl">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-gray-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to know
              <span
                className="italic block"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif', color: 'var(--color-brand)' }}
              >
                your body better?
              </span>
            </h2>

            <p
              className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Join 50,000+ members who have discovered a smarter approach to
              preventive health. Start with our comprehensive panel today.
            </p>

            {/* Trust badges */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
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
                HIPAA compliant
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.9/5 rating
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row lg:flex-col xl:flex-row">
            {/* Main Card */}
            <div className="group relative rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-8 flex-1 min-w-0 sm:min-w-[300px] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
              style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
            >
              {/* Decorative corner accent */}
              <div
                className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 opacity-10 rounded-tr-2xl sm:rounded-tr-3xl"
                style={{ background: 'linear-gradient(225deg, var(--color-brand) 0%, transparent 70%)' }}
              />

              {/* Popular badge */}
              <div className="absolute -top-3 left-4 sm:left-6">
                <div
                  className="rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-white shadow-lg flex items-center gap-1 sm:gap-1.5"
                  style={{ backgroundColor: 'var(--color-brand)' }}
                >
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Most Popular
                </div>
              </div>

              <div className="text-xs sm:text-sm font-medium text-gray-500 mt-2">Comprehensive Panel</div>
              <div className="mt-3 sm:mt-4 flex items-baseline gap-2">
                <span
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  $299
                </span>
                <span className="text-sm sm:text-base text-gray-500">/test</span>
              </div>

              <ul className="mt-5 sm:mt-8 space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-600">
                {[
                  '100+ biomarkers tested',
                  'Physician review included',
                  'Personalized action plan',
                  'At-home collection kit',
                  'Results in 48 hours',
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className="flex h-5 w-5 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: 'rgba(184, 101, 74, 0.1)' }}
                    >
                      <svg className="h-3 w-3" style={{ color: 'var(--color-brand)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ fontFamily: 'var(--font-body)' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#get-started"
                className="mt-5 sm:mt-8 block w-full rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
                style={{
                  backgroundColor: 'var(--color-brand)',
                  boxShadow: '0 10px 25px -5px rgba(184, 101, 74, 0.4)',
                }}
              >
                Get Started →
              </Link>

              <p className="mt-3 sm:mt-4 text-center text-[10px] sm:text-xs text-gray-400">
                HSA/FSA eligible • No subscription required
              </p>
            </div>

            {/* Subscription Option */}
            <div className="group rounded-xl sm:rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 flex-1 min-w-0 sm:min-w-[280px] transition-all duration-500 hover:border-gray-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs sm:text-sm font-medium text-gray-700">Subscribe & Save</div>
                <div
                  className="rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold"
                  style={{ backgroundColor: 'rgba(184, 101, 74, 0.1)', color: 'var(--color-brand)' }}
                >
                  Save 33%
                </div>
              </div>
              <div className="mt-3 sm:mt-4 flex items-baseline gap-1 sm:gap-2 flex-wrap">
                <span
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  $199
                </span>
                <span className="text-xs sm:text-base text-gray-500">/test</span>
                <span className="text-xs sm:text-sm text-gray-400 line-through ml-1 sm:ml-2">$299</span>
              </div>

              <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
                {[
                  'Everything in Comprehensive',
                  'Test every 3 months',
                  'Trend analysis dashboard',
                  'Priority support',
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 transition-colors duration-300 group-hover:text-gray-700">
                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: 'var(--color-brand)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#subscribe"
                className="mt-4 sm:mt-6 block w-full rounded-lg sm:rounded-xl border-2 px-4 sm:px-6 py-2.5 sm:py-3 text-center text-sm font-medium transition-all duration-300 hover:bg-[rgba(184,101,74,0.05)] active:scale-[0.98]"
                style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-10 sm:mt-16 text-center px-4">
          <p className="text-gray-500 text-xs sm:text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            Have questions?{' '}
            <Link
              href="#contact"
              className="underline underline-offset-4 transition-colors hover:opacity-80"
              style={{ color: 'var(--color-brand)' }}
            >
              Talk to our health advisors
            </Link>
            {' '}or call <span className="text-gray-900 font-medium">1-800-HEALTH</span>
          </p>
        </div>
      </div>
    </section>
  );
}
