import type { css } from '@stitches/core'

export type Color = string

export interface CreateExpoThemeProps {
  primaryColor?: Color
  secondaryColor?: Color
  colors?: Record<string, Color>
}

export interface ComposerFactory {
  css: typeof css
}
