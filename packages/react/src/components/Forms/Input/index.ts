import composeBox from '../../Layout/Box'
import { ComponentFactory } from '../../../types'
import { composeInputableCss } from '@mvr-studio/exo-css'

interface ComposeInputProps extends ComponentFactory {
  type?: string
}

const composeInput = ({ styled, type = 'input', css }: ComposeInputProps) => {
  const Box = composeBox({ styled, type, css })
  const imputable = composeInputableCss({ css })
  return styled(Box, {
    ...imputable
  })
}

export default composeInput
