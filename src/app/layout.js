import { AuthProvider } from './components/SessionProvider'
import { getServerSession } from 'next-auth' // promise

import './globals.css'
import theme from './theme'
import { ThemeProvider } from '@mui/material'
import { ToastProvider } from './contexts/Toast'

export const metadata = {
  title: 'Anunx - Negócios Online',
  description: 'A sua plataforma de compra e venda',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession()

  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" type="image/x-icon" href="#" />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width'/>
      </head>

      <body>
        <AuthProvider session={session}>
          <ThemeProvider theme={theme}>
            <ToastProvider>
              {children}
            </ToastProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
