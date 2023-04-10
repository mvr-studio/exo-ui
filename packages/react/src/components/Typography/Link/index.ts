import { ComponentFactory } from '../../../types'
import { composeBox } from '../../Layout'

const composeLink = ({ styled, css }: ComponentFactory) => {
  const Box = composeBox({ styled, type: 'a', css })
  return styled(Box, {
    color: 'inherit'
  })
}

export default composeLink
