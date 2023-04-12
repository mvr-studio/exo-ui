import { ComposerFactory } from '../../../types'
import { animation } from '../../../utils'
import { boxStyles } from '../../Layout'

export const overlayStyles = {
  ...boxStyles,
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  animation: `${animation.fadeIn} 0.2s cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 1
}

export const composeOverlayCss = ({ css }: ComposerFactory) => {
  return css(overlayStyles)
}
