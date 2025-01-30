import { motion } from 'motion/react'

export default function PulsatingDots() {
  return (
    <div className="flex h-9 w-full items-center justify-center">
      <div className="flex space-x-2">
        <motion.div
          className="size-2.5 rounded-full bg-purple-600"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Number.POSITIVE_INFINITY
          }}
        />
        <motion.div
          className="size-2.5 rounded-full bg-purple-600"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Number.POSITIVE_INFINITY,
            delay: 0.3
          }}
        />
        <motion.div
          className="size-2.5 rounded-full bg-purple-600"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Number.POSITIVE_INFINITY,
            delay: 0.6
          }}
        />
      </div>
    </div>
  )
}
