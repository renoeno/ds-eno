import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$light',
  border: '1px solid $accent',
})

export interface BoxProps extends ComponentProps<typeof Box> {}
