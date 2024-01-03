import { Container, Divider, Grid, Typography, useTheme } from "@mui/material"
import Link from "next/link"

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