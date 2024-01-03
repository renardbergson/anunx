import { useTheme } from "@emotion/react"

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material"

const ProductCard = ({ title, subtitle, image, description, actions }) => {
  const theme = useTheme ()

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
          sx={{ paddingTop: '60%' }}
          image={image}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          
          <Typography variant="body1" component="h3" color="text.secondary" sx={{marginBottom: theme.spacing()}}>
            {subtitle}
          </Typography>

          <Typography variant="body2" component="p" color="text.secondary">
            {description}
          </Typography>
        </CardContent>

        {
          actions 
          ?
            <CardActions>
              {actions}
            </CardActions>
           : null
        }
      </Card>
    </Grid>
  )
}

export default ProductCard