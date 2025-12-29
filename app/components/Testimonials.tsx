'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Marketing Executive',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    quote: 'Health Centric discovered I had a significant Vitamin D deficiency that explained my chronic fatigue. After following their recommendations, my energy levels are completely transformed.',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Professional Athlete',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    quote: 'Absolutely revolutionary, a game-changer for our industry.',
  },
  {
    id: 3,
    name: 'Jennifer Ross',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    quote: 'The efficiency it brings is unmatched. It\'s a vital tool that has helped us cut costs and improve our end product significantly.',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Entrepreneur',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    quote: 'It has saved us countless hours. Highly recommended for anyone looking to enhance their efficiency and productivity.',
  },
  {
    id: 5,
    name: 'Emily Parker',
    role: 'Registered Nurse',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    quote: 'I can\'t imagine going back to how things were before this AI.',
  },
  {
    id: 6,
    name: 'Robert Kim',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    quote: 'A robust solution that fits perfectly into our workflow. It has enhanced our team\'s capabilities and allowed us to tackle more complex projects.',
  },
  {
    id: 7,
    name: 'Lisa Anderson',
    role: 'Healthcare Director',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    quote: 'A must-have tool for any professional. It\'s revolutionized the way we approach problem-solving and decision-making.',
  },
  {
    id: 8,
    name: 'Michael Torres',
    role: 'Fitness Coach',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    quote: 'I made a swap with the help of AI, it was so easy to use.',
  },
  {
    id: 9,
    name: 'Amanda Wright',
    role: 'Wellness Consultant',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    quote: 'It\'s like having a superpower! This AI tool has given us the ability to do things we never thought were possible in our field.',
  },
  {
    id: 10,
    name: 'James Peterson',
    role: 'Business Consultant',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    quote: 'This AI has transformed the way I work! It\'s like having a brilliant assistant who knows exactly what I need before I even ask.',
  },
  {
    id: 11,
    name: 'Rachel Green',
    role: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    quote: 'It\'s incredibly intuitive and easy to use. Even those without technical expertise can leverage its power.',
  },
  {
    id: 12,
    name: 'Chris Williams',
    role: 'Tech Analyst',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    quote: 'The results are always impressive. This AI has helped us not only meet but exceed our performance targets.',
  },
];

function QuoteIcon() {
  return (
    <span
      className="text-xl sm:text-2xl leading-none font-serif text-gray-200"
      style={{ fontFamily: 'Georgia, serif' }}
    >
      "
    </span>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100/80 hover:border-gray-200 hover:shadow-sm transition-all duration-300">
      <QuoteIcon />
      <p
        className="mt-2 text-[13px] sm:text-sm text-gray-600 leading-relaxed"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {testimonial.quote}
      </p>
      <div className="mt-4 flex items-center gap-2.5">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-7 w-7 sm:h-8 sm:w-8 rounded-full object-cover"
        />
        <div>
          <div
            className="text-xs font-medium text-gray-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {testimonial.name}
          </div>
          <div className="text-[10px] sm:text-[11px] text-gray-400">
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split testimonials into columns for masonry effect
  // Initial view: 2 items per column (8 total on desktop)
  // Expanded view: 3 items per column (12 total on desktop)
  const col1Initial = [testimonials[0], testimonials[4]];
  const col2Initial = [testimonials[1], testimonials[5]];
  const col3Initial = [testimonials[2], testimonials[6]];
  const col4Initial = [testimonials[3], testimonials[7]];

  const col1Extra = [testimonials[8]];
  const col2Extra = [testimonials[9]];
  const col3Extra = [testimonials[10]];
  const col4Extra = [testimonials[11]];

  return (
    <section className="bg-[#faf8f5] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-gray-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Loved by{' '}
            <span
              className="italic"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif', color: 'var(--color-brand)' }}
            >
              thousands of people
            </span>
          </h2>
          <p
            className="mt-3 sm:mt-4 text-gray-500 text-sm sm:text-base lg:text-lg max-w-xl mx-auto px-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Here&apos;s what some of our users have to say about Health Centric.
          </p>
        </div>

        {/* Masonry Grid - Desktop: 4 columns */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-3">
          <div className="space-y-3">
            {col1Initial.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
            <div className={`space-y-3 overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              {col1Extra.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
          <div className="space-y-3 mt-6">
            {col2Initial.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
            <div className={`space-y-3 overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              {col2Extra.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {col3Initial.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
            <div className={`space-y-3 overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              {col3Extra.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
          <div className="space-y-3 mt-6">
            {col4Initial.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
            <div className={`space-y-3 overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              {col4Extra.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </div>

        {/* Tablet: 2 columns */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-3">
          <div className="space-y-3">
            {[...col1Initial, ...col2Initial].map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
            <div className={`space-y-3 overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'max-h-[1000px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              {[...col1Extra, ...col2Extra].map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
          <div className="space-y-3 mt-4">
            {[...col3Initial, ...col4Initial].map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
            <div className={`space-y-3 overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'max-h-[1000px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              {[...col3Extra, ...col4Extra].map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: 1 column */}
        <div className="grid sm:hidden gap-2.5">
          {testimonials.slice(0, 4).map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
          <div className={`space-y-2.5 overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'max-h-[2000px] opacity-100 mt-2.5' : 'max-h-0 opacity-0'}`}>
            {testimonials.slice(4).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Show More / Show Less Button */}
        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {isExpanded ? 'Show less' : 'Read more'}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
