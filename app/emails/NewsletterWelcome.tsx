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

export default function NewsletterWelcome() {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Health Centric - Your guide is on the way!</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={logo}>Health Centric</Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h1}>Welcome to the Health Centric community!</Heading>

            <Text style={paragraph}>
              You're now subscribed to receive evidence-based health insights for living better, longer. No fluff, just science.
            </Text>

            <Section style={featureBox}>
              <Text style={featureTitle}>What you'll receive:</Text>
              <Text style={featureItem}>Expert-backed guides on prevention and longevity</Text>
              <Text style={featureItem}>Latest research on biomarkers and health optimization</Text>
              <Text style={featureItem}>Exclusive tips from our medical team</Text>
              <Text style={featureItem}>Early access to new features and services</Text>
            </Section>

            <Text style={paragraph}>
              We respect your inbox and only send valuable content. Expect to hear from us 1-2 times per month with insights that can actually improve your health.
            </Text>

            <Section style={buttonContainer}>
              <Link href="https://healthcentric.com" style={button}>
                Explore Our Health Tests
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
              {' • '}
              <Link href="https://healthcentric.com/unsubscribe" style={footerLink}>Unsubscribe</Link>
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
