import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './dropdown-menu-separator.css'

type DropdownMenuSeparatorProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const DropdownMenuSeparator: ParentComponent<DropdownMenuSeparatorProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { DropdownMenuSeparator, DropdownMenuSeparatorProps }
