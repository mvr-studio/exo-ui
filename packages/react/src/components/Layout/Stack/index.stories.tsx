import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Stack } = createExoUi()
  return (
    <Stack css={{ gap: '$md' }}>
      <span>First element</span>
      <span>Second element</span>
    </Stack>
  )
}

export const Horizontal: Story = () => {
  const { Stack } = createExoUi()
  return (
    <Stack direction="horizontal" css={{ gap: '$md' }}>
      <span>First element</span>
      <span>Second element</span>
    </Stack>
  )
}

export default {
  title: 'Layout / Stack'
} satisfies StoryDefault
