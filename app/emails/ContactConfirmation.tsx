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
  translations: {
    common: {
      logo: string;
      footer: string;
      location: string;
      privacyPolicy: string;
      termsOfService: string;
    };
    contact: {
      preview: string;
      heading: string;
      intro: string;
      nextStepsTitle: string;
      nextStepsText: string;
      outro: string;
      cta: string;
    };
  };
}

export default function ContactConfirmation({ name, translations }: ContactConfirmationProps) {
  const t = translations;

  return (
    <Html>
      <Head />
      <Preview>{t.contact.preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={logo}>{t.common.logo}</Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h1}>{t.contact.heading.replace('{name}', name)}</Heading>

            <Text style={paragraph}>
              {t.contact.intro}
            </Text>

            <Section style={infoBox}>
              <Text style={infoTitle}>{t.contact.nextStepsTitle}</Text>
              <Text style={infoText}>
                {t.contact.nextStepsText}
              </Text>
              <Text style={contactInfo}>
                <Link href="mailto:support@healthcentric.ai" style={emailLink}>
                  support@healthcentric.ai
                </Link>
              </Text>
            </Section>

            <Text style={paragraph}>
              {t.contact.outro}
            </Text>

            <Section style={buttonContainer}>
              <Link href="https://healthcentric.ai" style={button}>
                {t.contact.cta}
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
