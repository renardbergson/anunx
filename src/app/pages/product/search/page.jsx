'use client'
import { useTheme, Container, Typography, Box, Grid } from "@mui/material"
import TemplateDefault from "@/app/templates/Default"
import SearchBar from "@/app/components/SearchBar"
import ProductCard from "@/app/components/ProductCard"

const ProductSearch = () => {
  const theme = useTheme()

  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <SearchBar />
      </Container>

      <Container 
        maxWidth="md" 
        sx={{
          backgroundColor: theme.palette.secondary.main, 
          padding: '20px',
          borderRadius: '5px'
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography component="h5" variant="h5">
              Anúncios
            </Typography>

            <Typography component="h6" variant="body1">
              Encontrados X anúncios com base na busca atual
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
      </Container>
    </TemplateDefault>
  )
}

export default ProductSearch