import dbConnect from "@/app/api/utils/dbConnect"
import { crypto } from "@/app/api/utils/password"
import UsersModel from "../models/users"
import { NextResponse as res } from "next/server"

export async function GET () {
  await dbConnect() 

  const customers = await UsersModel.find()

  return res.json(customers)
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