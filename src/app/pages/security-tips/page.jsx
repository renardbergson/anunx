import getSession from '../../utils/getSession'
import TemplateDefault from '../../templates/Default'
import PageTitle from '../../components/PageTitle'
import InternalContainer from '../../partials/InternalContainer'
import SingleParagraph from '../../components/SingleParagraph'

const SecurityTips = async () => {
  const user = await getSession()

  return (
    <TemplateDefault user={user}>
      <PageTitle title={'Dicas de Segurança'} subtitle={'Confira nossas dicas para uma experiência mais segura!'}/>

      <InternalContainer maxWidth={'sm'}>
        <SingleParagraph 
          text={'➡️ Sempre esclareça todas as dúvidas com o anunciante do produto'}
          marginBottom={3}
        />

        <SingleParagraph 
          text={'➡️ Desconfie de ofertas muito baratas ou de anúncios "milagrosos"'}
          marginBottom={3}
        />

        <SingleParagraph 
          text={'➡️ Se possível, prefira os itens que possuam nota fiscal'}
          marginBottom={3}
        />

        <SingleParagraph 
          text={'➡️ Em casos de compras à distância, exiga o comprovante da postagem do produto e confira se o rastreamento consta no sistema, antes de fazer qualquer transferência'}
          marginBottom={3}
        />

        <SingleParagraph 
          text={'➡️ Ao negociar pessoalmente, prefira sempre lugares públicos, isso reduz os riscos para ambas as partes'}
          marginBottom={3}
        />

        <SingleParagraph 
          text={'➡️ Nunca realize o pagamento antes de testar o produto e ter certeza de que tudo está de acordo com o que foi anunciado pelo vendedor'}
          marginBottom={3}
        />
      </InternalContainer>
    </TemplateDefault>
  )
}

export default SecurityTips