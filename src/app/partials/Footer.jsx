'use client'

import { Container, Divider, Grid, useTheme } from "@mui/material"

import FooterLink from "../components/FooterLink"

const Footer = () => {
  const theme = useTheme()

  return (
    <Container maxWidth="xl" component="footer">
      <Divider />

      <Grid container sx={{padding: `${theme.spacing(6)} 0`}} spacing={3}>
        <FooterLink text={'Quem Somos'} link={'/pages/about'}/>

        <FooterLink text={'Anunciar e Vender'} link={'/pages/product/publish'}/>
        
        <FooterLink text={'Dicas de Segurança'} link={'/pages/security-tips'}/>

        <FooterLink text={'Ajuda e Contato'} link={'#'}/>
      </Grid>
    </Container>
  )
}

export default Footer