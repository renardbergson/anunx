import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"

const GetUser = async () => {
  const session = await getServerSession(authOptions)
  
  if (session) {
    return session.user
  } 

  return null
}

export default GetUser