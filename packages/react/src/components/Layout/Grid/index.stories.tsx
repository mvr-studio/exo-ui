import React from 'react'
import { Story, StoryDefault } from '@ladle/react'
import { createExoUi } from '../../..'

export const Default: Story = () => {
  const { Grid, Box } = createExoUi()
  return (
    <Grid css={{ gridTemplateColumns: '2fr 1fr', gap: '$md' }}>
      <Box css={{ backgroundColor: '$primary100', color: '$primary500', padding: '$md' }}>Box</Box>
      <Box css={{ backgroundColor: '$primary100', color: '$primary500', padding: '$md' }}>Box</Box>
    </Grid>
  )
}

export default {
  title: 'Layout / Grid'
} satisfies StoryDefault
