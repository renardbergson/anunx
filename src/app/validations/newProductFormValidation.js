import * as Yup from 'yup'

const newProductFormValidation = Yup.object().shape({
  title: Yup.string()
    .required('campo obrigatório!')
    .min(10, 'título resumido demais')
    .max(60, 'insira mais detalhes na descrição')
})

export default newProductFormValidation

/* 
  Let's take a look at one example without using Yup, just Formik to validate...

    const validate = values => {
    const errors = {}

    if (!values.title) {
      errors.title = 'campo obrigatório!'
    }

    return errors
  }

  "validate" would be a required field in Formik hook configuration object
*/