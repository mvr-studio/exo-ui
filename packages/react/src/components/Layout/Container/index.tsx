import React from 'react'
import { ComponentFactory } from '../../../types'
import { composeBox } from '../Box'
import { composeFlex } from '../Flex'

export const composeContainer = ({ styled }: ComponentFactory) => {
  const Box = composeBox({ styled })
  const Flex = composeFlex({ styled })
  type FlexProps = React.ComponentProps<typeof Flex>

  return ({ children, ...flexProps }: FlexProps) => (
    <Flex {...flexProps} css={{ ...flexProps.css, justifyContent: 'center', alignItems: 'center', maxWidth: 'auto' }}>
      <Box css={{ maxWidth: flexProps.css?.maxWidth || '$containerLg', width: '100%' }}>{children}</Box>
    </Flex>
  )
}
