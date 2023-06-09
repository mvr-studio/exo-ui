import React from 'react'
import { ComponentFactory } from '../../../types'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { IconPointFilled } from '@tabler/icons-react'

const composeGroupRoot = ({ styled }: ComponentFactory) =>
  styled(RadioGroup.Root, {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  })

const composeRadioGroupItem = ({ styled }: ComponentFactory) =>
  styled(RadioGroup.Item, {
    all: 'unset',
    backgroundColor: 'var(--checkbox-background)',
    width: 25,
    height: 25,
    borderRadius: '100%',
    boxShadow: '$checkable',
    cursor: 'pointer'
  })

const composeRadioGroupIndicator = ({ styled }: ComponentFactory) =>
  styled(RadioGroup.Indicator, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
    color: 'var(--checkbox-indicator)'
  })

const composeItem = ({ styled }: ComponentFactory) => {
  const RadioGroupItemRoot = composeRadioGroupItem({ styled })
  const RadioGroupIndicator = composeRadioGroupIndicator({ styled })
  type RadioGroupItemProps = React.ComponentProps<typeof RadioGroupItemRoot> & {
    value: string
  }

  return (props: RadioGroupItemProps) => (
    <RadioGroupItemRoot {...props}>
      <RadioGroupIndicator>
        <IconPointFilled />
      </RadioGroupIndicator>
    </RadioGroupItemRoot>
  )
}

export const composeRadioGroup = ({ styled }: ComponentFactory) => {
  const Root = composeGroupRoot({ styled })
  const Item = composeItem({ styled })
  return { Root, Item }
}
