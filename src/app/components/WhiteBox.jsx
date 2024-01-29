'use client'

import {
  useTheme,
  Box,
} from '@mui/material'

const WhiteBox = ({ children }) => {
  const theme = useTheme()

  return (
    <Box sx={{background: theme.palette.secondary.main, padding: theme.spacing(3), marginBottom: theme.spacing(3)}}>
      {children}
    </Box>
  )
}

export default WhiteBox