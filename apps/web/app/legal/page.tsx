import { LegalLayout } from '@/components/legal-layout'
import Link from 'next/link'

export default function LegalNoticePage() {
  return (
    <LegalLayout title="Legal Notice">
      <main className="mx-auto flex w-full max-w-8xl flex-col gap-8 pr-8 text-white">
        <p>Information according to § 5 TMG.</p>
        <div>
          <h3 className="font-bold text-lg">Contact</h3>
          <p className="select-none">
            Dominik Koch
            <br />
            Parkstraße 5
            <br />
            88499 Riedlingen
            <br />
            Germany
          </p>
        </div>
        <p>No acceptance of parcels or packages.</p>
        <p className="select-none">Email: dominik@wouldyoubot.com</p>
        <p className="select-none">Phone: +49 151 23793107</p>
        <div>
          <h3 className="font-bold text-lg">Online dispute resolution</h3>
          <p>
            The European Comission provides a platform for online dispute
            resolution, available at{' '}
            <Link
              href="https://ec.europa.eu/consumers/odr/"
              className=" underline"
            >
              https://ec.europa.eu/consumers/odr/
            </Link>
            . <br />I am neither willing nor obliged to participate in dispute
            resolution proceedings in front of a consumer arbitration board.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg ">Privacy Policy</h3>
          <Link
            href="https://truthordare.gg/privacy/"
            className=" underline"
          >
            https://truthordare.gg/privacy/
          </Link>
        </div>
        <div>
          <h3 className="font-bold text-lg ">Validity of this Legal Notice</h3>
          <p>
            This legal notice is valid for the following websites, social media
            accounts and other services, as long as they are listed below.
          </p>
        </div>
        <div className="">
          <Link
            href="https://wouldyoubot.com/"
            className="underline"
          >
            https://wouldyoubot.com/
          </Link>
          <br />
          <Link
            href="https://wouldyoubot.gg/"
            className="underline"
          >
            https://wouldyoubot.gg/
          </Link>
          <br />

          <Link
            href="https://rivo.gg/"
            className="underline"
          >
            https://rivo.gg/
          </Link>
          <br />
          <Link
            href="https://truthordare.gg/"
            className="underline"
          >
            https://truthordare.gg/
          </Link>
          <br />
          <Link
            href="https://wouldyourather.gg/"
            className="underline"
          >
            https://wouldyourather.gg/
          </Link>
          <br />
          <Link
            href="https://twitter.com/WouldYouBot/"
            className="underline"
          >
            https://twitter.com/WouldYouBot/
          </Link>
        </div>
        <p>
          The Discord bot with the id{' '}
          <span className="font-mono ">981649513427111957</span>
          <br />
          The Discord server with the id{' '}
          <span className="font-mono ">1009562516105461780</span>
        </p>
      </main>
    </LegalLayout>
  )
}
