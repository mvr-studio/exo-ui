import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Label } = createExoUi()
  return <Label>Email Address</Label>
}

export default {
  title: 'Typography / Label'
} satisfies StoryDefault
