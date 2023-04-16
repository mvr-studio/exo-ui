import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Spinner } = createExoUi()
  return <Spinner />
}

export default {
  title: 'Feedback / Spinner'
} satisfies StoryDefault
