const GetMyProducts = async (userID) => {
  const request = await fetch(`${process.env.NEXT_PUBLIC_BACK_END}/products/myAds/${userID}`)
  const response = await request.json()

  return response
}

export default GetMyProducts