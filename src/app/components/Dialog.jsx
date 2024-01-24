import { 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material'

const ConfirmDialog = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Dialog
    open={isOpen}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Deseja mesmo remover este anúncio?"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Ao confirmar, não será possível reverter esta ação.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button sx={{fontSize: '0.8em'}} onClick={onConfirm}>
        Confirmar
      </Button>
      <Button sx={{fontSize: '0.8em'}} onClick={onClose}>
        Cancelar
      </Button>
    </DialogActions>
  </Dialog>
  )
}

export default ConfirmDialog