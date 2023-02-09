import React, { ComponentProps } from 'react'
import { X } from 'phosphor-react'
import {
  DialogClose,
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
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
          <Box css={{ marginTop: 25, justifyContent: 'flex-end' }}>
            <DialogClose asChild>
              <Button size="sm">Save changes</Button>
            </DialogClose>
          </Box>
          <DialogClose asChild>
            <X size={16} />
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  )
}

export interface DialogProps extends ComponentProps<typeof DialogContent> {}
