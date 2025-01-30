'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { type FormEvent, type KeyboardEvent, useRef, useState } from 'react'
import { toast } from 'sonner'
import Turnstile, { type BoundTurnstileObject } from 'react-turnstile'

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30
}

export default function AnimatedWaitlist() {
  const [email, setEmail] = useState('')
  const [token, setToken] = useState<string | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const turnstileElementRef = useRef<HTMLDivElement>(null!)
  const turnstileInstanceRef = useRef<BoundTurnstileObject | null>(null)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (!token) {
      turnstileInstanceRef.current?.reset()
      turnstileInstanceRef.current?.execute()
      return
    }

    setToken(null)

    try {
      // Verify Turnstile token
      const turnstileResponse = await fetch('/api/captcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      })

      if (!turnstileResponse.ok) {
        toast.error('Failed to verify captcha')
        setToken(null)
        return
      }

      const turnstileData = await turnstileResponse.json()
      if (!turnstileData.success) {
        toast.error('Captcha verification failed')
        setToken(null)
        return
      }

      // Add email to waitlist
      const waitlistResponse = await fetch('/api/waitlist/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      if (waitlistResponse.status === 400) {
        toast.error('Email is already in the waitlist')
        return
      }

      if (!waitlistResponse.ok) {
        toast.error('Failed to add email to waitlist')
        return
      }

      toast.success('Email added to waitlist successfully')
      setEmail('')
    } catch (_error) {
      toast.error('An unexpected error occurred')
    }
  }

  function handleKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Escape') {
      setIsExpanded(false)
    }
    if (e.key === 'Enter' && !e.defaultPrevented) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="flex items-center gap-8">
      <motion.div
        layout
        className="relative"
      >
        <motion.div
          layout
          animate={{
            width: isExpanded ? 300 : 137.5,
            transition: spring
          }}
          className="flex items-center overflow-hidden rounded-full bg-white p-1"
        >
          {isExpanded ? (
            <motion.form
              layout
              className="flex flex-grow items-center gap-1"
              onSubmit={handleSubmit}
            >
              <Turnstile
                userRef={turnstileElementRef}
                onLoad={(
                  _widgetId: string,
                  boundTurnstile: BoundTurnstileObject
                  // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
                ) => (turnstileInstanceRef.current = boundTurnstile)}
                sitekey="0x4AAAAAAA61SwGZcaOFvmB_"
                onVerify={(token) => setToken(token)}
                size="invisible"
              />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.1 }}
                className="flex-grow"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => handleKey(e)}
                  className="h-9 rounded-full border-none bg-transparent px-4 text-purple-600 placeholder:text-purple-400 focus:ring-0 focus-visible:ring-0"
                  autoFocus
                  required
                />
              </motion.div>
              <Button
                asChild
                type="submit"
                className="h-9 w-9 flex-shrink-0 rounded-full bg-purple-600 text-white transition-colors hover:bg-purple-700"
              >
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ ...spring, delay: 0.05 }}
                >
                  <ArrowRight className="h-5 w-5" />
                  <span className="sr-only">Submit</span>
                </motion.button>
              </Button>
            </motion.form>
          ) : (
            <motion.button
              layout
              onClick={() => setIsExpanded(true)}
              initial={{ opacity: 100, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              className="h-9 whitespace-nowrap rounded-full bg-white px-6 font-medium text-purple-600 text-sm transition-colors hover:bg-white/90"
            >
              Join Waitlist
            </motion.button>
          )}
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
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
    </div>
  )
}
