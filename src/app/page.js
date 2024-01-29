import getSession from './utils/getSession'
import getAds from './utils/getAds'

import TemplateDefault from './templates/Default'
import PageTitle from './components/PageTitle'
import Highlights from './components/Highlights'
import InternalContainer from './partials/InternalContainer'
import ProductGrid from './components/ProductGrid'

const Home = async () => {
  const user = await getSession()
  const ads = await getAds()

  return (
    <TemplateDefault user={user}>

      <PageTitle 
        title={'Bem-vindo ao Anunx!'} 
        subtitle={'O que está procurando?'} 
        searchBar={true} 
      />
      
      <Highlights />

      <InternalContainer>
        <ProductGrid products={ads}/>
      </InternalContainer>
    </TemplateDefault>
  )
}

export default Home