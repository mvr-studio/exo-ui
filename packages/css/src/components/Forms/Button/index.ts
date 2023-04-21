import { ComposerFactory } from '../../../types'
import { boxStyles } from '../../Layout'

export const buttonStyles = {
  ...boxStyles,
  display: 'inline-flex',
  color: 'var(--default-button-text-color)',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$md',
  backgroundColor: 'var(--default-button-background)',
  paddingLeft: '$md',
  paddingRight: '$md',
  paddingTop: '$sm',
  paddingBottom: '$sm',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-out',
  border: '1px solid',
  borderColor: 'transparent',
  '&[disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed'
  },
  '&:hover': {
    backgroundColor: 'var(--default-button-background-hover)'
  },
  '&:active': {
    backgroundColor: 'var(--default-button-background-active)'
  },
  variants: {
    size: {
      sm: {
        paddingLeft: '$sm',
        paddingRight: '$sm',
        paddingTop: '$xs',
        paddingBottom: '$xs',
        fontSize: '14px'
      },
      lg: {
        paddingLeft: '$lg',
        paddingRight: '$lg',
        paddingTop: '$md',
        paddingBottom: '$md'
      }
    },
    scheme: {
      primary: {
        backgroundColor: 'var(--primary-button-background)',
        color: 'var(--primary-button-text-color)',
        '&:hover': {
          backgroundColor: 'var(--primary-button-background-hover)'
        },
        '&:active': {
          backgroundColor: 'var(--primary-button-background-active)'
        }
      },
      outline: {
        backgroundColor: 'transparent',
        border: '1px solid',
        borderColor: 'var(--outline-color)',
        '&:hover': {
          backgroundColor: 'var(--default-button-background-hover)'
        },
        '&:active': {
          backgroundColor: 'var(--default-button-background-active)'
        }
      },
      ghost: {
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'var(--default-button-background-hover)'
        },
        '&:active': {
          backgroundColor: 'var(--default-button-background-active)'
        }
      }
    }
  }
}

export const composeButtonCss = ({ css }: ComposerFactory) => {
  return css(buttonStyles)
}
