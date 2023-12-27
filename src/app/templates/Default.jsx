import { useTheme } from '@emotion/react'

import Header from '../partials/Header'

const Default = ({ children }) => {
  const theme = useTheme()

  return (
    <div style={{backgroundColor: theme.palette.background.default}}>
      <Header />

      {children}

      <footer>Rodapé</footer>
    </div>
  )
}

export default Default