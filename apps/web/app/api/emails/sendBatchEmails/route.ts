import { sendBatchEmails } from '@/hooks/resend'
import type { SendBatchEmailProps } from '@/types/resend'

export async function POST(req: Request) {
  try {
    const emails: SendBatchEmailProps[] = await req.json()

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
