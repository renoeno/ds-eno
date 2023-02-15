import { ComponentProps } from 'react'

import { styled } from '../styles'

export const Card = styled('div', {
  borderRadius: '$md',
  backgroundColor: '$light',

  variants: {
    size: {
      sm: {
        maxWidth: 360,
      },
      md: {
        maxWidth: 480,
      },
      lg: {
        maxWidth: 600,
      },
    },
    variant: {
      flat: {
        border: '1px solid $accent',
      },
      shadow: {
        boxShadow: '0 2px #4A4A68',
        border: 'none',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'flat',
  },
})

export const CardContent = styled('div', {
  padding: '$4',
})

export const CardMedia = styled('div', {})

export const CardActions = styled('div', {
  padding: '$4',
  display: 'flex',
  justifyContent: 'flex-end',
})

export interface CardProps extends ComponentProps<typeof Card> {}

Card.displayName = 'Card'
