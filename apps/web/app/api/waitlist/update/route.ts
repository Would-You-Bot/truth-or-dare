import { prisma } from '@/helpers/prisma'

export async function PUT(req: Request) {
  if (req.method !== 'PUT') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405
    })
  }

  try {
    const body = await req.json()

    if (!body.oldEmail || !body.newEmail) {
      return new Response(
        JSON.stringify({
          error: 'Both oldEmail and newEmail are required'
        }),
        { status: 400 }
      )
    }

    const updatedEntry = await prisma.waitlistWeb.updateMany({
      where: { email: body.oldEmail },
      data: { email: body.newEmail }
    })

    if (updatedEntry.count === 0) {
      return new Response(
        JSON.stringify({ error: 'No matching email found to update' }),
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
        error: 'Failed to update email in waitlist',
        details: error instanceof Error ? error.message : String(error)
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
