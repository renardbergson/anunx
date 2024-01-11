import * as Yup from 'yup'

const yupValidation = Yup.object().shape({
  email: Yup
    .string()
    .email('insira um e-mail válido!')
    .required('campo obrigatório!'),
  password: Yup
    .string()
    .min(8, 'insira pelo menos 8 caracteres')
    .required('campo obrigatório!'),
})

export default yupValidation