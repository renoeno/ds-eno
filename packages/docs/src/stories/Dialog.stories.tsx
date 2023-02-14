import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogDescription,
  DialogProps,
  DialogTitle,
  Text,
} from '@renodev/react-ds-eno'

export default {
  title: 'Feedback/Dialog',
  component: Dialog,
  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quae
        repellendus voluptates molestias nobis culpa ut ex cupiditate nemo quod!
        Fuga dolor pariatur impedit ipsa, laudantium quisquam exercitationem
        architecto necessitatibus.
      </Text>
    ),
    trigger: <Button size="md">Open</Button>,
  },
} as Meta<DialogProps>

export const Primary: StoryObj<DialogProps> = {}

export const DialogSmall: StoryObj<DialogProps> = {
  args: {
    size: 'sm',
  },
}

export const DialogLarge: StoryObj<DialogProps> = {
  args: {
    size: 'lg',
  },
}

export const CompleteDialog: StoryObj<DialogProps> = {
  args: {
    children: (
      <>
        <DialogTitle>Dialog</DialogTitle>
        <DialogDescription>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quae
            repellendus voluptates molestias nobis culpa ut ex cupiditate nemo
            quod! Fuga dolor pariatur impedit ipsa, laudantium quisquam
            exercitationem architecto necessitatibus.
          </Text>
        </DialogDescription>
        <DialogActions>
          <Button>Salvar</Button>
        </DialogActions>
      </>
    ),
  },
}
