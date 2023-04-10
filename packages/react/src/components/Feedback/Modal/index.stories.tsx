import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { IconX } from '@tabler/icons-react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Box, Modal, Button, Stack, Heading, Text, Input, Label } = createExoUi()
  return (
    <Box>
      <Modal.Root>
        <Modal.Trigger asChild>
          <Button>Edit profile</Button>
        </Modal.Trigger>
        <Modal.Portal>
          <Modal.Overlay />
          <Modal.Content>
            <Stack css={{ gap: '1rem' }}>
              <Heading size="lg">Edit profile</Heading>
              <Text>Edit user's profile</Text>
              <Stack>
                <Label htmlFor="name">Name</Label>
                <Input id="name" />
              </Stack>
              <Modal.Close asChild>
                <Button>Save changes</Button>
              </Modal.Close>
              <Modal.Close asChild css={{ position: 'absolute', top: '1rem', right: '1.5rem' }}>
                <Button aria-label="Close" size="sm" scheme="ghost" css={{ width: '2rem' }}>
                  <IconX />
                </Button>
              </Modal.Close>
            </Stack>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </Box>
  )
}

export default {
  title: 'Feedback / Modal'
} satisfies StoryDefault
