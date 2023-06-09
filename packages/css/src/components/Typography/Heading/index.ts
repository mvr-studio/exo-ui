import { boxStyles } from '../../'
import { ComposerFactory } from '../../../types'

export const headingStyles = {
  ...boxStyles,
  fontWeight: '$bold',
  fontSize: '$2xl',
  variants: {
    size: {
      xl: {
        fontSize: '$xl'
      },
      lg: {
        fontSize: '$lg'
      }
    }
  }
}

export const composeHeadingCss = ({ css }: ComposerFactory) => {
  return css(headingStyles)
}
