import { ComponentFactory } from '../../../types'
import { stackStyles } from '@mvr-studio/exo-css'

export const composeStack = ({ styled }: ComponentFactory) => {
  return styled('div', stackStyles)
}
