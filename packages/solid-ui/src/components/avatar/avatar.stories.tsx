import { type Meta, type StoryObj } from '@storybook/html'
import { type ComponentProps } from 'solid-js'
import { Avatar, type AvatarProps } from './avatar'
import { AvatarFallback } from './avatar-fallback'
import { AvatarImage } from './avatar-image'

type Story = StoryObj<AvatarProps>

export const Default: Story = {
  args: {}
}

export default {
  title: 'Components/Avatar',
  component: Avatar,
  subcomponents: { AvatarImage, AvatarFallback },
  render: args => (
    <Avatar {...args}>
      <AvatarFallback>404</AvatarFallback>
      <AvatarImage src="" />
    </Avatar>
  )
} as Meta<ComponentProps<typeof Avatar>>
