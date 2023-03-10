import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Link = styled('a', {
  fontFamily: '$heading',
  position: 'relative',
  display: 'block',
  textDecoration: 'none',
  padding: '$3',
  fontSize: '$md',
  color: '$primary700',
  width: 24,

  '&::after': {
    content: '',
    position: 'absolute',
    bottom: ' 0.75rem',
    left: '25%',
    width: 0,
    height: '0.1rem',
    background: '$primary700',
    transition: 'all 0.2s ease-in-out',
  },

  '&:hover::after': {
    width: '50%',
  },

  '&:active::after': {
    width: '50%',
  },

  '&[disabled]': {
    pointerEvents: 'none',
    color: '$text',

    '&::after': {
      width: 0,
    },

    '&:active::after': {
      width: 0,
    },
  },
})

export interface LinkProps extends ComponentProps<typeof Link> {
  as?: ElementType
  disabled?: boolean
}

Link.displayName = 'Link'
