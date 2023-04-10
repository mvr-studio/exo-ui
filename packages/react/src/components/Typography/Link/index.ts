import { ComponentFactory } from '../../../types'
import { composeBox } from '../../Layout'

const composeLink = ({ styled }: ComponentFactory) => {
  const Box = composeBox({ styled, type: 'a' })
  return styled(Box, {
    color: 'inherit'
  })
}

export default composeLink
