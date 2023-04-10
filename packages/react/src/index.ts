import { createStitches } from '@stitches/react'
import { composeExoTheme } from '@mvr-studio/exo-css'
import { useDisclosure } from './utils'
import * as types from './types'
import * as components from './components'

export const createExoUi = (themeProps?: types.CreateExpoThemeProps) => {
  const exoTheme = composeExoTheme(themeProps)
  const { styled, css, theme } = createStitches(exoTheme)
  const styledComponents = {
    Box: components.composeBox({ styled }),
    Flex: components.composeFlex({ styled }),
    Button: components.composeButton({ styled, css }),
    Stack: components.composeStack({ styled }),
    Modal: components.composeModal({ styled }),
    Input: components.composeInput({ styled, css }),
    Select: components.composeSelect({ styled, css }),
    Label: components.composeLabel({ styled }),
    Heading: components.composeHeading({ styled }),
    Text: components.composeText({ styled }),
    Checkbox: components.composeCheckbox({ styled }),
    RadioGroup: components.composeRadioGroup({ styled }),
    Drawer: components.composeDrawer({ styled }),
    Calendar: components.composeCalendar({ styled, theme, css }),
    AspectRatio: components.composeAspectRatio({ styled }),
    Tooltip: components.composeTooltip({ styled }),
    Popover: components.composePopover({ styled, css }),
    Grid: components.composeGrid({ styled }),
    SimpleGrid: components.composeSimpleGrid({ styled }),
    Image: components.composeImage({ styled }),
    Link: components.composeLink({ styled }),
    Switch: components.composeSwitch({ styled }),
    Textarea: components.composeTextarea({ styled, css })
  }
  return {
    styled,
    theme,
    css,
    useDisclosure,
    ...styledComponents
  }
}
