import { ComponentFactory } from '../../../types'
import { skeletonStyles } from '@mvr-studio/exo-css'
import { composeBox } from '../Box'

export const composeSkeleton = ({ styled }: ComponentFactory) => {
  const Box = composeBox({ styled })
  return styled(Box, skeletonStyles)
}
