import { linkStyles } from '@mvr-studio/exo-css'
import { ComponentFactory } from '../../../types'

export const composeLink = ({ styled }: ComponentFactory) => {
  return styled('a', linkStyles)
}
