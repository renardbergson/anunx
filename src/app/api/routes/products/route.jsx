import { NextResponse as res } from "next/server"
import dbConnect from "../../utils/dbConnect"
import UsersModel from "../../models/products"

export async function POST (req) {
  const form = await req.formData()

  const title = form.get('title')
  const category = form.get('category')
  const images = form.get('images')
  const description = form.get('description')
  const price = form.get('price')
  const name = form.get('name')
  const email = form.get('email')
  const phone = form.get('phone')

  console.log(title, category, images, description, price, name, email, phone)

  return res.json({success: true})
}