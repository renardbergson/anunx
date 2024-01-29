'use client'
import { signOut } from "next-auth/react"
import { useTheme, Box, Typography, Button } from "@mui/material"
import LogoutIcon from '@mui/icons-material/Logout'

const LoggedUserMessage = ({userName}) => {
  const theme = useTheme()

  return (
    <Box textAlign={'center'}>
      <Typography>
        Olá!
      </Typography>

      <br />

      <Typography>
        Você está logado como <b>{userName}</b>.
      </Typography>

      <br />

      <Typography>
        Se deseja logar com outro usuário, clique no botão a seguir.
      </Typography>

      <Button 
        variant='contained' 
        color='primary' 
        sx={{display: 'flex', margin: `${theme.spacing(8)} auto 0 auto`}}
        onClick={() => signOut()}
      >
        <LogoutIcon sx={{marginRight: theme.spacing()}}/>
        Sair
      </Button>
    </Box>
  )
}

export default LoggedUserMessage