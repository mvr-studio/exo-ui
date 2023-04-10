import { ComponentType } from 'react'
import { ComponentFactory } from '../../../types'
import { composeBoxCss } from '@mvr-studio/exo-css'

interface BoxFactory extends ComponentFactory {
  type?: string
}

const composeBox = ({ styled, type = 'div', css }: BoxFactory) => {
  const boxCss = composeBoxCss({ css })
  return styled(type as unknown as ComponentType<any>, {
    ...boxCss
  })
}

export default composeBox
