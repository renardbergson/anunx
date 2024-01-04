'use client'

import { useTheme, Container, Typography, Grid } from "@mui/material"
import TemplateDefault from "@/app/templates/Default"
import SearchBar from "@/app/components/SearchBar"
import ProductGridContainer from "@/app/components/ProductGridContainer"
import ProductCard from "@/app/components/ProductCard"

const ProductSearch = () => {
  const theme = useTheme()

  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <SearchBar />
      </Container>

      <ProductGridContainer 
        styles={{
          backgroundColor: theme.palette.secondary.main, 
          padding: '20px',
          borderRadius: '5px'
        }}
      >
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
      </ProductGridContainer>
    </TemplateDefault>
  )
}

export default ProductSearch