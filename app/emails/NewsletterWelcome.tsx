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

interface NewsletterWelcomeProps {
  translations: {
    common: {
      logo: string;
      footer: string;
      location: string;
      privacyPolicy: string;
      termsOfService: string;
      unsubscribe: string;
    };
    newsletter: {
      preview: string;
      heading: string;
      intro: string;
      featuresTitle: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
      outro: string;
      cta: string;
    };
  };
}

export default function NewsletterWelcome({ translations }: NewsletterWelcomeProps) {
  const t = translations;

  return (
    <Html>
      <Head />
      <Preview>{t.newsletter.preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={logo}>{t.common.logo}</Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h1}>{t.newsletter.heading}</Heading>

            <Text style={paragraph}>
              {t.newsletter.intro}
            </Text>

            <Section style={featureBox}>
              <Text style={featureTitle}>{t.newsletter.featuresTitle}</Text>
              <Text style={featureItem}>• {t.newsletter.feature1}</Text>
              <Text style={featureItem}>• {t.newsletter.feature2}</Text>
              <Text style={featureItem}>• {t.newsletter.feature3}</Text>
              <Text style={featureItem}>• {t.newsletter.feature4}</Text>
            </Section>

            <Text style={paragraph}>
              {t.newsletter.outro}
            </Text>

            <Section style={buttonContainer}>
              <Link href="https://healthcentric.ai" style={button}>
                {t.newsletter.cta}
              </Link>
            </Section>
          </Section>

          {/* Footer */}
          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>
              {t.common.footer}
            </Text>
            <Text style={footerText}>
              {t.common.location}
            </Text>
            <Text style={footerLinks}>
              <Link href="https://healthcentric.ai/privacy" style={footerLink}>{t.common.privacyPolicy}</Link>
              {' • '}
              <Link href="https://healthcentric.ai/terms" style={footerLink}>{t.common.termsOfService}</Link>
              {' • '}
              <Link href="https://healthcentric.ai/unsubscribe" style={footerLink}>{t.common.unsubscribe}</Link>
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
