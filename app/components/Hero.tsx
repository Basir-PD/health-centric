'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';

const videoSources = ['/hero-main.mp4', '/hero.mp4'];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const switchVideo = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videoSources.length);
      setIsFading(false);
    }, 500);
  }, []);

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, video will remain paused
      });
    }

    // Switch video every 5 seconds
    const interval = setInterval(() => {
      switchVideo();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentVideoIndex, switchVideo]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gray-900"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900" />

        {/* Video Element */}
        <video
          ref={videoRef}
          key={currentVideoIndex}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
        >
          <source src={videoSources[currentVideoIndex]} type="video/mp4" />
        </video>

        {/* Overlay Gradients - Darker for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* Animated Gradient Orb */}
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-pulse-slow pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(184, 101, 74, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col justify-center pb-32 pt-24">
          <div className="max-w-2xl">
            {/* Badge */}
            <p
              className="text-sm font-medium tracking-wide uppercase animate-fade-in"
              style={{ color: 'var(--color-brand-light)' }}
            >
              HSA/FSA Eligible
            </p>

            {/* Main Headline */}
            <h1
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl animate-slide-up"
              style={{
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: '1.15',
                color: 'white'
              }}
            >
              Your advanced<br />
              health check
            </h1>

            {/* Subheadline */}
            <p
              className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-lg animate-slide-up stagger-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Every year. Starting with 100+ lab tests detecting 1000+ conditions.
              Just $499 → <span className="text-white font-medium">$299 per year</span>—$1 per day.
            </p>

            {/* CTA Button */}
            <div className="mt-8 animate-slide-up stagger-3">
              <Link
                href="#get-started"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: 'var(--color-brand)',
                }}
              >
                Start testing
              </Link>
            </div>
          </div>

          {/* Bottom Stats Strip */}
          <div className="absolute bottom-6 sm:bottom-8 left-0 right-0">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-row sm:items-center sm:gap-0">
                {[
                  { value: '100+', label: 'lab tests', sublabel: 'Detect 1k+ diseases' },
                  { value: '2x', label: 'per year', sublabel: 'Track for life' },
                  { value: 'No', label: 'insurance', sublabel: 'Transparent cost' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`${
                      index !== 2 ? 'sm:border-r sm:border-white/20 sm:pr-6 md:pr-10 sm:mr-6 md:mr-10' : ''
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-1.5">
                      <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                        {stat.value}
                      </span>
                      <span className="text-xs sm:text-base md:text-lg font-medium text-white/90">
                        {stat.label}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/60 hidden sm:block">{stat.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
