import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@renodev/react-ds-eno'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Create New',
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Cancel',
    variant: 'tertiary',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    size: 'sm',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    disabled: true,
  },
}
