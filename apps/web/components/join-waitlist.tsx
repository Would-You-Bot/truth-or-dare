import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import type { DialogProps } from '@radix-ui/react-dialog'
import Link from 'next/link'
import { type ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { set, z } from 'zod'

const formSchema = z.object({
  email: z.string().email()
})

interface JoinWaitlistProps extends DialogProps {
  children: ReactNode
}

type DialogData = {
  title: string
  description: string
}

const initialDialogData: DialogData = {
  title: 'Join Waitlist',
  description: 'Be the first to know when we launch.'
}

const confirmEmailDialogData: DialogData = {
  title: 'Confirm your email address',
  description:
    "We've sent a confirmation email to your inbox. Please click the link in the email to confirm your email address."
}

export function JoinWaitlist({ children, ...props }: JoinWaitlistProps) {
  const [open, setOpen] = useState<boolean>(false)
  const [waitlisted, setWaitlisted] = useState<boolean>(false)
  const [dialogData, setDialogData] = useState<DialogData | null>(
    initialDialogData
  )
  const [emailProvider, setEmailProvider] = useState<string>('')

  const getEmailProvider = () => {
    const provider = emailProvider.split('.')[0]
    return provider.charAt(0).toUpperCase() + provider.slice(1)
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ''
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/waitlist/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: values.email })
      })

      if (response.status === 400) {
        toast.error('Email is already in the waitlist')
        return
      }

      if (!response.ok) {
        throw new Error('Failed to add email to waitlist')
      }

      setEmailProvider(values.email.split('@')[1])
      setWaitlisted(true)
      setDialogData(confirmEmailDialogData)

      toast.success('Email successfully added to the waitlist!')
      form.reset()
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : 'Failed to add email to waitlist'
      )
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      {...props}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogData?.title}</DialogTitle>
          <DialogDescription>{dialogData?.description}</DialogDescription>
        </DialogHeader>
        {waitlisted ? (
          <DialogFooter className="flex gap-2">
            <Button
              className="w-full"
              variant="outline"
              onClick={() => setOpen(false)}
              type="button"
            >
              Cancel
            </Button>
            <Link
              href={`https://${emailProvider}`}
              className="w-full"
              target="_blank"
            >
              <Button
                className="w-full"
                type="submit"
              >
                Open {getEmailProvider()} Inbox
              </Button>
            </Link>
          </DialogFooter>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter className="flex gap-2">
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => setOpen(false)}
                  type="button"
                >
                  Cancel
                </Button>
                <Button
                  className="w-full"
                  type="submit"
                >
                  Submit
                </Button>
              </DialogFooter>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  )
}
