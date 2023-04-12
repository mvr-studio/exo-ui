import { flexStyles } from '@mvr-studio/exo-css'
import { ComponentFactory } from '../../../types'

export const composeFlex = ({ styled }: ComponentFactory) => {
  return styled('div', flexStyles)
}
