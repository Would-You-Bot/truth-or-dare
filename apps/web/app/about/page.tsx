import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex flex-col">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 bg-repeat"></div>
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 py-8 flex-grow">
          <Header />
          <main className="mt-16">
            <h1 className="text-4xl font-bold text-white mb-8">About Truth or Dare</h1>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-white">
                <p className="text-lg">
                  Truth or Dare is not just another party game app. It's a revolutionary platform designed to bring people together, spark meaningful conversations, and create unforgettable moments.
                </p>
                <p className="text-lg">
                  Founded in 2023 by a group of friends who wanted to reimagine the classic game for the digital age, Truth or Dare has quickly grown into a global phenomenon, connecting millions of players worldwide.
                </p>
                <p className="text-lg">
                  Our mission is to foster genuine connections and encourage self-expression in a safe, inclusive environment. We believe that every dare accepted and every truth revealed has the power to strengthen bonds and create lasting memories.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                  alt="Friends enjoying Truth or Dare"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Team</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { role: 'CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' },
                  { role: 'CTO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80' },
                  { role: 'Head of Design', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80' },
                  { role: 'Community Manager', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' }
                ].map(({ role, image }, index) => (
                  <div key={index} className="text-center">
                    <div className="w-32 h-32 mx-auto bg-white/20 rounded-full overflow-hidden mb-4">
                      <Image
                        src={image}
                        alt={role}
                        width={128}
                        height={128}
                        objectFit="cover"
                      />
                    </div>
                    <h3 className="text-white font-semibold">{role}</h3>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  )
}

