import { ComponentFactory } from 'types'
import { textStyles } from '@mvr-studio/exo-css'

const composeText = ({ styled }: ComponentFactory) => {
  return styled('p', textStyles)
}

export default composeText
