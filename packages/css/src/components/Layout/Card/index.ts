import { ComposerFactory } from '../../../types'
import { boxStyles } from '../Box'

export const cardStyles = {
  ...boxStyles,
  border: '1px solid',
  borderColor: 'var(--outline-color)',
  borderRadius: '$lg',
  variants: {
    scheme: {
      elevated: {
        borderColor: 'transparent',
        boxShadow: '$elevated'
      },
      filled: {
        backgroundColor: 'var(--outline-color-light)',
        borderColor: 'var(--outline-color-light)'
      }
    }
  }
}

export const composeCardCss = ({ css }: ComposerFactory) => {
  return css(cardStyles)
}
