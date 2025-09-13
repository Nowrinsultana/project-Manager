'use client'

export default function Home() {
  return (
    <div>
      {' '}
      <p> You are not signed in </p>{' '}
      <button onClick={() => SignIn('Github')}> Sign in with Github </button>{' '}
    </div>
  )
}
