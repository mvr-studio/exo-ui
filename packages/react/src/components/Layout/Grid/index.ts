import { ComponentFactory } from '../../../types'
import { gridStyles } from '@mvr-studio/exo-css'

const composeGrid = ({ styled }: ComponentFactory) => {
  return styled('div', gridStyles)
}

export default composeGrid
