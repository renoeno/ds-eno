import { ComponentProps } from 'react'
import { CardContainer, CardContent } from './styles'

export interface CardProps extends ComponentProps<typeof CardContainer> {}

export function Card({ children, ...props }: CardProps) {
  return (
    <CardContainer {...props}>
      <CardContent>{children}</CardContent>
    </CardContainer>
  )
}
