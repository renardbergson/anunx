import getSession from '../../../utils/getSession'
import TemplateDefault from '../../../templates/Default'
import PageTitle from '../../../components/PageTitle'
import InternalContainer from '../../../partials/InternalContainer'
import WhiteBox from '../../../components/WhiteBox'
import FormContent from './formContent'
import LoggedUserMessage from '../../../components/LoggedUserMessage'

const SignInPage = async () => {
  const user = await getSession()

  return (
    <TemplateDefault user={user}>
      <PageTitle title={!user ? 'Entre na sua conta' : 'Usuário Logado'} />
        <InternalContainer maxWidth={'sm'}>
          <WhiteBox>
            {
              !user
              ? (
                <FormContent />
              ) : (
                <LoggedUserMessage userName={user.name}/>
              ) 
            }
          </WhiteBox>
        </InternalContainer>
    </TemplateDefault>
  )
}

export default SignInPage