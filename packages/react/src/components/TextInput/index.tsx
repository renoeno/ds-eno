import { ComponentProps } from 'react'
import { Input, InputMultiline, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  multiline?: boolean
}

export function TextInput({ multiline = false, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {multiline === true ? <InputMultiline /> : <Input {...props} />}
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
