import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Card } = createExoUi()
  return <Card css={{ padding: '$md' }}>Card</Card>
}

export const SchemeVariants: Story = () => {
  const { Card, Stack } = createExoUi()
  return (
    <Stack>
      <Card scheme="elevated" css={{ padding: '$md' }}>
        Elevated
      </Card>
      <Card scheme="filled" css={{ padding: '$md' }}>
        Filled
      </Card>
    </Stack>
  )
}

export default {
  title: 'Layout / Card'
} satisfies StoryDefault
