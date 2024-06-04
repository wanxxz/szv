import { type OptionItemProps } from '@zag-js/menu'
import clsx from 'clsx'
import { createMemo, createSignal, useContext, type JSX, type ParentComponent } from 'solid-js'
import { DropdownMenuContext } from '../dropdown-menu'
import { DropdownMenuItem } from '../dropdown-menu-item'
import { DropdownMenuCheckboxItemIndicator } from './dropdown-menu-checkbox-item-indicator'
import { variants, type Variants } from './dropdown-menu-checkbox-item.css'

type DropdownMenuCheckboxItemProps = Variants &
  JSX.HTMLAttributes<HTMLDivElement> & {
    value: string
    checked?: boolean
    onCheckedChange?: (checked: boolean) => void
  }

const DropdownMenuCheckboxItem: ParentComponent<DropdownMenuCheckboxItemProps> = props => {
  const [checked, setChecked] = createSignal(Boolean(props.checked))
  const { api } = useContext(DropdownMenuContext)

  const optionItemProps = createMemo<OptionItemProps>(() => ({
    type: 'checkbox',
    value: props.value,
    checked: checked(),
    onCheckedChange: checked => {
      props?.onCheckedChange?.(checked)
      setChecked(checked)
    }
  }))

  return (
    <DropdownMenuItem {...api().getOptionItemProps(optionItemProps())} class={clsx(variants(), props.class)}>
      <DropdownMenuCheckboxItemIndicator optionItemProps={optionItemProps()} />
      <span {...api().getItemTextProps(optionItemProps())}>{props.children}</span>
    </DropdownMenuItem>
  )
}

export { DropdownMenuCheckboxItem, DropdownMenuCheckboxItemProps }
