import { EmailConfirmed } from '@/components/email-confirmed';
import { prisma } from '@/helpers/prisma';
import { render } from '@react-email/render';

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

    // Render the email component using @react-email/render
    const html = await render(EmailConfirmed({ email: updatedUser.email }));

    return new Response(html, {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    });
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