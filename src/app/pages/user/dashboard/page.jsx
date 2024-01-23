'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { getSession } from 'next-auth/react'

import { 
  Button, 
  Grid, 
  IconButton 
} from '@mui/material'

import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import TemplateDefault from '../../../templates/Default'
import PageTitle from '../../../components/PageTitle'
import InternalContainer from '../../../partials/InternalContainer'
import ProductCard from '../../../components/ProductCard'
import { currencyFormat } from '../../../utils/currency'

const Dashboard = () => {  
  const [userAds, setUserAds] = useState()

  useEffect(() => {
    async function getUser () {
      const { user } = await getSession()

      const response = await axios.get(`http://localhost:8080/products/getAds/${user._id}`)

      setUserAds(response.data)
    }

    getUser()
  }, [])

  if ( userAds != null ) {
    return (  
      <TemplateDefault>
        <PageTitle title={'Meus Anúncios'}>
          <Link href="/pages/product/publish" 
            style={{
              textDecoration: 'none',
              display: 'block',
              width: 'fit-content',
              margin: '0 auto'
            }}>
            <Button 
              variant='contained' 
              color='primary' 
              sx={{display: 'block', margin: '20px auto'}}>
                Publicar novo anúncio
            </Button>
          </Link>
        </PageTitle>
  
        <InternalContainer>
          <Grid container spacing={4}>
            {userAds.map((ad) => {
              return (
                <React.Fragment key={ad._id}>
                  <ProductCard
                    title={ad.title}
                    subtitle={currencyFormat(ad.price)}
                    image={`${process.env.NEXT_PUBLIC_BACK_END}/images/${ad.images[0].name}`}
                    description={ad.description}
                    actions={
                      <>
                        <IconButton color='primary'>
                          <EditIcon sx={{fontSize: '20px'}}/>
                        </IconButton>
        
                        <IconButton size='small' color='primary'>
                          <DeleteForeverIcon sx={{fontSize: '20px'}}/>
                        </IconButton>
                      </>
                    }
                  />
                </React.Fragment>
              )
            })}
          </Grid>
        </InternalContainer>
      </TemplateDefault>
    )
  }
}

export default Dashboard