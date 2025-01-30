const secretKey: string = process.env.CLOUDFLARE_SECRET_KEY || ''

export async function POST(req: Request) {
  try {
    if (!secretKey) {
      return new Response(
        JSON.stringify({ error: 'CloudFlare secret key is missing' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    const { token } = await req.json()
    if (!token) {
      return new Response(JSON.stringify({ error: 'Token is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const ip =
      req.headers.get('CF-Connecting-IP') ||
      req.headers.get('x-forwarded-for') ||
      req.headers.get('cf-connecting-ip') ||
      ''
    if (!ip) {
      return new Response(JSON.stringify({ error: 'IP address is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Validate the token with Cloudflare's Turnstile API
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
          remoteip: ip.toString()
        })
      }
    )

    const data = await response.json()
    if (!data.success) {
      return new Response(JSON.stringify({ error: 'Invalid token' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (_error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
