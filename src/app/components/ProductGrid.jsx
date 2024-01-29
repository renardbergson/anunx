'use client'
import { useState } from 'react'

import ProductCard from './ProductCard'
import Dialog from './Dialog'
import {currencyFormat} from '../utils/currency'
import useToast from '../contexts/Toast'

import { Grid, Button, CardActions } from '@mui/material'

const ProductGrid = ({ products, user, removeProduct }) => {
  const [removedProducts, setRemovedProducts] = useState([])

  const [productID, setProductID] = useState()

  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  const { setToast } = useToast()

  const handleClickRemove = productID => {
    setProductID(productID)
    setDialogIsOpen(true)
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

  const handleConfirmRemove = async () => {
    setDialogIsOpen(false)
    
    const remove = await removeProduct(productID)
    
    remove == 200 ? handleSuccess() : handleError()
  }

  return (
    <>
      <Grid container spacing={4}>
        {
          products.map(product => {
            if (removedProducts.includes(product._id)) return null

            if (user) {
              return (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  category={product.category}
                  title={product.title}
                  subtitle={currencyFormat(product.price)}
                  image={`${process.env.NEXT_PUBLIC_BACK_END}/images/${product.images[0].name}`}
                  description={product.description}
                  actions={
                    <>
                      <CardActions disableSpacing>
                        <Button size="small" sx={{fontSize: '0.8em'}}>
                          Editar
                        </Button>
        
                        <Button 
                          size="small" 
                          sx={{fontSize: '0.8em'}}
                          onClick={() => handleClickRemove(product._id)}
                        >
                          Excluir
                        </Button>
                      </CardActions>
                    </>
                  }
                />
              )
            }

            return (
              <ProductCard
                key={product._id}
                id={product._id}
                category={product.category}
                title={product.title}
                subtitle={currencyFormat(product.price)}
                image={`${process.env.NEXT_PUBLIC_BACK_END}/images/${product.images[0].name}`}
                description={product.description}
              />
            )
          })
        }
      </Grid>

      <Dialog 
        isOpen={dialogIsOpen}
        onClose={() => setDialogIsOpen(false)}
        onConfirm={handleConfirmRemove}
      />
    </>
  )
}

export default ProductGrid