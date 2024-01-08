/* eslint-disable react/no-unescaped-entities */
'use client'

import Carousel from "react-material-ui-carousel"
import theme from "@/app/theme"

import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Grid,
  Typography
} from "@mui/material"

import TemplateDefault from "@/app/templates/Default"
import InternalContainer from "@/app/components/InternalContainer"
import styles from './styles'

const ProductPage = () => {
  return (
    <TemplateDefault>
      <InternalContainer>
        <Grid container spacing={3}> 
          <Grid item xs={12} md={8}>
            <Box sx={styles.box}>
              <Carousel
                autoPlay={false}
                animation="slide"
              >
                <Card sx={{height: '100%'}}>
                  <CardMedia 
                    image="https://source.unsplash.com/random?a"
                    sx={{paddingTop: '56%'}}
                  />
                </Card>

                <Card sx={{height: '100%'}}>
                  <CardMedia 
                    image="https://source.unsplash.com/random?b"
                    sx={{paddingTop: '56%'}}
                  />
                </Card>

                <Card sx={{height: '100%'}}>
                  <CardMedia 
                    image="https://source.unsplash.com/random?c"
                    sx={{paddingTop: '56%'}}
                  />
                </Card>
              </Carousel>
            </Box>

            <Box sx={styles.box} textAlign="left"> 
              <Typography component="span" variant="caption">
                Publicado em 3 de Janeiro de 2024
              </Typography>

              <Typography component="h4" variant="h4" sx={styles.productText}>
                Iphone 12 - 128 Gb Usado
              </Typography>

              <Typography
                component="h5"
                variant="h5"
                fontWeight="bold"
                letterSpacing="1px"
                sx={styles.productText}
              >
                R$ 2.600,00
              </Typography>

              <Chip label="Categoria"/>
            </Box>

            <Box sx={styles.box} styles={{marginBottom: 0}}>
              <Typography
                component="h6"
                variant="body1"
                fontWeight="bold"
                letterSpacing={0.5}
                sx={{marginBottom: theme.spacing(2)}}
              >
                Descrição
              </Typography>

              <Typography component="p" variant="subtitle2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={styles.box} elevation={0}> 
              <CardHeader 
                avatar={<Avatar>R</Avatar>}
                title="Renard Bergson"
                subheader="renardrock@gmail.com"
                sx={{paddingLeft: 0, paddingRight: 0}}
              />
            </Card>

            <Box sx={styles.box}>
              <Typography component="h6" variant="subtitle1">
                Localização 📍
              </Typography>

              <Typography component="h6" variant="caption" letterSpacing={0.5}>
                Santa Luzia, Paraíba, Brasil
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </InternalContainer>
    </TemplateDefault>
  )
}

export default ProductPage