import { ComponentFactory } from '../../../types'
import composeBox from '../../Layout/Box'

const composeText = ({ styled }: ComponentFactory) => {
  const Box = composeBox({ styled, type: 'p' })
  return styled(Box, {
    color: '$gray700',
    lineHeight: '$tall'
  })
}

export default composeText
