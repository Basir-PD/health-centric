import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-teal-600 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Headline */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to take control of your health?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-teal-100">
            Join 50,000+ members who have discovered a smarter approach to
            preventive health. Start with our comprehensive panel today.
          </p>

          {/* Pricing Preview */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="rounded-2xl bg-white p-6 text-center shadow-xl sm:p-8">
              <div className="text-sm font-medium text-gray-500">
                Comprehensive Panel
              </div>
              <div className="mt-2 flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-gray-900">$299</span>
                <span className="text-gray-500">/test</span>
              </div>
              <ul className="mt-4 space-y-2 text-left text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-teal-500"
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
                  80+ biomarkers tested
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-teal-500"
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
                  Physician review included
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-teal-500"
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
                  Personalized action plan
                </li>
              </ul>
              <Link
                href="#get-started"
                className="mt-6 block w-full rounded-lg bg-teal-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-teal-700"
              >
                Get Started
              </Link>
            </div>

            <div className="rounded-2xl border-2 border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm sm:p-8">
              <div className="text-sm font-medium text-teal-100">
                Subscribe & Save
              </div>
              <div className="mt-2 flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-white">$199</span>
                <span className="text-teal-200">/test</span>
              </div>
              <div className="mt-1 inline-block rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium text-white">
                Save 33%
              </div>
              <ul className="mt-4 space-y-2 text-left text-sm text-teal-100">
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-white"
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
                  Everything in Comprehensive
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-white"
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
                  Test every 3 months
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-white"
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
                  Priority support
                </li>
              </ul>
              <Link
                href="#subscribe"
                className="mt-6 block w-full rounded-lg border-2 border-white bg-transparent px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-white hover:text-teal-600"
              >
                Subscribe Now
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-teal-100">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              30-day money-back guarantee
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              HIPAA compliant
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.9/5 from 10,000+ reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
