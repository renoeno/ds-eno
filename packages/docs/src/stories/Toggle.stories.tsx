import type { StoryObj, Meta } from '@storybook/react'
import { Toggle, ToggleProps, Box } from '@renodev/react-ds-eno'

export default {
  title: 'Data display/Toggle',
  component: Toggle,
  args: {
    children: (
      <Box
        css={{
          maxWidth: '50px',
          color: '$white',
          display: 'flex',
          justifyContent: 'center',
          fontWeight: '$medium',
          fontFamily: '$default',
        }}
      >
        21
      </Box>
    ),
    content: '21 de Outubro - Indisponível',
  },
} as Meta<ToggleProps>

export const Primary: StoryObj<ToggleProps> = {}
