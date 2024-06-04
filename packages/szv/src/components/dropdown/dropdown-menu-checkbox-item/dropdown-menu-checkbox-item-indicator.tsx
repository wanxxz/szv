import { type OptionItemProps } from '@zag-js/menu'
import clsx from 'clsx'
import { Check } from 'lucide-solid'
import { Show, useContext, type Component, type JSX } from 'solid-js'
import { DropdownMenuContext } from '../dropdown-menu'
import { variants, type Variants } from './dropdown-menu-checkbox-item-indicator.css'

type DropdownMenuCheckboxItemIndicatorProps = Variants &
  JSX.HTMLAttributes<HTMLDivElement> & {
    optionItemProps: OptionItemProps
  }

const DropdownMenuCheckboxItemIndicator: Component<DropdownMenuCheckboxItemIndicatorProps> = props => {
  const { api } = useContext(DropdownMenuContext)

  return (
    <Show when={props.optionItemProps.checked}>
      <span class={clsx(variants(), props.class)} {...api().getItemIndicatorProps(props.optionItemProps)}>
        <Check />
      </span>
    </Show>
  )
}

export { DropdownMenuCheckboxItemIndicator, DropdownMenuCheckboxItemIndicatorProps }
