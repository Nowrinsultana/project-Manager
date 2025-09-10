import NextAuth from 'next-auth'
import Github from 'next-auth/providers/github'

export const {} = NextAuth({
  providers: [Github],
})
