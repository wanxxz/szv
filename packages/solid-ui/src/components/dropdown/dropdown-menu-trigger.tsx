import { splitProps, useContext, type JSX, type ParentComponent } from 'solid-js'
import { DropdownMenuContext } from './dropdown-menu'

type DropdownMenuTriggerProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {}

const DropdownMenuTrigger: ParentComponent<DropdownMenuTriggerProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])
  const { api } = useContext(DropdownMenuContext)

  return (
    <button class={local.class} {...api().triggerProps} {...others}>
      {props.children}
    </button>
  )
}

export { DropdownMenuTrigger, DropdownMenuTriggerProps }
