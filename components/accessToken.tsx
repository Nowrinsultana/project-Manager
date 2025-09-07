import { useSession, signIn, signOut } from 'next-auth/react'
import { Session } from 'next-auth'

export default function AccessTokenComponent() {
  const { data: session } = useSession() as {
    data: (Session & { accessToken?: string }) | null
  }

  const accessToken = session?.accessToken

  if (!session) {
    return (
      <div>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    )
  }

  return (
    <div>
      Signed in as {session.user?.email} <br />
      Access Token: {accessToken ?? 'No token available'} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}
