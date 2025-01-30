import { EmailConfirmed } from '@/components/email-confirmed'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Next Page'
}

export default function TestPage() {
  return <EmailConfirmed email="itzframepvp@outlook.com" />
}
