import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Box, Flex } = createExoUi()
  return (
    <Flex css={{ justifyContent: 'space-between', border: '1px solid', borderColor: '$primary100', padding: '$sm' }}>
      <Box css={{ backgroundColor: '$primary100', color: '$primary500', padding: '$md', width: '8rem' }}>Space</Box>
      <Box css={{ backgroundColor: '$primary100', color: '$primary500', padding: '$md', width: '8rem' }}>Between</Box>
    </Flex>
  )
}

export default {
  title: 'Layout / Flex'
} satisfies StoryDefault
