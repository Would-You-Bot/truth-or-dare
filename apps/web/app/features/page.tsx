import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ArrowRight, Sparkles, Users, Shield, Zap, Gift } from 'lucide-react'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex flex-col">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 bg-repeat"></div>
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto px-4 py-8 flex-grow">
          <Header />
          <main className="mt-16">
            <h1 className="text-4xl font-bold text-white mb-8">Features</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Sparkles className="h-6 w-6" />}
                title="Dynamic Gameplay"
                description="Experience an ever-evolving game with community-created content and AI-generated challenges."
              />
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

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition cursor-pointer">
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
          <div className="text-white">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-white/90">{description}</p>
    </div>
  )
}

