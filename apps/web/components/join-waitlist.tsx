"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import type { DialogProps } from "@radix-ui/react-dialog"
import { CircleCheckBig, Loader2 } from "lucide-react"
import { type ReactNode, useState } from "react"
import { useForm } from "react-hook-form"
import Turnstile from "react-turnstile"
import { toast } from "sonner"
import { z } from "zod"
import { motion, AnimatePresence } from "motion/react";
import { EmailSchema } from "@/types/emails"

interface JoinWaitlistProps extends DialogProps {
  children: ReactNode
}

export function JoinWaitlist({ children, ...props }: JoinWaitlistProps) {
  const [open, setOpen] = useState<boolean>(false)
  const [isVerified, setIsVerified] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof EmailSchema>>({
    resolver: zodResolver(EmailSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof EmailSchema>) {
    if (!isVerified) {
      toast.error("Unable to verify if you are a human. Please refresh the page and try again.")
      form.setError("email", {
        message: "Unable to verify if you are a human. Please refresh the page and try again.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/waitlist/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      })

      if (!response.ok) {
        throw new Error("Failed to add email to waitlist")
      }

      toast.success("Email successfully registered!", {
        description: "Check your inbox to confirm your email and join the waitlist.",
        duration: 5000,
        icon: <CircleCheckBig className="mr-2 size-5" />,
      })
      form.reset()
      setOpen(false)
    } catch (error) {
      toast.error("An error occurred. Please try again later.")
      form.setError("email", {
        message: "An error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen} {...props}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Join Our Waitlist</DialogTitle>
          <DialogDescription className="text-white/80">Be the first to know when we launch.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="bg-white/10 border-white/30 placeholder:text-white/95 text-white"
                    />
                  </FormControl>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />
            <Turnstile
              sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY!}
              action="verify"
              cData="verifyLegitUser"
              size="invisible"
              appearance="execute"
              onLoad={(_, bound) => bound.execute()}
              onVerify={() => setIsVerified(true)}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={isSubmitting ? "submitting" : "idle"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isSubmitting ? (
                  <Button className="w-full bg-white/20 text-white cursor-not-allowed" disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </Button>
                ) : (
                  <Button className="w-full bg-white text-purple-600 hover:bg-white/90 transition-colors" type="submit">
                    Join Waitlist
                  </Button>
                )}
              </motion.div>
            </AnimatePresence>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

