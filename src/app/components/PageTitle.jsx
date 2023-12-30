import { useTheme } from '@emotion/react'
import { Container,Typography } from "@mui/material"

const PageTitle = ({ title, subtitle, children }) => {
  const theme = useTheme()

  return (
    <Container maxWidth='sm' sx={{padding: theme.spacing(6, 0)}}>
      <Typography component="h1" variant="h3" fontWeight="light" align="center">
        {title}
      </Typography>

      <Typography component="h2" variant="h6" fontWeight="light" align="center">
        {subtitle}
      </Typography>

      {children}
    </Container>
  )
}

export default PageTitle