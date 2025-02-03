import { defaultRateLimiter } from './lib/ratelimiter'
import { type NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl
	const ip = request.headers.get('cf-connecting-ip') ?? '127.0.0.1' // Only works if proxied through cloudflare
	switch (pathname) {
		case '/api/waitlist/add': {
			const rateLimiter = await defaultRateLimiter()
					const { success } = await rateLimiter.limit(ip)
					if (!success) {
						return NextResponse.json(
							{
								success: false,
								error:
									'Rate limit exceeded, please wait a bit before trying again!'
							},
							{ status: 429 }
						)
					}
		}

		default: {
			    return NextResponse.next()
			}
			
		}
}

export const config = {
	matcher: [
		'/api/waitlist/add',
	]
}

