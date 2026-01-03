import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactConfirmationProps {
  name: string;
}

export default function ContactConfirmation({ name }: ContactConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>We received your message - Health Centric</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={logo}>Health Centric</Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h1}>Thanks for reaching out, {name}!</Heading>

            <Text style={paragraph}>
              We've received your message and appreciate you taking the time to contact us. Our team will review your inquiry and get back to you within 24 hours.
            </Text>

            <Section style={infoBox}>
              <Text style={infoTitle}>What happens next?</Text>
              <Text style={infoText}>
                A member of our team will carefully review your message and respond via email. For urgent matters, you can also reach us directly at:
              </Text>
              <Text style={contactInfo}>
                <Link href="mailto:hello@healthcentric.com" style={emailLink}>
                  hello@healthcentric.com
                </Link>
              </Text>
            </Section>

            <Text style={paragraph}>
              In the meantime, feel free to explore our website to learn more about our comprehensive health testing services.
            </Text>

            <Section style={buttonContainer}>
              <Link href="https://healthcentric.com" style={button}>
                Explore Health Centric
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

const infoBox = {
  backgroundColor: '#faf8f5',
  borderRadius: '8px',
  padding: '20px 24px',
  margin: '24px 0',
};

const infoTitle = {
  color: '#1a1a1a',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 12px',
};

const infoText = {
  color: '#4a4a4a',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '0 0 12px',
};

const contactInfo = {
  margin: '0',
};

const emailLink = {
  color: '#B8654A',
  fontWeight: '600',
  textDecoration: 'none',
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
