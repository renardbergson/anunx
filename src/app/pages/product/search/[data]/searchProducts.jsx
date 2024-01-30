import axios from "axios"

const SearchProducts = async (data) => {
  const request = await axios.get(`${process.env.NEXT_PUBLIC_BACK_END}/products/search/${data}`)
  const result = await request.data
  return result
}

export default SearchProducts