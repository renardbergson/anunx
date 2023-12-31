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

export default function ButtonAppBar() {
  const theme = useTheme()

  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const userMenuIsOpen = Boolean(anchorUserMenu) 
  // quando o objeto de "e.currentTarget" for recebido, será transformado em um booleano = true

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

        <Link href="/pages/user/publish" style={{color: theme.palette.secondary.main}}>
          <Button color="inherit" variant='outlined' size='small'>
            Anunciar e Vender
          </Button>
        </Link>

        <IconButton sx={{marginLeft: theme.spacing(3)}} onClick={e => setAnchorUserMenu(e.currentTarget)}>
          <Avatar src=""/>

          <Typography variant="subtitle2" sx={{color: theme.palette.secondary.main, marginLeft: theme.spacing(1)}}>
            Renard Bergson
          </Typography>
        </IconButton>

        <Menu 
          open={userMenuIsOpen}
          anchorEl={anchorUserMenu}
          onClose={() => setAnchorUserMenu(null)}
        >
          <MenuItem>
            <Link href='/pages/user/dashboard' style={{textDecoration: 'none', color: theme.palette.primary.main}}>
              Meus anúncios  
            </Link>
          </MenuItem>
          <MenuItem>
            Sobre nós
          </MenuItem>
          <Divider />
          <MenuItem>
            Sair
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}