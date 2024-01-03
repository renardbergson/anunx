import { Container, Divider, Grid, Typography, useTheme } from "@mui/material"
import Link from "next/link"

const Footer = () => {
  const theme = useTheme()

  return (
    <Container maxWidth="xl" component="footer" sx={{marginTop: theme.spacing(8)}}>
      <Divider />

      <Grid container sx={{padding: `${theme.spacing(6)} 0`}} spacing={3}>
        <Grid item xs={6} sm={3} sx={{textAlign: 'center'}}>
          <Link href="#" style={{textDecoration: 'none', color: theme.palette.primary.main, width: 'fit-content'}}>
            <Typography variant="h6">
              Ajuda e Contato
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={6} sm={3} sx={{textAlign: 'center'}}>
          <Link href="#" style={{textDecoration: 'none', color: theme.palette.primary.main}}>
            <Typography>
              Dicas de Segurança
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={6} sm={3} sx={{textAlign: 'center'}}>
          <Link href="#" style={{textDecoration: 'none', color: theme.palette.primary.main}}>
            <Typography>
              Anunciar e Vender
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={6} sm={3} sx={{textAlign: 'center'}}>
          <Link href="#" style={{textDecoration: 'none', color: theme.palette.primary.main}}>
            <Typography>
              Plano Profissional
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer