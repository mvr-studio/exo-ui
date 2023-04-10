import * as Dialog from '@radix-ui/react-dialog'
import { composeOverlay } from '../../Utility'
import { ComponentFactory } from '../../../types'
import { animation } from '../../../utils'

export const composeModal = ({ styled }: ComponentFactory) => {
  const Overlay = composeOverlay({ styled })
  const Content = styled(Dialog.Content, {
    unset: 'all',
    boxSizing: 'border-box',
    backgroundColor: 'white',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '32rem',
    width: '100%',
    borderRadius: 0,
    padding: '$lg',
    animation: `${animation.fadeAndScale} 0.2s cubic-bezier(0.16, 1, 0.3, 1)`,
    zIndex: 2,
    boxShadow: '$md',
    '@sm': {
      borderRadius: '$md'
    }
  })
  const Close = styled(Dialog.Close, {})
  return { Root: Dialog.Root, Portal: Dialog.Portal, Trigger: Dialog.Trigger, Overlay, Content, Close }
}
