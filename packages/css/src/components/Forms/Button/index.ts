import { ComposerFactory } from '../../../types'

const composeButtonCss = ({ css }: ComposerFactory) => {
  return css({
    unset: 'all',
    display: 'inline-flex',
    color: '$gray700',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$md',
    backgroundColor: '$gray100',
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
      backgroundColor: '$gray200'
    },
    '&:active': {
      backgroundColor: '$gray300'
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
          backgroundColor: '$primary500',
          color: 'white',
          '&:hover': {
            backgroundColor: '$primary600'
          },
          '&:active': {
            backgroundColor: '$primary700'
          }
        },
        ghost: {
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: '$gray100'
          },
          '&:active': {
            backgroundColor: '$gray200'
          }
        }
      }
    }
  })
}

export default composeButtonCss
