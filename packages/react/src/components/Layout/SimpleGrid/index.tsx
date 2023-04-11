import React from 'react'
import { CSS } from '@stitches/react'
import { ComponentFactory } from '../../../types'
import composeGrid from '../Grid'

const columnsToTemplate = (columns: number | Record<string, number>) => {
  if (typeof columns === 'number') return `repeat(${columns}, minmax(0, 1fr))`
  const responsiveValues = Object.entries(columns).map(([key, value]) => [
    key,
    { gridTemplateColumns: `repeat(${value}, minmax(0, 1fr))` }
  ])
  return Object.fromEntries(responsiveValues)
}

const composeSimpleGrid = ({ styled, css }: ComponentFactory) => {
  const Grid = composeGrid({ styled, css })
  type SimpleGridProps = React.ComponentProps<typeof Grid> & {
    columns: number
    children: React.ReactNode
    css: CSS
  }
  return ({ children, columns, css, ...rest }: SimpleGridProps) => {
    const gridTemplateColumns = columnsToTemplate(columns)
    const simpleGridCss = { ...css, ...gridTemplateColumns }
    return (
      <Grid css={simpleGridCss} {...rest}>
        {children}
      </Grid>
    )
  }
}

export default composeSimpleGrid
