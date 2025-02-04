import { prisma } from '@/helpers/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');

  if (!id) {
    return new Response(JSON.stringify({ error: 'ID is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const user = await prisma.waitlist.findUnique({ where: { id } });

    if (!user) {
      return new Response(JSON.stringify({ error: 'ID not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const updatedUser = await prisma.waitlist.update({
      where: { id },
      data: { isVerified: true },
    });

    if (!updatedUser) {
      return new Response(
        JSON.stringify({ error: 'Failed to confirm email' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return NextResponse.redirect(`https://truthordare.gg/confirmed?email=${updatedUser.email}`, 302);

  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Failed to confirm email',
        details: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}