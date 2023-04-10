import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { RadioGroup, Stack, Label } = createExoUi()
  return (
    <RadioGroup.Root defaultValue="default" aria-label="View density">
      <Stack direction="horizontal" css={{ alignItems: 'center', gap: '$md' }}>
        <RadioGroup.Item value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </Stack>
      <Stack direction="horizontal" css={{ alignItems: 'center', gap: '$md' }}>
        <RadioGroup.Item value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </Stack>
    </RadioGroup.Root>
  )
}

export default {
  title: 'Forms / Radio Group'
} satisfies StoryDefault
