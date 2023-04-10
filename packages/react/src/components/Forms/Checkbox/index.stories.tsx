import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Checkbox, Stack, Label } = createExoUi()
  return (
    <Stack direction="horizontal" css={{ alignItems: 'center', gap: '$md' }}>
      <Checkbox defaultChecked id="check" />
      <Label htmlFor="check">I accept Terms and Conditions.</Label>
    </Stack>
  )
}

export default {
  title: 'Forms / Checkbox'
} satisfies StoryDefault
