import { ArrowRight, Sparkles, Users } from 'lucide-react'

export function Features() {
  return (
    <section id="features" className="grid md:grid-cols-3 gap-8 text-white py-12">
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

function FeatureCard({ icon, title, description, gradient }) {
  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition cursor-pointer">
      <div className={`bg-gradient-to-br ${gradient} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
    </div>
  )
}

