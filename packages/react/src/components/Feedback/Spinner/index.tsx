import { spinnerStyles } from '@mvr-studio/exo-css'
import { ComponentFactory } from '../../../types'
import { composeBox } from '../../Layout/Box'

export const composeSpinner = ({ styled }: ComponentFactory) => {
  const Box = composeBox({ styled })
  return styled(Box, spinnerStyles)
}
