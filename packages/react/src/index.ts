import { createStitches } from '@stitches/react'
import { composeExoTheme } from '@mvr-studio/exo-css'
import * as utils from './utils/index'
import * as types from './types'
import * as components from './components/index'

export const createExoUi = (themeProps?: types.CreateExpoThemeProps) => {
  const exoTheme = composeExoTheme(themeProps)
  const { styled, css, theme } = createStitches(exoTheme)
  const styledComponents = {
    Box: components.composeBox({ styled, css, theme }),
    Flex: components.composeFlex({ styled, css, theme }),
    Button: components.composeButton({ styled, css, theme }),
    Stack: components.composeStack({ styled, css, theme }),
    Modal: components.composeModal({ styled, css, theme }),
    Input: components.composeInput({ styled, css, theme }),
    Select: components.composeSelect({ styled, css, theme }),
    Label: components.composeLabel({ styled, css, theme }),
    Heading: components.composeHeading({ styled, css, theme }),
    Text: components.composeText({ styled, css, theme }),
    Checkbox: components.composeCheckbox({ styled, css, theme }),
    RadioGroup: components.composeRadioGroup({ styled, css, theme }),
    Drawer: components.composeDrawer({ styled, css, theme }),
    Calendar: components.composeCalendar({ styled, theme, css }),
    AspectRatio: components.composeAspectRatio({ styled, css, theme }),
    Tooltip: components.composeTooltip({ styled, css, theme }),
    Popover: components.composePopover({ styled, css, theme }),
    Grid: components.composeGrid({ styled, css, theme }),
    SimpleGrid: components.composeSimpleGrid({ styled, css, theme }),
    Image: components.composeImage({ styled, css, theme }),
    Link: components.composeLink({ styled, css, theme }),
    Switch: components.composeSwitch({ styled, css, theme }),
    Textarea: components.composeTextarea({ styled, css, theme }),
    Spinner: components.composeSpinner({ styled, css }),
    Container: components.composeContainer({ styled, css })
  }
  return {
    styled,
    theme,
    css,
    ...utils,
    ...styledComponents
  }
}
