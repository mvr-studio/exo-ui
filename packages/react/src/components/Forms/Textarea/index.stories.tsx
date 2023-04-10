import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Textarea, Label, Stack } = createExoUi()
  return (
    <Stack>
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" />
    </Stack>
  )
}

export default {
  title: 'Forms / Textarea'
} satisfies StoryDefault
