import { confirmEmailData } from '@/data/emails/confirm'
import { ConfirmEmail } from '@/emails/confirmation'
import { prisma } from '@/helpers/prisma'
import { sendEmail } from '@/hooks/resend'
import { render } from '@react-email/render'
import { createElement } from 'react'

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    const body = await req.json()

    if (!body.email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const result = await prisma.$transaction(async (tx) => {
      // Check if the email already exists in the waitlist
      const existingEntry = await tx.waitlistWeb.findFirst({
        where: { email: body.email }
      })

      if (existingEntry) {
        throw new Error('Email is already in the waitlist')
      }

      // Create a new waitlist entry
      const newEntry = await tx.waitlistWeb.create({
        data: { email: body.email, isVerified: false }
      })

      // Attempt to send the email
      const emailSent = await sendEmail({
        to: body.email,
        from: confirmEmailData.from,
        subject: confirmEmailData.subject,
        email: await render(createElement(ConfirmEmail, { id: newEntry.id }))
      })

      if (!emailSent) {
        throw new Error('Failed to send confirmation email')
      }

      return newEntry
    })

    return new Response(JSON.stringify(result), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'An unexpected error occurred'

    return new Response(
      JSON.stringify({
        error: 'Failed to add email to waitlist',
        details: message
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
