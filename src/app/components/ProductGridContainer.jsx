import { Container } from "@mui/material"

const ProductGridContainer = ({ children, maxWidth, styles }) => {
  return (
    <Container maxWidth={maxWidth ? maxWidth : 'lg'} sx={styles ? styles : null}>
      {children}
    </Container>
  )
}

export default ProductGridContainer