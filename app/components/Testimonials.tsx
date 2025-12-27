'use client';

import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Marketing Executive',
    avatar: 'SM',
    rating: 5,
    quote:
      'VitalPath discovered I had a significant Vitamin D deficiency that explained my chronic fatigue. After following their recommendations, my energy levels are completely transformed. This is the future of preventive healthcare.',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Professional Triathlete',
    avatar: 'MC',
    rating: 5,
    quote:
      'As an athlete, understanding my body is crucial. VitalPath gives me insights I never got from traditional testing. I can now optimize my training and recovery based on real data, not guesswork.',
  },
  {
    id: 3,
    name: 'Jennifer Ross',
    role: 'Software Engineer',
    avatar: 'JR',
    rating: 5,
    quote:
      'The at-home collection was incredibly easy. No more scheduling appointments and waiting rooms. Within 48 hours, I had detailed results and a clear action plan. Worth every penny.',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Entrepreneur',
    avatar: 'DT',
    rating: 5,
    quote:
      'I discovered early warning signs for metabolic issues that my regular checkups had missed. The physician consultation helped me make lifestyle changes that have genuinely improved my health markers.',
  },
  {
    id: 5,
    name: 'Emily Parker',
    role: 'Registered Nurse',
    avatar: 'EP',
    rating: 5,
    quote:
      'As a healthcare professional, I was impressed by the comprehensiveness of the testing. The dashboard makes it easy to track changes over time. I recommend VitalPath to all my friends and family.',
  },
  {
    id: 6,
    name: 'Robert Kim',
    role: 'Retired Teacher',
    avatar: 'RK',
    rating: 5,
    quote:
      'At 62, staying healthy is my priority. VitalPath caught a thyroid issue early enough for my doctor to address it proactively. The peace of mind alone is invaluable.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by{' '}
            <span className="text-teal-600">thousands</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join our community of health-conscious individuals who have taken
            control of their wellness journey.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative mt-16"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-3 md:w-1/2 lg:w-1/3"
                >
                  <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 lg:p-8">
                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="mt-4 text-gray-600 leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition-all hover:bg-gray-50 lg:-translate-x-6"
            aria-label="Previous testimonial"
          >
            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition-all hover:bg-gray-50 lg:translate-x-6"
            aria-label="Next testimonial"
          >
            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? 'w-8 bg-teal-600' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
