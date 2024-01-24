import React, {useState} from 'react'
import Link from 'next/link'

import {
  useTheme,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function ButtonAppBar() {
  const theme = useTheme()
  const {data} = useSession()

  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const userMenuIsOpen = Boolean(anchorUserMenu) 

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" style={{color: theme.palette.secondary.main, textDecoration: 'none'}}>
            <Button color='secondary' size='large' sx={{letterSpacing: '2px', fontSize: '1em'}}>
              Anunx
            </Button>
          </Link>
        </Typography>

        <Link 
          href={data ? '/pages/product/publish' : '/pages/auth/signIn'} 
          style={{color: theme.palette.secondary.main}}
        >
          <Button color="inherit" variant='outlined' size='small'>
            Anunciar e Vender
          </Button>
        </Link>

        {
          data
          ? (
            <IconButton sx={{marginLeft: theme.spacing(3)}} onClick={e => setAnchorUserMenu(e.currentTarget)}>
              {
                data.user.image 
                ? <Avatar src={data.user.image}/> 
                : <Avatar src={''}/>
              }
    
              <Typography variant="subtitle2" sx={{color: theme.palette.secondary.main, marginLeft: theme.spacing(1)}}>
                {data.user.name}
              </Typography>
            </IconButton>
          ) : null
        }

        <Menu 
          open={userMenuIsOpen}
          anchorEl={anchorUserMenu}
          onClose={() => setAnchorUserMenu(null)}
        >
          <MenuItem>
            <Link href='/' style={{textDecoration: 'none', color: theme.palette.primary.main}}>
              Página Inicial  
            </Link>
          </MenuItem>

          <MenuItem>
            <Link href='/pages/user/dashboard' style={{textDecoration: 'none', color: theme.palette.primary.main}}>
              Meus anúncios  
            </Link>
          </MenuItem>

          <Divider />

          <MenuItem onClick={() => signOut({callbackUrl: '/'})}>
            Sair
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}