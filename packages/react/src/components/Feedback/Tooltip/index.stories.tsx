import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Button, Tooltip } = createExoUi()
  return (
    <Tooltip label="Test">
      <Button css={{ width: '10rem' }}>Hover it</Button>
    </Tooltip>
  )
}

export default {
  title: 'Feedback / Tooltip'
} satisfies StoryDefault
