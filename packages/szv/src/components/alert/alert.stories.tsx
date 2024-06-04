import { type Meta, type StoryObj } from '@storybook/html'
import { Terminal } from 'lucide-solid'
import { type ComponentProps } from 'solid-js'
import { Alert } from './alert'
import { AlertDescription } from './alert-description'
import { AlertIcon } from './alert-icon'
import { AlertTitle } from './alert-title'

const meta = {
  title: 'Components/Alert'
} as Meta<ComponentProps<typeof Alert>>

type Story = StoryObj<ComponentProps<typeof Alert>>

const AlertStory: Story = {
  render: () => (
    <Alert>
      <AlertIcon>
        <Terminal width="100%" />
      </AlertIcon>
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>Alert Description</AlertDescription>
    </Alert>
  )
}

export default meta
export { AlertStory as Alert }
