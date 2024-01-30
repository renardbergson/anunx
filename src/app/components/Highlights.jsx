'use client'

import {
  useTheme,
  Typography,
  Box
} from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const Highlights = () => {
  const theme = useTheme()

  return (
    <Box textAlign="center" sx={{marginTop: theme.spacing(-1) ,marginBottom: theme.spacing(5)}}> 
      <Typography
        component="h3"
        variant='h5'
        sx={{letterSpacing: '1px'}}>         
          Destaques
        <AutoAwesomeIcon 
          fontSize='small' 
          sx={{marginLeft: theme.spacing(1)}}
        />
      </Typography>
    </Box>
  )
}

export default Highlights