'use client'

import { type FormEvent, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'

export default function AnimatedWishlist() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setEmail('')
    setIsExpanded(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FF7940] via-[#FF4D8D] to-[#B44BFF]">
      <div className="flex items-center gap-8">
        <motion.div
          layout
          className="relative"
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.form
                initial={{ width: 140 }}
                animate={{
                  width: 300,
                  transition: {
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                    mass: 1
                  }
                }}
                exit={{ width: 140 }}
                className="flex items-center overflow-hidden rounded-full bg-white p-1"
                onSubmit={handleSubmit}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex-grow"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-9 border-none bg-transparent px-4 text-purple-600 placeholder:text-purple-400 focus:ring-0"
                  />
                </motion.div>
                <Button
                  type="submit"
                  size="icon"
                  className="h-9 w-9 flex-shrink-0 rounded-full bg-purple-600 text-white transition-colors hover:bg-purple-700"
                >
                  <ArrowRight className="h-5 w-5" />
                  <span className="sr-only">Submit</span>
                </Button>
              </motion.form>
            ) : (
              <motion.button
                onClick={() => setIsExpanded(true)}
                className="h-11 rounded-full bg-white px-6 font-medium text-purple-600 text-sm transition-colors hover:bg-white/90"
              >
                Join Waitlist
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {!isExpanded && (
            <motion.button
              initial={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30
              }}
              className="h-11 rounded-full border border-white/20 bg-white/10 px-6 text-sm text-white transition-colors hover:bg-white/20"
            >
              About Us
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
