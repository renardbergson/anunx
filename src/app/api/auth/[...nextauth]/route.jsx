import nextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import axios from "axios"

const NEXTAUTH_URI = process.env.NEXTAUTH_URI

export const authOptions = {

  providers: [
    CredentialsProvider({
      name: 'credentials',
      async authorize(credentials) {
        const res = await axios.post(`${NEXTAUTH_URI}/api/routes/signIn`, credentials)

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

  database: process.env.MONGODB_URI
}

export const handler = nextAuth(authOptions)

export { handler as GET, handler as POST } 