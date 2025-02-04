import { motion } from 'motion/react'

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30
}

export function LoadingWaitlist() {
  return (
    <motion.div
      layoutId="waitlist-form"
      className="flex h-9 w-full items-center justify-between px-3"
    >
      <motion.span
        initial={{
          opacity: 0,
          x: -20
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        exit={{ x: -20, opacity: 0 }}
        transition={spring}
        className="w-full text-purple-600/75 text-sm"
      >
        Submitting email
      </motion.span>
      <motion.div
        initial={{ scale: 0, opacity: 0, x: 20 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ ...spring, delay: 0.05 }}
        className="flex gap-2"
      >
        <motion.div
          className="size-2 rounded-full bg-purple-600"
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
          className="size-2 rounded-full bg-purple-600"
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
          className="size-2 rounded-full bg-purple-600"
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
      </motion.div>
    </motion.div>
  )
}
