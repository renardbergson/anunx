import './globals.css'

import theme from './theme'
import { ThemeProvider } from '@mui/material'

export const metadata = {
  title: 'Anunx - Negócios Online',
  description: 'A sua plataforma de compra e venda',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" type="image/x-icon" href="#" />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width'/>
      </head>

      <body>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
