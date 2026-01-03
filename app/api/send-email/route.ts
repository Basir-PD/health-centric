import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import WaitlistConfirmation from '@/app/emails/WaitlistConfirmation';
import ContactConfirmation from '@/app/emails/ContactConfirmation';
import NewsletterWelcome from '@/app/emails/NewsletterWelcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, email, name, firstName } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    let emailContent;
    let subject;

    switch (type) {
      case 'waitlist':
        subject = "You're on the Health Centric waitlist!";
        emailContent = WaitlistConfirmation({ firstName: firstName || 'there' });
        break;

      case 'contact':
        subject = 'We received your message - Health Centric';
        emailContent = ContactConfirmation({ name: name || 'there' });
        break;

      case 'newsletter':
        subject = 'Welcome to Health Centric!';
        emailContent = NewsletterWelcome();
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
      });
      return NextResponse.json({
        success: true,
        message: 'Email simulated (Resend not configured)',
      });
    }

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

    console.log('✅ Email sent successfully:', data);
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
