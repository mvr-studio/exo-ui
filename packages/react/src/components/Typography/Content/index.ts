import { contentStyles } from '@mvr-studio/exo-css'
import { ComponentFactory } from '../../../types'
import { composeBox } from '../../Layout'

export const composeContent = ({ styled }: ComponentFactory) => {
  const Box = composeBox({ styled })
  return styled(Box, contentStyles)
}
