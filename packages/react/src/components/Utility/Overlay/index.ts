import { ComponentFactory } from '../../../types'
import * as Dialog from '@radix-ui/react-dialog'
import { overlayStyles } from '@mvr-studio/exo-css'

export const composeOverlay = ({ styled }: ComponentFactory) => {
  return styled(Dialog.Overlay, overlayStyles)
}
