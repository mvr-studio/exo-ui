import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Select, Stack, Label } = createExoUi()
  return (
    <Stack>
      <Label htmlFor="color">Preferred Color</Label>
      <Select id="color">
        <option>red</option>
        <option>blue</option>
      </Select>
    </Stack>
  )
}

export default {
  title: 'Forms / Select'
} satisfies StoryDefault
