import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './dropdown-menu-shortcut.css'

type DropdownMenuShortcutProps = Variants & JSX.HTMLAttributes<HTMLSpanElement> & {}

const DropdownMenuShortcut: ParentComponent<DropdownMenuShortcutProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <span class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </span>
  )
}

export { DropdownMenuShortcut, DropdownMenuShortcutProps }
