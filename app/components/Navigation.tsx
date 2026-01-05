'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from '../i18n/provider';
import LanguageSelector from './LanguageSelector';

interface NavItem {
  labelKey: string;
  href: string;
  sectionId?: string; // For scroll spy tracking
}

const navigationItems: NavItem[] = [
  { labelKey: 'nav.howItWorks', href: '#how-it-works', sectionId: 'how-it-works' },
  { labelKey: 'nav.whatWeTest', href: '#tests', sectionId: 'tests' },
  { labelKey: 'nav.pricing', href: '#pricing', sectionId: 'pricing' },
  { labelKey: 'nav.faq', href: '/faq' },
  { labelKey: 'nav.contact', href: '/contact' },
];

export default function Navigation() {
  const { t, isLoading } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Check if we're on home page
  const isHomePage = pathname === '/';

  // Check if we're on a page that needs always-white navbar
  const isWhiteNavbarPage = pathname === '/contact' || pathname === '/privacy' || pathname === '/terms' || pathname === '/test' || pathname === '/faq';

  // On these pages, always show scrolled (white) style
  const showScrolledStyle = isWhiteNavbarPage || isScrolled;

  // Get the correct href for hash links (prepend / if not on home page)
  const getNavHref = useCallback((item: NavItem) => {
    if (item.href.startsWith('#') && !isHomePage) {
      return '/' + item.href;
    }
    return item.href;
  }, [isHomePage]);

  // Handle navigation click for hash links
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.href.startsWith('#')) {
      if (isHomePage) {
        // On home page, smooth scroll to section
        e.preventDefault();
        const element = document.getElementById(item.sectionId || item.href.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // If not on home page, let the default Link behavior navigate to /#section
    }
    setIsMobileMenuOpen(false);
  }, [isHomePage]);

  // Scroll spy to track active section
  useEffect(() => {
    if (!isHomePage) {
      // Set active section based on current page
      if (pathname === '/contact') setActiveSection('contact');
      else if (pathname === '/faq') setActiveSection('faq');
      else setActiveSection(null);
      return;
    }

    const sectionIds = navigationItems
      .filter(item => item.sectionId)
      .map(item => item.sectionId as string);

    const handleScroll = () => {
      // Become sticky after scrolling past the hero section
      const heroHeight = window.innerHeight - 100;
      setIsScrolled(window.scrollY > heroHeight);

      // Find the current active section
      let currentSection: string | null = null;
      const scrollPosition = window.scrollY + 150; // Offset for header

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, pathname]);

  // Separate effect for non-home pages scroll behavior
  useEffect(() => {
    if (isWhiteNavbarPage) return;
    if (isHomePage) return; // Already handled above

    const handleScroll = () => {
      const heroHeight = window.innerHeight - 100;
      setIsScrolled(window.scrollY > heroHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isWhiteNavbarPage, isHomePage]);

  // Check if a nav item is active
  const isNavItemActive = useCallback((item: NavItem) => {
    if (item.sectionId && activeSection === item.sectionId) return true;
    if (item.href === '/contact' && pathname === '/contact') return true;
    if (item.href === '/faq' && pathname === '/faq') return true;
    return false;
  }, [activeSection, pathname]);

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
                {navigationItems.map((item) => {
                  const isActive = isNavItemActive(item);
                  return (
                    <Link
                      key={item.labelKey}
                      href={getNavHref(item)}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        showScrolledStyle
                          ? isActive
                            ? 'text-[var(--color-brand)] bg-[rgba(184,101,74,0.1)]'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                          : isActive
                            ? 'text-white bg-white/20'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {t(item.labelKey)}
                    </Link>
                  );
                })}
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
                {navigationItems.map((item) => {
                  const isActive = isNavItemActive(item);
                  return (
                    <Link
                      key={item.labelKey}
                      href={getNavHref(item)}
                      className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-[var(--color-brand)] bg-[rgba(184,101,74,0.1)]'
                          : 'text-gray-900'
                      }`}
                      style={!isActive ? { '--hover-bg': 'rgba(184, 101, 74, 0.1)', '--hover-color': 'var(--color-brand)' } as React.CSSProperties : undefined}
                      onMouseEnter={!isActive ? (e) => { e.currentTarget.style.backgroundColor = 'rgba(184, 101, 74, 0.1)'; e.currentTarget.style.color = 'var(--color-brand)'; } : undefined}
                      onMouseLeave={!isActive ? (e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; } : undefined}
                      onClick={(e) => handleNavClick(e, item)}
                    >
                      {t(item.labelKey)}
                    </Link>
                  );
                })}
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
