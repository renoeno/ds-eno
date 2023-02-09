import { ComponentProps } from 'react'

import { styled } from '../styles'

export const CardContainer = styled('div', {
  borderRadius: '$md',
  backgroundColor: '$light',
  maxWidth: 360,

  variants: {
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

export interface CardProps extends ComponentProps<typeof CardContainer> {}
