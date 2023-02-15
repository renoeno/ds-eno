import { ComponentProps } from 'react'
import { ImageContainer, MediaContainer, VideoContainer } from './styles'

export interface MediaProps extends ComponentProps<typeof MediaContainer> {
  component: 'video' | 'img'
  src: string
  alt: string
}

export function Media({ children, component, src, alt }: MediaProps) {
  return (
    <MediaContainer>
      {component === 'img' && <ImageContainer src={src} alt={alt} />}
      {component === 'video' && <VideoContainer src={src} />}
    </MediaContainer>
  )
}

Media.displayName = 'Media'
