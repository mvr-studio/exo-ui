import { ComposerFactory } from '../../../types'
import { boxStyles } from '../Box'

export const stackStyles = {
  ...boxStyles,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '$sm',
  variants: {
    direction: {
      horizontal: {
        flexDirection: 'row'
      }
    }
  }
}

export const composeStackCss = ({ css }: ComposerFactory) => {
  return css(stackStyles)
}
