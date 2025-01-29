import { sendBatchEmails } from '@/hooks/resend'
import { EmailSchema } from '@/types/emails'
import type { BatchEmailProps } from '@/types/emails'

export async function POST(req: Request) {
  try {
    const emails: BatchEmailProps[] = await req.json()

    emails.map((email) => {
      const result = EmailSchema.safeParse({ email })

      if (!result.success) {
        return new Response(JSON.stringify(result.error.errors[0].message), {
          status: 500
        })
      }
    })

    const emailsWithText = emails.map((email) => ({
      ...email,
      text: email.text || 'Default text'
    }))

    const response = await sendBatchEmails(emailsWithText)

    return new Response(JSON.stringify(response), {
      status: 200
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Batch email sending failed', details: error }),
      {
        status: 500
      }
    )
  }
}
