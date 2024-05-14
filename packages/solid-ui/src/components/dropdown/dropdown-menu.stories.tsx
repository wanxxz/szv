import { type Meta, type StoryObj } from '@storybook/html'
import { type ComponentProps } from 'solid-js'
import { DropdownMenu, type DropdownMenuProps } from './dropdown-menu'
import { DropdownMenuCheckboxItem } from './dropdown-menu-checkbox-item'
import { DropdownMenuContent } from './dropdown-menu-content'
import { DropdownMenuItem } from './dropdown-menu-item'
import { DropdownMenuRadioGroup } from './dropdown-menu-radio-group'
import { DropdownMenuRadioItem } from './dropdown-menu-radio-item'
import { DropdownMenuTrigger } from './dropdown-menu-trigger'

type Story = StoryObj<DropdownMenuProps>

export const Default: Story = {
  render: args =>
    (
      <DropdownMenu>
        <DropdownMenuTrigger>Button</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem value="A">A</DropdownMenuItem>
          <DropdownMenuItem value="B">B</DropdownMenuItem>
          <DropdownMenuItem value="C">C</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ) as never
}

export const CheckboxItem: Story = {
  render: args =>
    (
      <DropdownMenu>
        <DropdownMenuTrigger>Button</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem value="A" checked>
            A
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem value="B">B</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem value="C">C</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ) as never
}

export const RadioItem: Story = {
  render: args =>
    (
      <DropdownMenu>
        <DropdownMenuTrigger>Button</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup>
            <DropdownMenuRadioItem value="A">A</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="B">B</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="C">C</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    ) as never
}

export default {
  title: 'Components/Dropdown Menu',
  component: DropdownMenu
} as Meta<ComponentProps<typeof DropdownMenu>>
