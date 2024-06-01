import { type Meta, type StoryObj } from '@storybook/html'
import { type ComponentProps } from 'solid-js'
import { Card } from './card'
import { CardHeader } from './card-header'
import { CardTitle } from './card-title'
import { CardDescription } from './card-description'
import { CardContent } from './card-content'
import { CardFooter } from './card-footer'

const meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
  component: Card
} as Meta<ComponentProps<typeof Card>>

type Story = StoryObj<ComponentProps<typeof Card>>

const CardStory: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>Card Content</CardContent>
      <CardFooter>Card Footer</CardFooter>
    </Card>
  )
}

export default meta
export { CardStory as Card }
