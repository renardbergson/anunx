'use client'

import React from "react"
import { useTheme } from "@emotion/react"

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

import WhiteBox from '../../../../../components/WhiteBox'
import Carousel from "react-material-ui-carousel"
import {currencyFormat} from '../../../../../utils/currency'

//process.env.NEXT_PUBLIC_BACK_END}/images/${img.name

const IntStructure = ({ data }) => {
  const theme = useTheme()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <WhiteBox>
          <Carousel
            autoPlay={false}
            animation="slide"
          >
            {
              data.images.map(img => {
                return (
                  <React.Fragment key={img._id}>
                    <Card sx={{height: '100%'}}>
                      <CardMedia 
                        image={`${process.env.NEXT_PUBLIC_BACK_END}/images/${img.name}`}
                        sx={{paddingTop: '56%'}}
                      />
                    </Card>
                  </React.Fragment>
                )
              })
            }
          </Carousel>
        </WhiteBox>

        <WhiteBox>
        <Typography
            component="h4"
            variant="h4"
            sx={{
              margin: `0 0 ${theme.spacing(2)} 0`
            }}
          >
            {data.title}  
          </Typography>

          <Typography
            component="h5"
            variant="h5"
            fontWeight="bold"
            letterSpacing="1px"
          >
            {currencyFormat(data.price)}
          </Typography>

          <Chip label={data.category} sx={{margin: `${theme.spacing(3)} 0`}}/>
          
          <br />

          <Typography component="span" variant="caption">
            Publicado em 3 de Janeiro de 2024
          </Typography>

        </WhiteBox>


        <WhiteBox>
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
            {data.description}
          </Typography>
        </WhiteBox>
      </Grid>

      <Grid item xs={12} md={4}>
        <WhiteBox>
          <Card elevation={0}> 
            <CardHeader 
              avatar={
                <Avatar src={data.user.image}>
                  {data.user.name[0]}
                </Avatar>
              }
              title={data.user.name}
              subheader={data.user.email}
              sx={{paddingLeft: 0, paddingRight: 0}}
            />
          </Card>
        </WhiteBox>

        <WhiteBox>
          <Typography component="h6" variant="subtitle1">
            Localização 📍 
          </Typography>

          <Typography component="h6" variant="caption" letterSpacing={0.5}>
            Santa Luzia, Paraíba, Brasil
          </Typography>
        </WhiteBox>
      </Grid>
    </Grid>
  )
}

export default IntStructure