import { ComponentFactory } from '../../../types'
import { gridStyles } from '@mvr-studio/exo-css'

export const composeGrid = ({ styled }: ComponentFactory) => {
  return styled('div', gridStyles)
}
