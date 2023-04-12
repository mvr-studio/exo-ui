import { ComponentType } from 'react'
import { ComponentFactory } from '../../../types'
import { boxStyles } from '@mvr-studio/exo-css'

interface BoxFactory extends ComponentFactory {
  type?: string
}

const composeBox = ({ styled, type = 'div' }: BoxFactory) => {
  return styled(type as unknown as ComponentType<any>, boxStyles)
}

export default composeBox
