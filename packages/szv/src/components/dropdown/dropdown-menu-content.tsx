import clsx from 'clsx'
import { splitProps, useContext, type JSX, type ParentComponent } from 'solid-js'
import { DropdownMenuContext } from './dropdown-menu'
import { variants, type Variants } from './dropdown-menu-content.css'

type DropdownMenuContentProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const DropdownMenuContent: ParentComponent<DropdownMenuContentProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])
  const { api } = useContext(DropdownMenuContext)

  return (
    <div {...api().positionerProps}>
      <div class={clsx(variants(), local.class)} {...others} {...api().contentProps}>
        {local.children}
      </div>
    </div>
  )
}

export { DropdownMenuContent, DropdownMenuContentProps }
