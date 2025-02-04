export function EmailConfirmed({ email }: { email: string }) {
  return (
    <><script src="https://cdn.tailwindcss.com"></script><div className="flex min-h-dvh w-full flex-col items-center justify-center bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
      <div className="flex flex-col items-center gap-2 text-center text-white">
        <span className="font-bold text-2xl sm:text-4xl">
          Your email was confirmed successfully!{" "}
        </span>
        <span className="font-medium text-lg sm:text-2xl">{email}</span>
      </div>
      <span className="-translate-x-1/2 fixed bottom-16 left-1/2 text-center text-white">
        If this is not your email, there might've been an error.{' '}
        <br className="hidden sm:block" />
        Please contact us at{' '}
        <a
          href="mailto:support@truthordate.gg"
          className="underline hover:text-blue-200"
        >
          support@truthordate.gg
        </a>
        .
      </span>
    </div></>
  )
}
