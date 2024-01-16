import { withAuth } from "next-auth/middleware"
//export { default } from 'next-auth/middleware'

export default withAuth({
  // Matches the pages config in `[...nextauth]`
  pages: {
    signIn: '/pages/auth/signIn',
  }
})

export const config = { matcher: ["/pages/user/dashboard", "/pages/product/publish"] }