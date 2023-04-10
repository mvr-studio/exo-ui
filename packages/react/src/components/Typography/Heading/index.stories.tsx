import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Heading, Stack } = createExoUi()
  return (
    <Stack>
      <Heading>Test</Heading>
      <Heading as="h2" size="xl">
        Test
      </Heading>
      <Heading as="h3" size="lg">
        Test
      </Heading>
    </Stack>
  )
}

export default {
  title: 'Typography / Heading'
} satisfies StoryDefault
