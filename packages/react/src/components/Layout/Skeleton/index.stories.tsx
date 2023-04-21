import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Skeleton } = createExoUi()
  return <Skeleton css={{ width: '8rem', height: '3rem' }} />
}

export default {
  title: 'Layout / Skeleton'
} satisfies StoryDefault
