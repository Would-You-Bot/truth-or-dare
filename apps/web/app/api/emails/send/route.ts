import { sendEmail } from '@/hooks/resend'
import { type EmailProps, EmailSchema } from '@/types/emails'

export async function POST(req: Request) {
  try {
    const { from, to, subject, email }: EmailProps = await req.json()

    const result = EmailSchema.safeParse({ email })

    if (!result.success) {
      return new Response(JSON.stringify(result.error.errors[0].message), {
        status: 500
      })
    }

    const response = await sendEmail({ from, to, subject, email })

    return new Response(JSON.stringify(response), {
      status: 200
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Email sending failed', details: error }),
      {
        status: 500
      }
    )
  }
}
