import { ComponentType } from 'react'
import { ComponentFactory } from '../../../types'

interface ShowableContentProps extends ComponentFactory {
  baseComponent: ComponentType<any>
}

export const composeShowableContent = ({ styled, baseComponent }: ShowableContentProps) =>
  styled(baseComponent, {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'var(--background-e2)',
    boxShadow: '$tooltip',
    paddingX: '$md',
    paddingY: '$sm',
    borderRadius: '$md'
  })
