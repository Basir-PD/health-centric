'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslation } from '../i18n/provider';
import LanguageSelector from './LanguageSelector';

interface NavItem {
  labelKey: string;
  href: string;
}

const navigationItems: NavItem[] = [
  { labelKey: 'nav.howItWorks', href: '#how-it-works' },
  { labelKey: 'nav.whatWeTest', href: '/test' },
  { labelKey: 'nav.pricing', href: '#pricing' },
  { labelKey: 'nav.faq', href: '#faq' },
  { labelKey: 'nav.contact', href: '/contact' },
];

export default function Navigation() {
  const { t, isLoading } = useTranslation();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if we're on a page that needs always-white navbar
  const isWhiteNavbarPage = pathname === '/contact' || pathname === '/privacy' || pathname === '/terms' || pathname === '/test';

  // On these pages, always show scrolled (white) style
  const showScrolledStyle = isWhiteNavbarPage || isScrolled;

  useEffect(() => {
    // Skip scroll listener on pages with always-white navbar
    if (isWhiteNavbarPage) return;

    const handleScroll = () => {
      // Become sticky after scrolling past the hero section (viewport height - some offset)
      const heroHeight = window.innerHeight - 100;
      setIsScrolled(window.scrollY > heroHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isWhiteNavbarPage]);

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
      {/* Main Navigation - Always fixed at top */}
      <header
        className="fixed left-0 right-0 top-0 z-50 transition-all duration-700 ease-out"
      >
        <div className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          showScrolledStyle
            ? 'mx-0 px-0 pt-0'
            : 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3'
        }`}>
          <nav
            className={`transition-[background-color,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              showScrolledStyle
                ? 'rounded-none bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.08)] border-b border-gray-200/50'
                : 'rounded-lg bg-black/30 border border-white/10'
            }`}
            style={{
              backdropFilter: showScrolledStyle ? 'none' : 'blur(16px) saturate(180%)',
              WebkitBackdropFilter: showScrolledStyle ? 'none' : 'blur(16px) saturate(180%)'
            }}
          >
            <div className={`flex items-center justify-between transition-all duration-500 ${
              showScrolledStyle
                ? 'h-14 px-4 lg:h-16 lg:px-8 mx-auto max-w-7xl'
                : 'h-16 px-5 lg:h-[72px] lg:px-6'
            }`}>
              {/* Logo */}
              <Link href="/" className="flex items-center group">
                <Image
                  src="/logo-main.png"
                  alt="Health Centric"
                  width={160}
                  height={48}
                  className="h-10 w-auto transition-all duration-300"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:gap-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.labelKey}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      showScrolledStyle
                        ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {t(item.labelKey)}
                  </Link>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex lg:items-center lg:gap-3">
                <LanguageSelector isScrolled={showScrolledStyle} />
                <Link
                  href="/test"
                  className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-brand)', boxShadow: '0 4px 6px -1px rgba(184, 101, 74, 0.2)' }}
                >
                  {t('nav.startTesting')}
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className={`lg:hidden rounded-lg p-1.5 transition-all duration-300 ${
                  showScrolledStyle
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
                        : `top-0 ${showScrolledStyle ? 'bg-gray-700' : 'bg-white'}`
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-2 block h-0.5 w-5 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen
                        ? 'opacity-0'
                        : `opacity-100 ${showScrolledStyle ? 'bg-gray-700' : 'bg-white'}`
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-0.5 w-5 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen
                        ? 'top-2 -rotate-45 bg-gray-900'
                        : `top-4 ${showScrolledStyle ? 'bg-gray-700' : 'bg-white'}`
                    }`}
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 top-0 pt-20 transition-all duration-500 ${
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
                {navigationItems.map((item) => (
                  <Link
                    key={item.labelKey}
                    href={item.href}
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-900 transition-colors"
                    style={{ '--hover-bg': 'rgba(184, 101, 74, 0.1)', '--hover-color': 'var(--color-brand)' } as React.CSSProperties}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(184, 101, 74, 0.1)'; e.currentTarget.style.color = 'var(--color-brand)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.labelKey)}
                  </Link>
                ))}
              </div>

              {/* Mobile Language Selector */}
              <div className="mt-4 border-t border-gray-100 pt-4">
                <LanguageSelector isScrolled={true} />
              </div>

              <div className="mt-4 space-y-2.5 border-t border-gray-100 pt-5">
                <Link
                  href="/test"
                  className="block w-full rounded-xl px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-brand)', boxShadow: '0 4px 6px -1px rgba(184, 101, 74, 0.2)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.startTesting')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
