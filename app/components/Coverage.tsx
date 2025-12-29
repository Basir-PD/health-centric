'use client';

import Image from 'next/image';

export default function Coverage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-[#faf8f5]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--color-brand)', opacity: 0.05 }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Map Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/ssk-map.png"
                alt="Service coverage map"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-gray-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Innovative. Dedicated.
              <br />
              <span style={{ color: 'var(--color-brand)' }}>That&apos;s Health Centric.</span>
            </h2>

            <p
              className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Access to preventive healthcare is a right for everyone, everywhere.
              That&apos;s our mission to fulfill.
            </p>

            {/* Stats */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { value: '3,500+', label: 'Lab locations' },
                { value: '50', label: 'States covered' },
                { value: '48hrs', label: 'Average results' },
                { value: '99.7%', label: 'Accuracy rate' },
              ].map((stat, i) => (
                <div key={i} className="text-left">
                  <div
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 sm:mt-10">
              <a
                href="#find-lab"
                className="inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'var(--color-brand)',
                  boxShadow: '0 10px 25px -5px rgba(184, 101, 74, 0.3)',
                }}
              >
                Find a lab near you
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
