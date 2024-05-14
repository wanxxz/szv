import { type Meta, type StoryObj } from '@storybook/html'
import { type ComponentProps } from 'solid-js'
import { Textfield } from './text-field'

const meta = {
  title: 'Components/Text field',
  tags: ['autodocs'],
  argTypes: {
    size: {
      value: 'm',
      control: 'select',
      options: ['s', 'm', 'l', 'xl']
    }
  },
  component: Textfield,
  render: args => <Textfield {...args} />
} as Meta<ComponentProps<typeof Textfield>>

type Story = StoryObj<ComponentProps<typeof Textfield>>

const Default: Story = {
  args: {
    size: 'm'
  }
}

export default meta
export { Default }
