import { headingStyles, labelStyles, linkStyles, textStyles } from '..'
import { ComposerFactory } from '../../../types'
import { boxStyles } from '../../Layout'

export const contentStyles = {
  ...boxStyles,
  '*': {
    marginTop: '$sm'
  },
  h1: {
    ...headingStyles,
    marginTop: '$sm',
    fontSize: '2rem'
  },
  h2: {
    ...headingStyles,
    marginTop: '$sm',
    fontSize: '1.5rem'
  },
  h3: {
    ...headingStyles,
    marginTop: '$sm',
    fontSize: '1.25rem'
  },
  p: { ...textStyles, marginTop: '$sm' },
  a: {
    ...linkStyles,
    marginTop: '$sm',
    color: 'var(--link-color)'
  },
  label: { ...labelStyles }
}

export const composeContentCss = ({ css }: ComposerFactory) => {
  return css(contentStyles)
}
