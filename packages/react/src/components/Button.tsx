import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  padding: '$3 $6',
  borderRadius: '$md',
  textTransform: 'uppercase',
  fontFamily: '$heading',
  fontWeight: '$bold',
  textAlign: 'center',
  fontSize: '$md',
  minWidth: 100,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
    color: '$text',
    background: '$white',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$primary700',

        '&:not(:disabled):hover': {
          background: '$primary500',
        },
      },
      secondary: {
        color: '$white',
        background: '$primary300',

        '&:not(:disabled):hover': {
          background: '$primary500',
        },
      },
      tertiary: {
        color: '$primary700',
        background: '$white',

        '&:not(:disabled):hover': {
          color: '$primary300',
        },
      },
    },

    size: {
      sm: {
        height: 36,
      },
      md: {
        height: 48,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
