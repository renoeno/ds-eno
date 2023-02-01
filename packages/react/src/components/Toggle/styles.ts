import * as Switch from '@radix-ui/react-switch'
import { styled } from '../../styles'

export const SwitchRoot = styled(Switch.Root, {
  all: 'unset',
  width: 32,
  height: 20,
  background: '$accent',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px $text`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px $primary700` },
  '&[data-state="checked"]': { background: '$primary700' },
})

export const SwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  width: 16,
  height: 16,
  background: '$white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px $text`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(14.5px)' },
})
