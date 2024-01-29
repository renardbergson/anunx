'use client'

import {
  useTheme,
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Button,
  CircularProgress,
  Alert,
  Divider,
  Typography
} from '@mui/material'


import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

import { useFormik } from 'formik'
import yupValidation from './validation'

import styles from './styles'
import SignInOutSwitch from '../../../components/SignInOutSwitch'

const FormContent = () => {
  const theme = useTheme()
  const router = useRouter()
  const searchParams = useSearchParams()
  const paramSearch = searchParams.get('invalid')

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

  const handleGoogleLogin = () => {
    signIn('google', {callbackUrl: '/pages/user/dashboard'})
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box textAlign="center">
        <Button 
          variant='contained'
          size='small'
          startIcon={
            <Image 
              src={'/images/logo-google.svg'} 
              alt='logo from google'
              width={15}
              height={15}
            />
          }
          onClick={handleGoogleLogin}
        >
          Entrar com Google
        </Button>
      </Box>

      <Divider sx={{margin: `${theme.spacing(6)} 0 ${theme.spacing(3)} 0`}}> 
        <Typography>
          ou 
        </Typography>
      </Divider>

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

      <SignInOutSwitch 
        text={'Não tem um cadastro?'} 
        actionText={'Cadastre-se!'} 
        href={'/pages/auth/signUp'}
      />
    </form>
  )
}

export default FormContent