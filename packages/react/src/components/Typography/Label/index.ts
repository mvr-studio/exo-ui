import { labelStyles } from '@mvr-studio/exo-css'
import { ComponentFactory } from 'types'

const composeLabel = ({ styled }: ComponentFactory) => {
  return styled('label', labelStyles)
}

export default composeLabel
