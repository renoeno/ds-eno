import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Card, CardProps, Text } from '@renodev/react-ds-eno'

export default {
  title: 'Surfaces/Card',
  component: Card,
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
} as Meta<CardProps>

export const Primary: StoryObj<CardProps> = {}

export const ShadowCard: StoryObj<CardProps> = {
  args: {
    variant: 'shadow',
  },
}
