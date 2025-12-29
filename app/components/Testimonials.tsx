'use client';

import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Marketing Executive',
    avatar: 'SM',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    quote:
      'Health Centric discovered I had a significant Vitamin D deficiency that explained my chronic fatigue. After following their recommendations, my energy levels are completely transformed.',
    highlight: 'Energy transformed',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Professional Triathlete',
    avatar: 'MC',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    quote:
      'As an athlete, understanding my body is crucial. Health Centric gives me insights I never got from traditional testing. I can now optimize my training based on real data.',
    highlight: 'Data-driven training',
  },
  {
    id: 3,
    name: 'Jennifer Ross',
    role: 'Software Engineer',
    avatar: 'JR',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    quote:
      'The at-home collection was incredibly easy. No more scheduling appointments and waiting rooms. Within 48 hours, I had detailed results and a clear action plan.',
    highlight: 'Results in 48 hours',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Entrepreneur',
    avatar: 'DT',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    quote:
      'I discovered early warning signs for metabolic issues that my regular checkups had missed. The lifestyle changes have genuinely improved my health markers.',
    highlight: 'Early detection',
  },
  {
    id: 5,
    name: 'Emily Parker',
    role: 'Registered Nurse',
    avatar: 'EP',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    quote:
      'As a healthcare professional, I was impressed by the comprehensiveness of the testing. The dashboard makes it easy to track changes over time.',
    highlight: 'Comprehensive testing',
  },
  {
    id: 6,
    name: 'Robert Kim',
    role: 'Retired Teacher',
    avatar: 'RK',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    quote:
      'At 62, staying healthy is my priority. Health Centric caught a thyroid issue early enough for my doctor to address it proactively. Peace of mind.',
    highlight: 'Proactive care',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            <span
              className="font-medium text-gray-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Real stories from
            </span>
            <span
              className="italic block sm:inline sm:ml-2"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif', color: 'var(--color-brand)' }}
            >
              real members
            </span>
          </h2>
          <p
            className="mt-4 text-gray-500 text-base lg:text-lg max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Join thousands who have taken control of their health journey.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div
          className="relative mb-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-3xl bg-[#faf8f5] p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
              {/* Image Side */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div
                    className="absolute -inset-2 rounded-full opacity-20 blur-xl"
                    style={{ backgroundColor: 'var(--color-brand)' }}
                  />
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="relative h-24 w-24 lg:h-32 lg:w-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1">
                {/* Highlight Badge */}
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-4"
                  style={{ backgroundColor: 'rgba(184, 101, 74, 0.1)', color: 'var(--color-brand)' }}
                >
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {testimonials[currentIndex].highlight}
                </div>

                {/* Quote */}
                <blockquote
                  className="text-xl lg:text-2xl text-gray-800 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="mt-6 flex items-center gap-4">
                  <div>
                    <div
                      className="font-semibold text-gray-900"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  style={i === currentIndex ? { backgroundColor: 'var(--color-brand)' } : {}}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
                aria-label="Previous testimonial"
              >
                <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
                aria-label="Next testimonial"
              >
                <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8 border-t border-gray-100">
          {[
            { value: '50K+', label: 'Members tested' },
            { value: '4.9/5', label: 'Average rating' },
            { value: '99%', label: 'Would recommend' },
            { value: '48hrs', label: 'Avg results time' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-2xl lg:text-3xl font-semibold text-gray-900"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
