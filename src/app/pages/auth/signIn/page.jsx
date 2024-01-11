'use client'

import { useFormik } from 'formik'
import yupValidation from './validation'
import axios from 'axios'
import useToast from '@/app/contexts/Toast'
import { useRouter } from 'next/navigation'

import theme from '@/app/theme'
import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Button,
  CircularProgress
} from '@mui/material'

import TemplateDefault from '../../../templates/Default'
import InternalContainer from '@/app/partials/InternalContainer'
import PageTitle from '@/app/components/PageTitle'
import styles from './styles'

const SignIn = () => {
  const { setToast } = useToast()
  const router = useRouter()

  const formikConfigs = {
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yupValidation,
    onSubmit: async values => { /* fazer */}
  }

  const formik = useFormik(formikConfigs)

  return (
    <TemplateDefault>
      <PageTitle title={'Entre na sua conta'} />
      
      <form onSubmit={formik.handleSubmit}>
        <InternalContainer maxWidth={'sm'}>
          <Box sx={{background: theme.palette.secondary.main, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>

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