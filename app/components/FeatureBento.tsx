export default function FeatureBento() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need in{' '}
            <span className="text-teal-600">one platform</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From testing to insights to action plans, our comprehensive platform
            guides you every step of the way.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {/* Large Card - Dashboard */}
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 lg:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Intuitive Health Dashboard
                </h3>
                <p className="mt-2 text-gray-600">
                  Track all your biomarkers, trends, and health scores in one
                  beautiful, easy-to-understand interface.
                </p>
              </div>

              {/* Mock Dashboard */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-teal-100" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Welcome back, Sarah</div>
                      <div className="text-xs text-gray-500">Last tested: Dec 15, 2024</div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-700">
                    Health Score: 87
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: 'Cardiovascular', value: 92, color: 'bg-green-500' },
                    { label: 'Metabolic', value: 78, color: 'bg-amber-500' },
                    { label: 'Hormonal', value: 85, color: 'bg-teal-500' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="text-xs text-gray-500">{item.label}</div>
                      <div className="mt-1 text-2xl font-bold text-gray-900">{item.value}%</div>
                      <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100">
                        <div
                          className={`h-1.5 rounded-full ${item.color}`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-lg bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-900">Biomarker Trends</div>
                    <div className="text-xs text-gray-500">Last 6 months</div>
                  </div>
                  <div className="mt-4 flex items-end gap-1 h-24">
                    {[40, 45, 55, 50, 65, 70, 68, 75, 80, 85, 82, 87].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-teal-500/20 hover:bg-teal-500/40 transition-colors"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small Card - AI Insights */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
              <svg
                className="h-6 w-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">AI-Powered Insights</h3>
            <p className="mt-2 text-sm text-gray-600">
              Our AI analyzes your results against millions of data points to surface
              personalized recommendations.
            </p>
            <div className="mt-4 rounded-lg bg-gray-50 p-3">
              <div className="text-xs text-purple-600 font-medium">Insight</div>
              <div className="mt-1 text-sm text-gray-700">
                Your Vitamin D is trending upward. Great job!
              </div>
            </div>
          </div>

          {/* Small Card - Expert Review */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
              <svg
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Expert Review</h3>
            <p className="mt-2 text-sm text-gray-600">
              Every result is reviewed by a board-certified physician who provides
              personalized guidance.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-sm font-medium text-blue-600">
                DR
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Dr. Rebecca Chen</div>
                <div className="text-xs text-gray-500">Internal Medicine</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
