import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text
} from '@react-email/components'

const trailingSlashRegex = /\/$/
const baseUrl = String(
  process.env.BASE_URL || 'https://truthordare.gg/'
).replace(trailingSlashRegex, '')
const apiPath = '/api/emails/confirm'

export function ConfirmEmail({ id }: { id: string }) {
  if (!id) {
    throw new Error('ID is required')
  }

  const url = `${baseUrl}${apiPath}?id=${id}`

  return (
    <Html>
      <Head />
      <Preview>
        Confirm your email for Truth or Dare launch notification
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Get Ready for Truth or Dare!</Heading>
          <Text style={text}>
            Thanks for your interest! Confirm your email to be notified when our
            app launches. You'll be among the first to experience the ultimate
            Truth or Dare game.
          </Text>
          <Section style={buttonContainer}>
            <Button
              href={url}
              style={button}
            >
              Confirm Email
            </Button>
          </Section>
          <Text style={footer}>
            If you didn't request this email, you can safely ignore it. Someone
            might have entered your email address by mistake.
          </Text>
          <Hr style={divider} />
          <Section style={legalContainer}>
            <Link
              href="https://truthordare.gg/privacy"
              style={legalLink}
            >
              Privacy Policy
            </Link>
            <Text style={separator}>•</Text>
            <Link
              href="https://truthordare.gg/legal"
              style={legalLink}
            >
              Legal Notice
            </Link>
            <Text style={separator}>•</Text>
            <Link
              href="https://truthordare.gg/terms"
              style={legalLink}
            >
              Terms of Service
            </Link>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
}

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '560px'
}

const heading = {
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.3',
  color: '#111111',
  margin: '0 0 15px'
}

const text = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#444444',
  margin: '0 0 20px'
}

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '30px 0'
}

const button = {
  backgroundColor: '#FF6B6B',
  backgroundImage: 'linear-gradient(to right, #FF6B6B, #FF758C, #FF8FAB)',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 30px',
  border: '0px'
}

const footer = {
  fontSize: '14px',
  lineHeight: '1.5',
  color: '#777777',
  margin: '30px 0 0',
  fontStyle: 'italic'
}

const divider = {
  borderTop: '1px solid #E5E5E5',
  margin: '30px 0 20px'
}

const legalContainer = {
  textAlign: 'center' as const,
  color: '#666666',
  fontSize: '12px'
}

const legalLink = {
  color: '#666666',
  textDecoration: 'underline'
}

const separator = {
  margin: '0 8px',
  color: '#666666',
  display: 'inline'
}
