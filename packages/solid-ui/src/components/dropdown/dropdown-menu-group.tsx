import { splitProps, type JSX, type ParentComponent } from 'solid-js'

type DropdownMenuGroupProps = JSX.HTMLAttributes<HTMLDivElement> & {}

const DropdownMenuGroup: ParentComponent<DropdownMenuGroupProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={local.class} {...others} role="group">
      {local.children}
    </div>
  )
}

export { DropdownMenuGroup, DropdownMenuGroupProps }
