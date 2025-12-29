'use client';

import { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const incrementTime = duration / end;
          const timer = setInterval(() => {
            start += Math.ceil(end / 50);
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, incrementTime);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function USMapDots() {
  return (
    <svg viewBox="0 0 100 60" className="w-full h-auto max-w-[180px]">
      {/* Simplified US map shape using dots */}
      {[
        // West coast
        [8, 15], [10, 18], [8, 22], [10, 25], [12, 28], [10, 32], [12, 35],
        // Pacific Northwest
        [15, 12], [18, 10], [20, 12], [22, 10],
        // Mountain states
        [18, 18], [20, 20], [22, 18], [25, 15], [28, 18], [25, 22], [22, 25], [25, 28],
        [20, 28], [18, 32], [22, 32], [25, 35], [20, 38],
        // Southwest
        [15, 40], [18, 42], [22, 45], [25, 42], [28, 45],
        // Central
        [32, 15], [35, 18], [38, 15], [40, 18], [35, 22], [38, 25], [32, 25],
        [35, 28], [38, 32], [32, 32], [35, 35], [40, 35], [38, 38], [35, 42],
        [40, 42], [42, 38], [45, 35],
        // Midwest
        [45, 18], [48, 15], [50, 18], [52, 15], [55, 18], [48, 22], [52, 22],
        [50, 25], [55, 25], [48, 28], [52, 28], [55, 28],
        // Great Lakes
        [58, 15], [60, 12], [62, 15], [65, 12], [68, 15], [62, 18], [65, 18],
        // Northeast
        [70, 12], [72, 10], [75, 12], [78, 10], [80, 12], [82, 10], [85, 12],
        [72, 15], [75, 15], [78, 15], [80, 15], [75, 18], [78, 18], [82, 18],
        // East coast
        [85, 18], [88, 15], [85, 22], [88, 22], [85, 25], [82, 28], [85, 28],
        [80, 32], [82, 35], [78, 35], [80, 38], [75, 38], [78, 42],
        // Southeast
        [48, 35], [52, 38], [55, 35], [58, 38], [55, 42], [58, 42], [52, 45],
        [55, 48], [60, 45], [62, 42], [65, 45], [68, 42], [70, 45], [72, 42],
        [65, 48], [68, 50], [72, 48],
        // Florida
        [75, 45], [78, 48], [75, 52], [72, 55], [70, 52],
        // Texas
        [32, 42], [35, 45], [38, 48], [40, 45], [42, 48], [45, 45], [40, 52],
        [35, 52], [32, 48], [38, 55],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="1.2"
          fill="var(--color-brand)"
          opacity={0.7 + (i % 5) * 0.06}
        />
      ))}
    </svg>
  );
}

function GrowthChart() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const bars = [18, 25, 32, 38, 45, 52, 60, 72, 85, 100];

  return (
    <div ref={ref} className="flex items-end gap-1 h-20">
      {bars.map((height, i) => (
        <div
          key={i}
          className="flex-1 rounded-t transition-all duration-700 ease-out"
          style={{
            height: isVisible ? `${height}%` : '0%',
            backgroundColor: 'var(--color-brand)',
            opacity: 0.4 + (i * 0.06),
            transitionDelay: `${i * 80}ms`,
          }}
        />
      ))}
    </div>
  );
}

export default function TrustSection() {
  return (
    <section className="bg-[#faf8f5] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left - Headline & Trust Badges */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              <span
                className="italic block"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif', color: 'var(--color-brand)' }}
              >
                Trusted results
              </span>
              <span
                className="font-medium text-gray-900"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                from certified labs
              </span>
            </h2>

            <p
              className="mt-5 text-gray-500 text-base lg:text-lg leading-relaxed max-w-md"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              We partner with CLIA-certified laboratories trusted by physicians nationwide.
              No shortcuts, no compromises on accuracy.
            </p>

            {/* Trust Badges */}
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="h-8 w-8" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M20 2L4 8v12c0 9.55 6.82 18.48 16 20 9.18-1.52 16-10.45 16-20V8L20 2zm-2 28l-6-6 2.12-2.12L18 25.76l9.88-9.88L30 18l-12 12z"/>
                </svg>
                <div>
                  <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">CLIA</div>
                  <div className="text-[10px] text-gray-400">Certified</div>
                </div>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="h-8 w-8" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M20 4C12.27 4 6 10.27 6 18c0 5.52 3.19 10.29 7.82 12.57L20 36l6.18-5.43C30.81 28.29 34 23.52 34 18c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                </svg>
                <div>
                  <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">CAP</div>
                  <div className="text-[10px] text-gray-400">Accredited</div>
                </div>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="h-8 w-8" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" transform="translate(8, 8)"/>
                </svg>
                <div>
                  <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">HIPAA</div>
                  <div className="text-[10px] text-gray-400">Compliant</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Locations Card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="text-xs text-gray-500 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                <span style={{ color: 'var(--color-brand)' }} className="font-semibold">3,500+</span> lab locations across the US
              </div>
              <div className="flex justify-center mb-4">
                <USMapDots />
              </div>
              <div
                className="text-4xl font-semibold text-gray-900"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <AnimatedNumber value={3500} suffix="+" />
              </div>
            </div>

            {/* Results Card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="text-xs text-gray-500 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                <span style={{ color: 'var(--color-brand)' }} className="font-semibold">99.7%</span> accuracy rate verified
              </div>
              <div className="mb-4">
                <GrowthChart />
              </div>
              <div
                className="text-4xl font-semibold text-gray-900"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                99.7%
              </div>
            </div>

            {/* Results Delivered - Full Width */}
            <div className="sm:col-span-2 rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500 mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                    Results delivered to members
                  </div>
                  <div
                    className="text-3xl sm:text-4xl font-semibold text-gray-900"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    <AnimatedNumber value={250} suffix="K+" />
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium text-white"
                      style={{
                        backgroundColor: `hsl(${20 + i * 8}, 60%, ${55 + i * 5}%)`,
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
