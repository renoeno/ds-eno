import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextProps } from '@renodev/react-ds-eno'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: (
      <Box>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quae
        repellendus voluptates molestias nobis culpa ut ex cupiditate nemo quod!
        Fuga dolor pariatur impedit ipsa, laudantium quisquam exercitationem
        architecto necessitatibus.
      </Box>
    ),
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: <Box>Strong Text</Box>,
    as: 'strong',
  },
}
