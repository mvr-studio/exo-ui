import { ComponentType } from 'react'
import { ComponentFactory } from '../../../types'

interface ShowableContentProps extends ComponentFactory {
  baseComponent: ComponentType<any>
}

const composeShowableContent = ({ styled, baseComponent }: ShowableContentProps) =>
  styled(baseComponent, {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    boxShadow: '$tooltip',
    paddingX: '$md',
    paddingY: '$sm',
    borderRadius: '$md'
  })

export default composeShowableContent
