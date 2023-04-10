import composeBox from '../../Layout/Box'
import { ComponentFactory } from '../../../types'
import { composeInputableCss } from '@mvr-studio/exo-css'

interface ComposeTextareaProps extends ComponentFactory {
  type?: string
}

const composeTextarea = ({ styled, css, type = 'textarea' }: ComposeTextareaProps) => {
  const Box = composeBox({ styled, type })
  const imputable = composeInputableCss({ css })
  return styled(Box, {
    ...imputable,
    resize: 'none'
  })
}

export default composeTextarea
