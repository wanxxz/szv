import { type Meta, type StoryObj } from '@storybook/html'
import { type ComponentProps } from 'solid-js'
import { Badge } from './badge'

const meta = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false
    },
    variant: {
      value: 'accent',
      control: 'select',
      options: ['accent', 'primary', 'informative', 'negative', 'positive', 'notice']
    },
    size: {
      value: 'm',
      control: 'select',
      options: ['s', 'm', 'l', 'xl']
    }
  },
  component: Badge,
  render: args => <Badge {...args} />
} as Meta<ComponentProps<typeof Badge>>

type Story = StoryObj<ComponentProps<typeof Badge>>

const Accent: Story = {
  args: {
    children: 'badge',
    variant: 'accent',
    size: 'm'
  }
}

const Neutral: Story = {
  args: {
    children: 'badge',
    variant: 'neutral',
    size: 'm'
  }
}

const Informative: Story = {
  args: {
    children: 'badge',
    variant: 'informative',
    size: 'm'
  }
}

const Negative: Story = {
  args: {
    children: 'badge',
    variant: 'negative',
    size: 'm'
  }
}

const Positive: Story = {
  args: {
    children: 'badge',
    variant: 'positive',
    size: 'm'
  }
}

const Notice: Story = {
  args: {
    children: 'badge',
    variant: 'notice',
    size: 'm'
  }
}

export default meta
export { Accent, Informative, Negative, Neutral, Notice, Positive }
