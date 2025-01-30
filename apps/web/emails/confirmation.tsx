import { Button, Section, Text } from '@react-email/components'

export function ConfirmEmail({ id }: { id: string }) {
  if (!id) {
    throw new Error('ID is required')
  }

  const url = `http://localhost:3000/api/emails/confirm?id=${id}`

  return (
    <Section>
      <Text className="text-lg">
        Please confirm your email address by clicking the link below:
      </Text>
      <Button
        className="box-border w-full rounded-[8px] bg-indigo-600 px-[12px] py-[12px] text-center font-semibold text-white"
        href={url}
      >
        Confirm Email
      </Button>
    </Section>
  )
}
