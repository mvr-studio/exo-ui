import { ComponentType } from 'react'
import { ComponentFactory } from '../../../types'
import { boxStyles } from '@mvr-studio/exo-css'

interface BoxFactory extends ComponentFactory {
  type?: string
}

export const composeBox = ({ styled, type = 'div' }: BoxFactory) => {
  return styled(type as unknown as ComponentType<any>, boxStyles)
}
