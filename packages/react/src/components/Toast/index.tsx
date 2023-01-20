import { ComponentProps } from 'react'
import { Check, WarningCircle, Info, Warning, X } from 'phosphor-react'
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
          return <Check />
        case 'info':
          return <Info />
        case 'warning':
          return <Warning />
        default:
          break
      }
    } else {
      return null
    }
  }
  return (
    <ToastProvider>
      <ToastContainer severity={severity} open={open} {...props}>
        {severityIcon()}
        <ToastDescription>{children}</ToastDescription>
        <ToastAction asChild altText={altText}>
          <X color="white" size={16} />
        </ToastAction>
      </ToastContainer>

      <ToastViewport />
    </ToastProvider>
  )
}
