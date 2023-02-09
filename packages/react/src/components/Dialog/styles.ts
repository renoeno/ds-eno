import * as Dialog from '@radix-ui/react-dialog'
import { keyframes, styled } from '../../styles'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const DialogRoot = styled(Dialog.Root, {})

export const DialogPortal = styled(Dialog.Portal, {})

export const DialogTrigger = styled(Dialog.Trigger, {})

export const DialogClose = styled(Dialog.Close, {})

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: '$dark',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  borderRadius: '$md',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: '$6',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
  fontFamily: '$default',
})

export const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: '$medium',
  color: '$text',
  fontSize: '$lg',
  fontFamily: '$heading',
})

export const DialogDescription = styled(Dialog.Description, {
  margin: '10px 0 20px',
  color: '$subtleText',
  fontSize: '$md',
  lineHeight: '$base',
})
