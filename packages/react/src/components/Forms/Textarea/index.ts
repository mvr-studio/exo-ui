import { ComponentFactory } from '../../../types'
import { inputableStyles } from '@mvr-studio/exo-css'

interface ComposeTextareaProps extends ComponentFactory {
  type?: string
}

export const composeTextarea = ({ styled }: ComposeTextareaProps) => {
  return styled('textarea', {
    ...inputableStyles,
    resize: 'none'
  })
}
