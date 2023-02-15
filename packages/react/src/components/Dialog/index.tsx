import React, { ComponentProps } from 'react'
import { X } from 'phosphor-react'
import * as RadixDialog from '@radix-ui/react-dialog'
import { keyframes, styled } from '../../styles'

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const DialogRoot = styled(RadixDialog.Root, {})

const DialogPortal = styled(RadixDialog.Portal, {})

export const DialogTrigger = styled(RadixDialog.Trigger, {})

const DialogClose = styled(RadixDialog.Close, {})

const DialogCloseContainer = styled('div', {
  color: '$text',
  borderRadius: '$xs',
  padding: '$1 $1 0.1rem $1',
  position: 'absolute',
  top: 10,
  right: 10,
  transition: '$main',
  cursor: 'pointer',

  '&:hover': {
    color: '$subtleText',
  },
})

const DialogOverlay = styled(RadixDialog.Overlay, {
  backgroundColor: '$dark',
  position: 'fixed',
  inset: 0,
  opacity: '0.5',
})

export const DialogContent = styled(RadixDialog.Content, {
  backgroundColor: 'white',
  borderRadius: '$md',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '85vh',
  padding: '$10 $10 $6 $10',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
  fontFamily: '$default',

  variants: {
    size: {
      sm: {
        maxWidth: 360,
      },
      md: {
        maxWidth: 520,
      },
      lg: {
        maxWidth: 680,
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const DialogTitle = styled(RadixDialog.Title, {
  margin: 0,
  fontWeight: '$medium',
  color: '$dark',
  fontSize: '$lg',
  fontFamily: '$heading',
  borderBottom: '1px solid $accent',
  paddingBottom: '$2',
})

export const DialogDescription = styled(RadixDialog.Description, {
  margin: '10px 0 20px',
  color: '$subtleText',
  fontSize: '$md',
  lineHeight: '$base',
})

export const DialogActions = styled('div', {
  padding: '$4',
  display: 'flex',
  justifyContent: 'flex-end',
})

export interface DialogProps extends ComponentProps<typeof DialogContent> {
  trigger: React.ReactNode
}

export function Dialog({ children, trigger, ...props }: DialogProps) {
  return (
    <DialogRoot>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent {...props}>
          <DialogCloseContainer>
            <DialogClose asChild>
              <X />
            </DialogClose>
          </DialogCloseContainer>
          {children}
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  )
}

Dialog.displayName = 'Dialog'
