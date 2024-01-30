import getSession from '../../../../utils/getSession'
import TemplateDefault from "../../../../templates/Default"
import InternalContainer from "../../../../partials/InternalContainer"
import SearchBar from "../../../../components/SearchBar"
import WhiteBox from '../../../../components/WhiteBox'
import ProductGrid from '../../../../components/ProductGrid'
import searchProducts from './searchProducts'
import SearchFeedback from '../../../../components/SearchFeedback'

const ProductSearch = async (req) => {
  const user = await getSession()
  const data = await req.params.data
  const search = await searchProducts(data)

  return (
    <TemplateDefault user={user}>
      <InternalContainer maxWidth={'sm'}>
        <SearchBar placeholder={data}/>
      </InternalContainer>  

      <InternalContainer>
        <WhiteBox>
          <SearchFeedback length={search.length} data={data}/>
          <ProductGrid page={'search'} products={search}/>
        </WhiteBox>
      </InternalContainer>
    </TemplateDefault>
  )
}

export default ProductSearch