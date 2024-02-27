'use client'
import React from 'react'
import { useTheme } from '@emotion/react'

import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { Box, Container } from '@mui/material'

const Default = ({children, user }) => {
  const theme = useTheme()

  return (
    <Box style={{backgroundColor: theme.palette.background.default}}>
      <Header user={user} />

      <Container sx={{padding: `${theme.spacing(7)} 0`, minHeight: '80vh'}}>
        {children}
      </Container>

      <Footer />
    </Box>
  )
}

export default Default