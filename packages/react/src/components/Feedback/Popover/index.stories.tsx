import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Box, Button, Popover, Text } = createExoUi()
  return (
    <Box>
      <Popover content={<Text>Hidden content</Text>}>
        <Button css={{ width: '10rem' }}>Click it</Button>
      </Popover>
    </Box>
  )
}

export default {
  title: 'Feedback / Popover'
} satisfies StoryDefault
