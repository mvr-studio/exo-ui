import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Box, AspectRatio } = createExoUi()
  return (
    <AspectRatio ratio={3}>
      <Box
        css={{
          height: '100%',
          width: '100%',
          backgroundColor: '$primary100',
          color: '$primary500',
          padding: '$md'
        }}
      >
        Aspect Ratio: 3
      </Box>
    </AspectRatio>
  )
}

export default {
  title: 'Layout / Aspect Ratio'
} satisfies StoryDefault
