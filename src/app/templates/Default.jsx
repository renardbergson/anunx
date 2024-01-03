import { useTheme } from '@emotion/react'

import Header from '../partials/Header'
import Footer from '../partials/Footer'

const Default = ({ children }) => {
  const theme = useTheme()

  return (
    <div style={{backgroundColor: theme.palette.background.default}}>
      <Header />

      {children}

      <Footer />
    </div>
  )
}

export default Default