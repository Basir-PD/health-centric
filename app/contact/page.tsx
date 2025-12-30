'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { submitToContact } from '../lib/supabase';
import { useTranslation } from '../i18n/provider';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navigation from '../components/Navigation';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitError('');

    try {
      await submitToContact({
        name: data.name,
        email: data.email,
        phone: data.phone || undefined,
        message: data.message,
      });

      setIsSubmitted(true);
      reset();
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitError(err instanceof Error ? err.message : t('contact.error'));
    }
  };

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      {/* Shared Navigation - always shows white/scrolled style on contact page */}
      <Navigation />

      {/* Main Content - Centered */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="w-full max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6"
                style={{ backgroundColor: 'rgba(184, 101, 74, 0.1)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium" style={{ color: 'var(--color-brand)' }}>
                  Usually responds within 24 hours
                </span>
              </div>

              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 tracking-tight leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Let&apos;s start your{' '}
                <span className="italic" style={{ fontFamily: 'Georgia, serif', color: 'var(--color-brand)' }}>
                  health journey
                </span>
              </h1>

              <p
                className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Have questions about our health testing? We&apos;re here to help.
              </p>

              {/* Contact Options */}
              <div className="mt-6 space-y-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/50768317334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:border-[#25D366]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">WhatsApp</p>
                    <p className="text-xs text-gray-500">+507 6831 7334</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#25D366] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:al@healthcentric.ai"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(184, 101, 74, 0.1)' }}>
                    <svg className="w-4 h-4" style={{ color: 'var(--color-brand)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-xs text-gray-500">alnoor@healthcentric.ai</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Ley 81 Compliant
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    256-bit SSL
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl shadow-gray-900/5 border border-gray-100"
              >
                <h2
                  className="text-lg font-semibold text-gray-900 mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Send us a message
                </h2>

                <div className="space-y-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-gray-600 font-normal text-sm">
                      Full name <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      {...register('name', { required: true })}
                      className={errors.name ? 'ring-2 ring-red-200' : ''}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500">{t('contact.required')}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-gray-600 font-normal text-sm">
                      Email address <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                      })}
                      className={errors.email ? 'ring-2 ring-red-200' : ''}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500">{t('contact.validEmail')}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-gray-600 font-normal text-sm">
                      Phone number <span className="text-gray-400">(optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      {...register('phone')}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-gray-600 font-normal text-sm">
                      How can we help? <span className="text-red-400">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      {...register('message', { required: true })}
                      className={`min-h-[80px] ${errors.message ? 'ring-2 ring-red-200' : ''}`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500">{t('contact.required')}</p>
                    )}
                  </div>

                  {/* Error Message */}
                  {submitError && (
                    <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-700">
                      {submitError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 text-sm font-semibold"
                    style={{ backgroundColor: 'var(--color-brand)' }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send message'
                    )}
                  </Button>

                  {/* Privacy Note */}
                  <p className="text-xs text-gray-400 text-center">
                    By submitting, you agree to our{' '}
                    <Link href="/privacy" className="underline hover:text-gray-600">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl shadow-gray-900/5 border border-gray-100 text-center"
              >
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full mb-6"
                  style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}
                >
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2
                  className="text-2xl font-medium text-gray-900 mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Message sent!
                </h2>
                <p
                  className="text-gray-500 mb-8"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another message
                  </Button>
                  <Link href="/">
                    <Button style={{ backgroundColor: 'var(--color-brand)' }}>
                      Back to home
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
        </div>
      </div>
    </main>
  );
}
