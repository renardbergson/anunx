'use client'

import Link from 'next/link'

import {
  useTheme,
  Box,
  Typography,
} from '@mui/material'

const SignInOutSwitch = ({text, actionText, href}) => {
  const theme = useTheme()

  return (
    <Box textAlign={'center'} sx={{marginTop: theme.spacing(5)}}>
      <Typography fontSize={14} variant='caption'>
        {text}
      </Typography>

      <Typography variant='caption'fontSize={14}> 
        <Link href={href} style={{textDecoration: 'none', marginLeft: theme.spacing()}}>
          {actionText}
        </Link>
      </Typography>
    </Box>
  )
}

export default SignInOutSwitch