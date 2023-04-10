import chroma from 'chroma-js'
import { Color } from '../../types'

const COLOR_SCALE_BREAKPOINTS = [0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]

export const createColorScale = (prefix: string, color: Color): Record<string, string> => {
  const colorScale = {} as Record<string, any>
  const sanitizedColor = chroma(color).hex()
  const breakpointToColor = chroma.scale(['#ffffff', sanitizedColor, '#000000'])
  COLOR_SCALE_BREAKPOINTS.forEach((value) => {
    const index = `${prefix}${value * 1000}`
    colorScale[index] = breakpointToColor(value).hex()
  })
  return colorScale
}
