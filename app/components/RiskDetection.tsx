'use client';

const conditions = [
  'Type 2 Diabetes',
  'Cardiovascular Disease',
  'Thyroid Disorders',
  'Iron Deficiency',
  'Vitamin D Deficiency',
  'Metabolic Syndrome',
  'Kidney Disease',
  'Liver Dysfunction',
  'Hormone Imbalances',
  'Inflammation Markers',
  'Cholesterol Issues',
  'Blood Sugar Problems',
  'Autoimmune Indicators',
  'Nutrient Deficiencies',
  'Adrenal Fatigue',
];

export default function RiskDetection() {
  return (
    <section className="overflow-hidden bg-gray-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Detect risks before they become problems
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Our comprehensive panels screen for markers associated with over{' '}
            <span className="font-semibold text-teal-400">1,100+ health conditions</span>,
            giving you the insights to act early.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 lg:gap-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 lg:text-5xl">80+</div>
            <div className="mt-2 text-sm text-gray-400">Biomarkers Tested</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 lg:text-5xl">1,100+</div>
            <div className="mt-2 text-sm text-gray-400">Conditions Detected</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 lg:text-5xl">48hrs</div>
            <div className="mt-2 text-sm text-gray-400">Average Results Time</div>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="mt-16 space-y-4">
        {/* Row 1 - Left to Right */}
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee flex gap-4 whitespace-nowrap">
            {[...conditions, ...conditions].map((condition, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/50 px-5 py-2.5"
              >
                <div className="h-2 w-2 rounded-full bg-teal-400" />
                <span className="text-sm font-medium text-gray-300">{condition}</span>
              </div>
            ))}
          </div>
          <div className="animate-marquee2 flex gap-4 whitespace-nowrap" aria-hidden="true">
            {[...conditions, ...conditions].map((condition, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/50 px-5 py-2.5"
              >
                <div className="h-2 w-2 rounded-full bg-teal-400" />
                <span className="text-sm font-medium text-gray-300">{condition}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee-reverse flex gap-4 whitespace-nowrap">
            {[...conditions.slice().reverse(), ...conditions.slice().reverse()].map(
              (condition, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/50 px-5 py-2.5"
                >
                  <div className="h-2 w-2 rounded-full bg-blue-400" />
                  <span className="text-sm font-medium text-gray-300">{condition}</span>
                </div>
              )
            )}
          </div>
          <div
            className="animate-marquee-reverse2 flex gap-4 whitespace-nowrap"
            aria-hidden="true"
          >
            {[...conditions.slice().reverse(), ...conditions.slice().reverse()].map(
              (condition, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/50 px-5 py-2.5"
                >
                  <div className="h-2 w-2 rounded-full bg-blue-400" />
                  <span className="text-sm font-medium text-gray-300">{condition}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
