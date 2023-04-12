import { ComponentFactory } from '../../../types'
import { buttonStyles } from '@mvr-studio/exo-css'

export const composeButton = ({ styled }: ComponentFactory) => {
  return styled('button', buttonStyles)
}
