import { ComponentProps } from 'react'
import { LabelRoot } from './styles'

export interface LabelProps extends ComponentProps<typeof LabelRoot> {}

export function Label({ children }: LabelProps) {
  return <LabelRoot>{children}</LabelRoot>
}
