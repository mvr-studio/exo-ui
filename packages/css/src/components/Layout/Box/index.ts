import { ComposerFactory } from '../../../types'

const composeBoxCss = ({ css }: ComposerFactory) => {
  return css({
    appearance: 'none',
    fontFamily: '$body',
    fontSize: '$md',
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    width: '100%'
  })
}

export default composeBoxCss
