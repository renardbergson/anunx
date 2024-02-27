'use client'

import { Typography, useTheme} from "@mui/material"

const SingleParagraph = ({ text, marginBottom }) => {
  const theme = useTheme()

  return (
    <Typography
      component='p'
      variant='body1'
      sx={marginBottom ? {marginBottom: theme.spacing(marginBottom)} : null}
    >
      {text}
    </Typography>
  )
}

export default SingleParagraph