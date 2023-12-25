'use client'

import { useTheme } from '@mui/material'

const Home = () => {
  const theme = useTheme()

  return (
    <span style={{color: theme.palette.primary.main, display: 'block', margin: `${theme.spacing(4)}`}}>
      Página Inicial
    </span>
  )
}

export default Home