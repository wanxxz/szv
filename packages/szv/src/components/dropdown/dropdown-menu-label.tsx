import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './dropdown-menu-label.css'

type DropdownMenuLabelProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const DropdownMenuLabel: ParentComponent<DropdownMenuLabelProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { DropdownMenuLabel, DropdownMenuLabelProps }
