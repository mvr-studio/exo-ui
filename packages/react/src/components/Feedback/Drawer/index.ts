import * as Dialog from '@radix-ui/react-dialog'
import { ComponentFactory } from '../../../types'
import { animation } from '@mvr-studio/exo-css'
import { composeOverlay } from '../../Utility/index'

const commonMobileStyles = {
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  maxHeight: '100%',
  maxWidth: '100%',
  borderRadius: 0
}

const commonHorizontalVariantProps = {
  ...commonMobileStyles,
  '@sm': {
    top: '1rem',
    bottom: '1rem',
    left: 'unset',
    right: 'unset',
    maxWidth: '32rem',
    maxHeight: 'calc(100% - 2rem)',
    borderRadius: '$md'
  }
}

const commonVerticalVariantProps = {
  ...commonMobileStyles,
  '@sm': {
    top: 'unset',
    bottom: 'unset',
    left: '1rem',
    right: '1rem',
    maxWidth: 'calc(100% - 2rem)',
    maxHeight: '32rem',
    borderRadius: '$md'
  }
}

export const composeDrawer = ({ styled }: ComponentFactory) => {
  const Overlay = composeOverlay({ styled })
  const Content = styled(Dialog.Content, {
    unset: 'all',
    boxSizing: 'border-box',
    backgroundColor: 'var(--background-e1)',
    position: 'fixed',
    height: '100%',
    width: '100%',
    padding: '$lg',
    zIndex: 2,
    boxShadow: '$md',
    variants: {
      position: {
        top: {
          ...commonVerticalVariantProps,
          '@sm': { ...commonVerticalVariantProps['@sm'], top: '1rem' },
          animation: `${animation.fadeInSlideTop} 0.2s cubic-bezier(0.16, 1, 0.3, 1)`
        },
        right: {
          ...commonHorizontalVariantProps,
          '@sm': { ...commonHorizontalVariantProps['@sm'], right: '1rem' },
          animation: `${animation.fadeInSlideRight} 0.2s cubic-bezier(0.16, 1, 0.3, 1)`
        },
        bottom: {
          ...commonVerticalVariantProps,
          '@sm': { ...commonVerticalVariantProps['@sm'], bottom: '1rem' },
          animation: `${animation.fadeInSlideBottom} 0.2s cubic-bezier(0.16, 1, 0.3, 1)`
        },
        left: {
          ...commonHorizontalVariantProps,
          '@sm': { ...commonHorizontalVariantProps['@sm'], left: '1rem' },
          animation: `${animation.fadeInSlideLeft} 0.2s cubic-bezier(0.16, 1, 0.3, 1)`
        }
      }
    },
    defaultVariants: {
      position: 'right'
    }
  })
  const Close = styled(Dialog.Close, {})
  return { Root: Dialog.Root, Portal: Dialog.Portal, Trigger: Dialog.Trigger, Overlay, Content, Close }
}
