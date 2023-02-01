import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Box, Label, LabelProps, TextInput } from '@renodev/react-ds-eno'

export default {
  title: 'Form/Label',
  component: Label,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Story>
            <TextInput />
          </Story>
        </Box>
      )
    },
  ],
} as Meta<LabelProps>

export const Primary: StoryObj<LabelProps> = {}
