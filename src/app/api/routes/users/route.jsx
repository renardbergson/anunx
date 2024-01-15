import { NextResponse as res } from "next/server"
import dbConnect from "../../utils/dbConnect"
import { crypto } from "../../utils/password"
import UsersModel from "../../models/users"

export async function GET () {
  await dbConnect() 

  const customers = await UsersModel.find()

  return res.json({ success:true, customers })
}

export async function POST (req) {
  const {name, email, password} = await req.json()
  
  await dbConnect()

  const passwordCrypto = await crypto(password)

  const user = new UsersModel({
    name: name,
    email: email,
    password: passwordCrypto,
  })

  await user.save()

  return res.json({ success: true }, {status: 201})
}