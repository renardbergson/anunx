import { redirect } from 'next/navigation'

const Redirect = async (url) => {
  'use server'
  redirect(url)
}

export default Redirect