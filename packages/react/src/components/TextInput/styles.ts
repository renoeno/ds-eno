import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$accent',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $accent',
  display: 'flex',
  alignItems: 'center',

  '&:has(input:focus)': {
    borderColor: '$primary900',
    backgroundColor: '$white',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$text',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export const InputMultiline = styled('textarea', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$text',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',
  height: 64,

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
