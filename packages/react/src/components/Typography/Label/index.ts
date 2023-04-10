import { ComponentFactory } from '../../../types'
import composeBox from '../../Layout/Box'

const composeLabel = ({ styled, css }: ComponentFactory) => {
  const Box = composeBox({ styled, type: 'label', css })
  return styled(Box, {
    fontSize: '14px',
    color: '$gray600',
    fontWeight: '$semibold',
    '&[for]': {
      cursor: 'pointer'
    }
  })
}

export default composeLabel
