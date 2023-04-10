import { composeInputableCss } from '@mvr-studio/exo-css'
import { ComponentFactory } from '../../../types'
import { composeBox } from '../../Layout'

const composeSelect = ({ styled, css }: ComponentFactory) => {
  const Box = composeBox({ styled, type: 'select' })
  const imputable = composeInputableCss({ css })
  return styled(Box, {
    ...imputable,
    background: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><path d='M6 9l6 6l6 -6' /></svg>") no-repeat;`,
    backgroundPosition: `calc(100% - 0.75rem) center`
  })
}

export default composeSelect
