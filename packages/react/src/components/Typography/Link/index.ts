import { linkStyles } from '@mvr-studio/exo-css'
import { ComponentFactory } from '../../../types'

const composeLink = ({ styled }: ComponentFactory) => {
  return styled('a', linkStyles)
}

export default composeLink
