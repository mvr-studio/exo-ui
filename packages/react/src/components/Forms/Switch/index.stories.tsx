import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Switch, Stack, Label } = createExoUi()
  return (
    <Stack direction="horizontal" css={{ alignItems: 'center', gap: '$md' }}>
      <Switch id="check" />
      <Label htmlFor="check">Color Mode</Label>
    </Stack>
  )
}

export default {
  title: 'Forms / Switch'
} satisfies StoryDefault
