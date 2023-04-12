import { headingStyles } from '@mvr-studio/exo-css'
import { ComponentFactory } from '../../../types'

export const composeHeading = ({ styled }: ComponentFactory) => {
  return styled('h1', headingStyles)
}
