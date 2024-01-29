'use client'

import { Container, Divider, Grid, useTheme } from "@mui/material"

import FooterLink from "../components/FooterLink"

const Footer = () => {
  const theme = useTheme()

  return (
    <Container maxWidth="xl" component="footer">
      <Divider />

      <Grid container sx={{padding: `${theme.spacing(6)} 0`}} spacing={3}>
        <FooterLink text={'Ajuda e Contato'}/>

        <FooterLink text={'Dicas de Segurança'}/>

        <FooterLink text={'Anunciar e Vender'}/>

        <FooterLink text={'Plano Profissional'}/>
      </Grid>
    </Container>
  )
}

export default Footer