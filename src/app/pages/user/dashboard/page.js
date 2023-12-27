'use client'

import { useTheme } from '@emotion/react'
import { Container, Typography, Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton } from '@mui/material'

import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import TemplateDefault from '../../../templates/Default'

const Dashboard = () => {
  const theme = useTheme()

  return (
    <TemplateDefault>
      <Container maxWidth='sm' sx={{padding: theme.spacing(6, 0)}}>
        <Typography component="h1" variant="h3" fontWeight="light" align='center'>
          Meus Anúncios
        </Typography>

        <Button variant='contained' color='primary' sx={{display: 'block', margin: '20px auto'}}>
          Publicar novo anúncio
        </Button>
      </Container>

      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                sx={{ paddingTop: '60%' }}
                image="https://source.unsplash.com/random"
                title="Título da Imagem"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Título do Anúncio
                </Typography>
                
                <Typography variant="body1" component="h3" color="text.secondary" sx={{marginBottom: theme.spacing()}}>
                  R$ 60,00
                </Typography>

                <Typography variant="body2" component="p" color="text.secondary">
                A expressão Lorem ipsum é um texto padrão em latim 
                utilizado na produção gráfica para preencher espaços.
                </Typography>
              </CardContent>

              <CardActions>
                <IconButton color='primary'>
                  <EditIcon sx={{fontSize: '20px'}}/>
                </IconButton>

                <IconButton size='small' color='primary'>
                  <DeleteForeverIcon sx={{fontSize: '20px'}}/>
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                sx={{ paddingTop: '60%' }}
                image="https://source.unsplash.com/random"
                title="Título da Imagem"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Título do Anúncio
                </Typography>
                
                <Typography variant="body1" component="h3" color="text.secondary" sx={{marginBottom: theme.spacing()}}>
                  R$ 60,00
                </Typography>

                <Typography variant="body2" component="p" color="text.secondary">
                A expressão Lorem ipsum é um texto padrão em latim 
                utilizado na produção gráfica para preencher espaços.
                </Typography>
              </CardContent>

              <CardActions>
                <IconButton color='primary'>
                  <EditIcon sx={{fontSize: '20px'}}/>
                </IconButton>

                <IconButton size='small' color='primary'>
                  <DeleteForeverIcon sx={{fontSize: '20px'}}/>
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                sx={{ paddingTop: '60%' }}
                image="https://source.unsplash.com/random"
                title="Título da Imagem"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Título do Anúncio
                </Typography>
                
                <Typography variant="body1" component="h3" color="text.secondary" sx={{marginBottom: theme.spacing()}}>
                  R$ 60,00
                </Typography>

                <Typography variant="body2" component="p" color="text.secondary">
                A expressão Lorem ipsum é um texto padrão em latim 
                utilizado na produção gráfica para preencher espaços.
                </Typography>
              </CardContent>

              <CardActions>
                <IconButton color='primary'>
                  <EditIcon sx={{fontSize: '20px'}}/>
                </IconButton>

                <IconButton size='small' color='primary'>
                  <DeleteForeverIcon sx={{fontSize: '20px'}}/>
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Dashboard