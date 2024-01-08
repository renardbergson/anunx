import theme from '@/app/theme'
import { useDropzone } from 'react-dropzone'

import { Typography } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import {
  ThumbsWrapper,
  Dropzone,
  Thumb,
  Mask,
  MainImageText
} from "../pages/product/publish/styledComponents"

const FileUpload = ({ formik }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (selectedFiles) => {
      const filePackage = selectedFiles.map(file => {
        return (
          Object.assign(file, {preview: URL.createObjectURL(file)})
        )
      })

      formik.setFieldValue('images', [
        ...formik.values.images,
        ...filePackage,
      ])
    }
  })

  const handleOnRemoveImage = imageName => {
    const newImagesState = formik.values.images.filter(image => image.name != imageName)
    formik.setFieldValue('images', newImagesState)
  }

  return (
    <>
      <Typography 
        component="h6" 
        variant="body2" 
        fontWeight="bold" 
        color={formik.touched.images && formik.errors.images ? 'error' : 'textPrimary'}
      >
        Imagens
      </Typography>

      <Typography 
        component="span" 
        variant="body2" 
        fontWeight="light" 
        color={formik.touched.images && formik.errors.images ? 'error' : 'textPrimary'} 
      >
        A primeira imagem será a foto principal do seu anúncio
      </Typography>

      <ThumbsWrapper>
        <Dropzone 
          {...getRootProps()} 
          style={formik.touched.images && formik.errors.images ? {border: `2px dashed #d32f2f`} : null}
          onChange={formik.handleChange}
        >
          <input name="images" {...getInputProps()}/>

          <Typography 
            component="span" 
            variant="body2"
            color={formik.touched.images && formik.errors.images ? 'error' : 'textPrimary'} 
          >
            Clique para adicionar ou arraste as imagens.
          </Typography>
        </Dropzone>

        {
          formik.values.images.map((image, index) => {
            return (
              <Thumb key={image.name} style={{backgroundImage: `url(${image.preview})`}}>
                <Mask className='mask' onClick={() => handleOnRemoveImage(image.name)}>
                  <DeleteForeverIcon className='trashIcon' color="secondary" />
                  
                  {index === 0 ?                       
                    <MainImageText>
                      <Typography variant="caption" color='secondary'>
                        Principal
                      </Typography>
                    </MainImageText>
                    : null
                  }
                </Mask>
              </Thumb>
            )
          })
        }
      </ThumbsWrapper>

      {
        formik.touched.images && formik.errors.images 
        ? <Typography 
            variant="caption" 
            color="error" 
            component="span"
            sx={{display: 'block', marginTop: theme.spacing(0.5)}}
          >
            { formik.errors.images }
          </Typography>
        : null
      }
    </>
  )
}

export default FileUpload