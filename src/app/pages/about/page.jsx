import getSession from '../../utils/getSession'
import TemplateDefault from '../../templates/Default'
import PageTitle from '../../components/PageTitle'
import InternalContainer from '../../partials/InternalContainer'
import SingleParagraph from '../../components/SingleParagraph'

const About = async () => {
  const user = await getSession()

  return (
    <TemplateDefault user={user}>
      <PageTitle title={'Quem Somos'} subtitle={'Anunx, a sua plataforma de compra e venda'}/>

      <InternalContainer maxWidth={'sm'}>
        <SingleParagraph 
          text={'O Anunx é o projeto de conclusão de um curso chamado "Formação Full Stack Javascript", idealizado pelo professor Thiago Munhoz Medeiros, codado e aprimorado por Renard Bergson.'}
          marginBottom={3}
        />
        
        <SingleParagraph 
          text={'O projeto deveria ser desenvolvido com NextJS e seu design todo baseado no estilo e tipografia da biblioteca Material UI, utilizando ainda outras bibliotecas externas importantes, como NextAuth, Formik, Yup, ReactDropzone, dentre outras.'}
          marginBottom={3}
        />

        <SingleParagraph 
          text={'Diversas funcionalidades foram adicionadas face ao projeto original, visto que a intenção do professor era mesmo deixar algumas "pontas soltas", para que o aluno pudesse quebrar um pouco a cabeça e pesquisasse por conta própria.'}
          marginBottom={3}
        />

        <SingleParagraph 
          text={'Espero que você aproveite a plataforma e explore as suas funcionalidades. É possível conferir este e outros repositórios clicando no link "Ajuda e Contato", onde estarão os principals meios de contato comigo.'}
        />
      </InternalContainer>
    </TemplateDefault>
  )
}

export default About