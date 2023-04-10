import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { invert } from 'polished'
import { createExoUi } from '../'

export const Colors: Story = () => {
  const { Heading, Stack, Flex, theme, SimpleGrid, Text } = createExoUi()
  const colors = theme?.colors && Object.values(theme.colors)
  return (
    <Stack>
      <Heading>Theme</Heading>
      <Heading as="h2" size="xl">
        Colors
      </Heading>
      <SimpleGrid columns={{ '@base': 2, '@md': 4 }} css={{ gap: '2rem', maxWidth: '56rem' }}>
        {colors.map((color: any) => (
          <Flex
            key={color.token}
            css={{
              width: '8rem',
              height: '8rem',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: color.value,
              boxShadow: '$md'
            }}
          >
            <Text css={{ color: invert(color.value), textAlign: 'center' }}>{color.token}</Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default {
  title: 'ExoUI / Theme'
} satisfies StoryDefault
