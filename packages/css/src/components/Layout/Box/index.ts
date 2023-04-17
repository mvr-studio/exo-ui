import { ComposerFactory } from '../../../types'

export const boxStyles = {
  appearance: 'none',
  fontFamily: '$body',
  fontSize: '$md',
  color: 'var(--default-text-color)',
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
  width: '100%'
}

export const composeBoxCss = ({ css }: ComposerFactory) => {
  return css(boxStyles)
}
