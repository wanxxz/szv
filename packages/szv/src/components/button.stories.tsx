import { type Meta, type StoryObj } from '@storybook/html'
import { type ComponentProps } from 'solid-js'
import { Button } from './button'

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false
    },
    variant: {
      value: 'accent',
      control: 'select',
      options: ['accent', 'primary', 'secondary', 'negative']
    },
    size: {
      value: 'm',
      control: 'select',
      options: ['s', 'm', 'l', 'xl']
    }
  },
  component: Button,
  render: args => <Button {...args} />
} as Meta<ComponentProps<typeof Button>>

type Story = StoryObj<ComponentProps<typeof Button>>

const Accent: Story = {
  args: {
    children: 'button',
    fill: true,
    outline: false,
    variant: 'accent',
    size: 'm'
  }
}

const Primary: Story = {
  args: {
    children: 'button',
    fill: true,
    outline: false,
    variant: 'primary',
    size: 'm'
  }
}

const Secondary: Story = {
  args: {
    children: 'button',
    fill: true,
    outline: false,
    variant: 'secondary',
    size: 'm'
  }
}

const Negative: Story = {
  args: {
    children: 'button',
    fill: true,
    outline: false,
    variant: 'negative',
    size: 'm'
  }
}

export default meta
export { Accent, Negative, Primary, Secondary }
