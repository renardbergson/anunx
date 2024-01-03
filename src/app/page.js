'use client'

import {
  useTheme,
  Paper,
  InputBase,
  IconButton,
  Container,
  Grid
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

import TemplateDefault from './templates/Default'
import PageTitle from './components/PageTitle'
import ProductCard from './components/ProductCard'

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
          <ProductCard 
            title={'Título do Anúncio'}
            subtitle={'R$ 60,00'}
            image={'https://source.unsplash.com/random'}
            description={'A expressão Lorem ipsum é um texto padrão em latim utilizado na produção gráfica para preencher espaços.'}
          />

          <ProductCard 
            title={'Título do Anúncio'}
            subtitle={'R$ 60,00'}
            image={'https://source.unsplash.com/random'}
            description={'A expressão Lorem ipsum é um texto padrão em latim utilizado na produção gráfica para preencher espaços.'}
          />

          <ProductCard 
            title={'Título do Anúncio'}
            subtitle={'R$ 60,00'}
            image={'https://source.unsplash.com/random'}
            description={'A expressão Lorem ipsum é um texto padrão em latim utilizado na produção gráfica para preencher espaços.'}
          />
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Home