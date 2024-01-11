import * as React from 'react'

import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Toast = ({ open, text, severity, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
    >
      <MuiAlert onClose={onClose} severity={severity} variant='filled'>
        {text}
      </MuiAlert>
    </Snackbar>
  )
}

export default Toast