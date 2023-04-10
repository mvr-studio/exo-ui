import { ComponentFactory } from '../../../types'
import composeBox from '../../Layout/Box'

const composeText = ({ styled, css }: ComponentFactory) => {
  const Box = composeBox({ styled, type: 'p', css })
  return styled(Box, {
    color: '$gray700',
    lineHeight: '$tall'
  })
}

export default composeText
