import { boxStyles } from '../../'
import { ComposerFactory } from '../../../types'

export const textStyles = {
  ...boxStyles,
  color: 'var(--default-text-body-color)',
  lineHeight: '$tall'
}

export const composeTextCss = ({ css }: ComposerFactory) => {
  return css(textStyles)
}
