import { sendEmail } from '@/hooks/resend'
import type { EmailProps } from '@/types/emails'

export async function POST(req: Request) {
  try {
    const { from, to, subject, email }: EmailProps = await req.json()

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
