import { inputableStyles } from '@mvr-studio/exo-css'
import { ComponentFactory } from '../../../types'

export const composeSelect = ({ styled }: ComponentFactory) => {
  return styled('select', {
    ...inputableStyles,
    background: 'var(--select-background)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: `calc(100% - 0.75rem) center`
  })
}
