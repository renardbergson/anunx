'use client'

import {
  useTheme,
  Paper,
  InputBase,
  IconButton,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

import TemplateDefault from './templates/Default'
import PageTitle from './components/PageTitle'

const Home = () => {
  const theme = useTheme()

  return (
    <TemplateDefault>
      <PageTitle title={'Bem-vindo ao Anunx!'} subtitle={'O que está procurando?'}>
        <Paper 
          sx={{
            display: 'flex', 
            justifyContent: 'space-between',
            padding: theme.spacing(1),
            borderRadius: '10px',
            paddingLeft: theme.spacing(2),
            margin: '20px 0'
          }}>
          
          <InputBase 
            placeholder="Ex.: Iphone 13"
            fullWidth
            sx={{width: '95%'}}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Paper>
        
      </PageTitle>

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
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Home