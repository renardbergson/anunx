import { useTheme } from '@emotion/react'

import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { Box } from '@mui/material'

const Default = ({ children }) => {
  const theme = useTheme()

  return (
    <div style={{backgroundColor: theme.palette.background.default}}>
      <Header />

      <Box sx={{padding: `${theme.spacing(7)} 0 ${theme.spacing(10)} 0`}}>
        {children}
      </Box>

      <Footer />
    </div>
  )
}

export default Default