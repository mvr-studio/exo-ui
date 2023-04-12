import { ComponentFactory } from '../../../types'
import { buttonStyles } from '@mvr-studio/exo-css'

const composeButton = ({ styled }: ComponentFactory) => {
  return styled('button', buttonStyles)
}

export default composeButton
