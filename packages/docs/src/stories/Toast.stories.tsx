import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@renodev/react-ds-eno'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    children: 'This is my toast!',
  },
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    open: {
      options: [true, false],
      type: 'boolean',
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const Success: StoryObj<ToastProps> = {
  args: {
    severity: 'success',
  },
}

export const Info: StoryObj<ToastProps> = {
  args: {
    severity: 'info',
  },
}

export const Warning: StoryObj<ToastProps> = {
  args: {
    severity: 'warning',
  },
}
