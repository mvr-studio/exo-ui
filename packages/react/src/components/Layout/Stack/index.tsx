import composeBox from '../Box'
import { ComponentFactory } from '../../../types'

const createStack = ({ styled, css }: ComponentFactory) => {
  const Box = composeBox({ styled, css })
  return styled(Box, {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '$sm',
    variants: {
      direction: {
        horizontal: {
          flexDirection: 'row'
        }
      }
    }
  })
}

export default createStack
