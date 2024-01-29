import axios from "axios"

const GetHighlights = async () => {
  const request = await axios.get(`http://localhost:8080/products/highlights`)
  const highlights = request.data
  return highlights
}

export default GetHighlights