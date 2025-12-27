import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-50 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-16 lg:flex-row lg:gap-16 lg:py-24">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm text-teal-700">
              <span className="flex h-2 w-2 rounded-full bg-teal-500" />
              Now testing 80+ biomarkers
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Know your body.
              <br />
              <span className="text-teal-600">Change your future.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 lg:text-xl">
              Comprehensive blood testing with{' '}
              <strong className="font-semibold text-gray-900">personalized insights</strong>{' '}
              from certified health experts. Detect risks early and take control of your wellness journey.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-teal-600/20 transition-all hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-600/30"
              >
                Get Started
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
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
              >
                See How It Works
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row lg:justify-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm font-medium text-gray-600">
                  4.9/5 rating
                </span>
              </div>
              <div className="h-4 w-px bg-gray-300 hidden sm:block" />
              <div className="text-sm text-gray-600">
                <strong className="font-semibold text-gray-900">50,000+</strong>{' '}
                tests completed
              </div>
              <div className="h-4 w-px bg-gray-300 hidden sm:block" />
              <div className="text-sm text-gray-600">
                <strong className="font-semibold text-gray-900">98%</strong>{' '}
                satisfaction rate
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="mt-12 flex-1 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Card */}
              <div className="relative rounded-2xl bg-white p-6 shadow-2xl shadow-gray-200/50 ring-1 ring-gray-100">
                {/* Dashboard Preview */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500">Health Score</div>
                      <div className="text-3xl font-bold text-gray-900">87/100</div>
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                      <svg
                        className="h-8 w-8 text-teal-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-3">
                    {[
                      { label: 'Cardiovascular', value: 92, color: 'bg-teal-500' },
                      { label: 'Metabolic', value: 78, color: 'bg-blue-500' },
                      { label: 'Hormonal', value: 85, color: 'bg-purple-500' },
                      { label: 'Inflammation', value: 91, color: 'bg-green-500' },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{item.label}</span>
                          <span className="font-medium text-gray-900">{item.value}%</span>
                        </div>
                        <div className="mt-1 h-2 overflow-hidden rounded-full bg-gray-100">
                          <div
                            className={`h-full rounded-full ${item.color}`}
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-8 top-1/4 hidden rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-100 lg:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-5 w-5 text-green-600"
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
                  <div>
                    <div className="text-xs text-gray-500">Vitamin D</div>
                    <div className="font-semibold text-gray-900">Optimal</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 hidden rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-100 lg:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                    <svg
                      className="h-5 w-5 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Iron Levels</div>
                    <div className="font-semibold text-gray-900">Trending Up</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full text-white"
          viewBox="0 0 1440 120"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}
