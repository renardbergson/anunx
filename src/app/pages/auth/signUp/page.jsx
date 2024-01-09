'use client'

import { useFormik } from 'formik'
import formikConfigs from './validation'

import theme from '@/app/theme'
import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Button
} from '@mui/material'

import TemplateDefault from '../../../templates/Default'
import InternalContainer from '@/app/partials/InternalContainer'
import PageTitle from '@/app/components/PageTitle'
import styles from './styles'

const SignUp = () => {
  const formik = useFormik(formikConfigs)

  return (
    <TemplateDefault>
      <PageTitle title={'Crie sua conta'} subtitle={'E anuncie para todo o Brasil'} />
      
      <form onSubmit={formik.handleSubmit}>
        <InternalContainer maxWidth={'sm'}>
          <Box sx={{background: theme.palette.secondary.main, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>
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
              <Button 
                type="submit"
                variant='contained' 
                color='primary' 
                size="small"
                sx={styles.submitButton}
                fullWidth
              >
                Cadastrar
              </Button>
            </Box>
          </Box>
        </InternalContainer>
      </form>
    </TemplateDefault>
  )
}

export default SignUp