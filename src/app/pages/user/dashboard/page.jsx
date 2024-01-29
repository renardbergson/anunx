import getSession from '../../../utils/getSession'
import GetMyProducts from './getMyProducts'
import axios from 'axios'
import { revalidatePath } from 'next/cache'

import TemplateDefault from '../../../templates/Default'
import PageTitle from '../../../components/PageTitle'
import InternalContainer from '../../../partials/InternalContainer'
import ProductGrid from '../../../components/ProductGrid'


const Dashboard = async () => {  
  const user = await getSession()
  const myProducts = await GetMyProducts(user._id)

  const handleRemoveProduct = async (productID) => {
    'use server'

    const remove = await axios.delete(`${process.env.NEXT_PUBLIC_BACK_END}/products/remove`, 
    {
      data: {
        productID
      }
    })

    revalidatePath('/')
    return remove.status
  }

  return (
    <>
      <TemplateDefault user={user}>
        <PageTitle title={'Meus Anúncios'} actionBtn={true}/>

        <InternalContainer>
          
          <ProductGrid 
            products={myProducts} 
            user={user} 
            removeProduct={handleRemoveProduct}
          />
        
        </InternalContainer>
      </TemplateDefault>
    </>
  )
}

export default Dashboard