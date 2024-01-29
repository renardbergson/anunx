import TemplateDefault from '../../../templates/Default'
import PageTitle from '../../../components/PageTitle'
import InternalContainer from '../../../partials/InternalContainer'
import WhiteBox from '../../../components/WhiteBox'
import FormContent from './formContent'

import axios from 'axios'

const SignUp = async () => {
  const handleSaveUser = async (values) => {
    'use server'

    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACK_END}/users/new`, values)

    return response.status
  }

  return (
    <TemplateDefault>
      <PageTitle 
        title={'Crie sua conta'} 
        subtitle={'E anuncie para todo o Brasil'}
      />

      <InternalContainer maxWidth={'sm'}>
        <WhiteBox>
          <FormContent saveUser={handleSaveUser}/>
        </WhiteBox>
      </InternalContainer>
    </TemplateDefault>
  )
}

export default SignUp