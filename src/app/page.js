'use client'

import { useTheme } from '@mui/material'
import TemplateDefault from './templates/Default'

const Home = () => {
  const theme = useTheme()

  return (
    <TemplateDefault>
      <span style={{color: theme.palette.primary.main, display: 'block', margin: `${theme.spacing(4)}`}}>
        Página Inicial
      </span>
    </TemplateDefault>
  )
}

export default Home