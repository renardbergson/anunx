import nextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import axios from "axios"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      async authorize(credentials) {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BACK_END}/users/signIn`, credentials)

        const user = await res.data

        if (res.status === 200 && user) {
          return user
        }
      }
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],

  session: {
    jwt: true
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET
  },

  callbacks:{
    // the callbacks will be executed after a well done login
    async jwt ({ token, user }) {
      if (user?._id) token._id = user._id
      return token
    },
    async session ({ session, token, user }) {
      // user id is stored in ._id when using credentials provider
      if (token?._id) session.user._id = token._id

      // user id is stored sub ._id when using google provider
      if (token?.sub) session.user._id = token.sub

      // we'll update the session object with those 
      // informations besides the ones it already has
      return session
    },
  },

  session: {
    strategy: 'jwt',
  },

  database: process.env.MONGODB_URI
}

export const handler = nextAuth(authOptions)

export { handler as GET, handler as POST } 