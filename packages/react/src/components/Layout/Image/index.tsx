import React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { ComponentFactory } from '../../../types'

const composeImage = ({ styled }: ComponentFactory) => {
  const ImageRoot = styled(AvatarPrimitive.Root, {
    unset: 'all',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle'
  })
  const Image = styled(AvatarPrimitive.Image, {
    unset: 'all',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit'
  })
  const ImageFallback = styled(AvatarPrimitive.Fallback, {
    unset: 'all',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })
  type ImageProps = React.ComponentProps<typeof ImageRoot> & {
    src?: string
    fallback?: React.ReactNode
    fallbackDelay?: number
  }
  return ({ src, fallback, fallbackDelay = 600, ...rest }: ImageProps) => (
    <ImageRoot {...rest}>
      {src && <Image src={src} />}
      {fallback && <ImageFallback>{fallback}</ImageFallback>}
    </ImageRoot>
  )
}

export default composeImage
