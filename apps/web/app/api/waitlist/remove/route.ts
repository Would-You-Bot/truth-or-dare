import { prisma } from '@/helpers/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json()

    if (!body.id || !body.token) {
      return new NextResponse(JSON.stringify({ error: 'Id/Token is required' }), {
        status: 400
      })
    }

    console.log(body.id + ' ' + body.token + ' ' + typeof body.id)

    const emailEntry = await prisma.waitlist.findFirst({
      where: { id: body.id },
      select: { token: true }
    })

    if(!emailEntry) {
      return new NextResponse(
        JSON.stringify({ error: 'No matching email found' }),
        { status: 404 }
      )
    }

    if(!body.token || body.token !== emailEntry.token) {
      return new NextResponse(
        JSON.stringify({ error: 'No access!' }),
        { status: 403 }
      )
    }

    const deletedEntry = await prisma.waitlist.deleteMany({
      where: { email: body.id, token: body.token }
    })

    if (deletedEntry.count === 0) {
      return new NextResponse(
        JSON.stringify({ error: 'No matching email found' }),
        { status: 404 }
      )
    }

    return new NextResponse(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new NextResponse(
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
