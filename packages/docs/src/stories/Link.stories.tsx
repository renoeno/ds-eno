import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Link, LinkProps } from '@renodev/react-ds-eno'

export default {
  title: 'Nav/Link',
  component: Link,
  args: {
    children: 'Link',
  },
} as Meta<LinkProps>

export const Primary: StoryObj<LinkProps> = {}
