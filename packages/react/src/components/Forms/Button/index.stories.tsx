import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Box, Button } = createExoUi()
  return (
    <Box css={{ maxWidth: '16rem' }}>
      <Button>Submit</Button>
    </Box>
  )
}

export const Loading: Story = () => {
  const { Box, Button, Spinner } = createExoUi()
  return (
    <Box css={{ maxWidth: '16rem' }}>
      <Button disabled>
        <Spinner css={{ width: '1rem', height: '1rem', '&:before': { borderWidth: '2px' } }} />
      </Button>
    </Box>
  )
}

export const SizeVariants: Story = () => {
  const { Stack, Button } = createExoUi()
  return (
    <Stack direction="horizontal" css={{ gap: '$md', maxWidth: '40rem' }}>
      <Button size="sm">SM</Button>
      <Button>MD</Button>
      <Button size="lg">LG</Button>
    </Stack>
  )
}

export const SchemeVariants: Story = () => {
  const { Stack, Button } = createExoUi()
  return (
    <Stack direction="horizontal" css={{ gap: '$md', maxWidth: '40rem' }}>
      <Button>Standard</Button>
      <Button scheme="primary">Primary</Button>
      <Button scheme="outline">Outline</Button>
      <Button scheme="ghost">Ghost</Button>
    </Stack>
  )
}

export default {
  title: 'Forms / Button'
} satisfies StoryDefault
