import { flexStyles } from '@mvr-studio/exo-css'
import { ComponentFactory } from '../../../types'

const composeFlex = ({ styled }: ComponentFactory) => {
  return styled('div', flexStyles)
}

export default composeFlex
