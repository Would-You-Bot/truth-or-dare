/**
 * Rate limiting helper functions to enforce API request limits.
 * @module rateLimit
 */

import { Ratelimit } from '@upstash/ratelimit'
import { redis } from '@/helpers/redis'

/**
 * Creates a default rate limiter with a sliding window limit of 3 requests per 60 seconds.
 * @returns {Promise<Ratelimit>} A promise that resolves to the rate limiter instance.
 */
export async function defaultRateLimiter() {
	return new Ratelimit({
		redis,
		limiter: Ratelimit.slidingWindow(2, '60 s'),
		timeout: 160_000 // 2 minutes
	})
}
