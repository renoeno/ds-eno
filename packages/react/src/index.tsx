import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$heading',
  backgroundColor: '$primary700',
  borderRadius: '$md',
  border: 0,
  color: '$light',
  textTransform: 'uppercase',
  fontWeight: '$bold',

  variants: {
    size: {
      small: {
        fontSize: 12,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'big',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
