import { ComponentFactory } from '../../../types'
import { composeBox } from '..'

const composeGrid = ({ styled, css }: ComponentFactory) => {
  const Box = composeBox({ styled, css })
  return styled(Box, { display: 'grid' })
}

export default composeGrid
