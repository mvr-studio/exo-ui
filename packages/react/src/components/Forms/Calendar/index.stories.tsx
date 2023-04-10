import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Calendar, Box } = createExoUi()
  return (
    <Box css={{ maxWidth: '28rem' }}>
      <Calendar />
    </Box>
  )
}

export default {
  title: 'Forms / Calendar'
} satisfies StoryDefault
