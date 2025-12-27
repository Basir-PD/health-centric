import Link from 'next/link';

const personas = [
  {
    id: 'athletes',
    title: 'For Athletes',
    subtitle: 'Peak Performance',
    description:
      'Optimize your training with insights into recovery markers, inflammation levels, and nutrient status. Understand how your body responds to training stress and fine-tune your nutrition for maximum performance.',
    features: [
      'Recovery optimization markers',
      'Hormone balance tracking',
      'Nutrient deficiency detection',
      'Training load insights',
    ],
    cta: 'Explore Athletic Panel',
    image: (
      <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 lg:h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="h-32 w-32 text-white/30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" />
          </svg>
        </div>
        <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/10 backdrop-blur-sm p-3">
          <div className="text-sm font-medium text-white">Training Recovery</div>
          <div className="mt-1 h-2 w-full rounded-full bg-white/30">
            <div className="h-2 w-3/4 rounded-full bg-white" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'professionals',
    title: 'For Busy Professionals',
    subtitle: 'Energy & Focus',
    description:
      'Combat fatigue, stress, and burnout with comprehensive testing. Identify the root causes of low energy and cognitive fog, then get actionable steps to restore your vitality and mental clarity.',
    features: [
      'Stress hormone analysis',
      'Thyroid function testing',
      'Vitamin & mineral levels',
      'Sleep quality markers',
    ],
    cta: 'Explore Executive Panel',
    image: (
      <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 lg:h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="h-32 w-32 text-white/30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z" />
          </svg>
        </div>
        <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/10 backdrop-blur-sm p-3">
          <div className="text-sm font-medium text-white">Energy Levels</div>
          <div className="mt-1 flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full ${
                  i <= 4 ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'health-conscious',
    title: 'For Health-Conscious Adults',
    subtitle: 'Prevention First',
    description:
      'Take control of your health before problems arise. Our comprehensive panels detect early warning signs of common conditions, giving you the power to make lifestyle changes that matter.',
    features: [
      'Heart health markers',
      'Metabolic risk assessment',
      'Inflammation tracking',
      'Longevity biomarkers',
    ],
    cta: 'Explore Wellness Panel',
    image: (
      <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 lg:h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="h-32 w-32 text-white/30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/10 backdrop-blur-sm p-3">
          <div className="text-sm font-medium text-white">Heart Health Score</div>
          <div className="mt-1 text-2xl font-bold text-white">94/100</div>
        </div>
      </div>
    ),
  },
];

export default function Personas() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tailored for your{' '}
            <span className="text-teal-600">unique needs</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether you are pushing athletic limits, managing a demanding career,
            or proactively investing in longevity, we have a testing solution designed for you.
          </p>
        </div>

        {/* Persona Cards */}
        <div className="mt-16 space-y-12 lg:space-y-20">
          {personas.map((persona, index) => (
            <div
              key={persona.id}
              className={`flex flex-col gap-8 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } lg:items-center`}
            >
              {/* Image */}
              <div className="lg:w-1/2">{persona.image}</div>

              {/* Content */}
              <div className="lg:w-1/2">
                <div className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700">
                  {persona.subtitle}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                  {persona.title}
                </h3>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  {persona.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {persona.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-teal-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={`#${persona.id}`}
                  className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-teal-600 transition-colors hover:text-teal-700"
                >
                  {persona.cta}
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
