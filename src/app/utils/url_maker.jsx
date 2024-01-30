import slugify from "slugify"

const Url_Maker = (data) => {
  return slugify(data).toLocaleLowerCase()
}

export default Url_Maker