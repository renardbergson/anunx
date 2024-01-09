'use client'

import theme from '@/app/theme'

import {
  Box,
  Select,
  MenuItem,
  Button,
  InputAdornment,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from '@mui/material'

import { useFormik } from 'formik'
import formikConfigs from '@/app/pages/product/publish/validation'

import InternalContainer from '@/app/partials/InternalContainer'
import TemplateDefault from '../../../templates/Default'
import PageTitle from '@/app/components/PageTitle'
import FileUpload from '@/app/components/FileUpload'
import styles from './styles'

const Publish = () => {
  const formik = useFormik(formikConfigs)

  return (
    <TemplateDefault>
      <PageTitle title={'Publicar Anúncio'} subtitle={'Quanto mais detalhado, melhor!'}/>

      <form onSubmit={formik.handleSubmit}>
        <InternalContainer maxWidth={'md'}>
          <Box sx={{background: theme.palette.secondary.main, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>
            <FormControl error={Boolean(formik.touched.title && formik.errors.title)} fullWidth>
              <InputLabel sx={styles.inputLabel}>
                Título do Anúncio
              </InputLabel>
              <Input 
                name="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              />
              <FormHelperText sx={styles.inputHelperText}>
                {formik.touched.title && formik.errors.title ? formik.errors.title : null}
              </FormHelperText>
            </FormControl>

            <br /> <br /> <br />

            <FormControl error={Boolean(formik.touched.category && formik.errors.category)} fullWidth>
              <InputLabel sx={styles.inputLabel}>Categoria</InputLabel>
              <Select
                name="category"
                size="small"
                variant="standard"
                fullWidth
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
              >
                <MenuItem value="Games e Consoles">Games e Consoles</MenuItem>
                <MenuItem value="Veículos">Veículos</MenuItem>
                <MenuItem value="Esportes">Esportes</MenuItem>
              </Select>
              <FormHelperText sx={styles.inputHelperText}> 
                {formik.touched.category && formik.errors.category ? formik.errors.category : null} 
              </FormHelperText>
            </FormControl>
          </Box>
        </InternalContainer>

        <InternalContainer maxWidth={'md'}>
          <Box sx={{background: theme.palette.secondary.main, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>
            <FileUpload formik={formik}/>
          </Box>
        </InternalContainer>

        <InternalContainer maxWidth={'md'}>
          <Box sx={{background: theme.palette.secondary.main, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>            
            <FormControl error={Boolean(formik.touched.description && formik.errors.description)} fullWidth>
              <InputLabel sx={styles.inputLabel}>
                Descreva aquilo que está anunciando
              </InputLabel>
              <Input 
                name="description"
                multiline
                rows={4}
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormHelperText sx={styles.inputHelperText}>
                {formik.touched.description && formik.errors.description ? formik.errors.description : null}
              </FormHelperText>
            </FormControl>
          </Box>
        </InternalContainer>

        <InternalContainer maxWidth={'md'}>
          <Box sx={{background: theme.palette.secondary.main, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>            
            <FormControl error={Boolean(formik.touched.price && formik.errors.price)} fullWidth>
              <InputLabel sx={styles.inputLabel}>Preço</InputLabel>
              <Input
                name="price"
                type="number"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                startAdornment= {<InputAdornment position="start">R$</InputAdornment>}
                sx={styles.inputTypeNumber}
              />
              <FormHelperText sx={styles.inputHelperText}>
                {formik.touched.price && formik.errors.price ? formik.errors.price : null}
              </FormHelperText>
            </FormControl>
          </Box>
        </InternalContainer>

        <InternalContainer maxWidth={'md'}>
          <Box sx={{background: theme.palette.secondary.main, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>            
            <FormControl error={Boolean(formik.touched.name && formik.errors.name)} fullWidth>
              <InputLabel sx={styles.inputLabel}>
                Seu Nome
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
                Seu E-mail
              </InputLabel>
              <Input 
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormHelperText sx={styles.inputHelperText}>
                {formik.touched.email && formik.errors.email ? formik.errors.email : null}
              </FormHelperText>
            </FormControl>

            <br /> <br />

            <FormControl error={Boolean(formik.touched.phone && formik.errors.phone)} fullWidth>
              <InputLabel sx={styles.inputLabel}>
                Seu Telefone
              </InputLabel>
              <Input 
                name="phone"
                type="number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={styles.inputTypeNumber}
              />
              <FormHelperText sx={styles.inputHelperText}>
                {formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}
              </FormHelperText>
            </FormControl>
          </Box>
        </InternalContainer>

        <InternalContainer maxWidth={'md'}>
          <Box textAlign="right">
            <Button 
              type="submit"
              variant='contained' 
              color='primary' 
              size="small"
              sx={{marginBottom: theme.spacing(3)}}
            >
              Publicar anúncio
            </Button>
          </Box>
        </InternalContainer>
      </form>
    </TemplateDefault>
  )
}

export default Publish