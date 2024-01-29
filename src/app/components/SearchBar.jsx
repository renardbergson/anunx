'use client'

import { useTheme, Paper, InputBase, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import { useRouter } from "next/navigation"

const SearchBar = ({ placeholder }) => {
  const theme = useTheme()
  const router = useRouter()

  return (
    <Paper 
      sx={{
        display: 'flex', 
        justifyContent: 'space-between',
        padding: theme.spacing(1),
        borderRadius: '10px',
        paddingLeft: theme.spacing(2),
        margin: '20px 0'
      }}
    >
      <InputBase 
        placeholder={placeholder}
        fullWidth
        sx={{width: '95%'}}
      />

      <IconButton onClick={() => router.push('/pages/product/search')}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar