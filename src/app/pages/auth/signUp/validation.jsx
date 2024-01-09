import * as Yup from 'yup'

const yupValidation = Yup.object().shape({
  name: Yup
    .string()
    .required('campo obrigatório!'),
  email: Yup
    .string()
    .email('insira um e-mail válido!')
    .required('campo obrigatório!'),
  password: Yup
    .string()
    .min(8, 'insira pelo menos 8 caracteres')
    .required('campo obrigatório!'),
  passwordConf: Yup
    .string()
    .min(8, 'insira pelo menos 8 caracteres')
    .required('campo obrigatório!')
    .oneOf([Yup.ref('password'), null], 'As senhas não conferem!'),
})

const formikConfigs = {
  initialValues: {
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  },
  validationSchema: yupValidation,
  onSubmit: values => {
    console.log(values)
  },
}

export default formikConfigs