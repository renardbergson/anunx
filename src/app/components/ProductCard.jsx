import { useTheme } from "@emotion/react"
import { useRouter } from "next/navigation"

import url_maker from '../utils/url_maker'

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material"

const ProductCard = ({ page, id, category, title, subtitle, image, description, actions }) => {
  const theme = useTheme ()
  const router = useRouter()

  if (page === 'home') {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card 
          sx={{cursor: 'pointer'}}
          onClick={
            () => router.push(`/pages/product/${url_maker(category)}/${url_maker(title)}/${id}`)
          } 
        >
          <CardMedia
            sx={{ height: "230px", width: "100%" }}
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
        </Card>
      </Grid>
    )
  }

  if (page === 'dashboard') {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            sx={{ height: "230px", width: "100%" }}
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

  if (page === 'search') {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{cursor: 'pointer'}}
          onClick={
            () => router.push(`/pages/product/${url_maker(category)}/${url_maker(title)}/${id}`)
          } 
        >
          <CardMedia
            sx={{ height: "230px", width: "100%" }}
            image={image}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            
            <Typography variant="body1" component="h3" color="text.secondary" sx={{marginBottom: theme.spacing()}}>
              {subtitle}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

export default ProductCard