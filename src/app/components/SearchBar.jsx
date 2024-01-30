'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

import { useTheme, Paper, InputBase, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = ({ placeholder }) => {
  const theme = useTheme()
  const router = useRouter()

  const [search, setSearch] = useState('')

  const handleSearch = () => {
    if (search === '') {
      return
    } 

    return router.push(`/pages/product/search/${search}`)
  }

  return (
    <Paper 
      sx={{
        display: 'flex', 
        justifyContent: 'space-between',
        padding: theme.spacing(1),
        borderRadius: '10px',
        paddingLeft: theme.spacing(2),
        marginBottom: theme.spacing(6)
      }}
    >
      <InputBase 
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={e => e.key === 'Enter' ? handleSearch() : null}
        placeholder={placeholder ? placeholder : 'Ex.: Iphone 13, 128gb, usado'}
        fullWidth
        sx={{width: '95%'}}
      />
      
      <IconButton onClick={() => handleSearch()}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar