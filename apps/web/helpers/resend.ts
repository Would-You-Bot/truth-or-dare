import { Resend } from 'resend'

/**
 * Creates and returns a Resend instance.
 * Throws an error if the Resend API key is not provided.
 *
 * @returns {Resend} The Resend instance.
 * @throws {Error} If the RESEND_API_KEY environment variable is not set.
 */
export const ResendClient = (): Resend => {
  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    throw new Error('Resend API Key is required.')
  }

  return new Resend(resendApiKey)
}
