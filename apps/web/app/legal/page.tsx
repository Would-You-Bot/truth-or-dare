import { LegalLayout } from '../../components/LegalLayout'

export default function LegalNoticePage() {
  return (
    <LegalLayout title="Legal Notice">
      <h2>1. Company Information</h2>
      <p>Truth or Dare App<br />
      123 Game Street<br />
      Fun City, FC 12345<br />
      contact@truthordareapp.com</p>

      <h2>2. Disclaimer</h2>
      <p>The information contained on this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.</p>

      <h2>3. Intellectual Property</h2>
      <p>All content on this website, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Truth or Dare App or its content suppliers and is protected by international copyright laws.</p>

      <h2>4. Governing Law</h2>
      <p>These terms and conditions are governed by and construed in accordance with the laws of the State of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

      <h2>5. Changes to This Notice</h2>
      <p>We may update this legal notice from time to time. When we do, we will revise the updated date at the bottom of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.</p>

      <h2>6. Contact Information</h2>
      <p>If you have any questions or suggestions about our Legal Notice, do not hesitate to contact us at legal@truthordareapp.com.</p>

      <p className="mt-8 text-sm text-white/60">Last updated: June 1, 2023</p>
    </LegalLayout>
  )
}

