'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
}

const navigation: NavItem[] = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'What we test', href: '#tests' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'About', href: '#about' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Main Navigation */}
      <header
        className="fixed left-0 right-0 top-0 z-50 transition-all duration-700 ease-out"
      >
        <div className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled
            ? 'mx-0 px-0 pt-0'
            : 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3'
        }`}>
          <nav
            className={`transition-[background-color,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isScrolled
                ? 'rounded-none bg-white/70 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.08)] border-b border-gray-200/50'
                : 'rounded-lg bg-black/20 border border-white/10'
            }`}
            style={{
              backdropFilter: 'blur(16px) saturate(180%)',
              WebkitBackdropFilter: 'blur(16px) saturate(180%)'
            }}
          >
            <div className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled
                ? 'h-14 px-4 lg:h-16 lg:px-8 mx-auto max-w-7xl'
                : 'h-16 px-5 lg:h-[72px] lg:px-6'
            }`}>
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 group">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 ${
                    isScrolled ? 'shadow-sm' : 'bg-white/20'
                  }`}
                  style={isScrolled ? { background: 'linear-gradient(to bottom right, var(--color-brand-light), var(--color-brand))' } : {}}
                >
                  <svg
                    className={`h-5 w-5 transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-white'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <span className={`text-base font-semibold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`} style={{ fontFamily: 'var(--font-display)' }}>
                  Health Centric
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isScrolled
                        ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex lg:items-center lg:gap-3">
                <Link
                  href="#login"
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-600 hover:text-gray-900'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="#get-started"
                  className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-brand)', boxShadow: '0 4px 6px -1px rgba(184, 101, 74, 0.2)' }}
                >
                  Start testing
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className={`lg:hidden rounded-lg p-1.5 transition-all duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative h-4 w-5">
                  <span
                    className={`absolute left-0 block h-0.5 w-5 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen
                        ? 'top-2 rotate-45 bg-gray-900'
                        : `top-0 ${isScrolled ? 'bg-gray-700' : 'bg-white'}`
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-2 block h-0.5 w-5 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen
                        ? 'opacity-0'
                        : `opacity-100 ${isScrolled ? 'bg-gray-700' : 'bg-white'}`
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-0.5 w-5 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen
                        ? 'top-2 -rotate-45 bg-gray-900'
                        : `top-4 ${isScrolled ? 'bg-gray-700' : 'bg-white'}`
                    }`}
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 top-16 transition-all duration-500 ${
            isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
              isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className={`absolute inset-x-4 top-2 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-500 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}
          >
            <div className="max-h-[calc(100vh-6rem)] overflow-y-auto p-5">
              <div className="space-y-0.5">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-900 transition-colors"
                    style={{ '--hover-bg': 'rgba(184, 101, 74, 0.1)', '--hover-color': 'var(--color-brand)' } as React.CSSProperties}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(184, 101, 74, 0.1)'; e.currentTarget.style.color = 'var(--color-brand)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 space-y-2.5 border-t border-gray-100 pt-5">
                <Link
                  href="#login"
                  className="block w-full rounded-xl border border-gray-200 px-4 py-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="#get-started"
                  className="block w-full rounded-xl px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-brand)', boxShadow: '0 4px 6px -1px rgba(184, 101, 74, 0.2)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start testing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
