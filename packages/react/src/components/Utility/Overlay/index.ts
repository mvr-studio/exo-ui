import { ComponentFactory } from '../../../types'
import { Overlay } from '@radix-ui/react-dialog'
import { animation } from '../../../utils'

const composeOverlay = ({ styled }: ComponentFactory) =>
  styled(Overlay, {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    animation: `${animation.fadeIn} 0.2s cubic-bezier(0.16, 1, 0.3, 1)`,
    zIndex: 1
  })

export default composeOverlay
