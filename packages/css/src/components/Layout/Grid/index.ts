import { ComposerFactory } from 'types'
import { boxStyles } from '../Box'

export const gridStyles = {
  ...boxStyles,
  display: 'grid'
}

export const composeGridCss = ({ css }: ComposerFactory) => {
  return css(gridStyles)
}
