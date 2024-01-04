'use client'

import {
  useTheme,
  Grid,
  Typography,
  Box
} from '@mui/material'

import TemplateDefault from './templates/Default'
import PageTitle from './components/PageTitle'
import SearchBar from './components/SearchBar'
import ProductGridContainer from './components/ProductGridContainer'
import ProductCard from './components/ProductCard'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Home = () => {
  const theme = useTheme()

  return (
    <TemplateDefault>
      <PageTitle title={'Bem-vindo ao Anunx!'} subtitle={'O que está procurando?'}>
        <SearchBar />
      </PageTitle>

      <Box textAlign="center">
        <Typography
          component="h3"
          variant='h5'
          sx={{
            marginBottom: theme.spacing(3),
            letterSpacing: '1px'
          }}> 
          
          Destaques

          <AutoAwesomeIcon 
            fontSize='small' 
            sx={{marginLeft: theme.spacing(1)}}
          />
        </Typography>
      </Box>

      <ProductGridContainer>
        <Grid container spacing={4}>
          <ProductCard 
            title={'Título do Anúncio'}
            subtitle={'R$ 60,00'}
            image={'https://source.unsplash.com/random?a'}
            description={'A expressão Lorem ipsum é um texto padrão em latim utilizado na produção gráfica para preencher espaços.'}
          />

          <ProductCard 
            title={'Título do Anúncio'}
            subtitle={'R$ 60,00'}
            image={'https://source.unsplash.com/random?b'}
            description={'A expressão Lorem ipsum é um texto padrão em latim utilizado na produção gráfica para preencher espaços.'}
          />

          <ProductCard 
            title={'Título do Anúncio'}
            subtitle={'R$ 60,00'}
            image={'https://source.unsplash.com/random?c'}
            description={'A expressão Lorem ipsum é um texto padrão em latim utilizado na produção gráfica para preencher espaços.'}
          />
        </Grid>
      </ProductGridContainer>
    </TemplateDefault>
  )
}

export default Home