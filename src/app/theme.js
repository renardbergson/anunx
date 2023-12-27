'use client'

import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#f44336',
    },
    spacing: 8
  }
  /* 
    Em cada componente, o valor recebido no método theme.spacing() será multiplicado
    pelo valor atribuido na propriedade "spacing", na configuração do tema. O valor 8 
    já é o padrão fornecido pelo tema, MESMO QUE NEM ESCREVAMOS ESSA PROPRIEDADE!

    Ex 1: 

    const theme: createTheme({
      spacing: 8 (padrão)
    })

    <span style={{margin: theme.spacing(2)}}> ... <span/> = 8 * 2 = 16px
    
    Ex 2:

    const theme: createTheme({
      spacing: 4 (padrão)
    })

    <span style={{margin: theme.spacing(2)}}> ... <span/> = 4 * 2 = 8px
  */
})

export default theme