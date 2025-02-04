import { LegalLayout } from '@/components/legal-layout'

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service">
      <main className="mx-auto flex w-full max-w-8xl flex-col gap-8 pr-8 text-white">
        <section>
          <p className="text-lg mb-4"><b>Last updated</b> February 2, 2024</p>
        </section>

        <section>
          <h2 className="font-bold text-lg">1. Eligibility</h2>
          <p>
            You must be at least <b>13 years old</b> and reside in a country where the <b>Google Play Store</b> and <b>Apple App Store</b> are available.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg">2. User Obligations</h2>
          <p className='mb-2'>
            By signing up, you agree to:
          </p>
          <ul className="list-inside list-disc">
            <li>
              Provide a valid email address (no fake emails, emails from temporary services, or disposable emails)
            </li>
            <li>
              Use our services fairly
            </li>
            <li>
              Receive <b>marketing emails</b> about our app launch and updates
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-lg">3. Violations</h2>
          <p>
            We reserve the right to <b>ban users</b> who violate these terms.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg">4. Liability Disclaimer</h2>
          <p>
            We are <b>not responsible</b> for any misuse of our app or inappropriate content created by users.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg">5. Account Termination</h2>
          <p>
            Users can delete their data by:
          </p>
          <ul className="list-inside list-disc">
            <li>
              Sending an email to <a href='mailto:deletemydata@rivo.gg' className='underline underline-offset-1'>deletemydata@rivo.gg</a>
            </li>
            <li>
              Using the deletion button in the app (when available)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-lg">6. Governing Law</h2>
          <p>
            These terms are governed by the laws of <b>Germany</b>.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg">7. Third-Party Services</h2>
          <p>
            Currently, we <b>do not</b> support third-party integrations.
          </p>
        </section>

        <section>
          <p>
            For questions, contact <a href='mailto:contact@rivo.gg' className='underline underline-offset-1'>contact@rivo.gg</a>.
          </p>
        </section>
      </main>
    </LegalLayout>
  )
}
