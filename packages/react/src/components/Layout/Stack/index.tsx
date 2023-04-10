import { ComponentFactory } from 'types'
import { stackStyles } from '@mvr-studio/exo-css'

const createStack = ({ styled }: ComponentFactory): any => {
  return styled('div', stackStyles)
}

export default createStack
