'use client'

import { Typography, Grid } from "@mui/material"
import ProductCard from '../../../components/ProductCard'

const REMOVER = () => {
  return (
    <>
      <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5" letterSpacing={1}>
              Resultado de Busca
            </Typography>

            <Typography component="h2" variant="body1">
              Exibindo X anúncios com base na busca atual
            </Typography>
          </Grid>

          <ProductCard 
            title={'Produto X'}
            subtitle={'R$ 60,00'}
            image={'https://source.unsplash.com/random?a'}
          />

          <ProductCard 
            title={'Produto X'}
            subtitle={'R$ 60,00'}
            image={'https://source.unsplash.com/random?b'}
          />

          <ProductCard 
            title={'Produto X'}
            subtitle={'R$ 60,00'}
            image={'https://source.unsplash.com/random?c'}
          />
        </Grid>
    </>
  )
}

export default REMOVER