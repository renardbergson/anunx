'use client'

import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Button,
  CircularProgress,
} from '@mui/material'

import { useFormik } from 'formik'
import yupValidation from './validation'
import useToast from '../../../contexts/Toast'
import { useRouter } from 'next/navigation'

import styles from './styles'
import SignInOutSwitch from '../../../components/SignInOutSwitch'

const FormContent = ({saveUser}) => {
  const { setToast } = useToast()
  const router = useRouter()

  const formikConfigs = {
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConf: '',
    },
    validationSchema: yupValidation,
    onSubmit: async values => {
      const newUser = await saveUser(values)
      
      if (newUser == 201) {
        setToast({
          open: true,
          severity: 'success',
          text: 'usuário cadastrado com sucesso!',
        })
        router.push('/pages/auth/signIn')
      }
    },
  }

  const formik = useFormik(formikConfigs)

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl error={Boolean(formik.touched.name && formik.errors.name)} fullWidth>
        <InputLabel sx={styles.inputLabel}>
          Nome
        </InputLabel>

        <Input 
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <FormHelperText sx={styles.inputHelperText}>
          {formik.touched.name && formik.errors.name ? formik.errors.name : null}
        </FormHelperText>
      </FormControl>

      <br /> <br />

      <FormControl error={Boolean(formik.touched.email && formik.errors.email)} fullWidth>
        <InputLabel sx={styles.inputLabel}>
          E-mail
        </InputLabel>

        <Input 
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <FormHelperText sx={styles.inputHelperText}>
          {formik.touched.email && formik.errors.email ? formik.errors.email : null}
        </FormHelperText>
      </FormControl>

      <br /> <br />

      <FormControl error={Boolean(formik.touched.password && formik.errors.password)} fullWidth>
        <InputLabel sx={styles.inputLabel}>
          Senha
        </InputLabel>

        <Input 
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <FormHelperText sx={styles.inputHelperText}>
          {formik.touched.password && formik.errors.password ? formik.errors.password : null}
        </FormHelperText>
      </FormControl>

      <br /> <br />

      <FormControl error={Boolean(formik.touched.passwordConf && formik.errors.passwordConf)} fullWidth>
        <InputLabel sx={styles.inputLabel}>
          Confirme a Senha
        </InputLabel>

        <Input 
          name="passwordConf"
          type="password"
          value={formik.values.passwordConf}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <FormHelperText sx={styles.inputHelperText}>
          {formik.touched.passwordConf && formik.errors.passwordConf ? formik.errors.passwordConf : null}
        </FormHelperText>
      </FormControl>

      <Box>
        {
          formik.isSubmitting 
          ? (
            <CircularProgress sx={styles.circularProgress} size={25} />
          ) : (
            <Button 
              type="submit"
              variant='contained' 
              color='primary' 
              size="small"
              sx={styles.submitButton}
              fullWidth
              disabled={formik.isSubmitting}
            >
              Cadastrar
            </Button>
          )
        }              
      </Box>

      <SignInOutSwitch 
        text={'Já tem um cadastro?'} 
        actionText={'Entre!'} 
        href={'/pages/auth/signIn'}
      />
    </form>
  )
}

export default FormContent