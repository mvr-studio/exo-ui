import { ComponentFactory } from '../../../types'
import { composeBox } from '../Box'
import { cardStyles } from '@mvr-studio/exo-css'

export const composeCard = ({ styled }: ComponentFactory) => {
  const Box = composeBox({ styled })
  return styled(Box, cardStyles)
}
