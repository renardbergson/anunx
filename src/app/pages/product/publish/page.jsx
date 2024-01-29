import getSession from '../../../utils/getSession'
import TemplateDefault from '../../../templates/Default'
import InternalContainer from '../../../partials/InternalContainer'
import FormContent from './formContent'
import PageTitle from '../../../components/PageTitle'

import axios from 'axios'
import { revalidatePath } from 'next/cache'

const Publish = async () => {
  const user = await getSession()

  const handleSubmit = async (formData) => {
    'use server'

    const request = await axios.post(`${process.env.NEXT_PUBLIC_BACK_END}/products/new`, formData)

    revalidatePath('/')
    return request.status
  }
  
  return (
    <TemplateDefault user={user}>
      <InternalContainer maxWidth={'md'}>
        <PageTitle 
          title={'Publicar Anúncio'} 
          subtitle={'Quanto mais detalhado, melhor!'}
        />
        
        <FormContent
          user={user} 
          addProduct={handleSubmit}
        />
      </InternalContainer>
    </TemplateDefault>
  )
}

export default Publish