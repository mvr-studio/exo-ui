import React from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { IconCheck } from '@tabler/icons-react'
import { ComponentFactory } from '../../../types'

const composeCheckboxRoot = ({ styled }: ComponentFactory) => {
  return styled(Checkbox.Root, {
    all: 'unset',
    boxSizing: 'border-box',
    backgroundColor: 'white',
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '$md',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '$checkable',
    cursor: 'pointer'
  })
}

const composeCheckboxIndicator = ({ styled }: ComponentFactory) => {
  return styled(Checkbox.Indicator, {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '$primary400',
    width: '100%'
  })
}

export const composeCheckbox = ({ styled }: ComponentFactory) => {
  const CheckboxRoot = composeCheckboxRoot({ styled })
  const CheckboxIndicator = composeCheckboxIndicator({ styled })
  type CheckboxRootProps = React.ComponentProps<typeof CheckboxRoot>

  return (props: CheckboxRootProps) => (
    <CheckboxRoot {...props}>
      <CheckboxIndicator>
        <IconCheck width="100%" />
      </CheckboxIndicator>
    </CheckboxRoot>
  )
}
