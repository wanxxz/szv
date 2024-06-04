import { type OptionItemProps } from '@zag-js/menu'
import clsx from 'clsx'
import { Circle } from 'lucide-solid'
import { Show, useContext, type Component, type JSX } from 'solid-js'
import { DropdownMenuContext } from '../dropdown-menu'
import { variants, type Variants } from './dropdown-menu-radio-item-indicator.css'

type DropdownMenuRadioItemIndicatorProps = Variants &
  JSX.HTMLAttributes<HTMLDivElement> & {
    optionItemProps: OptionItemProps
  }

const DropdownMenuRadioItemIndicator: Component<DropdownMenuRadioItemIndicatorProps> = props => {
  const { api } = useContext(DropdownMenuContext)

  return (
    <Show when={props.optionItemProps.checked}>
      <span class={clsx(variants(), props.class)} {...api().getItemIndicatorProps(props.optionItemProps)}>
        <Circle />
      </span>
    </Show>
  )
}

export { DropdownMenuRadioItemIndicator, DropdownMenuRadioItemIndicatorProps }
