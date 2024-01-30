'use client'
import Link from 'next/link'
import SearchBar from './SearchBar'

import { useTheme } from "@emotion/react"
import { Button, Container,Typography } from "@mui/material"

const PageTitle = ({ title, subtitle, actionBtn }) => {
  const theme = useTheme()

  return (
    <Container maxWidth='sm' sx={{marginBottom: `${theme.spacing(5)}`}}>
      <Typography component="h1" variant="h3" fontWeight="light" align="center">
        {title}
      </Typography>

      <Typography component="h2" variant="h6" fontWeight="light" align="center">
        {subtitle}
      </Typography>

      {
        actionBtn == true
        ? (
          <Link href="/pages/product/publish" 
            style={{
              textDecoration: 'none',
              display: 'block',
              width: 'fit-content',
              margin: '0 auto'
            }}
          >
            <Button 
              variant='contained' 
              color='primary' 
              sx={{display: 'block', margin: '20px auto'}}
            >
              Publicar novo anúncio
            </Button>
          </Link>
        ) : null
      }
    </Container>
  )
}

export default PageTitle