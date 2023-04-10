import { ComponentFactory } from '../../../types'
import composeBox from '../Box'

const composeFlex = ({ styled, css }: ComponentFactory) => {
  const Box = composeBox({ styled, css })
  return styled(Box, {
    display: 'flex'
  })
}

export default composeFlex
