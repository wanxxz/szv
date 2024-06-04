import clsx from 'clsx'
import { splitProps, type JSX, type ParentComponent } from 'solid-js'
import { variants, type Variants } from './dropdown-menu-sub-content.css'

type DropdownMenuSubContentProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const DropdownMenuSubContent: ParentComponent<DropdownMenuSubContentProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={clsx(variants(), local.class)} {...others}>
      {local.children}
    </div>
  )
}

export { DropdownMenuSubContent, DropdownMenuSubContentProps }
