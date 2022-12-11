import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@renodev/react-ds-eno'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta

export const Primary: StoryObj<ButtonProps> = {}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}
