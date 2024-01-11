import { useTheme, Paper, InputBase, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = ({ placeholder }) => {
  const theme = useTheme()

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

    <IconButton>
      <SearchIcon />
    </IconButton>
    </Paper>
  )
}

export default SearchBar