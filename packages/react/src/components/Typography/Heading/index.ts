import { ComponentFactory } from '../../../types'
import composeBox from '../../Layout/Box'

const composeHeading = ({ styled }: ComponentFactory) => {
  const Box = composeBox({ styled, type: 'h1' })
  return styled(Box, {
    color: '$gray700',
    fontWeight: '$bold',
    fontSize: '$2xl',
    variants: {
      size: {
        xl: {
          fontSize: '$xl'
        },
        lg: {
          fontSize: '$lg'
        }
      }
    }
  })
}

export default composeHeading
