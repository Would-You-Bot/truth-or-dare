import { prisma } from '@/helpers/prisma'

export async function DELETE(req: Request) {
  if (req.method !== 'DELETE') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405
    })
  }

  try {
    const body = await req.json()

    if (!body.email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400
      })
    }

    const deletedEntry = await prisma.waitlistWeb.deleteMany({
      where: { email: body.email }
    })

    if (deletedEntry.count === 0) {
      return new Response(
        JSON.stringify({ error: 'No matching email found' }),
        { status: 404 }
      )
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Failed to remove email from waitlist',
        details: error instanceof Error ? error.message : String(error)
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
