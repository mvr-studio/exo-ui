import { css } from '@stitches/react'
import type Stitches from '@stitches/react/types/stitches'

export enum Month {
  JANUARY,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER
}

export enum Day {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY
}

export type Color = string

export interface CreateExpoThemeProps {
  primaryColor?: Color
  secondaryColor?: Color
  colors?: Record<string, Color>
}

export type Styled = Stitches['styled']
export interface ComponentFactory {
  styled: Styled
  css?: typeof css | any
  theme?: any
}
