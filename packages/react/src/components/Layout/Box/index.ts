import { ComponentType } from 'react'
import { ComponentFactory } from '../../../types'

interface BoxFactory extends ComponentFactory {
  type?: string
}

const composeBox = ({ styled, type = 'div' }: BoxFactory) =>
  styled(type as unknown as ComponentType<any>, {
    appearance: 'none',
    fontFamily: '$body',
    fontSize: '$md',
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    width: '100%'
  })

export default composeBox
