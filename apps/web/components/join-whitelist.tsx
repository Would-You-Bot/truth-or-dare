import type { DialogProps } from '@radix-ui/react-dialog'
import { set, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { useState, type ReactNode } from 'react'
import { toast } from 'sonner'
import Link from 'next/link'

const formSchema = z.object({
  email: z.string().email()
})

interface JoinWhitelistProps extends DialogProps {
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

export function JoinWhitelist({ children, ...props }: JoinWhitelistProps) {
  const [open, setOpen] = useState<boolean>(false)
  const [whitelisted, setWhitelisted] = useState<boolean>(false)
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
      const response = await fetch('/api/whitelist/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: values.email })
      })

      if (response.status === 400) {
        toast.error('Email is already in the whitelist')
        return
      }

      if (!response.ok) {
        throw new Error('Failed to add email to whitelist')
      }

      setEmailProvider(values.email.split('@')[1])
      setWhitelisted(true)
      setDialogData(confirmEmailDialogData)

      toast.success('Email successfully added to the whitelist!')
      form.reset()
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : 'Failed to add email to whitelist'
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
        {whitelisted ? (
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
