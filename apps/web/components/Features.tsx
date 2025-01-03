import { ArrowRight, Sparkles, Users } from 'lucide-react'
import type React from 'react'

export function Features() {
  return (
    <section
      id="features"
      className="grid gap-8 py-12 text-white md:grid-cols-3"
    >
      <FeatureCard
        icon={<Sparkles className="h-6 w-6" />}
        title="Dynamic Gameplay"
        description="Experience an ever-evolving game with community-created content"
        gradient="from-orange-400 to-pink-500"
      />
      <FeatureCard
        icon={<Users className="h-6 w-6" />}
        title="Social Integration"
        description="Connect with friends and join public rooms for more fun"
        gradient="from-pink-500 to-purple-500"
      />
      <FeatureCard
        icon={<ArrowRight className="h-6 w-6" />}
        title="Custom Challenges"
        description="Create and share your own truth or dare challenges"
        gradient="from-purple-500 to-blue-500"
      />
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
}

function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className="cursor-pointer rounded-2xl bg-white/20 p-6 backdrop-blur-sm transition hover:bg-white/30">
      <div
        className={`bg-gradient-to-br ${gradient} mb-4 flex h-12 w-12 items-center justify-center rounded-full`}
      >
        {icon}
      </div>
      <h3 className="mb-2 font-semibold text-xl">{title}</h3>
      <p className="text-white/90">{description}</p>
    </div>
  )
}
