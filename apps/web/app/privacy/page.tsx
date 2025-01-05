import { LegalLayout } from "@/components/legal-layout";

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service">
      <main className="flex mx-auto w-full max-w-8xl flex-col gap-8 pr-8 text-white">
        <section>
          <h2 className="text-lg font-bold">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Truth or Dare App and (or) Website, you agree to be bound
            by these Terms of Service and all applicable laws and regulations.
            If you do not agree with any part of these terms, you may not use
            our service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold">2. Use of Service</h2>
          <p>
            You may use our service only for lawful purposes and in accordance
            with these Terms. You agree not to use the service:
          </p>
          <ul className="list-disc list-inside">
            <li>
              In any way that violates any applicable federal, state, local, or
              international law or regulation
            </li>
            <li>
              To transmit, or procure the sending of, any advertising or
              promotional material, including any "junk mail," "chain letter,"
              "spam," or any other similar solicitation
            </li>
            <li>
              To impersonate or attempt to impersonate the Company, a Company
              employee, another user, or any other person or entity
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold">3. User Accounts</h2>
          <p>
            When you create an account with us, you must provide information
            that is accurate, complete, and current at all times. Failure to do
            so constitutes a breach of the Terms, which may result in immediate
            termination of your account on our service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold">4. Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality
            are and will remain the exclusive property of Truth or Dare App and
            its licensors. The service is protected by copyright, trademark, and
            other laws of both the United States and foreign countries.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold">5. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if you breach the Terms. Upon termination, your right to
            use the service will immediately cease.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold">6. Limitation of Liability</h2>
          <p>
            In no event shall Truth or Dare App, nor its directors, employees,
            partners, agents, suppliers, or affiliates, be liable for any
            indirect, incidental, special, consequential, or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from your access to or use of
            or inability to access or use the service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold">7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. What constitutes a material change will be
            determined at our sole discretion.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:{" "}
            <a href="mailto:terms@rivo.gg" className="underline">
              terms@rivo.gg
            </a>
          </p>
        </section>
      </main>
    </LegalLayout>
  );
}
