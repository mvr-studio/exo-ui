import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import { ComponentFactory } from '../../../types'

const composeAspectRatio = ({ styled }: ComponentFactory) => styled(AspectRatio.Root, {})

export default composeAspectRatio
