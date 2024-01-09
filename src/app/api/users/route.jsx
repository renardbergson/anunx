import dbConnect from "@/app/api/utils/dbConnect"
import { crypto } from "@/app/api/utils/password"
import UsersModels from "../models/users"
import { NextResponse as res } from "next/server"

export async function GET () {
  await dbConnect() 

  return res.json({
    message: 'lista de usuários!'
  })
}

export async function POST (req) {
  const {name, email, password} = await req.json()
  
  await dbConnect()

  const passwordCrypto = await crypto(password)

  const user = new UsersModels({
    name: name,
    email: email,
    password: passwordCrypto,
  })

  await user.save()

  return res.json({ success: true }, {status: 201})
}