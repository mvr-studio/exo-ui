import { ComposerFactory } from 'types'
import { boxStyles } from '../Box'

export const flexStyles = {
  ...boxStyles,
  display: 'flex'
}

export const composeFlexCss = ({ css }: ComposerFactory) => {
  return css(flexStyles)
}
