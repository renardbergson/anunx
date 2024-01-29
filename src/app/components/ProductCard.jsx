import { useTheme } from "@emotion/react"
import slugify from "slugify"
import { useRouter } from "next/navigation"

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material"

const ProductCard = ({ id, category, title, subtitle, image, description, actions }) => {
  const theme = useTheme ()
  const router = useRouter()

  const _title = slugify(title).toLocaleLowerCase()
  const _category = slugify(category).toLocaleLowerCase()

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card 
        onClick={() => router.push(`/pages/product/${_category}/${_title}/${id}`)} 
        sx={{borderRadius: '5px', cursor: 'pointer'}}
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