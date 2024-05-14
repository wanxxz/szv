import * as menu from '@zag-js/menu'
import { normalizeProps, useMachine } from '@zag-js/solid'
import clsx from 'clsx'
import { createMemo, createUniqueId, splitProps, useContext, type JSX, type ParentComponent } from 'solid-js'
import { DropdownMenuContext } from './dropdown-menu'
import { variants, type Variants } from './dropdown-menu-sub-trigger.css'

type DropdownMenuSubTriggerProps = Variants & JSX.HTMLAttributes<HTMLDivElement> & {}

const DropdownMenuSubTrigger: ParentComponent<DropdownMenuSubTriggerProps> = props => {
  const [local, others] = splitProps(props, ['children', 'class'])
  const [subMenuState, subMenuSend] = useMachine(menu.machine({ id: createUniqueId() }))
  const subMenu = createMemo(() => menu.connect(subMenuState, subMenuSend, normalizeProps))
  const { api } = useContext(DropdownMenuContext)

  return (
    <div class={clsx(variants(), local.class)} {...others} {...api().getTriggerItemProps(subMenu())}>
      {local.children}
    </div>
  )
}

export { DropdownMenuSubTrigger, DropdownMenuSubTriggerProps }
