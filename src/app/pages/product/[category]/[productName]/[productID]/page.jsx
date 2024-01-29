import getSession from '../../../../../utils/getSession'
import getProduct from './getProduct'
import TemplateDefault from "../../../../../templates/Default"
import InternalContainer from "../../../../../partials/InternalContainer"
import IntStructure from './intStructure'

const ProductPage = async (req) => {
  const user = await getSession()
  const productID = await req.params.productID
  const product = await getProduct(productID)

  return (
    <TemplateDefault user={user}>
      <InternalContainer>
        <IntStructure data={product[0]}/>
      </InternalContainer>
    </TemplateDefault>
  )
}

export default ProductPage