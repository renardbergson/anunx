import dbConnect from "@/app/utils/dbConnect"
import { NextRequest as req, NextResponse as res } from "next/server"

await dbConnect() 

export async function GET () {
  return res.json({
    message: 'lista de usuários!'
  })
}