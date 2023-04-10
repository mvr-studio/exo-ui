import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { SimpleGrid, Box } = createExoUi()
  return (
    <SimpleGrid columns={{ '@base': 2 }} css={{ gap: '$md' }}>
      <Box css={{ backgroundColor: '$primary100', color: '$primary500', padding: '$md' }}>Box</Box>
      <Box css={{ backgroundColor: '$primary100', color: '$primary500', padding: '$md' }}>Box</Box>
    </SimpleGrid>
  )
}

export default {
  title: 'Layout / Simple Grid'
} satisfies StoryDefault
