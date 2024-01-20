'use client'
import Link from 'next/link'

import { 
  Button, 
  Grid, 
  IconButton 
} from '@mui/material'

import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import TemplateDefault from '../../../templates/Default'
import PageTitle from '../../../components/PageTitle'
import InternalContainer from '../../../partials/InternalContainer'
import ProductCard from '../../../components/ProductCard'

const Dashboard = () => {
  return (
    <TemplateDefault>
      <PageTitle title={'Meus Anúncios'}>
        <Link href="/pages/product/publish" 
          style={{
            textDecoration: 'none',
            display: 'block',
            width: 'fit-content',
            margin: '0 auto'
          }}>
          <Button 
            variant='contained' 
            color='primary' 
            sx={{display: 'block', margin: '20px auto'}}>
              Publicar novo anúncio
          </Button>
        </Link>
      </PageTitle>

      <InternalContainer>
        <Grid container spacing={4}>
          <ProductCard 
            title={'Título do Anúncio'}
            subtitle={'R$ 60,00'}
            image={'https://source.unsplash.com/random?a'}
            description={'A expressão Lorem ipsum é um texto padrão em latim utilizado na produção gráfica para preencher espaços.'}
            actions={
              <>
                <IconButton color='primary'>
                  <EditIcon sx={{fontSize: '20px'}}/>
                </IconButton>

                <IconButton size='small' color='primary'>
                  <DeleteForeverIcon sx={{fontSize: '20px'}}/>
                </IconButton>
              </>
            }
          />

          <ProductCard 
            title={'Título do Anúncio'}
            subtitle={'R$ 60,00'}
            image={'https://source.unsplash.com/random?b'}
            description={'A expressão Lorem ipsum é um texto padrão em latim utilizado na produção gráfica para preencher espaços.'}
            actions={
              <>
                <IconButton color='primary'>
                  <EditIcon sx={{fontSize: '20px'}}/>
                </IconButton>

                <IconButton size='small' color='primary'>
                  <DeleteForeverIcon sx={{fontSize: '20px'}}/>
                </IconButton>
              </>
            }
          />

          <ProductCard 
            title={'Título do Anúncio'}
            subtitle={'R$ 60,00'}
            image={'https://source.unsplash.com/random?c'}
            description={'A expressão Lorem ipsum é um texto padrão em latim utilizado na produção gráfica para preencher espaços.'}
            actions={
              <>
                <IconButton color='primary'>
                  <EditIcon sx={{fontSize: '20px'}}/>
                </IconButton>

                <IconButton size='small' color='primary'>
                  <DeleteForeverIcon sx={{fontSize: '20px'}}/>
                </IconButton>
              </>
            }
          />
        </Grid>
      </InternalContainer>
    </TemplateDefault>
  )
}

export default Dashboard