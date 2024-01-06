'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik'
import newProductFormValidation from '@/app/validations/newProductFormValidation'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

import { useTheme } from '@emotion/react'
import {
  Container,
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  InputAdornment,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import TemplateDefault from '../../../templates/Default'
import PageTitle from '@/app/components/PageTitle'
import theme from '@/app/theme'


const ThumbsWrapper = styled.div`
  display: flex;
  margin-top: 14px;
  gap: 20px;
  flex-wrap: wrap;
`

const Dropzone = styled.div`
  width: 200px;
  height: 150px;
  border: 2px dashed black;
  background-color: rgb(235, 237, 238);
  text-align: center;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Thumb = styled.div`
  width: 200px;
  height: 150px;
  background-size: cover;
  background-position: center center;
  cursor: pointer;

  &:hover .mask {
    display: block;
  }
`

const Mask = styled.div`
  display: none;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: relative;

  & .trashIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const MainImageText = styled.span`
  background-color: blue;
  position: absolute;
  padding: 2px 6px;
  bottom: 0;
`

const styles = {
  inputLabel: {
    marginLeft: -1.8,
    color: theme.palette.primary.main,
  },
  inputHelperText: {
    marginLeft: 0
  }
}

const Publish = () => {
  const theme = useTheme()

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (selectedFiles) => {
      const filePackage = selectedFiles.map(file => {
        return (
          Object.assign(file, {preview: URL.createObjectURL(file)})
        )
      })

      setImages([
        ...images,
        ...filePackage,
      ])
    }
  })

  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      description: '',
    },
    validationSchema: newProductFormValidation,
    onSubmit: values => {
      console.log(JSON.stringify(values))
    },
    validateOnChange: false
  })
  
  const [images, setImages] = useState([])

  const handleOnRemoveImage = imageName => {
    const newImagesState = images.filter(image => image.name != imageName)
    setImages(newImagesState)
  }

  return (
    <TemplateDefault>
      <PageTitle title={'Publicar Anúncio'} subtitle={'Quanto mais detalhado, melhor!'}/>

      <form onSubmit={formik.handleSubmit}>
        <Container maxWidth="md">
          <Box sx={{background: theme.palette.secondary.main, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>
            <FormControl error={Boolean(formik.errors.title)} fullWidth>
              <InputLabel sx={styles.inputLabel}>
                Título do Anúncio
              </InputLabel>
              <Input 
                name="title"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              <FormHelperText sx={styles.inputHelperText}>
                {formik.errors.title}
              </FormHelperText>
            </FormControl>

            <br /> <br /> <br />

            <FormControl error={Boolean(formik.errors.category)} fullWidth>
              <InputLabel sx={styles.inputLabel}>Categoria</InputLabel>
              <Select
                name="category"
                size="small"
                variant="standard"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.category}
              >
                <MenuItem value="Games e Consoles">Games e Consoles</MenuItem>
                <MenuItem value="Veículos">Veículos</MenuItem>
                <MenuItem value="Esportes">Esportes</MenuItem>
              </Select>
              <FormHelperText sx={styles.inputHelperText}> 
                {formik.errors.category} 
              </FormHelperText>
            </FormControl>
          </Box>
        </Container>

        <Container maxWidth="md">
          <Box sx={{background: theme.palette.secondary.main, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>
            <Typography component="h6" variant="body2" fontWeight="bold">
              Imagens
            </Typography>

            <Typography component="span" variant="body2" fontWeight="light" color='primary'>
              A primeira imagem será a foto principal do seu anúncio
            </Typography>

            <ThumbsWrapper>
              <Dropzone {...getRootProps()}>
                <input {...getInputProps()}/>

                <Typography component="span" variant="body2">
                  Clique para adicionar ou arraste as imagens.
                </Typography>
              </Dropzone>

              {
                images.map((image, index) => {
                  return (
                    <Thumb key={image.name} style={{backgroundImage: `url(${image.preview})`}}>
                      <Mask className='mask' onClick={() => handleOnRemoveImage(image.name)}>
                        <DeleteForeverIcon className='trashIcon' color="secondary" />
                        
                        {index === 0 ?                       
                          <MainImageText>
                            <Typography variant="caption" color='secondary'>
                              Principal
                            </Typography>
                          </MainImageText>
                          : null
                        }
                      </Mask>
                    </Thumb>
                  )
                })
              }
            </ThumbsWrapper>
          </Box>
        </Container>

        <Container maxWidth="md">
          <Box sx={{background: theme.palette.secondary.main, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>            
            <FormControl error={Boolean(formik.errors.description)} fullWidth>
              <InputLabel sx={styles.inputLabel}>
                Descreva aquilo que está anunciando
              </InputLabel>
              <Input 
                name="description"
                multiline
                rows={4}
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              <FormHelperText sx={styles.inputHelperText}>
                {formik.errors.description}
              </FormHelperText>
            </FormControl>
          </Box>
        </Container>

        <Container maxWidth="md">
          <Box sx={{background: theme.palette.secondary.main, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>
            <Typography component="h6" variant="body2" fontWeight="bold">
              Preço
            </Typography>

            <TextField
              size="small"
              type="number"
              variant="standard"
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
              }}
              sx={{
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": 
                {display: "none"}, "& input[type=number]": {MozAppearance: "textfield"}
              }}
            />
          </Box>
        </Container>

        <Container maxWidth="md">
          <Box sx={{background: theme.palette.secondary.main, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>
          <Typography component="h6" variant="body2" fontWeight="bold">
              Dados de Contato
            </Typography>

            <TextField 
              label="Seu nome"
              size="small"
              fullWidth
              variant="standard"
            />

            <br /> <br />

            <TextField 
              label="Seu e-mail"
              size="small"
              fullWidth
              variant="standard"
            />

            <br /> <br />

            <TextField 
              label="Seu telefone"
              size="small"
              fullWidth
              variant="standard"
            />
          </Box>
        </Container>

        <Container maxWidth="md">
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
        </Container>
      </form>
    </TemplateDefault>
  )
}

export default Publish