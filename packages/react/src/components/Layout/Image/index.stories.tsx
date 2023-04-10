import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Image } = createExoUi()
  return <Image src="https://picsum.photos/300/200" css={{ maxWidth: 300, borderRadius: '$md', boxShadow: '$md' }} />
}

export const Avatar: Story = () => {
  const { Image, Text } = createExoUi()
  return (
    <Image
      src="/does-not-exist.png"
      css={{ width: 60, height: 60, borderRadius: '100%', backgroundColor: '$gray100' }}
      fallback={<Text css={{ textAlign: 'center', width: '100%', fontSize: '$lg' }}>TM</Text>}
    />
  )
}

export default {
  title: 'Layout / Image'
} satisfies StoryDefault
