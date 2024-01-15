import { NextResponse as res } from "next/server"
import dbconnect from '../../utils/dbConnect'
import usersModel from '../../models/users'
import { compare } from '../../utils/password'

export async function POST (Request) {
  const {email, password} = await Request.json()
  
  await dbconnect()

  const user = await usersModel.findOne({ email })
  
  if (!user) {
    return res.json({ success: false, message: 'invalid' }, { status: 401 })
  }

  const passIsCorrect = await compare(password, user.password)

  if (!passIsCorrect) {
    return res.json({ success: false, message: 'invalid' }, {status: 401})
  }

  return (
    res.json({ 
      _id: user._id, 
      name: user.name, 
      email: user.email 
    },
      
    {status: 200})
  )
}