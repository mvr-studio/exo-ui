import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Content } = createExoUi()
  return (
    <Content>
      <h1>Main header</h1>
      <p>Some Text</p>
      <h2>Another header</h2>
      <p>Some more text</p>
    </Content>
  )
}

export default {
  title: 'Typography / Content'
} satisfies StoryDefault
