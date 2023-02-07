import { styled } from '../../styles'

export const CardContainer = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$light',
  maxWidth: 320,

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

export const CardActions = styled('div', {
  display: 'flex',
})
