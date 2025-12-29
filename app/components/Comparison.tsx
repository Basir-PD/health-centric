const comparisonData = [
  {
    feature: 'Number of biomarkers tested',
    vitalpath: '80+ biomarkers',
    traditional: '10-15 biomarkers',
  },
  {
    feature: 'Time to receive results',
    vitalpath: '48 hours',
    traditional: '1-2 weeks',
  },
  {
    feature: 'Personalized action plans',
    vitalpath: true,
    traditional: false,
  },
  {
    feature: 'Physician review included',
    vitalpath: true,
    traditional: 'Extra cost',
  },
  {
    feature: 'At-home collection option',
    vitalpath: true,
    traditional: false,
  },
  {
    feature: 'Progress tracking dashboard',
    vitalpath: true,
    traditional: false,
  },
  {
    feature: 'AI-powered insights',
    vitalpath: true,
    traditional: false,
  },
  {
    feature: 'Optimal range analysis',
    vitalpath: true,
    traditional: 'Only abnormal flags',
  },
  {
    feature: 'Easy-to-understand reports',
    vitalpath: true,
    traditional: 'Technical jargon',
  },
  {
    feature: 'Follow-up support',
    vitalpath: 'Unlimited',
    traditional: 'Per appointment',
  },
];

function renderValue(value: boolean | string) {
  if (value === true) {
    return (
      <div className="flex items-center justify-center">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-100">
          <svg
            className="h-4 w-4 text-teal-600"
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
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex items-center justify-center">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100">
          <svg
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    );
  }
  return <span className="text-sm text-gray-600">{value}</span>;
}

export default function Comparison() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why choose{' '}
            <span className="text-teal-600">Health Centric</span>?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See how we compare to traditional primary care blood testing.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {/* Table Header */}
          <div className="grid grid-cols-3 border-b border-gray-200 bg-gray-50">
            <div className="p-6">
              <span className="text-sm font-medium text-gray-500">Feature</span>
            </div>
            <div className="border-l border-gray-200 bg-teal-50 p-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-teal-900">Health Centric</span>
              </div>
            </div>
            <div className="border-l border-gray-200 p-6 text-center">
              <span className="text-sm font-medium text-gray-500">
                Traditional Care
              </span>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {comparisonData.map((row, index) => (
              <div key={index} className="grid grid-cols-3">
                <div className="flex items-center p-6">
                  <span className="text-sm font-medium text-gray-900">
                    {row.feature}
                  </span>
                </div>
                <div className="flex items-center justify-center border-l border-gray-200 bg-teal-50/50 p-6">
                  {typeof row.vitalpath === 'boolean' ? (
                    renderValue(row.vitalpath)
                  ) : (
                    <span className="text-sm font-medium text-teal-700">
                      {row.vitalpath}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-center border-l border-gray-200 p-6">
                  {renderValue(row.traditional)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-teal-600/20 transition-all hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-600/30"
          >
            Start Your Health Journey
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
          </a>
        </div>
      </div>
    </section>
  );
}
