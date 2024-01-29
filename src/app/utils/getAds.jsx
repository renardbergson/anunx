import axios from "axios"

const GetAds = async () => {
  const request = await axios.get(`${process.env.NEXT_PUBLIC_BACK_END}/products/ads`)
  return request.data
}

export default GetAds