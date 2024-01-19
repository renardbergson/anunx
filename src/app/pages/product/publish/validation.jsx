import * as Yup from 'yup'

const yupValidation = Yup.object().shape({
  title: Yup
    .string()
    .required('campo obrigatório!')
    .min(10, 'título curto demais')
    .max(60, 'insira mais detalhes na descrição'),
  category: Yup
    .string()
    .required('campo obrigatório!'),
  images: Yup
    .array()
    .min(1, 'carregue pelo menos uma imagem!')
    .required('campo obrigatório!'),
  description: Yup
    .string()
    .required('campo obrigatório!')
    .min(50, 'insira uma descrição com pelo menos 50 caracteres'),
  price: Yup
    .number()
    .required('campo obrigatório!'),
  name: Yup
    .string()
    .required('campo obrigatório!'),
  email: Yup
    .string()
    .email('insira um e-mail válido!')
    .required('campo obrigatório!'),
  phone: Yup
    .number()
    .required('campo obrigatório!')
})

export default yupValidation