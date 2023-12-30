'use client'

import React, { useState } from 'react'
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
  InputAdornment
} from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import TemplateDefault from '../../../templates/Default'
import PageTitle from '@/app/components/PageTitle'


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

const Publish = () => {
  const theme = useTheme()

  // react dropzone retorna duas funções
  // use dropzone recebe um objeto
  // a primeira será passada para a área clicável/arrastável
  // a segunda será passada para um input, inserido dentro da área clicável/arrastável
  // a chave "accept" seta: tipo de arquivo/extensão aceitável (neste caso, img de qq extensão)
  // a chave "onDrop" recebe a funcão que será executada toda vez que um arquivo for importado
  // selectedFiles é um array com as imagens selecionadas. É preciso inserir ele em um estado
  // com map, estamos retornando para o novo array "filePackage" um objeto
  /* 
    o método Object.assign recebe pelo menos duas propriedades, o primeiro será o objeto ALVO,
    o segundo ou os demais serão os objetos atribuidos/atualizados no alvo. Se houver objetos com 
    chaves repetidas, ele atualizará o alvo com a chave repetida mais próxima dos parênteses, se 
    não houver, todas as chaves serão atribuidos ao objeto alvo. Funciona igual à atualização de
    dados usando o spread operator.
  */
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
  
  const [images, setImages] = useState([])

  const [category, setCategory] = useState('')

  const handleChangeCategory = e => {
    setCategory(e.target.value)
  }

  const handleOnRemoveImage = imageName => {
    const newImagesState = images.filter(image => image.name != imageName)
    setImages(newImagesState)
  }

  return (
    <TemplateDefault>
      <PageTitle title={'Publicar Anúncio'} subtitle={'Quanto mais detalhado, melhor!'}/>

      <Container maxWidth="md">
        <Box sx={{background: theme.palette.secondary.main, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>
          <Typography component="h6" variant="body2" fontWeight="bold">
            Título do Anúncio
          </Typography>
          
          <TextField 
            label="ex.: playstation 5 - mídia física" 
            variant="standard" 
            size="small" 
            fullWidth
          />

          <br /> <br /> <br />

          <Typography component="h6" variant="body2" fontWeight="bold">
            Categoria
          </Typography>

          <Select
            size="small"
            variant="standard"
            fullWidth
            displayEmpty
            value={category}
            onChange={handleChangeCategory}
          >
            <MenuItem value="">Selecione</MenuItem>
            <MenuItem value="Games e Consoles">Games e Consoles</MenuItem>
            <MenuItem value="Veículos">Veículos</MenuItem>
            <MenuItem value="Esportes">Esportes</MenuItem>
          </Select>
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
          <Typography component="h6" variant="body2" fontWeight="bold">
            Descricão
          </Typography>

          <Typography component="div" variant="body2" fontWeight="light" color='primary'>
            Escreva os detalhes daquilo que está anunciando
          </Typography>

          <TextField 
            multiline
            rows={4}
            fullWidth
          />
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
            variant='contained' 
            color='primary' 
            size="small"
            sx={{marginBottom: theme.spacing(3)}}
          >
            Publicar anúncio
          </Button>
        </Box>
      </Container>
    </TemplateDefault>
  )
}

export default Publish