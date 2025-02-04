'use server'

import { ResendClient } from '@/helpers/resend'
import type { BatchEmailProps, EmailProps } from '@/types/emails'

const resend = ResendClient()

/**
 * Sends an email using the Resend API with HTML content.
 *
 * @param {Object} props - The properties for sending the email.
 * @param {string} props.from - The sender's email address.
 * @param {string[]} props.to - A list of recipient email addresses.
 * @param {string} props.subject - The subject of the email.
 * @param {string} props.email - The HTML content of the email.
 *
 * @returns {Promise<Object>} The response from the email sending service.
 * @throws {Error} If the email fails to send.
 */
export const sendEmail = async ({ ...props }: EmailProps): Promise<object> => {
  const { from, to, subject, email } = props
  try {
    const res = await resend.emails.send({
      from,
      to,
      subject,
      html: email
    })

    if (!res) {
      throw new Error('Failed to send email.')
    }

    return res
  } catch (error) {
    throw new Error(`Email sending failed: ${JSON.stringify(error, null, 2)}`)
  }
}

/**
 * Sends a batch of emails using the Resend API.
 * Uses the same logic as `sendEmail` but sends multiple emails at once.
 *
 * @param {Object[]} emails - An array of email objects to be sent.
 * @param {string} emails[].from - The sender's email address.
 * @param {string[]} emails[].to - A list of recipient email addresses.
 * @param {string} emails[].subject - The subject of the email.
 * @param {ReactNode | string} emails[].email - The email content, either a ReactNode or a string.
 * @param {boolean} [emails[].isReactEmail=false] - Flag indicating if the email content is a ReactNode.
 *
 * @returns {Promise<Object[]>} The responses from the email sending service for each email.
 * @throws {Error} If any of the emails fail to send.
 */
export const sendBatchEmails = async (
  emails: BatchEmailProps[]
): Promise<object> => {
  try {
    const res = await resend.batch.send(emails)

    if (!res) {
      throw new Error('Failed to send email.')
    }

    return res
  } catch (error) {
    throw new Error(
      `Batch email sending failed: ${JSON.stringify(error, null, 2)}`
    )
  }
}
