import { ComponentFactory } from '../../../types'
import composeBox from '../Box'

const composeFlex = ({ styled }: ComponentFactory) => {
  const Box = composeBox({ styled })
  return styled(Box, {
    display: 'flex'
  })
}

export default composeFlex
