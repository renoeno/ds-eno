import * as ToastPrimitive from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastProvider = styled(ToastPrimitive.Provider, {})

export const ToastContainer = styled(ToastPrimitive.Root, {
  fontFamily: '$default',
  backgroundColor: '$secondary700',
  lineHeight: '$tall',
  borderRadius: '$md',
  border: 0,
  padding: '$3 $6',
  display: 'flex',
  alignItems: 'center',

  '&[severity="success"]': {
    '& svg': {
      color: '$primary900',
    },
  },

  '&[severity="info"]': {
    '& svg': {
      color: '$accent',
    },
  },

  '&[severity="warning"]': {
    '& svg': {
      color: '$secondary300',
    },
  },

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

export const ToastDescription = styled(ToastPrimitive.Description, {
  padding: '0 $2',
  gridArea: 'description',
  margin: 0,
  color: '$light',
  fontWeight: '$regular',
  fontSize: '$md',
})

export const ToastAction = styled(ToastPrimitive.Action, {
  gridArea: 'auto',
  color: '$light',
  fontSize: '$lg',
  cursor: 'pointer',
})

export const ToastClose = styled(ToastPrimitive.Close, {})

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: '$3',
  width: '$80',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 9999,
  outline: 'none',
})

export const IconContainer = styled('div', {
  color: '$text',
  borderRadius: '$xs',
  padding: '$1 $1 0.1rem $1',
  position: 'absolute',
  top: 10,
  right: 10,
  transition: '$main',
  cursor: 'pointer',

  '&:hover': {
    color: '$subtleText',
  },
})
