import { ComponentFactory } from '../../../types'
import composeBox from '../../Layout/Box'
import { composeButtonCss } from '@mvr-studio/exo-css'

const composeButton = ({ styled, css }: ComponentFactory) => {
  const buttonCss = composeButtonCss({ css })
  const Box = composeBox({ styled, type: 'button', css })
  const Button = styled(Box, {
    ...buttonCss
  })
  return Button
}

export default composeButton
