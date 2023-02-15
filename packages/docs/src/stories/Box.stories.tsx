import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@renodev/react-ds-eno'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quae
          repellendus voluptates molestias nobis culpa ut ex cupiditate nemo
          quod! Fuga dolor pariatur impedit ipsa, laudantium quisquam
          exercitationem architecto necessitatibus.
        </Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
