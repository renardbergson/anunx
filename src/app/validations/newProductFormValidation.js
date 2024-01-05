import * as Yup from 'yup'

const newProductFormValidation = Yup.object().shape({
  title: Yup
    .string()
    .required('campo obrigatório!')
    .min(10, 'título resumido demais')
    .max(60, 'insira mais detalhes na descrição'),
  category: 
    Yup.string()
    .required('campo obrigatório!')
})

export default newProductFormValidation