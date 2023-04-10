import React from 'react'
import type { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'
import { IconX } from '@tabler/icons-react'
import { useState } from 'react'

export const Default: Story = () => {
  const { Drawer, Button, Stack, Heading, Text, Input, Label, Box } = createExoUi()
  return (
    <Box>
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <Button>Edit profile</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay />
          <Drawer.Content>
            <Stack css={{ gap: '1rem' }}>
              <Heading size="lg">Edit profile</Heading>
              <Text>Edit user's profile</Text>
              <Stack>
                <Label htmlFor="name">Name</Label>
                <Input id="name" />
              </Stack>
              <Drawer.Close asChild>
                <Button>Save changes</Button>
              </Drawer.Close>
              <Drawer.Close asChild css={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <Button aria-label="Close" size="sm" scheme="ghost" css={{ width: '2rem' }}>
                  <IconX />
                </Button>
              </Drawer.Close>
            </Stack>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </Box>
  )
}

export const Positions: Story = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState('top')
  const { Drawer, Button, Stack, Heading, Text, Input, Label, Box } = createExoUi()
  const openInPosition = (position: string) => {
    setPosition(position)
    setIsOpen(true)
  }
  return (
    <Box>
      <Stack direction="horizontal">
        <Button onClick={() => openInPosition('top')}>Top Position</Button>
        <Button onClick={() => openInPosition('right')}>Right Position</Button>
        <Button onClick={() => openInPosition('bottom')}>Bottom Position</Button>
        <Button onClick={() => openInPosition('left')}>Left Position</Button>
      </Stack>
      <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Portal>
          <Drawer.Overlay />
          <Drawer.Content position={position}>
            <Stack css={{ gap: '1rem' }}>
              <Heading size="lg">Edit profile</Heading>
              <Text>Edit user's profile</Text>
              <Stack>
                <Label htmlFor="name">Name</Label>
                <Input id="name" />
              </Stack>
              <Drawer.Close asChild>
                <Button>Save changes</Button>
              </Drawer.Close>
              <Drawer.Close asChild css={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <Button aria-label="Close" size="sm" scheme="ghost" css={{ width: '2rem' }}>
                  <IconX />
                </Button>
              </Drawer.Close>
            </Stack>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </Box>
  )
}

export default {
  title: 'Feedback / Drawer'
} satisfies StoryDefault
