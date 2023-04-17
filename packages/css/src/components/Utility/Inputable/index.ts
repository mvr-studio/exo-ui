import { ComposerFactory } from '../../../types'
import { boxStyles } from '../../Layout'

export const inputableStyles = {
  ...boxStyles,
  display: 'block',
  width: '100%',
  borderRadius: '$md',
  paddingLeft: '$md',
  paddingRight: '$md',
  paddingTop: '$sm',
  paddingBottom: '$sm',
  border: 'none',
  boxShadow: '$inputDefault',
  outline: 'none',
  transition: 'box-shadow 0.3s ease-in-out',
  backgroundColor: 'var(--default-input-background)',
  '&:hover': { boxShadow: '$inputHover' },
  '&:focus': { boxShadow: '$inputFocus' },
  '&::selection': { backgroundColor: '$gray800', color: 'white' }
}

export const composeInputableCss = ({ css }: ComposerFactory) => {
  return css(inputableStyles)
}
