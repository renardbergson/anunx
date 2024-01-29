'use client'

import {
  useTheme,
  Box,
  Select,
  MenuItem,
  Button,
  InputAdornment,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  CircularProgress,
} from '@mui/material'

import styles from './styles'
import WhiteBox from '../../../components/WhiteBox'
import FileUpload from '../../../components/FileUpload'
import useToast from '../../../contexts/Toast'

import { useFormik } from 'formik'
import yupValidation from './validation'
import { useRouter } from 'next/navigation'

const FormContent = ({ user, addProduct }) => {
  const theme = useTheme()
  const { setToast } = useToast()
  const router = useRouter()

  const formikConfigs = {
    initialValues: {
      title: '',
      category: '',
      images: [],
      description: '',
      price: '',
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: yupValidation,
    onSubmit: handleSubmit,
  }

  const formik = useFormik(formikConfigs)

  async function handleSubmit (values) {
    const formData = new FormData()

    for (const field in values) {
      if (field === 'images') {
        values.images.forEach(image => {
          formData.append('images', image)
        })
      } else {
        formData.append('id', user._id)
        formData.append('image', user.image)
        formData.append(field, values[field])
      }
    }

    const newProduct = await addProduct(formData)
   
    if (newProduct == 201) {
      return handleSuccess()
    }

    return handleError()
  }

  function handleSuccess () {
    setToast({
      open: true,
      severity: 'success',
      text: 'Produto cadastrado com sucesso!',
    })
    
    setTimeout(() => {
      router.push('/pages/user/dashboard')
    }, 1000)
  }

  function handleError () {
    setToast({
      open: true,
      severity: 'error',
      text: 'Ops, ocorreu um erro. Tente novamente!',
    })
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <WhiteBox>
        <Box sx={{background: theme.palette.secondary.main, marginBottom: theme.spacing()}}>
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
              <MenuItem value="Carros, Motos e Peças">Carros, Motos e Peças</MenuItem>
              <MenuItem value="Imóveis">Imóveis</MenuItem>
              <MenuItem value="Casa, Decoração e Utensílios">Casa, Decoração e Utensílios</MenuItem>
              <MenuItem value="Celulares e Telefonia">Celulares e Telefonia</MenuItem>
              <MenuItem value="Informática">Informática</MenuItem>
              <MenuItem value="Games">Games</MenuItem>
              <MenuItem value="TV e vídeo">TV e vídeo</MenuItem>
              <MenuItem value="Áudio">Áudio</MenuItem>
              <MenuItem value="Câmeras e Drones">Câmeras e Drones</MenuItem>
              <MenuItem value="Moda e Beleza">Moda e Beleza</MenuItem>
              <MenuItem value="Comércio e Escritório">Comércio e Escritório</MenuItem>
              <MenuItem value="Música e Hobbies">Música e Hobbies</MenuItem>
              <MenuItem value="Esporte e Lazer">Esporte e Lazer</MenuItem>
              <MenuItem value="Artigos Infantis">Artigos Infantis</MenuItem>
              <MenuItem value="Animais de Estimação">Animais de Estimação</MenuItem>
              <MenuItem value="Agro e Indústria">Agro e Indústria</MenuItem>
              <MenuItem value="Serviços">Serviços</MenuItem>
              <MenuItem value="Vagas de Emprego">Vagas de Emprego</MenuItem>
              <MenuItem value="Eletrodomésticos">Eletrodomésticos</MenuItem>
              <MenuItem value="Materiais de Construção">Materiais de Construção</MenuItem>
              <MenuItem value="Móveis">Móveis</MenuItem>
            </Select>
            <FormHelperText sx={styles.inputHelperText}> 
              {formik.touched.category && formik.errors.category ? formik.errors.category : null} 
            </FormHelperText>
          </FormControl>
        </Box>
      </WhiteBox>

      <WhiteBox>
        <Box sx={{background: theme.palette.secondary.main, marginBottom: theme.spacing()}}>
          <FileUpload formik={formik}/>
        </Box>
      </WhiteBox>

      <WhiteBox>
        <Box sx={{background: theme.palette.secondary.main, marginBottom: theme.spacing()}}>            
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
      </WhiteBox>

      <WhiteBox>
        <Box sx={{background: theme.palette.secondary.main, marginBottom: theme.spacing()}}>
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
      </WhiteBox>

      <WhiteBox>
        <Box sx={{background: theme.palette.secondary.main, marginBottom: theme.spacing()}}>
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
      </WhiteBox>

      <Box textAlign={'right'}>
        {
          formik.isSubmitting
          ? (
            <CircularProgress size={30}/>
          ) : (
            <Button 
            type="submit"
            variant='contained' 
            color='primary' 
            size="small"
            sx={{marginBottom: theme.spacing(3)}}
            >
              Publicar anúncio
            </Button>
          )
        }
      </Box>
    </form>
  )
}

export default FormContent