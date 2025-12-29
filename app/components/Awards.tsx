'use client';

import Image from 'next/image';

const stats = [
  { value: '100+', label: 'Biomarkers tested' },
  { value: '50K+', label: 'Members served' },
  { value: '48hrs', label: 'Results delivered' },
  { value: '99.7%', label: 'Accuracy rate' },
];

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
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 pb-16 border-b border-gray-100">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-3xl sm:text-4xl font-bold"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand)' }}
              >
                {stat.value}
              </div>
              <div
                className="mt-1 text-sm text-gray-500"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm uppercase tracking-wider text-gray-500 mb-3"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Recognized Excellence
          </p>
          <h2 className="text-2xl sm:text-3xl tracking-tight">
            <span
              className="font-medium text-gray-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Award-winning
            </span>
            <span
              className="italic ml-2"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif', color: 'var(--color-brand)' }}
            >
              healthcare platform
            </span>
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center"
            >
              {/* Award Image Container */}
              <div className="relative h-20 w-20 sm:h-24 sm:w-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={award.image}
                  alt={award.name}
                  width={96}
                  height={96}
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
            </div>
          ))}
        </div>

        {/* Optional subtitle */}
        <p
          className="mt-10 text-center text-sm text-gray-400"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Trusted by healthcare professionals and recognized for innovation in preventive care
        </p>
      </div>
    </section>
  );
}
