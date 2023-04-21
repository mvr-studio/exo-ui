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
      css={{ width: 60, height: 60, borderRadius: '100%', backgroundColor: '$gray100' }}
      fallback={<Text css={{ textAlign: 'center', width: '100%', fontSize: '$lg' }}>TM</Text>}
    />
  )
}

export const GradientAvatar: Story = () => {
  const { Image, Text } = createExoUi()
  return (
    <Image
      css={{ width: 60, height: 60, borderRadius: '100%' }}
      fallback={<Text css={{ color: '$white', textAlign: 'center', width: '100%', fontSize: '$lg' }}>TM</Text>}
      gradient="addr_test1qztsw4wqagpn9jqh5wqkhupyx9k6q58k7x0ql8pku63ttdmak7sjf0mypuy30hc5usq657rjk57maxt6h4zcrhghssnscfvqd6"
    />
  )
}

export default {
  title: 'Layout / Image'
} satisfies StoryDefault
