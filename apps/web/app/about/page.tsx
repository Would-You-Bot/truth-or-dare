import { randomUUID } from "node:crypto";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
      <div className="container mx-auto flex-grow px-4 py-8">
        <Header />
        <main className="mt-16">
          <h1 className="mb-8 font-bold text-4xl text-white">
            About Truth or Dare
          </h1>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6 text-white">
              <p className="text-lg">
                Truth or Dare is not just another party game app. It's a
                revolutionary platform designed to bring people together, spark
                meaningful conversations, and create unforgettable moments.
              </p>
              <p className="text-lg">
                Founded in 2023 by a group of friends who wanted to reimagine
                the classic game for the digital age, Truth or Dare has quickly
                grown into a global phenomenon, connecting millions of players
                worldwide.
              </p>
              <p className="text-lg">
                Our mission is to foster genuine connections and encourage
                self-expression in a safe, inclusive environment. We believe
                that every dare accepted and every truth revealed has the power
                to strengthen bonds and create lasting memories.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="Friends enjoying Truth or Dare"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="mt-16">
            <h2 className="mb-6 font-bold text-3xl text-white">Our Team</h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                {
                  name: "Dominik",
                  role: "CEO & Lead Developer",
                  link: "https://rivo.gg",
                  image:
                    "https://cdn.wouldyoubot.gg/staff/developer/Dominik.webp",
                },
                {
                  name: "Woofer",
                  role: "Developer",
                  link: "https://woofer21.com",
                  image:
                    "https://cdn.wouldyoubot.gg/staff/developer/Woofer.webp",
                },
                {
                  name: "Paulos",
                  role: "Developer",
                  link: "https://www.dpaulos6.com/",
                  image:
                    "https://cdn.wouldyoubot.gg/staff/developer/Paulos.webp",
                },
                {
                  name: "Taqib",
                  role: "Developer",
                  link: "https://taqib.dev",
                  image:
                    "https://cdn.wouldyoubot.gg/staff/developer/Taqib.webp",
                },
              ].map(({ name, role, image, link }) => (
                <div key={randomUUID()} className="text-center">
                  <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-white/20">
                    <Image
                      src={image}
                      alt={role}
                      width={128}
                      height={128}
                      objectFit="cover"
                    />
                  </div>
                  <div className="mb-2 text-lg font-bold text-white">
                    {name}
                  </div>
                  <Link
                    href={link}
                    target="_blank"
                    className="hover:cursor-pointer font-semibold text-white"
                  >
                    {role}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
