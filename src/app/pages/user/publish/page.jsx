'use client'

import React, {useState} from 'react'
import { useTheme } from '@emotion/react'
import { Container, Typography, Box, TextField, Select, MenuItem, Button } from '@mui/material'

import TemplateDefault from '../../../templates/Default'

const Publish = () => {
  const theme = useTheme()

  const [category, setCategory] = useState('')

  const handleChangeCategory = e => {
    setCategory(e.target.value)
  }

  return (
    <TemplateDefault>
      <Container maxWidth="sm" sx={{padding: theme.spacing(6, 0)}}>
        <Typography component="h1" variant="h3" fontWeight="light" align="center">
          Publicar Anúncio
        </Typography>
        <Typography component="h2" variant="h6" fontWeight="light" align="center">
          Quanto mais detalhado, melhor!
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Box sx={{background: theme.palette.background.internal, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>
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
        <Box sx={{background: theme.palette.background.internal, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>
        <Typography component="h6" variant="body2" fontWeight="bold">
            Imagens
          </Typography>
          <Typography component="div" variant="body2" fontWeight="light" color='primary'>
            A primeira imagem será a foto principal do seu anúncio
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="md">
        <Box sx={{background: theme.palette.background.internal, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>
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
        <Box sx={{background: theme.palette.background.internal, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>
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