import { boxStyles } from '../../'
import { ComposerFactory } from 'types'

export const textStyles = {
  ...boxStyles,
  color: '$gray700',
  lineHeight: '$tall'
}

export const composeTextCss = ({ css }: ComposerFactory) => {
  return css(textStyles)
}
