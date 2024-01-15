import { Container } from "@mui/material"

const InternalContainer = ({ children, maxWidth, styles }) => {
  return (
    <Container 
      maxWidth={maxWidth ? maxWidth : 'lg'} 
      sx={styles ? styles : null}
      style={{minHeight: '45vh'}}
    >
      {children}
    </Container>
  )
}

export default InternalContainer