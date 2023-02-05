import { styled } from '../../styles'

export const CardContainer = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$light',
  maxWidth: 340,

  variants: {
    variant: {
      flat: {
        border: '1px solid $accent',
      },
      shadow: {
        boxShadow: '1px 1px #4A4A68',
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
