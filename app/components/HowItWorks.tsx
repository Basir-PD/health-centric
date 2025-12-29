'use client';

const diseases1 = [
  'Lead toxicity', 'Alzheimer\'s disease', 'Graves\' disease', 'Ovarian cancer',
  'Hypothyroidism', 'Celiac disease', 'PCOS', 'Prostate cancer', 'Addison\'s disease',
  'Type 2 Diabetes', 'Hemochromatosis', 'Lupus', 'Rheumatoid arthritis', 'Anemia',
];

const diseases2 = [
  'Heart disease', 'Kidney disease', 'Liver dysfunction', 'Thyroid disorders',
  'Metabolic syndrome', 'Osteoporosis', 'Multiple sclerosis', 'Chronic fatigue',
  'Vitamin deficiencies', 'Autoimmune disorders', 'Hormone imbalances', 'Lyme disease',
];

const features = [
  'Establish your long-term baseline',
  'Tracked for life',
  'Monitor how your body changes',
];

function MarqueeRow({ diseases, direction = 'left', speed = 30 }: { diseases: string[]; direction?: 'left' | 'right'; speed?: number }) {
  const doubled = [...diseases, ...diseases];

  return (
    <div className="relative overflow-hidden py-2">
      <div
        className="flex gap-3"
        style={{
          animation: `${direction === 'left' ? 'marquee-left' : 'marquee-right'} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((disease, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 text-sm text-gray-700 font-medium whitespace-nowrap shadow-sm hover:bg-white hover:shadow-md transition-all duration-300"
          >
            {disease}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="relative bg-[#faf8f5] py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Monitor early indicators of
          </h2>
          <p
            className="text-3xl sm:text-4xl lg:text-5xl italic mt-1"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand)' }}
          >
            1000s of diseases
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Edge fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#faf8f5] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#faf8f5] to-transparent z-10 pointer-events-none" />

          {/* Disease Marquees */}
          <div className="space-y-3">
            <MarqueeRow diseases={diseases1} direction="left" speed={35} />
            <MarqueeRow diseases={diseases2} direction="right" speed={40} />
          </div>
        </div>
      </div>
    </section>
  );
}
