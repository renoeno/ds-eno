import React, { ComponentProps } from 'react'
import { SwitchRoot, SwitchThumb } from './styles'

export interface ToggleProps extends ComponentProps<typeof SwitchRoot> {
  content: string
}

export function Toggle({ content, children, ...props }: ToggleProps) {
  return (
    <SwitchRoot {...props}>
      <SwitchThumb />
    </SwitchRoot>
  )
}

Toggle.displayName = 'Toggle'
