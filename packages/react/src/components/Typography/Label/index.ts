import { labelStyles } from '@mvr-studio/exo-css'
import { ComponentFactory } from '../../../types'

export const composeLabel = ({ styled }: ComponentFactory) => {
  return styled('label', labelStyles)
}
