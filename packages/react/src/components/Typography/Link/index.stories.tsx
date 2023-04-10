import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Link } = createExoUi()
  return (
    <Link href="https://google.com" target="_blank" rel="noreferrer noopener">
      Link
    </Link>
  )
}

export default {
  title: 'Typography / Link'
} satisfies StoryDefault
