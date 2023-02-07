import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Media, MediaProps } from '@renodev/react-ds-eno'

export default {
  title: 'Media/Media',
  component: Media,
  args: {},
} as Meta<MediaProps>

export const ImageMedia: StoryObj<MediaProps> = {
  args: {
    component: 'img',
    src: 'https://moralis-forum.s3.dualstack.eu-north-1.amazonaws.com/original/2X/8/8eb247bcc3f2d5e211bbf7fc082423352818c7f5.png',
    alt: 'Image',
  },
}

export const VideoMedia: StoryObj<MediaProps> = {
  args: {
    component: 'video',
    src: 'https://player.vimeo.com/video/286898202',
    alt: 'Video',
  },
}
