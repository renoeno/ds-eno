import React, { ComponentProps } from 'react'
import { X } from 'phosphor-react'
import {
  DialogClose,
  DialogCloseContainer,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from './styles'
import { Button } from '../Button'
import { Box } from '../Box'

export function Dialog() {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button size="md">Edit profile</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogCloseContainer>
            <DialogClose asChild>
              <X />
            </DialogClose>
          </DialogCloseContainer>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
          <Box
            css={{ marginTop: 25, display: 'flex', justifyContent: 'flex-end' }}
          >
            <DialogClose asChild>
              <Button size="sm">Save changes</Button>
            </DialogClose>
          </Box>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  )
}

export interface DialogProps extends ComponentProps<typeof DialogContent> {}
