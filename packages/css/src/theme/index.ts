import { ConfigType } from '@stitches/react/types/config'
import { type CreateExpoThemeProps } from '../types'
import { createColorScale } from './colors'
import utils from './utils'
import { createStitches, globalCss } from '@stitches/core'

const FALLBACK_DEFAULT_PRIMARY_COLOR = '#2a26ff'

type CreateExoThemeReturn = { theme: ConfigType.Theme; media: ConfigType.Media; utils: ConfigType.Utils }

export const composeExoTheme = (themeProps?: CreateExpoThemeProps): CreateExoThemeReturn => {
  const primaryColorScale = createColorScale('primary', themeProps?.primaryColor || FALLBACK_DEFAULT_PRIMARY_COLOR)
  const secondaryColorScale = themeProps?.secondaryColor
    ? createColorScale('secondary', themeProps?.secondaryColor)
    : {}
  const grayColorScale = createColorScale('gray', '#454752')

  const colors = {
    white: '#ffffff',
    black: '#000000',
    ...grayColorScale,
    ...primaryColorScale,
    ...secondaryColorScale,
    ...themeProps?.colors
  } as Record<string, string>

  const lightThemeVariables = {
    '--link-color': colors.primary400,
    '--default-text-color': colors.gray700,
    '--default-text-body-color': colors.gray600,
    '--default-button-background': colors.gray100,
    '--default-button-background-hover': colors.gray200,
    '--default-button-background-active': colors.gray300,
    '--default-button-text-color': colors.gray700,
    '--primary-button-background': colors.primary400,
    '--primary-button-background-hover': colors.primary500,
    '--primary-button-background-active': colors.primary600,
    '--primary-button-text-color': colors.gray50,
    '--default-input-background': colors.white,
    '--default-input-border-default': colors.gray300,
    '--default-input-border-active': colors.primary400,
    '--checkbox-background': colors.white,
    '--checkbox-indicator': colors.primary400,
    '--switch-background': colors.gray200,
    '--background-e0': colors.white,
    '--background-e1': colors.white,
    '--background-e2': colors.gray50,
    '--select-background': `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='grey' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><path d='M6 9l6 6l6 -6' /></svg>");`
  }

  const darkThemeVariables = {
    '--link-color': colors.primary200,
    '--default-text-color': colors.gray50,
    '--default-text-body-color': colors.gray100,
    '--default-button-background': colors.gray700,
    '--default-button-background-hover': colors.gray600,
    '--default-button-background-active': colors.gray500,
    '--default-button-text-color': colors.gray100,
    '--primary-button-background': colors.primary300,
    '--primary-button-background-hover': colors.primary200,
    '--primary-button-background-active': colors.primary100,
    '--primary-button-text-color': colors.gray700,
    '--default-input-background': colors.gray800,
    '--default-input-border-default': colors.gray500,
    '--default-input-border-active': colors.primary300,
    '--checkbox-background': colors.gray600,
    '--checkbox-indicator': colors.primary200,
    '--switch-background': colors.gray600,
    '--background-e0': colors.gray900,
    '--background-e1': colors.gray800,
    '--background-e2': colors.gray700,
    '--select-background': `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='grey' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><path d='M6 9l6 6l6 -6' /></svg>");`
  }

  const globalStyles = globalCss({
    html: {
      '@media (prefers-color-scheme: dark)': darkThemeVariables,
      ...lightThemeVariables
    },
    body: {
      color: 'var(--default-text-color)'
    },
    'html.dark': darkThemeVariables,
    'html[data-theme="dark"]': darkThemeVariables
  })

  globalStyles()

  return {
    theme: {
      colors,
      space: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '3rem',
        '2xl': '6rem'
      },
      fontSizes: {
        sm: '0.75rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem'
      },
      fonts: {
        body: '"Inter", system-ui, sans-serif',
        heading: 'Georgia, serif',
        mono: 'Menlo, monospace'
      },
      fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900
      },
      lineHeights: {
        normal: 'normal',
        none: 1,
        shorter: 1.25,
        short: 1.375,
        base: 1.5,
        tall: 1.625,
        taller: '2',
        '3': '.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem'
      },
      letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
      },
      sizes: {
        max: 'max-content',
        min: 'min-content',
        full: '100%',
        '3xs': '14rem',
        '2xs': '16rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        '8xl': '90rem',
        containerSm: '640px',
        containerMd: '768px',
        containerLg: '1024px',
        containerXl: '1280px'
      },
      borderWidths: {},
      borderStyles: {},
      radii: {
        none: '0',
        sm: '0.125rem',
        base: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px'
      },
      shadows: {
        md: '0 0.5rem 0.5rem rgba(0, 0, 0, 0.05)',
        checkable: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.2)',
        tooltip: '0 0 0.5rem rgba(0, 0, 0, 0.2)',
        inputDefault: `0 0 0 1px var(--default-input-border-default)`,
        inputHover: `0 0 0 1px var(--default-input-border-active)`,
        inputFocus: `0 0 0 2px var(--default-input-border-active)`
      },
      zIndices: {
        hide: -1,
        auto: 'auto',
        base: 0,
        docked: 10,
        dropdown: 1000,
        sticky: 1100,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800
      }
    },
    media: {
      base: '(min-width: 0)',
      sm: '(min-width: 30em)',
      md: '(min-width: 48em)',
      lg: '(min-width: 62em)',
      xl: '(min-width: 80em)',
      '2xl': '(min-width: 96em)'
    },
    utils
  }
}

export const createExoCss = (themeProps?: CreateExpoThemeProps) => {
  const exoTheme = composeExoTheme(themeProps)
  return createStitches(exoTheme)
}
