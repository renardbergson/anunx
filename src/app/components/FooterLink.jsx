import Link from "next/link"
import { Grid, Typography } from "@mui/material"
import { useTheme } from "@emotion/react"

const FooterLink = ({ text }) => {
  const theme = useTheme()

  return (
    <Grid item xs={6} sm={3} sx={{textAlign: 'center'}}>
      <Link href="#" 
        style={{
          textDecoration: 'none', 
          color: theme.palette.primary.main, 
          display: 'block', 
          margin: '0 auto',
          width: 'fit-content'
        }}>
        <Typography variant="button">
          {text}
        </Typography>
      </Link>
    </Grid>
  )
}

export default FooterLink