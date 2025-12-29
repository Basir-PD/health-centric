'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { submitToWaitlist } from '../lib/supabase';
import { useTranslation } from '../i18n/provider';

const waitlistSchema = z.object({
  first_name: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  last_name: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long'),
  date_of_birth: z
    .string()
    .min(1, 'Date of birth is required'),
  health_issues: z
    .string()
    .min(10, 'Please describe your health issues in at least 10 characters')
    .max(1000, 'Health issues description is too long'),
  health_goals: z
    .string()
    .min(10, 'Please describe your health goals in at least 10 characters')
    .max(1000, 'Health goals description is too long'),
  message: z
    .string()
    .max(500, 'Message is too long')
    .optional(),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}

function FormField({ label, error, children, required = true }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <Label className="text-gray-600 font-normal text-sm">
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </Label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-xs text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WaitlistForm() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      date_of_birth: '',
      health_issues: '',
      health_goals: '',
      message: '',
    },
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await submitToWaitlist(data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3
          className="text-2xl font-semibold text-gray-900 mb-2"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t('waitlist.successTitle')}
        </h3>
        <p
          className="text-gray-600 mb-6 max-w-md mx-auto"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {t('waitlist.successMessage')}
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitStatus('idle')}
        >
          {t('waitlist.submitAnother')}
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <FormField label={t('waitlist.firstName')} error={errors.first_name?.message}>
          <Input
            {...register('first_name')}
            placeholder="John"
            disabled={isSubmitting}
          />
        </FormField>
        <FormField label={t('waitlist.lastName')} error={errors.last_name?.message}>
          <Input
            {...register('last_name')}
            placeholder="Doe"
            disabled={isSubmitting}
          />
        </FormField>
      </div>

      {/* Contact Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <FormField label={t('waitlist.email')} error={errors.email?.message}>
          <Input
            {...register('email')}
            type="email"
            placeholder="john@example.com"
            disabled={isSubmitting}
          />
        </FormField>
        <FormField label={t('waitlist.phone')} error={errors.phone?.message}>
          <Input
            {...register('phone')}
            type="tel"
            placeholder="+1 (555) 000-0000"
            disabled={isSubmitting}
          />
        </FormField>
      </div>

      {/* Date of Birth */}
      <FormField label={t('waitlist.dob')} error={errors.date_of_birth?.message}>
        <Input
          {...register('date_of_birth')}
          type="date"
          disabled={isSubmitting}
          className="appearance-none"
        />
      </FormField>

      {/* Health Issues */}
      <FormField label={t('waitlist.healthIssues')} error={errors.health_issues?.message}>
        <Textarea
          {...register('health_issues')}
          placeholder={t('waitlist.healthIssuesPlaceholder')}
          disabled={isSubmitting}
          className="min-h-[100px]"
        />
      </FormField>

      {/* Health Goals */}
      <FormField label={t('waitlist.healthGoals')} error={errors.health_goals?.message}>
        <Textarea
          {...register('health_goals')}
          placeholder={t('waitlist.healthGoalsPlaceholder')}
          disabled={isSubmitting}
          className="min-h-[100px]"
        />
      </FormField>

      {/* Additional Message */}
      <FormField label={t('waitlist.message')} error={errors.message?.message} required={false}>
        <Textarea
          {...register('message')}
          placeholder={t('waitlist.messagePlaceholder')}
          disabled={isSubmitting}
          className="min-h-[80px]"
        />
      </FormField>

      {/* Error Message */}
      <AnimatePresence>
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-lg bg-red-50 border border-red-200 p-4"
          >
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p className="text-sm font-medium text-red-800">
                  Failed to submit
                </p>
                <p className="text-sm text-red-600 mt-1">
                  {errorMessage}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {t('waitlist.submitting')}
          </span>
        ) : (
          t('waitlist.submit')
        )}
      </Button>

      {/* Privacy Note */}
      <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'var(--font-body)' }}>
        {t('waitlist.privacy')}{' '}
        <a href="/privacy" className="underline hover:text-gray-700">
          {t('waitlist.privacyLink')}
        </a>{' '}
        {t('waitlist.privacyConsent')}
      </p>
    </form>
  );
}
