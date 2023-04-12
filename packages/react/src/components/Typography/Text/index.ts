import { ComponentFactory } from '../../../types'
import { textStyles } from '@mvr-studio/exo-css'

export const composeText = ({ styled }: ComponentFactory) => {
  return styled('p', textStyles)
}
