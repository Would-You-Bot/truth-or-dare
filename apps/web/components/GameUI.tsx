"use client"

import { Home, Settings } from "lucide-react"
import { useState } from "react"

export function GameUI({ variant = "choice" }: { variant?: "choice" | "dare" }) {
  const [hoveredOption, setHoveredOption] = useState<"truth" | "dare" | null>(null)
  const [currentPlayer, setCurrentPlayer] = useState("Woofer")
  const [dare, setDare] = useState("Do your best impression of a cat meowing at 3am")

  const regenerateGame = () => {
    const names = ["Tee", "Woofer", "Paulos", "Dominik"]
    const dares = [
      "Sing the chorus of your favorite song",
      "Do 10 jumping jacks",
      "Do your best dance move",
      "Make a funny face and hold it for 10 seconds",
    ]
    setCurrentPlayer(names[Math.floor(Math.random() * names.length)])
    setDare(dares[Math.floor(Math.random() * dares.length)])
  }

  if (variant === "dare") {
    return (
      <div className="w-full h-full bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600 p-4 relative overflow-hidden">
        <div className="flex justify-between items-center mb-8">
          <button className="p-2 text-white/90 hover:text-white hover:bg-white/20 rounded-md transition">
            <Home className="w-6 h-6" />
          </button>
          <button className="p-2 text-white/90 hover:text-white hover:bg-white/20 rounded-md transition">
            <Settings className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center space-y-2 mb-8">
          <p className="text-white/90">{currentPlayer} selected</p>
          <h1 className="text-white text-3xl font-bold">Dare</h1>
        </div>

        <div className="relative w-full aspect-[4/3] perspective-1000">
          <div className="w-full h-full bg-white rounded-2xl p-6 shadow-xl">
            <div className="h-full flex items-center justify-center text-center">
              <p className="text-xl font-medium text-gray-900">{dare}</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex gap-4">
          <button
            onClick={regenerateGame}
            className="flex-1 bg-green-500 text-white rounded-md py-3 text-sm font-medium hover:bg-green-600 transition"
          >
            Completed
          </button>
          <button
            onClick={regenerateGame}
            className="flex-1 bg-red-500 text-white rounded-md py-3 text-sm font-medium hover:bg-red-600 transition"
          >
            Ditched
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 p-4 relative overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <button className="p-2 text-white/90 hover:text-white hover:bg-white/20 rounded-md transition">
          <Home className="w-6 h-6" />
        </button>
        <button className="p-2 text-white/90 hover:text-white hover:bg-white/20 rounded-md transition">
          <Settings className="w-6 h-6" />
        </button>
      </div>

      <h1 className="text-white text-2xl font-semibold text-center mb-8">It&apos;s Dominik&apos;s Turn</h1>

      <div className="flex flex-col gap-6">
        <CardOption type="truth" isHovered={hoveredOption === "truth"} onHover={setHoveredOption} />
        <CardOption type="dare" isHovered={hoveredOption === "dare"} onHover={setHoveredOption} />
      </div>
    </div>
  )
}

interface CardOptionProps {
  type: "truth" | "dare"
  isHovered: boolean
  onHover: (type: "truth" | "dare" | null) => void
}

function CardOption({ type, isHovered, onHover }: CardOptionProps) {
  return (
    <div className="relative" onMouseEnter={() => onHover(type)} onMouseLeave={() => onHover(null)}>
      <div
        className="absolute inset-0 bg-white/60 rounded-2xl translate-y-[3px] translate-x-[3px] transition-transform duration-300 ease-out"
        style={{
          transform: isHovered ? "translate(1px, 1px) scale(0.98)" : "translate(3px, 3px) scale(1)",
        }}
      ></div>
      <button
        className={`relative w-full bg-white rounded-2xl p-8 shadow-md transition-all duration-300 ease-out overflow-hidden ${
          isHovered ? "shadow-lg -translate-y-1 scale-[1.02]" : ""
        }`}
      >
        <span
          className={`relative z-10 text-2xl font-bold transition-all duration-300 ${
            isHovered ? "text-purple-600 scale-110" : "text-gray-900"
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </button>
    </div>
  )
}

