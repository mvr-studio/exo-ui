import React, { useMemo } from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { ComponentFactory } from '../../../types'
import easyMeshGradient from 'easy-mesh-gradient'

export const composeImage = ({ styled }: ComponentFactory) => {
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
    // Seed for the gradient generation.
    gradient?: string | undefined
  }
  return ({ src, fallback, fallbackDelay = 600, gradient, ...rest }: ImageProps) => {
    const backgroundImage = useMemo(() => gradient && easyMeshGradient({ seed: gradient, pointCount: 3 }), [gradient])
    console.log(backgroundImage)

    return (
      <ImageRoot {...rest} css={{ ...rest.css, backgroundImage }}>
        {src && <Image src={src} />}
        {fallback && <ImageFallback>{fallback}</ImageFallback>}
      </ImageRoot>
    )
  }
}
