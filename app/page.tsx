'use client'

export default function Home() {
  return (
    <div>
      {' '}
      <p> You are not signed in </p>{' '}
      <button onClick={() => signIn('github')}> Sign in with Github </button>{' '}
    </div>
  )
}
