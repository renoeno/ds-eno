import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Box, TextInput, TextInputProps, Text } from '@renodev/react-ds-eno'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Username</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const Multiline: StoryObj<TextInputProps> = {
  args: {
    multiline: true,
  },
}
