import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ArrowRight, Gift, Shield, Sparkles, Users, Zap } from 'lucide-react'



export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
      <div className="flex min-h-screen flex-col">
        <div className="container mx-auto flex-grow px-4 py-8">
          <Header />
          <main className="mt-16">
            <h1 className="mb-8 font-bold text-4xl text-white">Features</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Users className="h-6 w-6" />}
                title="Social Integration"
                description="Connect with friends, join public rooms, and share your favorite dares on social media."
              />
              <FeatureCard
                icon={<Shield className="h-6 w-6" />}
                title="Safe and Inclusive"
                description="Advanced content moderation and customizable game settings ensure a safe experience for all ages."
              />
              <FeatureCard
                icon={<Zap className="h-6 w-6" />}
                title="Real-time Interactions"
                description="Enjoy seamless, lag-free gameplay with our advanced real-time technology."
              />
              <FeatureCard
                icon={<ArrowRight className="h-6 w-6" />}
                title="Custom Challenges"
                description="Create and share your own truth or dare challenges, building a vibrant community of players."
              />
              <FeatureCard
                icon={<Gift className="h-6 w-6" />}
                title="Rewards System"
                description="Earn points and unlock exclusive content as you play and contribute to the community."
              />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="cursor-pointer rounded-2xl bg-white/20 p-6 backdrop-blur-sm transition hover:bg-white/30">
      <div className="mb-4 flex items-center">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
          <div className="text-white">{icon}</div>
        </div>
        <h3 className="font-semibold text-white text-xl">{title}</h3>
      </div>
      <p className="text-white/90">{description}</p>
    </div>
  )
}
