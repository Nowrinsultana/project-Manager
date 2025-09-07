import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session | null }>) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
