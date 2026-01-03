import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface WaitlistConfirmationProps {
  firstName: string;
}

export default function WaitlistConfirmation({ firstName }: WaitlistConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Health Centric - You're on the waitlist!</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={logo}>Health Centric</Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h1}>You're on the list, {firstName}!</Heading>

            <Text style={paragraph}>
              Thank you for joining the Health Centric waitlist. We're excited to have you as one of the first to experience comprehensive health testing designed for preventive care.
            </Text>

            <Section style={featureBox}>
              <Text style={featureTitle}>What's coming your way:</Text>
              <Text style={featureItem}>100+ biomarkers tested</Text>
              <Text style={featureItem}>Professional blood collection (nurse visit or lab)</Text>
              <Text style={featureItem}>Results in 48 hours</Text>
              <Text style={featureItem}>Personalized health insights</Text>
            </Section>

            <Text style={paragraph}>
              Our team will review your information and reach out soon to schedule your health assessment. In the meantime, if you have any questions, feel free to reply to this email.
            </Text>

            <Section style={buttonContainer}>
              <Link href="https://healthcentric.com" style={button}>
                Learn More About Our Tests
              </Link>
            </Section>
          </Section>

          {/* Footer */}
          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>
              Health Centric - Preventive Health Testing
            </Text>
            <Text style={footerText}>
              Panama City, Panama
            </Text>
            <Text style={footerLinks}>
              <Link href="https://healthcentric.com/privacy" style={footerLink}>Privacy Policy</Link>
              {' • '}
              <Link href="https://healthcentric.com/terms" style={footerLink}>Terms of Service</Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#faf8f5',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '560px',
};

const header = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const logo = {
  fontSize: '24px',
  fontWeight: '700',
  color: '#B8654A',
  margin: '0',
};

const content = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '40px 32px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.4',
  margin: '0 0 24px',
};

const paragraph = {
  color: '#4a4a4a',
  fontSize: '15px',
  lineHeight: '1.7',
  margin: '0 0 20px',
};

const featureBox = {
  backgroundColor: '#faf8f5',
  borderRadius: '8px',
  padding: '20px 24px',
  margin: '24px 0',
};

const featureTitle = {
  color: '#1a1a1a',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 12px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const featureItem = {
  color: '#4a4a4a',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '0 0 8px',
  paddingLeft: '16px',
  position: 'relative' as const,
};

const buttonContainer = {
  textAlign: 'center' as const,
  marginTop: '32px',
};

const button = {
  backgroundColor: '#B8654A',
  borderRadius: '8px',
  color: '#ffffff',
  display: 'inline-block',
  fontSize: '14px',
  fontWeight: '600',
  padding: '14px 28px',
  textDecoration: 'none',
};

const hr = {
  borderColor: '#e5e5e5',
  margin: '32px 0',
};

const footer = {
  textAlign: 'center' as const,
};

const footerText = {
  color: '#8a8a8a',
  fontSize: '12px',
  lineHeight: '1.6',
  margin: '0 0 4px',
};

const footerLinks = {
  color: '#8a8a8a',
  fontSize: '12px',
  marginTop: '12px',
};

const footerLink = {
  color: '#B8654A',
  textDecoration: 'none',
};
