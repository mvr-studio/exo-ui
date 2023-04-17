import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Container } = createExoUi()
  return <Container css={{ maxWidth: '$containerMd' }}>Box</Container>
}

export default {
  title: 'Layout / Container'
} satisfies StoryDefault
