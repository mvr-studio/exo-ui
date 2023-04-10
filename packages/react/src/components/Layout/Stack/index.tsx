import composeBox from '../Box'
import { ComponentFactory } from '../../../types'

const createStack = ({ styled }: ComponentFactory) => {
  const Box = composeBox({ styled })
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
