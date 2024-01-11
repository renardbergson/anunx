'use client'

import { createContext, useState, useContext } from "react"
import Toast from "../components/Toast"

const ToastContext = createContext({})

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    open: false,
    text: '',
    severity: 'info',
    onClose: null,
  })

  return (
    <ToastContext.Provider value={{ setToast }}>
      <Toast 
        open={toast.open}
        text={toast.text}
        severity={toast.severity}
        onClose={() => setToast({
          ...toast,
          open: false
        })}
      />
      
      {children}
    </ToastContext.Provider>
  )
}

const useToast = () => useContext(ToastContext)

export default useToast