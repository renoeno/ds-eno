import { styled } from '../../styles'

export const MediaContainer = styled('div', {
  maxWidth: 640,
  borderRadius: '$sm',
  overflow: 'hidden',
})

export const ImageContainer = styled('img', {
  width: '100%',
  borderRadius: '$sm',
})

export const VideoContainer = styled('iframe', {
  width: '100%',
  borderRadius: '$sm',
})
