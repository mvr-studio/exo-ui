import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Box } = createExoUi()
  return <Box css={{ backgroundColor: '$primary100', color: '$primary500', padding: '$md' }}>Box</Box>
}

export default {
  title: 'Layout / Box'
} satisfies StoryDefault
