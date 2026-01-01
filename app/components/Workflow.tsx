'use client';

import { useState } from 'react';

const steps = [
  {
    id: 'test',
    number: '01',
    title: 'Test',
    headline: 'Professional blood collection',
    description:
      'Book online and choose your preferred option: a certified nurse visits your home or office, or visit a partner lab near you. Quick, professional, and hassle-free.',
    features: [
      'Nurse home visit available',
      'Partner labs nationwide',
      'Professional blood draw',
      'MINSA-certified lab processing',
    ],
    visual: (
      <div className="relative">
        <div className="rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 p-8">
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Kit Box */}
              <div className="h-32 w-40 rounded-xl bg-white shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="h-8 w-8 mx-auto rounded-lg bg-teal-500 flex items-center justify-center">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="mt-2 text-xs font-medium text-gray-600">Health Centric Kit</div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center shadow-lg">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'interpret',
    number: '02',
    title: 'Interpret',
    headline: 'Understand your results',
    description:
      'Receive your comprehensive results within 48 hours. Our platform translates complex lab data into clear, actionable insights you can actually understand.',
    features: [
      'Results in 48 hours or less',
      'Easy-to-understand reports',
      'Comparison to optimal ranges',
      'Historical trend tracking',
    ],
    visual: (
      <div className="relative">
        <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-8">
          <div className="space-y-3">
            {[
              { label: 'Vitamin D', value: '45 ng/mL', status: 'optimal', color: 'bg-green-500' },
              { label: 'Iron', value: '78 mcg/dL', status: 'monitor', color: 'bg-amber-500' },
              { label: 'B12', value: '620 pg/mL', status: 'optimal', color: 'bg-green-500' },
            ].map((item) => (
              <div key={item.label} className="rounded-lg bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.value}</div>
                  </div>
                  <div className={`h-3 w-3 rounded-full ${item.color}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'action',
    number: '03',
    title: 'Action',
    headline: 'Take control of your health',
    description:
      'Get a personalized action plan reviewed by our medical team. From lifestyle changes to supplement recommendations, know exactly what steps to take next.',
    features: [
      'Physician-reviewed recommendations',
      'Personalized action plans',
      'Supplement guidance',
      'Follow-up testing schedule',
    ],
    visual: (
      <div className="relative">
        <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 p-8">
          <div className="space-y-3">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Increase Vitamin D</div>
                  <div className="text-xs text-gray-500">2000 IU daily with food</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Add Iron-Rich Foods</div>
                  <div className="text-xs text-gray-500">Spinach, lentils, red meat</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Retest in 3 Months</div>
                  <div className="text-xs text-gray-500">March 15, 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Workflow() {
  const [activeStep, setActiveStep] = useState('test');

  const currentStep = steps.find((step) => step.id === activeStep) || steps[0];

  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Three simple steps to understanding your health better than ever before.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-xl bg-gray-100 p-1.5">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all ${
                  activeStep === step.id
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${
                    activeStep === step.id
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {step.number}
                </span>
                {step.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text Content */}
            <div>
              <div className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700">
                Step {currentStep.number}
              </div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                {currentStep.headline}
              </h3>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {currentStep.description}
              </p>

              <ul className="mt-8 space-y-4">
                {currentStep.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100">
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
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div className="transition-all duration-300">{currentStep.visual}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
