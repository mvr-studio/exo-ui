import React from 'react'
import * as Switch from '@radix-ui/react-switch'
import { ComponentFactory } from '../../../types'

const composeSwitchRoot = ({ styled }: ComponentFactory) => {
  return styled(Switch.Root, {
    all: 'unset',
    boxSizing: 'border-box',
    backgroundColor: '$gray100',
    width: '3rem',
    height: '1.5rem',
    borderRadius: '9999px',
    cursor: 'pointer',
    WebkitTapHighlightColor: '$primary400',
    '&[data-state="checked"]': { backgroundColor: '$primary300' },
    boxShadow: '$checkable'
  })
}

const composeSwitchThumb = ({ styled }: ComponentFactory) => {
  return styled(Switch.Thumb, {
    boxSizing: 'border-box',
    width: '1.125rem',
    height: '1.125rem',
    display: 'block',
    color: '$primary400',
    backgroundColor: 'white',
    borderRadius: '100%',
    transition: 'transform 100ms',
    transform: 'translateX(0.25rem)',
    willChange: 'transform',
    '&[data-state="checked"]': { transform: 'translateX(1.375rem)' }
  })
}

export const composeSwitch = ({ styled }: ComponentFactory) => {
  const SwitchRoot = composeSwitchRoot({ styled })
  const CheckboxSwitchThumb = composeSwitchThumb({ styled })
  type SwitchRootProps = React.ComponentProps<typeof SwitchRoot>

  return (props: SwitchRootProps) => (
    <SwitchRoot {...props}>
      <CheckboxSwitchThumb />
    </SwitchRoot>
  )
}
