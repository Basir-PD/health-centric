'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { getSupabase } from '../lib/supabase';
import { useTranslation } from '../i18n/provider';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  agreeTerms: boolean;
  agreeAuthorization: boolean;
  agreeLabResults: boolean;
};

export default function ContactPage() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [agreements, setAgreements] = useState({
    terms: false,
    authorization: false,
    labResults: false,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>();

  const allAgreed = agreements.terms && agreements.authorization && agreements.labResults;

  const onSubmit = async (data: FormData) => {
    if (!allAgreed) {
      setSubmitError(t('contact.agreeError'));
      return;
    }

    setSubmitError('');

    try {
      const supabase = getSupabase();

      if (!supabase) {
        throw new Error('Supabase not configured');
      }

      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone || null,
            message: data.message,
            agreed_terms: agreements.terms,
            agreed_authorization: agreements.authorization,
            agreed_lab_results: agreements.labResults,
          }
        ]);

      if (error) throw error;

      setIsSubmitted(true);
      reset();
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitError(t('contact.error'));
    }
  };

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105"
              style={{ background: 'linear-gradient(135deg, var(--color-brand-light), var(--color-brand))' }}
            >
              <svg
                className="h-4 w-4 text-white"
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
              className="text-lg font-semibold text-gray-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Health Centric
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Page Header */}
          <div className="text-center mb-10">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {t('contact.title')}
            </h1>
            <p
              className="mt-4 text-gray-500 text-base sm:text-lg"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {t('contact.subtitle')}
            </p>

            {/* WhatsApp Contact */}
            <div className="mt-6 flex items-center justify-center">
              <a
                href="https://wa.me/50768317334"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full px-5 py-3 bg-[#25D366] text-white font-medium text-sm transition-all duration-300 hover:bg-[#20BD5C] hover:scale-105 shadow-lg shadow-[#25D366]/25"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp: +507 6831 7334
              </a>
            </div>
          </div>

          {/* Form */}
          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" style={{ fontFamily: 'var(--font-display)' }}>
                    {t('contact.name')} *
                  </Label>
                  <Input
                    id="name"
                    placeholder={t('contact.namePlaceholder')}
                    {...register('name', { required: true })}
                    className={errors.name ? 'border-red-300' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{t('contact.required')}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" style={{ fontFamily: 'var(--font-display)' }}>
                    {t('contact.email')} *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('contact.emailPlaceholder')}
                    {...register('email', {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    })}
                    className={errors.email ? 'border-red-300' : ''}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{t('contact.validEmail')}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" style={{ fontFamily: 'var(--font-display)' }}>
                    {t('contact.phone')}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t('contact.phonePlaceholder')}
                    {...register('phone')}
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" style={{ fontFamily: 'var(--font-display)' }}>
                    {t('contact.message')} *
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder={t('contact.messagePlaceholder')}
                    {...register('message', { required: true })}
                    className={errors.message ? 'border-red-300' : ''}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{t('contact.required')}</p>
                  )}
                </div>

                {/* Agreement Checkboxes */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-700" style={{ fontFamily: 'var(--font-display)' }}>
                    {t('contact.agreements')}
                  </p>

                  {/* Terms of Service */}
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={agreements.terms}
                      onCheckedChange={(checked) =>
                        setAgreements(prev => ({ ...prev, terms: checked as boolean }))
                      }
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {t('contact.agreeTerms')}{' '}
                      <Link href="/terms" className="underline hover:text-gray-900">
                        {t('contact.termsLink')}
                      </Link>{' '}
                      {t('contact.and')}{' '}
                      <Link href="/privacy" className="underline hover:text-gray-900">
                        {t('contact.privacyLink')}
                      </Link>
                    </label>
                  </div>

                  {/* Authorization */}
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="authorization"
                      checked={agreements.authorization}
                      onCheckedChange={(checked) =>
                        setAgreements(prev => ({ ...prev, authorization: checked as boolean }))
                      }
                    />
                    <label
                      htmlFor="authorization"
                      className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {t('contact.agreeAuthorization')}{' '}
                      <Link href="/authorization" className="underline hover:text-gray-900">
                        {t('contact.authorizationLink')}
                      </Link>
                    </label>
                  </div>

                  {/* Lab Results */}
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="labResults"
                      checked={agreements.labResults}
                      onCheckedChange={(checked) =>
                        setAgreements(prev => ({ ...prev, labResults: checked as boolean }))
                      }
                    />
                    <label
                      htmlFor="labResults"
                      className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {t('contact.agreeLabResults')}{' '}
                      <Link href="/lab-results" className="underline hover:text-gray-900">
                        {t('contact.labResultsLink')}
                      </Link>
                    </label>
                  </div>
                </div>

                {/* Error Message */}
                {submitError && (
                  <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                    {submitError}
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || !allAgreed}
                  className="w-full py-6 text-sm font-semibold"
                  style={{ backgroundColor: 'var(--color-brand)' }}
                >
                  {isSubmitting ? t('contact.submitting') : t('contact.submit')}
                </Button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 text-center"
            >
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full mb-6"
                style={{ backgroundColor: 'var(--color-brand)' }}
              >
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2
                className="text-2xl font-medium text-gray-900 mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {t('contact.successTitle')}
              </h2>
              <p
                className="text-gray-500 mb-8"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {t('contact.successMessage')}
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: 'var(--color-brand)' }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {t('contact.backHome')}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
