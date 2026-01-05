import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import WaitlistConfirmation from '@/app/emails/WaitlistConfirmation';
import ContactConfirmation from '@/app/emails/ContactConfirmation';
import NewsletterWelcome from '@/app/emails/NewsletterWelcome';

// Import all locale files
import en from '@/app/i18n/locales/en.json';
import es from '@/app/i18n/locales/es.json';
import fr from '@/app/i18n/locales/fr.json';
import pt from '@/app/i18n/locales/pt.json';

type Locale = 'en' | 'es' | 'fr' | 'pt';

const translations: Record<Locale, typeof en> = { en, es, fr, pt };

function getTranslations(locale: string) {
  const validLocale = (locale && locale in translations ? locale : 'en') as Locale;
  return translations[validLocale];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, email, name, firstName, locale = 'en' } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const t = getTranslations(locale);
    let emailContent;
    let subject;

    switch (type) {
      case 'waitlist':
        subject = t.emails.waitlist.subject;
        emailContent = WaitlistConfirmation({
          firstName: firstName || 'there',
          translations: {
            common: t.emails.common,
            waitlist: t.emails.waitlist,
          },
        });
        break;

      case 'contact':
        subject = t.emails.contact.subject;
        emailContent = ContactConfirmation({
          name: name || 'there',
          translations: {
            common: t.emails.common,
            contact: t.emails.contact,
          },
        });
        break;

      case 'newsletter':
        subject = t.emails.newsletter.subject;
        emailContent = NewsletterWelcome({
          translations: {
            common: t.emails.common,
            newsletter: t.emails.newsletter,
          },
        });
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid email type' },
          { status: 400 }
        );
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.log('📧 Email would be sent (Resend not configured):', {
        to: email,
        subject,
        type,
        locale,
      });
      return NextResponse.json({
        success: true,
        message: 'Email simulated (Resend not configured)',
      });
    }

    // Initialize Resend inside the function (not at module level)
    // to avoid build-time errors when env vars aren't available
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Health Centric <onboarding@resend.dev>',
      to: email,
      subject,
      react: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('✅ Email sent successfully:', { ...data, locale });
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
