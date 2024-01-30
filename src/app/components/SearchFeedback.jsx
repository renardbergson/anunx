'use client'

import { useTheme } from "@emotion/react"
import { Box, Typography } from "@mui/material"

const SearchFeedback = ({ length, data }) => {
  const theme = useTheme()

  return (
    <Box sx={{marginBottom: theme.spacing(5)}}>
      <Typography variant="h4">
        Resultado de Busca
      </Typography>

      {
        length === 0 
        ? (
          <Typography variant="body1">
            <b>Nenhum</b> anúncio encontrado para o termo <b>{`"${data}"`}</b>
          </Typography>
        ) : (
          <Typography variant="body1">
            Exibindo <b>{length}</b> {length > 1 ? 'anúncios' : 'anúncio'} para o termo <b>{`"${data}"`}</b>
          </Typography>
        )
      }
    </Box>
  )
}

export default SearchFeedback