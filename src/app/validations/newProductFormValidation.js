import * as Yup from 'yup'

const newProductFormValidation = Yup.object().shape({
  title: Yup
    .string()
    .required('campo obrigatório!')
    .min(10, 'título curto demais')
    .max(60, 'insira mais detalhes na descrição'),
  category: 
    Yup.string()
    .required('campo obrigatório!'),
  description: Yup
    .string()
    .required('campo obrigatório!')
    .min(50, 'insira uma descrição com pelo menos 50 caracteres')
})

export default newProductFormValidation