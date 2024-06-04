import clsx from 'clsx'
import { splitProps, useContext, type JSX, type ParentComponent } from 'solid-js'
import { DropdownMenuContext } from './dropdown-menu'
import { variants, type Variants } from './dropdown-menu-item.css'

type DropdownMenuItemProps = Variants &
  JSX.HTMLAttributes<HTMLLIElement> & {
    value?: string
  }

const DropdownMenuItem: ParentComponent<DropdownMenuItemProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])
  const { api } = useContext(DropdownMenuContext)

  return (
    <li class={clsx(variants(), local.class)} {...api().getItemProps({ value: props.value as never })} {...others}>
      {local.children}
    </li>
  )
}

export { DropdownMenuItem, DropdownMenuItemProps }
