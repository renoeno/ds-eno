import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@renodev/react-ds-eno'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: <Heading>Strong Heading</Heading>,
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'By default, heading is always a `h2` element',
      },
    },
  },
}
