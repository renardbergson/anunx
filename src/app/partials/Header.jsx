'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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

import { signOut } from 'next-auth/react'

const Header = ({ user }) => {
  const theme = useTheme()
  const router = useRouter()

  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const userMenuIsOpen = Boolean(anchorUserMenu) 

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button
            color='secondary'
            size='large'
            sx={{letterSpacing: '2px', fontSize: '1em'}}
            onClick={() => router.push('/')}
          >
            Anunx
          </Button>
        </Typography>

        <Button 
          color="inherit"
          variant='outlined' 
          size='small'
          onClick={() => router.push('/pages/product/publish')}
        >
          Anunciar e Vender
        </Button>

        {
          user
          ? (
            <IconButton sx={{marginLeft: theme.spacing(3)}} onClick={e => setAnchorUserMenu(e.currentTarget)}>
              {
                user.image 
                ? <Avatar src={user.image}/> 
                : <Avatar> {user.name[0]} </Avatar>
              }
    
              <Typography variant="subtitle2" sx={{color: theme.palette.secondary.main, marginLeft: theme.spacing(1)}}>
                {user.name}
              </Typography>
            </IconButton>
          ) : null
        }

        <Menu 
          open={userMenuIsOpen}
          anchorEl={anchorUserMenu}
          onClose={() => setAnchorUserMenu(null)}
        >
          <MenuItem onClick={() => router.push('/')}>
            Página Inicial  
          </MenuItem>

          <MenuItem onClick={() => router.push('/pages/user/dashboard')}>
            Meus anúncios  
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

export default Header