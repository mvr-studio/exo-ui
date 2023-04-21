import { ComposerFactory } from '../../../types'
import { loading } from '../../../utils/animation'
import { boxStyles } from '../Box'

export const skeletonStyles = {
  ...boxStyles,
  borderRadius: '$lg',
  background:
    'linear-gradient(90deg, var(--outline-color-light) 40%, var(--skeleton-highlight), var(--outline-color-light) 60%) right / 300% 100%',
  animation: `${loading} 1s linear infinite`
}

export const composeSkeletonCss = ({ css }: ComposerFactory) => {
  return css(skeletonStyles)
}
