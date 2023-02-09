import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Dialog, DialogProps, Text } from '@renodev/react-ds-eno'

export default {
  title: 'Surfaces/Dialog',
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
  },
} as Meta<DialogProps>

export const Primary: StoryObj<DialogProps> = {}
