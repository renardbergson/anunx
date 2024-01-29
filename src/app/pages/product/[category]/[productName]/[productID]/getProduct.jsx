import axios from 'axios'

const GetProduct = async (productID) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BACK_END}/products/ads/${productID}`)
  const product = response.data
  return product
}

export default GetProduct