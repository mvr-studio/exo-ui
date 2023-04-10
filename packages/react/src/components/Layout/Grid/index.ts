import { ComponentFactory } from '../../../types'
import { composeBox } from '..'

const composeGrid = ({ styled }: ComponentFactory) => {
  const Box = composeBox({ styled })
  return styled(Box, { display: 'grid' })
}

export default composeGrid
