'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { getSession } from 'next-auth/react'

import { 
  Button, 
  Grid,
  CardActions,
} from '@mui/material'

import TemplateDefault from '../../../templates/Default'
import PageTitle from '../../../components/PageTitle'
import InternalContainer from '../../../partials/InternalContainer'
import ProductCard from '../../../components/ProductCard'
import Dialog from '../../../components/Dialog'
import useToast from '../../../contexts/Toast'
import { currencyFormat } from '../../../utils/currency'

const Dashboard = () => {  
  const { setToast } = useToast()
  const [userAds, setUserAds] = useState()

  useEffect(() => {
    async function getUser () {
      const { user } = await getSession()

      const response = await axios.get(`http://localhost:8080/products/getAds/${user._id}`)

      setUserAds(response.data)
    }

    getUser()
  }, [])

  const [removedProducts, setRemovedProducts] = useState([])

  const [productID, setProductID] = useState()

  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  const handleClickRemove = productID => {
    setDialogIsOpen(true)
    setProductID(productID)
  }

  const handleConfirmRemove = () => {
    setDialogIsOpen(false)
    axios.delete(`${process.env.NEXT_PUBLIC_BACK_END}/products/remove`, 
    {
      data: {
        productID
      }
    })
    .then(handleSuccess)
    .catch(handleError)
  }

  const handleSuccess = () => {
    setRemovedProducts([...removedProducts, productID])

    setToast({
      open: true,
      severity: 'success',
      text: 'Anúncio removido com sucesso!'
    })
  }

  const handleError = () => {
    setToast({
      open: true,
      severity: 'error',
      text: 'Ops, ocorreu um erro! Tente novamente depois.'
    })
  }

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
              if (removedProducts.includes(ad._id)) return null

              return (
                <React.Fragment key={ad._id}>
                  <ProductCard
                    title={ad.title}
                    subtitle={currencyFormat(ad.price)}
                    image={`${process.env.NEXT_PUBLIC_BACK_END}/images/${ad.images[0].name}`}
                    description={ad.description}
                    actions={
                      <>
                        <CardActions disableSpacing>
                          <Button size="small" sx={{fontSize: '0.8em'}}>
                            Editar
                          </Button>

                          <Button 
                            size="small" 
                            sx={{fontSize: '0.8em'}}
                            onClick={() => handleClickRemove(ad._id)}
                          >
                            Excluir
                          </Button>
                        </CardActions>
                      </>
                    }
                  />
                </React.Fragment>
              )
            })}
          </Grid>
        
        <Dialog 
          isOpen={dialogIsOpen}
          onClose={() => setDialogIsOpen(false)}
          onConfirm={handleConfirmRemove}
        />
        </InternalContainer>
      </TemplateDefault>
    )
  }
}

export default Dashboard