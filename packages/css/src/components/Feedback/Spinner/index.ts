import { prixClipFix, rotate } from '../../../utils/animation'
import { boxStyles } from '../../Layout'

export const spinnerStyles = {
  ...boxStyles,
  maxWidth: '3rem',
  width: '100%',
  maxHeight: '3rem',
  height: '100%',
  borderRadius: '50%',
  position: 'relative',
  animation: `${rotate} 1s linear infinite`,
  '&:before': {
    content: '',
    boxSizing: 'border-box',
    position: 'absolute',
    inset: 0,
    borderRadius: '50%',
    border: '5px solid',
    borderColor: '$gray700',
    animation: `${prixClipFix} 2s linear infinite`
  }
}
