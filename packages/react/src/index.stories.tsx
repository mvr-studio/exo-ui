import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from './'
import { Sandpack } from '@codesandbox/sandpack-react'
import dedent from 'dedent'

export const Readme: Story = () => {
  const { Stack, Text, Heading } = createExoUi()
  return (
    <Stack>
      <Heading>ExoUI</Heading>
      <Text>Yes, yet another UI library.</Text>
    </Stack>
  )
}

export const Playground: Story = () => {
  const APP_CODE = dedent`
    import { useState } from 'react'
    import { createExoUi } from '@mvr-studio/exo-ui'

    export default function App() {
      const [isSent, setIsSent] = useState()
      const { Box, Stack, Heading, Text, Button, Input, Label, Textarea, Checkbox } = createExoUi()

      if (isSent) return (
        <Stack>
          <Stack direction="horizontal" css={{ alignItems: 'center' }}>
            <Box css={{ fontSize: '3rem', width: 'auto', color: 'teal' }}>☑️</Box>
            <Heading css={{ flex: 1, color: 'teal' }}>Message Sent</Heading>
          </Stack>
          <Button onClick={() => setIsSent(false)}>Go Back</Button>
        </Stack>
      )

      return (
        <Stack css={{ gap: '$md', padding: '$sm' }}>
          <Heading>Interactive Playground</Heading>
          <Text>Have fun</Text>
          <Stack css={{ gap: '$sm' }}>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" />
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" />
            <Stack direction="horizontal" css={{ alignItems: 'center' }}>
              <Checkbox id="tos" />
              <Label htmlFor="tos">I accept Terms of Service</Label>
            </Stack>
            <Button scheme="primary" onClick={() => setIsSent(true)}>Send Message</Button>
          </Stack>
        </Stack>
      )
    }
  `

  const files = {
    '/App.tsx': APP_CODE
  }

  return (
    <Sandpack
      files={files}
      template="react-ts"
      customSetup={{
        dependencies: {
          '@mvr-studio/exo-ui': 'latest',
          '@stitches/react': '1.2.8'
        }
      }}
      options={{
        editorHeight: 500
      }}
    />
  )
}

export default {
  title: 'ExoUI'
} satisfies StoryDefault
