import getSession from '../../../utils/getSession'
import TemplateDefault from "../../../templates/Default"
import InternalContainer from "../../../partials/InternalContainer"
import SearchBar from "../../../components/SearchBar"
import WhiteBox from '../../../components/WhiteBox'
import REMOVER from './REMOVER'

const ProductSearch = async () => {
  const user = await getSession()

  return (
    <TemplateDefault user={user}>
      <InternalContainer maxWidth={'sm'}>
        <SearchBar placeholder={'...o que o usuário digitou'}/>
      </InternalContainer>  

      <InternalContainer>
        <WhiteBox>
          <REMOVER />
        </WhiteBox>
      </InternalContainer>
    </TemplateDefault>
  )
}

export default ProductSearch