import React from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentFactory } from '../../../types'
import { composeText } from '../../Typography'
import { composeShowableContent } from '../../Utility'

const composeTooltipArrow = ({ styled }: ComponentFactory) => styled(Tooltip.Arrow, { fill: 'var(--background-e2)' })

export interface TooltipProps {
  children: React.ReactNode
  label: string
}

export const composeTooltip = ({ styled, css }: ComponentFactory) => {
  const Text = composeText({ styled, css })
  const TooltipContent = composeShowableContent({ styled, baseComponent: Tooltip.Content, css })
  const TooltipArrow = composeTooltipArrow({ styled, css })
  return ({ children, label }: TooltipProps) => (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent>
            <TooltipArrow />
            <Text css={{ color: '$primary400', textAlign: 'center', fontSize: '$sm', fontWeight: 'bold' }}>
              {label}
            </Text>
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
