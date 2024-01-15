import { useTheme } from '@emotion/react'

import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { Box, Container } from '@mui/material'

const Default = ({ children }) => {
  const theme = useTheme()

  return (
    <Box style={{backgroundColor: theme.palette.background.default}}>
      <Header />

      <Container sx={{padding: `${theme.spacing(7)} 0`}}>
        {children}
      </Container>

      <Footer />
    </Box>
  )
}

export default Default