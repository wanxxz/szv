import { type OptionItemProps } from '@zag-js/menu'
import clsx from 'clsx'
import { createMemo, useContext, type JSX, type ParentComponent } from 'solid-js'
import { DropdownMenuContext } from '../dropdown-menu'
import { DropdownMenuItem } from '../dropdown-menu-item'
import { DropdownMenuRadioGroupContext } from '../dropdown-menu-radio-group'
import { DropdownMenuRadioItemIndicator } from './dropdown-menu-radio-item-indicator'
import { variants, type Variants } from './dropdown-menu-radio-item.css'

type DropdownMenuRadioItemProps = Variants &
  JSX.HTMLAttributes<HTMLDivElement> & {
    value: string
  }

const DropdownMenuRadioItem: ParentComponent<DropdownMenuRadioItemProps> = props => {
  const { api } = useContext(DropdownMenuContext)
  const { value, onValueChange } = useContext(DropdownMenuRadioGroupContext)

  const optionItemProps = createMemo<OptionItemProps>(() => ({
    type: 'radio',
    value: props.value,
    checked: value() === props.value,
    onCheckedChange: checked => {
      onValueChange(props.value)
    }
  }))

  return (
    <DropdownMenuItem {...api().getOptionItemProps(optionItemProps())} class={clsx(variants(), props.class)}>
      <DropdownMenuRadioItemIndicator optionItemProps={optionItemProps()} />
      <span {...api().getItemTextProps(optionItemProps())}>{props.children}</span>
    </DropdownMenuItem>
  )
}

export { DropdownMenuRadioItem, DropdownMenuRadioItemProps }
