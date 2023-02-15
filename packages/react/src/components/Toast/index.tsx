import { ComponentProps } from 'react'
import { Check, Info, Warning, X } from 'phosphor-react'
import {
  ToastAction,
  ToastContainer,
  ToastDescription,
  ToastProvider,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  open: boolean
  swipeDirection?: string
  altText?: string
  severity?: 'success' | 'info' | 'warning'
}

export const Toast = ({
  open,
  swipeDirection = 'right',
  altText = 'Alternative text',
  severity,
  children,
  ...props
}: ToastProps) => {
  const severityIcon = () => {
    if (severity) {
      switch (severity) {
        case 'success':
          return <Check color="#31D0AA" />
        case 'info':
          return <Info color="#0E0E2C" />
        case 'warning':
          return <Warning color="#F49094" />
        default:
          break
      }
    } else {
      return null
    }
  }
  return (
    <ToastProvider>
      <ToastContainer open={open} {...props}>
        {severityIcon()}
        <ToastDescription>{children}</ToastDescription>
        <ToastAction asChild altText={altText}>
          <X size={16} />
        </ToastAction>
      </ToastContainer>

      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
