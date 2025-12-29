'use client';

import { useState } from 'react';
import Link from 'next/link';

const footerLinks = {
  company: [
    { label: 'Join Health Centric', href: '#get-started' },
    { label: 'Login', href: '#login' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact us', href: '#contact' },
  ],
  explore: [
    { label: 'What people say', href: '#testimonials' },
    { label: 'About', href: '#about' },
    { label: 'Lab locations', href: '#locations' },
    { label: 'Pricing', href: '#pricing' },
  ],
  community: [
    { label: 'Gift Health Centric', href: '#gift' },
    { label: 'For employers', href: '#employers' },
    { label: 'For practitioners', href: '#practitioners' },
    { label: 'Share your story', href: '#stories' },
  ],
};

const socialLinks = [
  {
    label: 'Twitter',
    href: '#twitter',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#instagram',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#linkedin',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#faf8f5]">
      {/* Main Footer */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12">
          {/* Logo */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div
                className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105"
                style={{ background: 'linear-gradient(135deg, var(--color-brand-light), var(--color-brand))' }}
              >
                <svg
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white"
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
              <span
                className="text-base sm:text-lg font-semibold text-gray-900"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Health Centric
              </span>
            </Link>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              {/* Company */}
              <div>
                <h4
                  className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 sm:mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Company
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group relative text-xs sm:text-sm text-gray-600 transition-colors duration-200 hover:text-gray-900"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        <span className="relative">
                          {link.label}
                          <span
                            className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                            style={{ backgroundColor: 'var(--color-brand)' }}
                          />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explore */}
              <div>
                <h4
                  className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 sm:mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Explore
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.explore.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group relative text-xs sm:text-sm text-gray-600 transition-colors duration-200 hover:text-gray-900"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        <span className="relative">
                          {link.label}
                          <span
                            className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                            style={{ backgroundColor: 'var(--color-brand)' }}
                          />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Community */}
              <div className="col-span-2 sm:col-span-1">
                <h4
                  className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 sm:mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Community
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.community.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group relative text-xs sm:text-sm text-gray-600 transition-colors duration-200 hover:text-gray-900"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        <span className="relative">
                          {link.label}
                          <span
                            className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                            style={{ backgroundColor: 'var(--color-brand)' }}
                          />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-5">
            <div className="max-w-sm lg:ml-auto">
              <h3
                className="text-lg sm:text-xl font-medium text-gray-900 leading-snug"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Subscribe and get health guides for living{' '}
                <span
                  className="italic"
                  style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif', color: 'var(--color-brand)' }}
                >
                  100 healthy years
                </span>
              </h3>
              <p
                className="mt-2 text-xs sm:text-sm text-gray-500"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Get foundational guides for lifelong health. Built by top experts with decades of research.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="mt-4 sm:mt-5 flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    required
                    className="flex-1 min-w-0 rounded-lg border border-gray-300 bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                  <button
                    type="submit"
                    className="rounded-lg px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-brand)' }}
                  >
                    Submit
                  </button>
                </form>
              ) : (
                <div
                  className="mt-4 sm:mt-5 rounded-lg bg-green-50 border border-green-200 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-green-700"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Thanks for subscribing! Check your email for your health guides.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-16 flex flex-col gap-4 sm:gap-6 border-t border-gray-200 pt-6 sm:pt-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-400 transition-all duration-200 hover:text-gray-600 hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-500">
            <Link
              href="#privacy"
              className="transition-colors hover:text-gray-700"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="transition-colors hover:text-gray-700"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Terms of Service
            </Link>
            <Link
              href="#hipaa"
              className="transition-colors hover:text-gray-700"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              HIPAA
            </Link>
          </div>

          {/* Copyright */}
          <p
            className="text-xs sm:text-sm text-gray-400"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            &copy; {new Date().getFullYear()} Health Centric
          </p>
        </div>
      </div>
    </footer>
  );
}
