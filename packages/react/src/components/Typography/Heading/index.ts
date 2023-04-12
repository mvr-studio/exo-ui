import { headingStyles } from '@mvr-studio/exo-css'
import { ComponentFactory } from '../../../types'

const composeHeading = ({ styled }: ComponentFactory) => {
  return styled('h1', headingStyles)
}

export default composeHeading
