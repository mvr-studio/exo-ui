import { keyframes } from '@stitches/react'

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
