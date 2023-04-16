import { keyframes } from '@stitches/core'

export const fadeAndScale = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)'
  },
  to: {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)'
  }
})

export const fadeIn = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
})

export const fadeInSlideRight = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(10%, 0) scale(0.96)'
  },
  to: {
    opacity: 1,
    transform: 'translate(0, 0) scale(1)'
  }
})

export const fadeInSlideTop = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(0, -10%) scale(0.96)'
  },
  to: {
    opacity: 1,
    transform: 'translate(0, 0) scale(1)'
  }
})

export const fadeInSlideLeft = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-10%, 0) scale(0.96)'
  },
  to: {
    opacity: 1,
    transform: 'translate(0, 0) scale(1)'
  }
})

export const fadeInSlideBottom = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(0, 10%) scale(0.96)'
  },
  to: {
    opacity: 1,
    transform: 'translate(0, 0) scale(1)'
  }
})

export const rotate = keyframes({
  '100%': {
    transform: 'rotate(360deg)'
  }
})

export const prixClipFix = keyframes({
  '0%': { clipPath: 'polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)' },
  '25%': { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)' },
  '50%': { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)' },
  '75%': { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)' },
  '100%': { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)' }
})
