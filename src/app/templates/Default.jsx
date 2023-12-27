import { Container } from "@mui/material"
import Header from '../partials/Header'

const Default = ({children}) => {
  return (
    <>
      <Header />

      {children}

      <footer>Rodapé</footer>
    </>
  )
}

export default Default