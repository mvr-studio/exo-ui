import { boxStyles } from '../../'
import { ComposerFactory } from 'types'

export const linkStyles = {
  ...boxStyles,
  color: 'inherit'
}

export const composeLinkCss = ({ css }: ComposerFactory) => {
  return css(linkStyles)
}
