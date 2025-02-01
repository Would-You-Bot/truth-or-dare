import { LegalLayout } from '@/components/legal-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Our terms of service for the Truth or Dare app.',
}

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service">
      <main className="mx-auto flex w-full max-w-8xl flex-col gap-8 pr-8 text-white">
        <section>
          <p className="text-lg mb-4"><b>Last updated</b> [February 1, 2024]</p>
          <p>
            Rivo ("we," "us," or "our") operates this website to allow users to sign up for our Truth or Dare app. We are committed to protecting your personal data in compliance with the General Data Protection Regulation (GDPR) and German data protection laws.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg">1. Data Controller</h2>
          <p>
            Rivo
          </p>
          <p>
            Email: <a href='mailto:contact@rivo.gg' className='underline underline-offset-1'>[contact@rivo.gg]</a>
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg">2. Data We Collect and Purpose</h2>
          <p className='mb-2'>
            We only collect the following personal data:
          </p>
          <ul className="list-inside list-disc">
            <li>
              <b>Email Address</b>: Collected when you sign up to notify you about our app launch and updates.
            </li>
            <li>
              <b>IP Address</b>: Temporarily processed for security purposes (via Cloudflare Turnstile).
            </li>
            <li>
              <b>Analytics Data</b>: We use Plausible Analytics, which is GDPR-compliant and does not use cookies.
            </li>
          </ul>
          <p className='mt-2'>
            We process this data based on <b>user consent</b> <a rel='noopener' target="_blank" href='https://gdpr-info.eu/art-6-gdpr/' className='underline underline-offset-1' >(Article 6(1)(a) GDPR)</a>. You may withdraw your consent at any time.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg">3. How Long We Store Data</h2>
          <ul className="list-inside list-disc">
            <li>
              Verified email addresses are stored <b>until the app launches</b> or until the user unsubscribes.
            </li>
            <li>
              Unverified emails are deleted <b>after 15 minutes</b>.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-lg">4. Data Sharing and Third Parties</h2>
          <ul className="list-inside list-disc">
            <li>
              <b>Resend (Email Provider, Ireland)</b> – Used for email delivery and hosting within the EU.
            </li>
            <li>
              <b>Plausible Analytics (EU-based)</b> – Used for privacy-friendly, cookie-free analytics.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-lg">5. User rights</h2>
          <p className='mb-2'>
            You have the right to:
          </p>
          <ul className="list-inside list-disc">
            <li>
              <b>Access</b>: your data
            </li>
            <li>
              <b>Request deletion</b>: via <a href='mailto:deletemydata@rivo.gg' className='underline'>[deletemydata@rivo.gg]</a> or the unsubscribe link in emails
            </li>
            <li>
              <b>Withdraw consent</b>: at any time
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-lg">6. International Data Transfers</h2>
          <p>
            We store all user data within the <b>EU</b>
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg">7. Contact</h2>
          <p>
            For any privacy concerns, contact us at. <a href='contact@rivo.gg' className='underline'>[contact@rivo.gg]</a>
          </p>
        </section>
      </main>
    </LegalLayout>
  )
}
