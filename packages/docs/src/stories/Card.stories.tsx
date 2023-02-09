import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import {
  CardContainer,
  CardContent,
  CardActions,
  CardMedia,
  CardProps,
  Text,
  Button,
  Media,
} from '@renodev/react-ds-eno'

export default {
  title: 'Surfaces/Card',
  component: CardContainer,
  args: {
    children: (
      <CardContent>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quae
          repellendus voluptates molestias nobis culpa ut ex cupiditate nemo
          quod! Fuga dolor pariatur impedit ipsa, laudantium quisquam
          exercitationem architecto necessitatibus.
        </Text>
      </CardContent>
    ),
  },
} as Meta<CardProps>

export const Primary: StoryObj<CardProps> = {}

export const ShadowCard: StoryObj<CardProps> = {
  args: {
    variant: 'shadow',
  },
}

export const ActionsCard: StoryObj<CardProps> = {
  args: {
    children: (
      <>
        <CardContent>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quae
            repellendus voluptates molestias nobis culpa ut ex cupiditate nemo
            quod! Fuga dolor pariatur impedit ipsa, laudantium quisquam
            exercitationem architecto necessitatibus.
          </Text>
        </CardContent>
        <CardActions>
          <Button size="sm" variant="tertiary">
            Cancel
          </Button>
          <Button size="sm">Save</Button>
        </CardActions>
      </>
    ),
  },
}

export const MediaCard: StoryObj<CardProps> = {
  args: {
    children: (
      <>
        <CardMedia>
          <Media
            component="img"
            src="https://moralis-forum.s3.dualstack.eu-north-1.amazonaws.com/original/2X/8/8eb247bcc3f2d5e211bbf7fc082423352818c7f5.png"
            alt="Image"
          />
        </CardMedia>
        <CardActions>
          <Button size="sm" variant="tertiary">
            Cancel
          </Button>
          <Button size="sm">Save</Button>
        </CardActions>
      </>
    ),
  },
}
