import { type Meta, type StoryObj } from '@storybook/html'
import { type ComponentProps } from 'solid-js'
import { Avatar } from './avatar'
import { AvatarFallback, type AvatarFallbackProps } from './avatar-fallback'
import { AvatarImage, type AvatarImageProps } from './avatar-image'
import { AvatarProvider } from './avatar-provider'

const meta = {
  title: 'Components/Avatar',
  decorators: [
    Story => (
      <AvatarProvider>
        <Story />
      </AvatarProvider>
    )
  ]
} as Meta<ComponentProps<typeof Avatar>>

const AvatarImageStory: StoryObj<AvatarImageProps> = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://avatars.githubusercontent.com/u/72271288" />
    </Avatar>
  )
}
const AvatarFallbackStory: StoryObj<AvatarFallbackProps> = {
  render: () => (
    <Avatar>
      <AvatarImage src="" />
      <AvatarFallback>404</AvatarFallback>
    </Avatar>
  )
}

export { AvatarFallbackStory as AvatarFallback, AvatarImageStory as AvatarImage }

export default meta
