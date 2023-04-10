import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Input, Label, Stack } = createExoUi()
  return (
    <Stack>
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" />
    </Stack>
  )
}

export default {
  title: 'Forms / Input'
} satisfies StoryDefault
