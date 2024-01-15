'use client'

import { useFormik } from 'formik'
import yupValidation from './validation'
import { useRouter, useSearchParams } from 'next/navigation'

import theme from '../../../theme'
import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Button,
  CircularProgress,
  Alert
} from '@mui/material'

import TemplateDefault from '../../../templates/Default'
import InternalContainer from '../../../partials/InternalContainer'
import PageTitle from '../../../components/PageTitle'
import styles from './styles'

import { signIn, signOut, useSession } from 'next-auth/react'

const SignIn = () => {
  const router = useRouter()
  const session = useSession()
  const searchParams = useSearchParams()

  console.log(session)

  const formikConfigs = {
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yupValidation,
    onSubmit: async data => {
      const forLogin = {
        email: data.email,
        password: data.password,
        redirect: false,
      }

      const login = await signIn('credentials', forLogin)

      if (login.ok) {
        router.push('/pages/user/dashboard')
      }

      if (login.error) {
        router.push('/pages/auth/signIn?invalid=true')
      }
    }
  }

  const formik = useFormik(formikConfigs)
  const paramSearch = searchParams.get('invalid')

  return (
    <TemplateDefault>
      <PageTitle title={'Entre na sua conta'} />
      
      <form onSubmit={formik.handleSubmit}>
        <InternalContainer maxWidth={'sm'}>          
          <Box sx={{background: theme.palette.secondary.main, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>
            {
              paramSearch 
              ? <Alert severity='error' sx={{marginBottom: theme.spacing(3)}}>
                  Usuário ou senha inválidos
                </Alert>
              : null
            }

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
                    Entrar
                  </Button>
                )
              }              
            </Box>
          </Box>
        </InternalContainer>
      </form>
    </TemplateDefault>
  )
}

export default SignIn